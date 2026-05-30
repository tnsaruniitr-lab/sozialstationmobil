import type { APIRoute } from 'astro';

/**
 * Dynamische robots.txt – die Sitemap-Zeile nutzt die tatsächlich ausgelieferte
 * Domain (import.meta.env.SITE), damit sie auf Staging UND Produktion auflöst
 * (kein 404 mehr). KI-Crawler ausdrücklich erlaubt (inkl. CCBot – Common Crawl).
 */
const SITE = (import.meta.env.SITE ?? 'https://sozialstationmobil.de').replace(/\/$/, '');

const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Bingbot',
  'CCBot',
];

const body = `# robots.txt – Sozialstation Mobil GmbH
# Alle Suchmaschinen sind willkommen.
User-agent: *
Allow: /

# Answer-Engine-/KI-Crawler ausdrücklich erlauben (wichtig für AEO/GEO).
${aiCrawlers.map((ua) => `User-agent: ${ua}\nAllow: /`).join('\n\n')}

Sitemap: ${SITE}/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
