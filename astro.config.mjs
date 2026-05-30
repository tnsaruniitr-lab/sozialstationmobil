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
      // Rechtstexte (noindex) aus der Sitemap ausschließen
      filter: (page) => !page.includes('/datenschutz/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
