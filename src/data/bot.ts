/**
 * Inhalte für den deterministischen Assistenten (DE/EN).
 * Bewusst regelbasiert: keine KI, keine externen Requests, keine Halluzinationen.
 * Antworten stammen ausschließlich aus geprüften Inhalten der Website.
 */
import { services } from './site';

export type BotLang = 'de' | 'en';
type BL = { de: string; en: string };

/** Oberflächen-Texte */
export const botUI = {
  launcher: { de: 'Fragen? Wir helfen', en: 'Questions? We help' },
  title: { de: 'Sozialstation Mobil', en: 'Sozialstation Mobil' },
  subtitle: { de: 'Digitaler Assistent', en: 'Digital assistant' },
  online: { de: 'Antwort meist sofort', en: 'Usually replies instantly' },
  greeting: {
    de: 'Hallo! 👋 Schön, dass Sie da sind. Wobei dürfen wir Sie unterstützen?',
    en: 'Hello! 👋 Good to have you here. How can we help you today?',
  },
  optService: { de: 'Leistung & Rückruf', en: 'Service & callback' },
  optFaq: { de: 'Häufige Fragen', en: 'Common questions' },
  optCall: { de: 'Direkt anrufen', en: 'Call us now' },
  askService: {
    de: 'Für welche Leistung interessieren Sie sich?',
    en: 'Which service are you interested in?',
  },
  otherService: { de: 'Etwas anderes / allgemeine Beratung', en: 'Something else / general advice' },
  faqIntro: {
    de: 'Wählen Sie eine Frage – oder schreiben Sie uns einfach Ihre Frage.',
    en: 'Pick a question – or just type your own.',
  },
  askContact: {
    de: 'Gerne beraten wir Sie persönlich. Hinterlassen Sie Ihre Telefonnummer oder E-Mail – oder eine Wunschzeit, dann rufen wir zurück.',
    en: 'We’d be glad to advise you personally. Leave your phone number or email – or a preferred time – and we’ll call you back.',
  },
  nameLabel: { de: 'Ihr Name', en: 'Your name' },
  contactLabel: { de: 'Telefon oder E-Mail', en: 'Phone or email' },
  timeLabel: { de: 'Wunschzeit für den Rückruf (optional)', en: 'Preferred callback time (optional)' },
  timePlaceholder: { de: 'z. B. heute ab 15 Uhr', en: 'e.g. today after 3 pm' },
  consent: {
    de: 'Ich bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.',
    en: 'I consent to my details being processed to handle my request.',
  },
  privacyLink: { de: 'Datenschutz', en: 'Privacy policy' },
  noHealthData: {
    de: 'Bitte keine sensiblen Gesundheitsdaten eingeben.',
    en: 'Please don’t enter sensitive health data.',
  },
  send: { de: 'Rückruf anfordern', en: 'Request callback' },
  sending: { de: 'Wird gesendet …', en: 'Sending …' },
  thanks: {
    de: 'Vielen Dank! Ihre Anfrage ist unterwegs – wir melden uns schnellstmöglich bei Ihnen. 🧡',
    en: 'Thank you! Your request is on its way – we’ll get back to you as soon as possible. 🧡',
  },
  thanksHint: {
    de: 'Falls sich Ihr E-Mail-Programm nicht öffnet, rufen Sie uns gerne direkt an.',
    en: 'If your email app didn’t open, feel free to call us directly.',
  },
  fallback: {
    de: 'Das beantworten wir am besten persönlich. Sollen wir Sie dazu kurz zurückrufen?',
    en: 'That’s best answered personally. Shall we give you a quick callback about it?',
  },
  yesCallback: { de: 'Ja, bitte zurückrufen', en: 'Yes, please call back' },
  moreQuestion: { de: 'Weitere Frage', en: 'Another question' },
  toStart: { de: 'Zum Anfang', en: 'Back to start' },
  requestCallback: { de: 'Rückruf vereinbaren', en: 'Arrange a callback' },
  inputPlaceholder: { de: 'Nachricht schreiben …', en: 'Type a message …' },
  consentRequired: {
    de: 'Bitte stimmen Sie der Verarbeitung zu, damit wir Sie kontaktieren dürfen.',
    en: 'Please consent to processing so we may contact you.',
  },
  contactRequired: {
    de: 'Bitte geben Sie eine Telefonnummer oder E-Mail an.',
    en: 'Please enter a phone number or email.',
  },
  serviceChosen: {
    de: 'Sehr gerne – Thema:',
    en: 'Great choice – topic:',
  },
} as const;

export function t(key: keyof typeof botUI, lang: BotLang): string {
  return botUI[key][lang];
}

/** Zweisprachige Kurz-Labels der Leistungen (für die Auswahl-Bubbles) */
export const botServiceLabels: Record<string, BL> = {
  behandlungspflege: { de: 'Behandlungspflege', en: 'Medical (treatment) care' },
  grundpflege: { de: 'Grundpflege', en: 'Basic / personal care' },
  'diabetologische-fachpflege': { de: 'Diabetes-Fachpflege', en: 'Diabetes specialist care' },
  wundmanagement: { de: 'Wundmanagement', en: 'Wound management' },
  hauswirtschaft: { de: 'Hauswirtschaft', en: 'Household help' },
  entlastungsleistungen: { de: 'Entlastung & Betreuung', en: 'Respite & companionship' },
  'demenz-wohngemeinschaft': { de: 'Demenz-Wohngemeinschaft', en: 'Dementia shared living' },
};

export const botServices = services.map((s) => ({
  slug: s.slug,
  label: botServiceLabels[s.slug] ?? { de: s.title, en: s.title },
  url: `/leistungen/${s.slug}/`,
}));

/** Kuratierte, geprüfte FAQ – kurz und chat-gerecht. Mit Keyword-Sets (DE/EN). */
export type BotFaq = {
  id: string;
  chip: BL; // Text auf der Bubble
  keywords: string[]; // DE + EN, kleingeschrieben
  answer: BL;
};

export const botFaqs: BotFaq[] = [
  {
    id: 'kosten',
    chip: { de: 'Was kostet die Pflege?', en: 'What does care cost?' },
    keywords: ['kosten', 'kostet', 'preis', 'preise', 'zahlen', 'bezahlen', 'geld', 'teuer', 'eigenanteil', 'cost', 'costs', 'price', 'pay', 'expensive', 'how much'],
    answer: {
      de: 'Für gesetzlich Versicherte mit anerkanntem Pflegegrad übernehmen Pflege- und Krankenkasse den Großteil der Kosten. Ärztlich verordnete Behandlungspflege ist für Sie meist kostenfrei. Gerne erstellen wir Ihnen eine kostenlose, transparente Kostenübersicht.',
      en: 'For people with statutory insurance and a recognised care level, the care and health insurance funds cover most of the cost. Doctor-prescribed medical care is usually free for you. We’re happy to prepare a free, transparent cost overview.',
    },
  },
  {
    id: 'pflegegrad',
    chip: { de: 'Pflegegrad beantragen', en: 'Applying for a care level' },
    keywords: ['pflegegrad', 'pflegestufe', 'beantragen', 'antrag', 'einstufung', 'begutachtung', 'care level', 'care grade', 'apply', 'assessment'],
    answer: {
      de: 'Den Pflegegrad beantragen Sie formlos bei Ihrer Pflegekasse. Anschließend prüft der Medizinische Dienst Ihre Situation bei einem Hausbesuch. Wir unterstützen Sie gerne bei der Vorbereitung – mehr dazu im Ratgeber unter „Pflegegrad beantragen“.',
      en: 'You apply for a care level informally with your care insurance fund. The Medical Service then assesses your situation during a home visit. We’re happy to help you prepare – see our guide “Applying for a care level”.',
    },
  },
  {
    id: 'gebiet',
    chip: { de: 'Versorgen Sie meinen Ort?', en: 'Do you cover my area?' },
    keywords: ['gebiet', 'ort', 'wohnort', 'adresse', 'reinickendorf', 'wittenau', 'tegel', 'frohnau', 'hermsdorf', 'pankow', 'märkisches', 'wo', 'area', 'where', 'district', 'cover', 'location'],
    answer: {
      de: 'Wir sind im Berliner Norden tätig – vor allem in Reinickendorf und Pankow (u. a. Wittenau, Märkisches Viertel, Waidmannslust, Hermsdorf, Tegel, Frohnau, Lübars). Nennen Sie uns gerne Ihre Adresse, dann prüfen wir das für Sie.',
      en: 'We work in the north of Berlin – mainly Reinickendorf and Pankow (incl. Wittenau, Märkisches Viertel, Waidmannslust, Hermsdorf, Tegel, Frohnau, Lübars). Tell us your address and we’ll check it for you.',
    },
  },
  {
    id: 'start',
    chip: { de: 'Wie schnell geht es los?', en: 'How quickly can you start?' },
    keywords: ['schnell', 'wann', 'beginnen', 'starten', 'sofort', 'dringend', 'kurzfristig', 'how fast', 'how quickly', 'start', 'begin', 'urgent', 'soon'],
    answer: {
      de: 'In dringenden Fällen können wir die Versorgung oft schon innerhalb weniger Tage aufnehmen. Am besten vereinbaren wir ein kurzes, kostenloses Gespräch – hinterlassen Sie uns einfach Ihre Nummer.',
      en: 'In urgent cases we can often start care within a few days. The best next step is a short, free conversation – just leave us your number.',
    },
  },
  {
    id: 'wochenende',
    chip: { de: 'Auch am Wochenende?', en: 'Weekends too?' },
    keywords: ['wochenende', 'feiertag', 'feiertage', 'nachts', 'nacht', 'sonntag', 'samstag', '24', 'rund um die uhr', 'weekend', 'holiday', 'night', 'sunday', 'around the clock'],
    answer: {
      de: 'Ja. Pflege endet bei uns nicht am Freitag – unsere Pflegekräfte sind 7 Tage die Woche im Einsatz, auch an Wochenenden und Feiertagen.',
      en: 'Yes. Care doesn’t stop on Friday with us – our caregivers work 7 days a week, including weekends and public holidays.',
    },
  },
  {
    id: 'wechsel',
    chip: { de: 'Pflegedienst wechseln', en: 'Switching providers' },
    keywords: ['wechseln', 'wechsel', 'anderer dienst', 'frei wählen', 'wahl', 'kündigen', 'switch', 'change provider', 'choose', 'free choice'],
    answer: {
      de: 'Sie haben das gesetzlich verankerte Recht, Ihren ambulanten Pflegedienst frei zu wählen – ein Wechsel ist jederzeit möglich. Wir kümmern uns um einen reibungslosen Übergang.',
      en: 'You have the legal right to freely choose your outpatient care provider – switching is possible at any time. We’ll take care of a smooth transition.',
    },
  },
];

/** Intent-Keywords, die direkt in einen Ablauf führen (nicht in eine FAQ-Antwort) */
export const intentKeywords = {
  services: ['leistung', 'leistungen', 'service', 'services', 'angebot', 'pflege', 'hilfe', 'care', 'help', 'offer'],
  callback: ['rückruf', 'anrufen', 'rufen sie', 'kontakt', 'termin', 'beraten', 'beratung', 'callback', 'call me', 'contact', 'appointment', 'consult'],
};
