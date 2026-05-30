/**
 * JSON-LD Schema-Generatoren (schema.org).
 * Konsistente, strukturierte Daten sind entscheidend für AEO/GEO:
 * Antwort-Maschinen (Google AIO, ChatGPT, Perplexity …) lesen daraus
 * Identität, Standort, Leistungen und Antworten der Sozialstation Mobil aus.
 */
import { company, services, openingHoursSpec, serviceAreas, faqs, seoDefaults, type Faq } from '../data/site';

const SITE = 'https://sozialstationmobil.de';
export const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

/** Zentrale Unternehmens-Entität (MedicalBusiness / LocalBusiness) */
export function organizationSchema() {
  return {
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': ORG_ID,
    name: company.legalName,
    alternateName: company.name,
    description: company.description,
    url: `${SITE}/`,
    logo: `${SITE}/favicon.svg`,
    image: `${SITE}/og-default.png`,
    telephone: company.phone,
    email: company.email,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    slogan: company.claim,
    knowsLanguage: ['de'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressRegion: company.address.district,
      addressCountry: company.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    founder: {
      '@type': 'Person',
      name: company.managingDirector,
    },
    openingHoursSpecification: openingHoursSpec.map((s) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    areaServed: serviceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: a })),
    sameAs: [company.social.facebook, company.social.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pflege- und Betreuungsleistungen',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
          url: `${SITE}/leistungen/${s.slug}/`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE}/`,
    name: seoDefaults.siteName,
    inLanguage: 'de-DE',
    publisher: { '@id': ORG_ID },
  };
}

/** Einzelne Leistung als Service-Schema */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.name,
    provider: { '@id': ORG_ID },
    areaServed: serviceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: a })),
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: company.phone,
      serviceUrl: `${SITE}/kontakt/`,
    },
  };
}

/** Breadcrumb-Navigation */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${SITE}${item.href}`,
    })),
  };
}

/** FAQ-Schema (sehr wertvoll für AEO – direkte Frage/Antwort-Paare) */
export function faqSchema(items: Faq[] = faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/** Baut den finalen @graph aus den Site-weiten + seitenspezifischen Knoten */
export function buildGraph(extra: object[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteSchema(), organizationSchema(), ...extra],
  };
}
