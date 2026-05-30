/**
 * Zentrale Datenquelle für die gesamte Website.
 * Hält Unternehmensdaten (NAP), Navigation, Leistungen und FAQ an EINER Stelle –
 * sorgt für konsistente Angaben (wichtig für lokale SEO & Entity-Konsistenz in AEO).
 *
 * ⚠️  HINWEIS: Adresse, Telefon, E-Mail und Geo-Koordinaten bitte vor dem
 *     Live-Gang mit den echten Unternehmensdaten abgleichen.
 */

export const company = {
  name: 'Sozialstation Mobil',
  legalName: 'Sozialstation Mobil GmbH',
  tagline: 'Ambulanter Fachpflegedienst in Berlin-Reinickendorf',
  claim: 'Damit Pflege zuhause gelingt.',
  description:
    'Die Sozialstation Mobil GmbH ist Ihr verlässlicher ambulanter Fachpflegedienst in Berlin-Reinickendorf. Wir pflegen, betreuen und versorgen Menschen mit Herz und Fachkompetenz in den eigenen vier Wänden – von der Grund- und Behandlungspflege über diabetologische Fachpflege und Wundmanagement bis hin zur betreuten Demenz-Wohngemeinschaft.',
  foundingYear: 2009,
  managingDirector: 'Dr. Jan Basche',
  register: 'Amtsgericht Charlottenburg, HRB 61971 B',
  vatNote: 'Umsatzsteuerbefreit gemäß § 4 Nr. 16 UStG',

  // Kontakt / NAP – muss überall identisch sein
  phone: '030 4169811',
  phoneHref: '+49304169811', // +49 30 4169811 – bitte verifizieren
  // Internationale Ziffernfolge für WhatsApp (ohne +, ohne führende 0)
  phoneIntl: '49304169811',
  email: 'info@sozialstationmobil.de',
  fax: '',

  address: {
    street: 'Wilhelmsruher Damm 142',
    postalCode: '13439',
    city: 'Berlin',
    district: 'Reinickendorf',
    country: 'DE',
    countryName: 'Deutschland',
  },

  // Geo-Koordinaten (Näherung – bitte prüfen)
  geo: {
    lat: 52.6037,
    lng: 13.3389,
  },

  // Öffnungs- bzw. Erreichbarkeitszeiten des Büros
  officeHours: [
    { days: 'Montag – Freitag', time: '08:00 – 16:30 Uhr' },
  ],
  // Pflege selbst: rund um die Uhr
  careAvailability: '7 Tage die Woche, auch an Wochenenden und Feiertagen',

  // ⚠️ Handles/Nummern bitte bestätigen (Profilnamen + aktives WhatsApp Business)
  social: {
    facebook: 'https://www.facebook.com/sozialstationmobil',
    instagram: 'https://www.instagram.com/sozialstationmobil',
    messenger: 'https://m.me/sozialstationmobil',
    whatsapp: 'https://wa.me/49304169811?text=' +
      encodeURIComponent('Hallo, ich interessiere mich für Ihre Pflegeleistungen und hätte eine Frage.'),
  },
} as const;

// Schema.org openingHoursSpecification (Mo–Fr 08:00–16:30 Büro)
export const openingHoursSpec = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
];

/** Versorgungsgebiet – wichtig für lokale SEO ("Pflegedienst + Ortsteil") */
export const serviceAreas = [
  'Reinickendorf',
  'Wittenau',
  'Märkisches Viertel',
  'Waidmannslust',
  'Hermsdorf',
  'Tegel',
  'Frohnau',
  'Lübars',
  'Wilhelmsruh',
  'Pankow',
] as const;

/** Haupt-Navigation */
export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: 'Startseite', href: '/' },
  {
    label: 'Leistungen',
    href: '/leistungen/',
    children: [
      { label: 'Behandlungspflege', href: '/leistungen/behandlungspflege/' },
      { label: 'Grundpflege', href: '/leistungen/grundpflege/' },
      { label: 'Diabetologische Fachpflege', href: '/leistungen/diabetologische-fachpflege/' },
      { label: 'Wundmanagement', href: '/leistungen/wundmanagement/' },
      { label: 'Hauswirtschaft', href: '/leistungen/hauswirtschaft/' },
      { label: 'Entlastungsleistungen', href: '/leistungen/entlastungsleistungen/' },
      { label: 'Demenz-Wohngemeinschaft', href: '/leistungen/demenz-wohngemeinschaft/' },
    ],
  },
  {
    label: 'Ratgeber',
    href: '/ratgeber/',
    children: [
      { label: 'Pflegekosten & Pflegegrad', href: '/ratgeber/pflegekosten-pflegegrad/' },
      { label: 'Pflegegrad beantragen', href: '/ratgeber/pflegegrad-beantragen/' },
      { label: 'Verhinderungs- & Kurzzeitpflege', href: '/ratgeber/verhinderungspflege-kurzzeitpflege/' },
      { label: 'Häusliche Krankenpflege', href: '/ratgeber/haeusliche-krankenpflege/' },
      { label: 'Pflege bei Demenz', href: '/ratgeber/pflege-bei-demenz/' },
    ],
  },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Team', href: '/team/' },
  { label: 'Karriere', href: '/karriere/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

/** Leistungen / Services */
export type Service = {
  slug: string;
  title: string;
  short: string; // Kurzbeschreibung für Karten
  icon: string; // Icon-Key (siehe Icon.astro)
  answer: string; // Direkte Antwort (AEO) – „Was ist …?"
  intro: string;
  items: string[]; // konkrete Leistungen
  audience: string; // Für wen?
  funding: string; // Kostenträger
  highlight?: string;
};

export const services: Service[] = [
  {
    slug: 'behandlungspflege',
    title: 'Behandlungspflege',
    short: 'Medizinische Pflege nach ärztlicher Verordnung – von der Medikamentengabe bis zur Injektion.',
    icon: 'stethoscope',
    answer:
      'Behandlungspflege umfasst alle medizinisch-pflegerischen Maßnahmen, die ein Arzt verordnet und die von examinierten Pflegefachkräften zu Hause durchgeführt werden. Die Kosten übernimmt in der Regel die Krankenkasse (SGB V).',
    intro:
      'Nach einem Krankenhausaufenthalt oder bei einer chronischen Erkrankung müssen viele Behandlungen zu Hause weitergeführt werden. Unsere examinierten Pflegefachkräfte übernehmen diese ärztlich verordneten Maßnahmen zuverlässig, hygienisch einwandfrei und genau nach Verordnungsplan.',
    items: [
      'Medikamentengabe und -management (Stellen und Verabreichen)',
      'Injektionen, z. B. Insulin und Heparin',
      'Blutdruck-, Blutzucker- und Vitalzeichenkontrolle',
      'An- und Ausziehen von Kompressionsstrümpfen',
      'Verbandwechsel und Wundversorgung',
      'Versorgung von Kathetern, Stoma und Portsystemen',
      'Dekubitus- und Thromboseprophylaxe',
      'Medikamenten- und Schmerzmittelmanagement',
    ],
    audience:
      'Für Menschen, die nach Krankenhausaufenthalt, Operation oder bei chronischer Erkrankung medizinische Versorgung zu Hause benötigen.',
    funding:
      'Verordnung durch den Haus- oder Facharzt („Häusliche Krankenpflege"). Die Abrechnung erfolgt direkt mit Ihrer Krankenkasse (SGB V) – für Sie meist kostenfrei.',
    highlight: 'Direkte Abrechnung mit der Krankenkasse',
  },
  {
    slug: 'grundpflege',
    title: 'Grundpflege',
    short: 'Würdevolle Unterstützung bei Körperpflege, Ernährung und Mobilität im Alltag.',
    icon: 'heart-hands',
    answer:
      'Grundpflege umfasst die körperbezogenen Pflegemaßnahmen des täglichen Lebens – etwa Waschen, Ankleiden, Hilfe beim Essen und bei der Bewegung. Sie wird über die Pflegekasse (SGB XI) finanziert, sobald ein Pflegegrad vorliegt.',
    intro:
      'Wenn alltägliche Verrichtungen schwerer fallen, sind wir an Ihrer Seite – einfühlsam, geduldig und mit Respekt vor Ihrer Selbstständigkeit. Wir unterstützen genau dort, wo Hilfe nötig ist, und bewahren so viel Eigenständigkeit wie möglich.',
    items: [
      'Hilfe bei Körperpflege, Waschen, Duschen und Baden',
      'Unterstützung beim An- und Auskleiden',
      'Mund-, Zahn- und Hautpflege',
      'Hilfe bei der Nahrungs- und Flüssigkeitsaufnahme',
      'Mobilisation, Lagerung und Bewegungsübungen',
      'Unterstützung beim Toilettengang und Kontinenzversorgung',
      'Hautbeobachtung und Prophylaxen',
    ],
    audience:
      'Für pflegebedürftige Menschen mit anerkanntem Pflegegrad, die im Alltag körperliche Unterstützung benötigen.',
    funding:
      'Finanzierung über die Pflegekasse (SGB XI) als Pflegesachleistung – abhängig vom Pflegegrad. Gerne beraten wir Sie zu den Leistungsbeträgen.',
  },
  {
    slug: 'diabetologische-fachpflege',
    title: 'Diabetologische Fachpflege',
    short: 'Spezialisierte Versorgung für Menschen mit Diabetes – sicher und kompetent.',
    icon: 'droplet',
    answer:
      'Die diabetologische Fachpflege ist eine spezialisierte Pflegeform für Menschen mit Diabetes mellitus. Sie umfasst Insulingabe, Blutzuckereinstellung, Schulung und die Versorgung des diabetischen Fußsyndroms durch besonders qualifizierte Pflegefachkräfte.',
    intro:
      'Diabetes erfordert eine sorgfältige, regelmäßige Versorgung. Unsere speziell geschulten Pflegefachkräfte unterstützen Sie dabei, Ihren Blutzucker sicher im Griff zu behalten und Folgeerkrankungen vorzubeugen.',
    items: [
      'Sachgerechte Insulingabe und Anpassung nach ärztlichem Plan',
      'Regelmäßige Blutzuckermessung und Dokumentation',
      'Anleitung und Schulung von Betroffenen und Angehörigen',
      'Vorbeugung und Versorgung des diabetischen Fußsyndroms',
      'Erkennen von Über- und Unterzuckerung',
      'Enge Abstimmung mit Diabetologen und Hausärzten',
    ],
    audience:
      'Für Menschen mit Diabetes mellitus, die Unterstützung bei der täglichen Insulingabe oder der Blutzuckereinstellung benötigen.',
    funding:
      'In der Regel als ärztlich verordnete Behandlungspflege über die Krankenkasse (SGB V) abrechenbar.',
    highlight: 'Speziell geschulte Fachkräfte',
  },
  {
    slug: 'wundmanagement',
    title: 'Wundmanagement',
    short: 'Moderne, phasengerechte Versorgung chronischer und schwer heilender Wunden.',
    icon: 'bandage',
    answer:
      'Modernes Wundmanagement ist die fachgerechte, phasengerechte Versorgung chronischer und akuter Wunden – etwa Dekubitus, Ulcus cruris („offenes Bein") oder das diabetische Fußsyndrom – durch zertifizierte Wundexperten.',
    intro:
      'Chronische Wunden brauchen Erfahrung, Geduld und ein modernes Behandlungskonzept. Unsere Wundexperten versorgen Ihre Wunde nach aktuellem medizinischen Standard, dokumentieren den Heilungsverlauf lückenlos und arbeiten eng mit Ärzten zusammen.',
    items: [
      'Phasengerechter Verbandwechsel nach modernem Standard',
      'Versorgung von Dekubitus (Druckgeschwüren)',
      'Behandlung von Ulcus cruris („offenes Bein")',
      'Versorgung des diabetischen Fußsyndroms',
      'Fotodokumentation und Wundverlaufskontrolle',
      'Beratung zu Druckentlastung und Prophylaxe',
      'Enge Zusammenarbeit mit Haus- und Fachärzten',
    ],
    audience:
      'Für Menschen mit chronischen oder schlecht heilenden Wunden, die eine fachkundige, kontinuierliche Versorgung benötigen.',
    funding:
      'Als ärztlich verordnete Behandlungspflege über die Krankenkasse (SGB V) abrechenbar.',
    highlight: 'Zertifizierte Wundexperten',
  },
  {
    slug: 'hauswirtschaft',
    title: 'Hauswirtschaftliche Versorgung',
    short: 'Ein gepflegtes Zuhause – wir unterstützen im Haushalt und im Alltag.',
    icon: 'home',
    answer:
      'Die hauswirtschaftliche Versorgung umfasst alltägliche Tätigkeiten im Haushalt wie Reinigung, Wäschepflege, Einkäufe und das Zubereiten von Mahlzeiten. Sie kann über den Entlastungsbetrag oder die Pflegesachleistung finanziert werden.',
    intro:
      'Ein sauberes, ordentliches Zuhause trägt entscheidend zum Wohlbefinden bei. Wir nehmen Ihnen die Hausarbeit ab, die schwerfällt – damit Sie sich in Ihren eigenen vier Wänden weiterhin rundum wohlfühlen.',
    items: [
      'Reinigung und Pflege der Wohnung',
      'Wäsche waschen, bügeln und in Ordnung halten',
      'Einkäufe und Besorgungen erledigen',
      'Zubereitung von Mahlzeiten und Hilfe beim Kochen',
      'Spülen und Aufräumen in der Küche',
      'Müllentsorgung und kleine Ordnungsarbeiten',
    ],
    audience:
      'Für Menschen, die ihren Haushalt nicht mehr allein bewältigen können und Unterstützung im Alltag wünschen.',
    funding:
      'Finanzierbar über den Entlastungsbetrag (§ 45b SGB XI), die Pflegesachleistung oder privat.',
  },
  {
    slug: 'entlastungsleistungen',
    title: 'Entlastungsleistungen & Betreuung',
    short: 'Zeit, Begleitung und Entlastung – für mehr Lebensqualität und entlastete Angehörige.',
    icon: 'companion',
    answer:
      'Entlastungsleistungen sind Betreuungs- und Begleitangebote, die pflegebedürftige Menschen und ihre Angehörigen im Alltag entlasten. Jeder Mensch mit Pflegegrad hat Anspruch auf den Entlastungsbetrag von 131 € pro Monat (§ 45b SGB XI).',
    intro:
      'Pflege ist mehr als Medizin und Körperpflege – sie bedeutet auch Zuwendung, Gesellschaft und Zeit. Mit unseren Entlastungs- und Betreuungsleistungen schenken wir Ihnen Begleitung im Alltag und geben pflegenden Angehörigen wertvolle Verschnaufpausen.',
    items: [
      'Begleitung zu Ärzten, Behörden und Terminen',
      'Begleitung und Unterstützung beim Einkaufen',
      'Gesellschaft, Gespräche und gemeinsame Aktivitäten',
      'Spaziergänge und Ausflüge',
      'Betreuung von Menschen mit Demenz',
      'Entlastung pflegender Angehöriger',
    ],
    audience:
      'Für pflegebedürftige Menschen mit Pflegegrad und deren Angehörige, die Unterstützung und Entlastung im Alltag suchen.',
    funding:
      'Über den monatlichen Entlastungsbetrag von 131 € (§ 45b SGB XI), der allen Pflegegraden zusteht.',
    highlight: '131 € Entlastungsbetrag monatlich',
  },
  {
    slug: 'demenz-wohngemeinschaft',
    title: 'Demenz-Wohngemeinschaft',
    short: 'Geborgenheit in familiärer Atmosphäre – ambulant betreutes Wohnen für Menschen mit Demenz.',
    icon: 'community',
    answer:
      'Eine ambulant betreute Demenz-Wohngemeinschaft ist eine kleine Wohnform, in der Menschen mit Demenz in familiärer Atmosphäre zusammenleben und rund um die Uhr betreut werden – mit eigenem Zimmer und gemeinschaftlichem Alltag.',
    intro:
      'Wenn das Leben allein zu Hause nicht mehr möglich ist, bietet unsere Wohngemeinschaft ein liebevolles Zuhause. In kleiner, familiärer Runde begleiten wir Menschen mit Demenz rund um die Uhr – mit Struktur, Geborgenheit und einem schönen Garten zum Verweilen.',
    items: [
      '24-Stunden-Betreuung durch ein festes Team',
      'Eigenes, individuell einrichtbares Zimmer',
      'Gemeinsame Mahlzeiten und Tagesstruktur',
      'Aktivierende Betreuung und Beschäftigung',
      'Geschützter Garten und gemütliche Gemeinschaftsräume',
      'Enge Einbindung der Angehörigen',
    ],
    audience:
      'Für Menschen mit Demenz, in der Regel ab Pflegegrad 4, für die das Leben in den eigenen vier Wänden nicht mehr sicher möglich ist.',
    funding:
      'Kombination aus Pflegesachleistung, Wohngruppenzuschlag (§ 38a SGB XI), Entlastungsbetrag und Eigenanteil. Wir beraten Sie umfassend.',
    highlight: '24-Stunden-Betreuung',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Warum-wir / Vertrauensargumente */
export const usps = [
  {
    icon: 'shield',
    title: 'Examinierte Fachkräfte',
    text: 'Unser Team besteht aus erfahrenen, examinierten Pflegefachkräften mit Herz und Kompetenz.',
  },
  {
    icon: 'clock',
    title: 'Rund um die Uhr',
    text: 'Pflege braucht Verlässlichkeit – wir sind 7 Tage die Woche für Sie da, auch am Wochenende.',
  },
  {
    icon: 'pin',
    title: 'Aus dem Kiez für den Kiez',
    text: 'Fest verwurzelt in Reinickendorf – kurze Wege und feste Bezugspflegekräfte für Ihre Region.',
  },
  {
    icon: 'handshake',
    title: 'Alle Kassen & Pflegegrade',
    text: 'Wir rechnen direkt mit Kranken- und Pflegekassen ab und beraten Sie zu allen Leistungen.',
  },
];

/** Ablauf – wie kommt die Pflege zustande */
export const steps = [
  {
    title: 'Unverbindlich anrufen',
    text: 'Sie rufen uns an oder schreiben uns. Wir hören zu und beantworten Ihre ersten Fragen.',
  },
  {
    title: 'Kostenloses Beratungsgespräch',
    text: 'Wir besuchen Sie zu Hause, lernen Ihre Situation kennen und beraten zu Leistungen und Kosten.',
  },
  {
    title: 'Individueller Pflegeplan',
    text: 'Gemeinsam stellen wir ein Versorgungspaket zusammen, das genau zu Ihnen passt.',
  },
  {
    title: 'Pflege beginnt',
    text: 'Ihre feste Bezugspflegekraft startet – zuverlässig, einfühlsam und auf Augenhöhe.',
  },
];

/** FAQ – optimiert für Answer Engines (direkte Antwort zuerst) */
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'Was kostet ein ambulanter Pflegedienst?',
    answer:
      'Für gesetzlich Versicherte mit anerkanntem Pflegegrad übernehmen die Pflegekasse (Pflegesachleistung nach SGB XI) und die Krankenkasse (Behandlungspflege nach SGB V) den Großteil der Kosten. Ärztlich verordnete Behandlungspflege ist für Sie in der Regel kostenfrei. Wie hoch ein möglicher Eigenanteil ist, hängt vom Pflegegrad und den gewählten Leistungen ab – wir erstellen Ihnen gerne eine kostenlose, transparente Kostenübersicht.',
  },
  {
    question: 'Welche Gebiete in Berlin versorgt die Sozialstation Mobil?',
    answer:
      'Wir sind im Berliner Norden tätig – vor allem in Reinickendorf und Pankow. Dazu gehören Wittenau, Märkisches Viertel, Waidmannslust, Hermsdorf, Tegel, Frohnau, Lübars und Wilhelmsruh. Ob wir auch Ihre Straße versorgen, klären wir gerne in einem kurzen Telefonat.',
  },
  {
    question: 'Wie beantrage ich einen Pflegegrad?',
    answer:
      'Den Pflegegrad beantragen Sie formlos bei Ihrer Pflegekasse (telefonisch oder schriftlich). Anschließend prüft der Medizinische Dienst (MD) in einem Hausbesuch Ihre Selbstständigkeit und empfiehlt einen Pflegegrad von 1 bis 5. Wir unterstützen Sie gerne bei der Vorbereitung des Begutachtungstermins.',
  },
  {
    question: 'Was ist der Unterschied zwischen Grundpflege und Behandlungspflege?',
    answer:
      'Grundpflege umfasst die körperbezogene Unterstützung im Alltag (z. B. Waschen, Ankleiden, Mobilität) und wird über die Pflegekasse (SGB XI) finanziert. Behandlungspflege umfasst medizinische Maßnahmen auf ärztliche Verordnung (z. B. Medikamentengabe, Injektionen, Verbandwechsel) und wird über die Krankenkasse (SGB V) abgerechnet.',
  },
  {
    question: 'Wie schnell kann die Pflege beginnen?',
    answer:
      'In dringenden Fällen können wir die Versorgung oft schon innerhalb weniger Tage aufnehmen. Rufen Sie uns einfach an – wir vereinbaren zeitnah ein kostenloses Beratungsgespräch bei Ihnen zu Hause.',
  },
  {
    question: 'Kann ich meinen Pflegedienst frei wählen?',
    answer:
      'Ja. Sie haben das gesetzlich verankerte Recht, Ihren ambulanten Pflegedienst frei zu wählen – auch wenn Sie bereits von einem anderen Dienst versorgt werden. Ein Wechsel ist jederzeit möglich, und wir kümmern uns um einen reibungslosen Übergang.',
  },
  {
    question: 'Pflegen Sie auch an Wochenenden und Feiertagen?',
    answer:
      'Ja. Pflege endet nicht am Freitagnachmittag. Unsere Pflegekräfte sind 7 Tage die Woche im Einsatz – auch an Wochenenden und Feiertagen.',
  },
  {
    question: 'Was ist der Entlastungsbetrag von 131 €?',
    answer:
      'Der Entlastungsbetrag nach § 45b SGB XI beträgt 131 € pro Monat und steht allen Menschen mit Pflegegrad 1 bis 5 zu. Er kann für Betreuungs- und Entlastungsleistungen sowie für hauswirtschaftliche Hilfen verwendet werden – etwa Begleitung, Betreuung oder Unterstützung im Haushalt.',
  },
];

/**
 * Eigene FAQ für die Startseite – bewusst VERSCHIEDEN von den Ratgeber-FAQ,
 * damit FAQPage-Markup nicht doppelt auf mehreren URLs erscheint.
 */
export const homeFaqs: Faq[] = [
  {
    question: 'Wie läuft der erste Kontakt mit der Sozialstation Mobil ab?',
    answer:
      'Ganz unkompliziert: Sie rufen uns an oder schreiben uns. Wir vereinbaren ein kostenloses Beratungsgespräch – gerne bei Ihnen zu Hause –, lernen Ihre Situation kennen und stellen gemeinsam ein passendes Versorgungspaket zusammen. Danach startet Ihre feste Bezugspflegekraft.',
  },
  {
    question: 'Was kostet ein erstes Beratungsgespräch?',
    answer:
      'Das Erstgespräch ist für Sie kostenlos und völlig unverbindlich. Wir nehmen uns Zeit, beantworten Ihre Fragen zu Leistungen, Pflegegrad und Kosten und helfen Ihnen, die nächsten Schritte zu sortieren.',
  },
  {
    question: 'Bekomme ich immer dieselbe Pflegekraft?',
    answer:
      'So weit es geht, ja. Wir arbeiten mit festen Bezugspflegekräften und kleinen Teams, damit Sie vertraute Gesichter sehen und nicht ständig jemand Neues vor der Tür steht. Das schafft Vertrauen und Sicherheit.',
  },
  {
    question: 'Was unterscheidet die Sozialstation Mobil von anderen Pflegediensten?',
    answer:
      'Wir sind fest in Reinickendorf verwurzelt, setzen auf feste Bezugspflegekräfte statt wechselnder Gesichter, sind 7 Tage die Woche erreichbar und rechnen direkt mit den Kranken- und Pflegekassen ab. Persönliche Nähe und Verlässlichkeit stehen bei uns im Mittelpunkt.',
  },
];

/** Ratgeber-Artikel (Hub-and-Spoke). Rein informativ – keine Rechts-/Pflegeberatung. */
export type RatgeberArticle = {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  relatedServices?: string[]; // Slugs passender Leistungen
};

export const ratgeberArticles: RatgeberArticle[] = [
  {
    slug: 'pflegekosten-pflegegrad',
    title: 'Pflegekosten & Pflegegrad',
    excerpt: 'Was kostet ambulante Pflege, wer zahlt was – und welche Leistungen stehen Ihnen je Pflegegrad zu?',
    icon: 'euro',
    relatedServices: ['grundpflege', 'behandlungspflege'],
  },
  {
    slug: 'pflegegrad-beantragen',
    title: 'Pflegegrad beantragen',
    excerpt: 'Schritt für Schritt zum Pflegegrad: Antrag, Begutachtung durch den Medizinischen Dienst und hilfreiche Tipps.',
    icon: 'clipboard',
    relatedServices: ['grundpflege'],
  },
  {
    slug: 'verhinderungspflege-kurzzeitpflege',
    title: 'Verhinderungs- & Kurzzeitpflege',
    excerpt: 'Wenn pflegende Angehörige eine Auszeit brauchen: Leistungen, Voraussetzungen und Beträge im Überblick.',
    icon: 'calendar',
    relatedServices: ['entlastungsleistungen', 'grundpflege'],
  },
  {
    slug: 'haeusliche-krankenpflege',
    title: 'Häusliche Krankenpflege (SGB V)',
    excerpt: 'Ärztlich verordnete Behandlungspflege zu Hause: Was sie umfasst, wie die Verordnung läuft und wer zahlt.',
    icon: 'stethoscope',
    relatedServices: ['behandlungspflege', 'wundmanagement', 'diabetologische-fachpflege'],
  },
  {
    slug: 'pflege-bei-demenz',
    title: 'Pflege bei Demenz',
    excerpt: 'Menschen mit Demenz zu Hause begleiten: Unterstützungsangebote, Entlastung für Angehörige und praktische Tipps.',
    icon: 'heart',
    relatedServices: ['demenz-wohngemeinschaft', 'entlastungsleistungen'],
  },
];

export function getRatgeberArticle(slug: string): RatgeberArticle | undefined {
  return ratgeberArticles.find((a) => a.slug === slug);
}

/**
 * Zusätzliche, leistungsspezifische FAQ je Service (ergänzen die automatisch
 * erzeugten Fragen auf den Leistungsseiten). Faktenbasiert, ohne neue Leistungsversprechen.
 */
export const serviceExtraFaqs: Record<string, Faq[]> = {
  behandlungspflege: [
    {
      question: 'Brauche ich für die Behandlungspflege eine ärztliche Verordnung?',
      answer:
        'Ja. Behandlungspflege wird vom Haus- oder Facharzt verordnet (Verordnung häuslicher Krankenpflege, Muster 12) und von der Krankenkasse genehmigt. Gerne unterstützen wir Sie bei den Formalitäten.',
    },
    {
      question: 'Wie lange gilt eine Verordnung?',
      answer:
        'Verordnungen sind in der Regel befristet und werden bei weiterem Bedarf vom Arzt verlängert. Wir behalten die Fristen im Blick und weisen rechtzeitig auf eine Folgeverordnung hin.',
    },
  ],
  grundpflege: [
    {
      question: 'Brauche ich für die Grundpflege einen Pflegegrad?',
      answer:
        'Für die Grundpflege als Pflegesachleistung ist ein anerkannter Pflegegrad nötig. Ohne Pflegegrad ist eine private Beauftragung möglich – sprechen Sie uns einfach an.',
    },
    {
      question: 'Kann ich Grundpflege mit dem Pflegegeld kombinieren?',
      answer:
        'Ja. Eine Kombination aus Pflegesachleistung (durch uns) und Pflegegeld (für die Pflege durch Angehörige) ist als sogenannte Kombinationsleistung möglich.',
    },
  ],
  'diabetologische-fachpflege': [
    {
      question: 'Wer übernimmt die Insulingabe, wenn ich sie nicht selbst durchführen kann?',
      answer:
        'Auf ärztliche Verordnung übernehmen unsere examinierten Pflegefachkräfte die Insulingabe – sicher, hygienisch und genau nach dem ärztlichen Plan.',
    },
    {
      question: 'Wird die diabetologische Versorgung von der Kasse bezahlt?',
      answer:
        'In der Regel ja: als ärztlich verordnete Behandlungspflege über die Krankenkasse (SGB V). Die genauen Voraussetzungen klären wir gemeinsam mit Ihrem Arzt.',
    },
  ],
  wundmanagement: [
    {
      question: 'Wer entscheidet über die Wundbehandlung?',
      answer:
        'Die Therapie erfolgt nach ärztlicher Verordnung. Wir stimmen die Versorgung eng mit Ihrem Arzt ab, setzen sie fachgerecht um und dokumentieren den Heilungsverlauf.',
    },
    {
      question: 'Wie oft wird der Verband gewechselt?',
      answer:
        'Das hängt von Wundart und ärztlicher Vorgabe ab – von täglich bis mehrmals wöchentlich. Moderne Wundauflagen ermöglichen oft längere Wechselintervalle.',
    },
  ],
  hauswirtschaft: [
    {
      question: 'Kann ich den Entlastungsbetrag für hauswirtschaftliche Hilfe nutzen?',
      answer:
        'Ja. Der Entlastungsbetrag von 131 € pro Monat (§ 45b SGB XI) kann unter anderem für hauswirtschaftliche Unterstützung eingesetzt werden.',
    },
    {
      question: 'Brauche ich für die hauswirtschaftliche Versorgung einen Pflegegrad?',
      answer:
        'Mit Pflegegrad lässt sich die Hilfe über den Entlastungsbetrag oder die Pflegesachleistung finanzieren. Ohne Pflegegrad ist eine private Beauftragung jederzeit möglich.',
    },
  ],
  entlastungsleistungen: [
    {
      question: 'Wer hat Anspruch auf den Entlastungsbetrag?',
      answer:
        'Alle Menschen mit Pflegegrad 1 bis 5 haben Anspruch auf den Entlastungsbetrag von 131 € pro Monat (§ 45b SGB XI).',
    },
    {
      question: 'Verfällt nicht genutzter Entlastungsbetrag?',
      answer:
        'Nicht sofort: Nicht genutzte Beträge können innerhalb des Kalenderjahres angespart und übertragen werden. Lassen Sie sich zu den aktuellen Fristen von Ihrer Pflegekasse beraten.',
    },
  ],
  'demenz-wohngemeinschaft': [
    {
      question: 'Ab welchem Pflegegrad ist die Wohngemeinschaft sinnvoll?',
      answer:
        'In der Regel ab Pflegegrad 4 – dann, wenn das Leben allein zu Hause nicht mehr sicher möglich ist. Was im Einzelfall passt, besprechen wir gerne persönlich mit Ihnen.',
    },
    {
      question: 'Können Angehörige zu Besuch kommen und mitwirken?',
      answer:
        'Unbedingt. Angehörige sind jederzeit willkommen und werden eng in den Alltag und die Begleitung eingebunden.',
    },
  ],
};

/**
 * Vertrauenssignale / Qualitätsnachweise.
 * `confirmed: true`  → wird auf der Website angezeigt (allgemeingültig bzw. mit den
 *                       Angaben der Website konsistent).
 * `confirmed: false` → erst anzeigen, wenn der Nachweis tatsächlich vorliegt!
 *                       (Werbung mit nicht vorhandenen Zertifikaten ist in DE unzulässig, UWG.)
 */
export type TrustSignal = { icon: string; title: string; text: string; confirmed: boolean };

export const trustSignals: TrustSignal[] = [
  {
    icon: 'shield',
    title: 'Zugelassen nach § 72 SGB XI',
    text: 'Anerkannter ambulanter Pflegedienst mit Versorgungsvertrag der Pflegekassen.',
    confirmed: true,
  },
  {
    icon: 'handshake',
    title: 'Alle Pflege- & Krankenkassen',
    text: 'Direkte Abrechnung mit allen gesetzlichen Kassen – ohne Vorkasse für Sie.',
    confirmed: true,
  },
  {
    icon: 'award',
    title: 'Examinierte Fachkräfte',
    text: 'Versorgung durch qualifizierte, examinierte Pflegefachkräfte.',
    confirmed: true,
  },
  {
    icon: 'clipboard',
    title: 'Nationale Expertenstandards',
    text: 'Pflege nach den anerkannten Expertenstandards (§ 113a SGB XI).',
    confirmed: true,
  },
  {
    icon: 'heart',
    title: 'Schweigepflicht & Datenschutz',
    text: 'Verschwiegenheit und ein gesetzeskonformer, sorgsamer Umgang mit Ihren Daten.',
    confirmed: true,
  },
  {
    icon: 'clock',
    title: 'Erreichbarkeit rund um die Uhr',
    text: 'Pflege 7 Tage die Woche – auch an Wochenenden und Feiertagen.',
    confirmed: true,
  },

  // ── Erst aktivieren (confirmed: true), wenn der Nachweis vorliegt ──────────────
  {
    icon: 'star',
    title: 'MD-Qualitätsprüfung',
    text: 'Regelmäßig geprüft vom Medizinischen Dienst (MD) – Ergebnis auf Anfrage.',
    confirmed: false,
  },
  {
    icon: 'bandage',
    title: 'Zertifizierte Wundexperten (ICW)',
    text: 'Wundversorgung durch ICW-zertifizierte Wundexpert:innen.',
    confirmed: false,
  },
  {
    icon: 'droplet',
    title: 'Diabetes-Fachpflege (DDG)',
    text: 'Diabetologische Versorgung durch zertifizierte Fachkräfte.',
    confirmed: false,
  },
  {
    icon: 'award',
    title: 'ISO 9001 Qualitätsmanagement',
    text: 'Zertifiziertes Qualitätsmanagement nach DIN EN ISO 9001.',
    confirmed: false,
  },
  {
    icon: 'community',
    title: 'Mitglied im bpa',
    text: 'Mitglied im Bundesverband privater Anbieter sozialer Dienste (bpa).',
    confirmed: false,
  },
];

/** Standardisierte SEO-Defaults */
export const seoDefaults = {
  siteName: 'Sozialstation Mobil GmbH',
  defaultTitle: 'Sozialstation Mobil – Ambulanter Pflegedienst Berlin-Reinickendorf',
  titleTemplate: '%s | Sozialstation Mobil Berlin',
  defaultDescription:
    'Ambulanter Fachpflegedienst in Berlin-Reinickendorf: Grund- & Behandlungspflege, Diabetes-Fachpflege, Wundmanagement, Betreuung und Demenz-WG. Liebevoll, kompetent, rund um die Uhr. ☎ 030 4169811',
  locale: 'de_DE',
  themeColor: '#1f6c9b',
} as const;
