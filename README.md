# Sozialstation Mobil – Website

Moderne, vollständig mobil-adaptive Website für die **Sozialstation Mobil GmbH**, einen
ambulanten Fachpflegedienst in Berlin-Reinickendorf. Gebaut mit Fokus auf **SEO**, **AEO/GEO**
(Optimierung für KI-Antwortmaschinen), **Barrierefreiheit** und **Performance**.

## Tech-Stack

- **[Astro 6](https://astro.build)** – statische Generierung, nahezu kein JavaScript → exzellente Core Web Vitals und perfekte Crawlbarkeit
- **[Tailwind CSS 4](https://tailwindcss.com)** – Utility-First-Styling mit eigenem Marken-Theme
- **Selbst gehostete, variable Schriften** (Inter + Figtree) via Fontsource – keine externen Requests
- **@astrojs/sitemap** – automatische Sitemap

## Befehle

```bash
pnpm install        # Abhängigkeiten installieren
pnpm dev            # Dev-Server (http://localhost:4321)
pnpm build          # Produktions-Build nach ./dist
pnpm preview        # Build lokal ansehen
node scripts/make-og.mjs   # Open-Graph-Bild neu erzeugen
```

Das `dist/`-Verzeichnis ist ein rein statisches Bundle und kann auf **jedem** Hoster
(Netlify, Vercel, Cloudflare Pages, klassisches Webhosting o. Ä.) ausgeliefert werden.

## Projektstruktur

```
src/
├── data/site.ts          ← ZENTRALE DATENQUELLE (Kontakt, Navigation, Leistungen, FAQ)
├── lib/schema.ts         ← JSON-LD-Generatoren (schema.org)
├── layouts/BaseLayout.astro  ← SEO-<head>, Header, Footer
├── components/           ← Header, Footer, Logo, Icon, HeroArt, ServiceCard, FAQ, …
├── pages/                ← eine Datei = eine Seite/URL
│   ├── index.astro
│   ├── leistungen/[slug].astro   ← erzeugt alle 7 Leistungsseiten aus site.ts
│   ├── ratgeber/pflegekosten-pflegegrad.astro
│   └── …
└── styles/global.css     ← Marken-Theme (Farben, Schriften, Komponenten-Klassen)
public/                   ← favicon.svg, robots.txt, og-default.png
```

> **Inhalte ändern:** Fast alle Texte (Leistungen, FAQ, Kontaktdaten, Navigation) liegen in
> [`src/data/site.ts`](src/data/site.ts). Änderungen dort wirken automatisch auf allen Seiten
> **und** in den strukturierten Daten – so bleibt alles konsistent.

## ⚠️ Vor dem Live-Gang prüfen / ergänzen

Diese Inhalte sind Annahmen oder Vorlagen und müssen mit den echten Unternehmensdaten
abgeglichen werden:

| Was | Wo | Hinweis |
|-----|----|---------|
| **Anschrift** | `src/data/site.ts` → `company.address` | Es kursieren zwei Adressen (Wilhelmsruher Damm **142**/13439 vs. **198**/13435). Bitte die korrekte bestätigen. |
| **E-Mail** | `company.email` | `info@sozialstationmobil.de` ist angenommen – bitte bestätigen. |
| **Geo-Koordinaten** | `company.geo` | Näherungswerte – exakte Koordinaten der Adresse eintragen. |
| **Telefon / Öffnungszeiten** | `company.phone`, `officeHours` | Verifizieren. |
| **Social-Media-Links** | `company.social` | Facebook/Instagram-URLs prüfen. |
| **USt-IdNr., Aufsichtsbehörde, Berufshaftpflicht** | `src/pages/impressum.astro` | Mit `[…]` markierte Platzhalter ausfüllen. |
| **Hosting-Anbieter** | `src/pages/datenschutz.astro` | Eintragen; Datenschutztext rechtlich prüfen lassen. |
| **Pflegegrad-Beträge** | `src/pages/ratgeber/…` | Stand 2025 – aktuelle Werte verifizieren. |
| **Team** | `src/pages/team.astro` | Rollen-basiert; echte Namen & Fotos ergänzen. |
| **Stimmen / Testimonials** | `src/pages/index.astro` | Anonymisierte Beispiele – durch echte, eingewilligte Bewertungen ersetzen. |
| **Kontaktformular** | `src/pages/kontakt.astro` | Funktioniert aktuell per `mailto:`. Für serverseitigen Versand `form[action]` auf einen Dienst (z. B. Formspree, Web3Forms) umstellen. |
| **Echte Fotos** | überall | Die Illustrationen sind hochwertige SVGs. Optional durch echte Team-/Pflegefotos ergänzen. |

## SEO / AEO – was umgesetzt ist

- **Semantisches HTML5**, eine sauber benannte URL pro Thema (eine Leistung = eine Seite)
- **JSON-LD** strukturierte Daten: `MedicalBusiness`/`LocalBusiness` (vollständige NAP, Geo,
  Öffnungszeiten, Versorgungsgebiet, Leistungskatalog), `Service`, `FAQPage`, `BreadcrumbList`, `WebSite`
- **Meta + Open Graph + Twitter Cards** pro Seite, Canonical-URLs, lokale Geo-Meta-Tags
- **Sitemap** (`/sitemap-index.xml`) und **robots.txt** – inkl. ausdrücklicher Freigabe für
  KI-Crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended …) für bessere Sichtbarkeit in KI-Antworten
- **FAQ-Blöcke** mit direkten Antworten (ideal für Answer Engines)
- **Performance:** statisches HTML, selbst gehostete Schriften, minimales JS, optimierte SVGs
- **Barrierefreiheit:** große, lesbare Schrift (wichtig für ältere Zielgruppe), klare Fokus-Ringe,
  Skip-Link, ARIA-Attribute, ausreichende Kontraste, große Tap-Targets, `prefers-reduced-motion`

## Wichtig nach Domain-Wechsel

Die Produktions-Domain steht in [`astro.config.mjs`](astro.config.mjs) (`site:`). Bei einer
anderen Domain dort und ggf. in `src/lib/schema.ts` (`SITE`) anpassen.
