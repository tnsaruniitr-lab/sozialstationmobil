/**
 * Erzeugt das Open-Graph-Bild (1200×630) als PNG aus SVG.
 * Aufruf:  node scripts/make-og.mjs
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-default.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1d4b6a"/>
      <stop offset="1" stop-color="#13283c"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4aa1cf"/>
      <stop offset="1" stop-color="#1f6c9b"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1080" cy="120" r="220" fill="#fb6a13" opacity="0.14"/>
  <circle cx="120" cy="600" r="180" fill="#2a82b5" opacity="0.18"/>
  <circle cx="1140" cy="560" r="90" fill="#fb6a13" opacity="0.12"/>

  <!-- Bildmarke -->
  <g transform="translate(80,64)">
    <rect width="104" height="104" rx="24" fill="url(#mark)"/>
    <path d="M52 86c-14-12.6-25.2-21-25.2-31.6 0-6.8 5.4-11.7 12-11.7 5.4 0 8.2 3.2 13.2 9.2 5-6 7.8-9.2 13.2-9.2 6.6 0 12 4.9 12 11.7C77.2 65 66 73.4 52 86Z" fill="#ffffff"/>
    <circle cx="76" cy="28" r="8" fill="#fb6a13"/>
  </g>
  <text x="208" y="108" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="700" fill="#ffffff">Sozialstation<tspan fill="#fd8537"> Mobil</tspan></text>
  <text x="210" y="146" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="3" fill="#b4dbef">AMBULANTER PFLEGEDIENST · BERLIN</text>

  <!-- Headline -->
  <text x="78" y="300" font-family="Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#ffffff">Liebevolle Pflege,</text>
  <text x="78" y="392" font-family="Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#ffffff">die zu Ihnen <tspan fill="#fd8537">nach</tspan></text>
  <text x="78" y="484" font-family="Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#ffffff">Hause kommt.</text>

  <!-- Fußzeile -->
  <g transform="translate(80,556)">
    <rect width="300" height="48" rx="24" fill="#fb6a13"/>
    <text x="34" y="32" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff">☎  030 4169811</text>
  </g>
  <text x="408" y="588" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="600" fill="#b4dbef">sozialstationmobil.de</text>
</svg>`;

writeFileSync(join(__dirname, 'og-source.svg'), svg);

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OG-Bild erzeugt:', out);
