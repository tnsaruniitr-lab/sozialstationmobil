// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Produktions-Domain – steuert Canonical-URLs & Sitemap (wichtig für SEO/AEO)
  site: 'https://sozialstationmobil.de',
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
    // `astro preview` (Container-Hosting wie Railway) nutzt Vites Preview-Server.
    // Erlaubte Hosts freigeben (sonst blockiert Vite die Anfrage).
    preview: {
      allowedHosts: [
        'localhost',
        'sozialstationmobil-production.up.railway.app',
        '.up.railway.app',
        '.railway.app',
        'sozialstationmobil.de',
        'www.sozialstationmobil.de',
      ],
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
