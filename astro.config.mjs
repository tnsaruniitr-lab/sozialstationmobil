// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deploy-Domain: explizit via SITE_URL, sonst automatisch die Railway-Domain
// (Staging), sonst die Produktions-Domain. Hält Canonical, Sitemap & robots.txt
// konsistent zur tatsächlich ausgelieferten Domain.
const SITE_URL =
  process.env.SITE_URL ||
  (process.env.RAILWAY_PUBLIC_DOMAIN ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` : 'https://sozialstationmobil.de');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date('2026-05-30'),
      // Rechtstexte (noindex) + interne Vorschau aus der Sitemap ausschließen
      filter: (page) => !page.includes('/datenschutz/') && !page.includes('/samples/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // `astro dev`/`astro preview` werden lokal in einer Preview-Pane bzw. auf Railway
    // hinter einem Proxy ausgeliefert. Vite blockiert sonst fremde Host-Header
    // ("Blocked request"). Da dies eine statische Marketing-Site ist (kein
    // sensibler Server, kein DNS-Rebinding-Risiko), erlauben wir alle Hosts.
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
