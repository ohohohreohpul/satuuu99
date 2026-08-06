import type { Localized } from '../lib/i18n';

/** Real studio details (satuuu99.de). */
export const CONTACT = {
  brand: 'satuuu99',
  addressLines: ['Manhagener Allee 45', '22926 Ahrensburg'],
  phone: '+49 4102 20 40 410',
  phoneHref: 'tel:+4941022040410',
  email: 'info@satuuu99.de',
  booking: '#kontakt',
  hours: [
    { days: { de: 'Mo – Fr', en: 'Mon – Fri' } as Localized, time: '10:00 – 20:00' },
    { days: { de: 'Sa', en: 'Sat' } as Localized, time: '10:00 – 18:00' },
    { days: { de: 'So', en: 'Sun' } as Localized, time: { de: 'geschlossen', en: 'closed' } as Localized },
  ],
} as const;

/* ── Announcement bar ─────────────────────────────────────── */
export const ANNOUNCEMENT = {
  promo: {
    de: 'satuuu99 Gutscheine — das stille Geschenk. Jetzt sichern.',
    en: 'satuuu99 gift cards — the quiet gift. Get yours now.',
  } as Localized,
  company: { de: 'Unternehmen', en: 'Company' } as Localized,
};

/* ── Navigation ───────────────────────────────────────────── */
export interface NavItem {
  label: Localized;
  href: string;
  /** true = opens the Rituale flyout */
  flyout?: boolean;
}

export const NAV: NavItem[] = [
  { label: { de: 'Rituale', en: 'Rituals' }, href: '#rituale', flyout: true },
  { label: { de: 'Studio', en: 'Studio' }, href: '#studio' },
  { label: { de: 'Schenken', en: 'Gift' }, href: '#schenken' },
  { label: { de: 'Preise', en: 'Prices' }, href: '#preise' },
];

/* ── Hero ─────────────────────────────────────────────────── */
export const HERO = {
  ratingLabel: { de: '1.200+ zufriedene Gäste', en: '1,200+ happy guests' } as Localized,
  // Editorial two-part headline; italic fragment is Fraunces italic.
  headlineLead: { de: 'Zurück zu', en: 'Back to' } as Localized,
  headlineItalic: { de: 'dir selbst.', en: 'yourself.' } as Localized,
  sub: {
    de: 'Durch die Kraft der Berührung. Japanese Head Spa, Gesicht, Füße und Körper — uralte Rituale in einem stillen Studio in Ahrensburg.',
    en: 'Through the power of touch. Japanese head spa, face, feet and body — ancient rituals in a quiet studio in Ahrensburg.',
  } as Localized,
  ctaPrimary: { de: 'Buchen', en: 'Book now' } as Localized,
  ctaSecondary: { de: 'Rituale entdecken', en: 'Explore the rituals' } as Localized,
};

/* ── Ritual finder ────────────────────────────────────────── */
export const FINDER = {
  title: { de: 'Starte dein Ritual', en: 'Start your ritual' } as Localized,
  focusLabel: { de: 'Dein Fokus', en: 'Your focus' } as Localized,
  focusPlaceholder: { de: 'Bereich wählen', en: 'Choose a focus' } as Localized,
  goalLabel: { de: 'Dein Ziel', en: 'Your goal' } as Localized,
  goalPlaceholder: { de: 'Ziel wählen', en: 'Choose a goal' } as Localized,
  cta: { de: 'Finde dein Ritual', en: 'Find your ritual' } as Localized,
  focus: [
    { de: 'Kopf', en: 'Head' },
    { de: 'Gesicht', en: 'Face' },
    { de: 'Füße', en: 'Feet' },
    { de: 'Körper', en: 'Body' },
  ] as Localized[],
  goals: [
    { de: 'Entspannen', en: 'Unwind' },
    { de: 'Glow stärken', en: 'Build glow' },
    { de: 'Regenerieren', en: 'Regenerate' },
    { de: 'Erden', en: 'Ground' },
  ] as Localized[],
};

/* ── Category tiles ───────────────────────────────────────── */
export interface Category {
  id: string;
  name: Localized;
  meta: Localized;
  href: string;
  image?: string;
}

export const CATEGORIES: Category[] = [
  { id: 'head', name: { de: 'Kopf', en: 'Head' }, meta: { de: '2 Rituale · Japanese Head Spa', en: '2 rituals · Japanese head spa' }, href: '#rituale', image: '/assets/cat-head.png' },
  { id: 'face', name: { de: 'Gesicht', en: 'Face' }, meta: { de: '4 Rituale · Facials & Gua Sha', en: '4 rituals · facials & Gua Sha' }, href: '#rituale', image: '/assets/cat-face.png' },
  { id: 'feet', name: { de: 'Füße', en: 'Feet' }, meta: { de: '2 Rituale · Pflege & Reflexzonen', en: '2 rituals · care & reflexology' }, href: '#rituale', image: '/assets/cat-feet.png' },
  { id: 'body', name: { de: 'Körper', en: 'Body' }, meta: { de: '4 Rituale · Massage & Wärme', en: '4 rituals · massage & warmth' }, href: '#rituale', image: '/assets/cat-body.png' },
  { id: 'gift', name: { de: 'Schenken', en: 'Gift' }, meta: { de: 'Sofort per Mail oder Print', en: 'Instant by email or print' }, href: '#schenken', image: '/assets/cat-gift.png' },
  { id: 'membership', name: { de: 'Membership', en: 'Membership' }, meta: { de: 'Bald verfügbar', en: 'Coming soon' }, href: '#schenken', image: '/assets/cat-member.png' },
];

/* ── Treatments (carousels) ───────────────────────────────── */
export interface Treatment {
  id: string;
  category: Localized;
  name: Localized;
  rating: string;
  reviews: string;
  bullets: Localized[];
  image?: string;
  video?: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'head-spa',
    category: { de: 'Head Spa', en: 'Head Spa' },
    name: { de: 'Japanese Head Spa', en: 'Japanese Head Spa' },
    rating: '4,9',
    reviews: '812',
    bullets: [
      { de: 'Warmwasser-Ritual für Kopfhaut und Nacken', en: 'Warm-water ritual for scalp and neck' },
      { de: 'Löst tief sitzende Spannung im Kopf', en: 'Releases deep tension held in the head' },
      { de: 'Der Atem wird tiefer, der Kopf still', en: 'The breath deepens, the mind quiets' },
    ],
    image: '/assets/tr-head-spa.png',
  },
  {
    id: 'scalp-detox',
    category: { de: 'Head Spa', en: 'Head Spa' },
    name: { de: 'Kopfhaut-Detox', en: 'Scalp Detox' },
    rating: '4,8',
    reviews: '604',
    bullets: [
      { de: 'Tiefenreinigung mit warmem Öl', en: 'Deep cleanse with warm oil' },
      { de: 'Klärt Kopfhaut und stärkt den Ansatz', en: 'Clears the scalp and strengthens the roots' },
      { de: 'Beruhigt ein überreiztes Nervensystem', en: 'Calms an over-stimulated nervous system' },
    ],
    image: '/assets/tr-scalp-detox.png',
  },
  {
    id: 'aqua-facial',
    category: { de: 'Facial', en: 'Facial' },
    name: { de: 'Aqua Facial', en: 'Aqua Facial' },
    rating: '4,9',
    reviews: '745',
    bullets: [
      { de: 'Tiefenreinigung mit Wasserwirkstoffen', en: 'Deep cleanse with water-based actives' },
      { de: 'Klärt Poren und spendet Feuchtigkeit', en: 'Clears pores and floods with moisture' },
      { de: 'Sichtbarer Glow schon am selben Tag', en: 'A visible glow the same day' },
    ],
    image: '/assets/tr-aqua-facial.png',
  },
  {
    id: 'sleep-glow',
    category: { de: 'Facial', en: 'Facial' },
    name: { de: 'Sleep & Glow', en: 'Sleep & Glow' },
    rating: '4,7',
    reviews: '512',
    bullets: [
      { de: 'Sanftes Abend-Ritual für müde Haut', en: 'A gentle evening ritual for tired skin' },
      { de: 'Reduziert Schwellungen und Rötungen', en: 'Reduces puffiness and redness' },
      { de: 'Für Haut, die sich ausgeruht anfühlt', en: 'For skin that feels rested' },
    ],
    image: '/assets/tr-sleep-glow.png',
  },
  {
    id: 'gua-sha',
    category: { de: 'Facial', en: 'Facial' },
    name: { de: 'Gua Sha Lift', en: 'Gua Sha Lift' },
    rating: '4,8',
    reviews: '388',
    bullets: [
      { de: 'Lymphatische Arbeit mit warmem Stein', en: 'Lymphatic work with a warm stone' },
      { de: 'Modelliert die Konturen sichtbar', en: 'Visibly sculpts the contours' },
      { de: 'Entwässert und definiert das Gesicht', en: 'Drains and defines the face' },
    ],
    image: '/assets/tr-gua-sha.png',
  },
  {
    id: 'lash-brow',
    category: { de: 'Facial', en: 'Facial' },
    name: { de: 'Wimpern & Brauen', en: 'Lash & Brow' },
    rating: '4,7',
    reviews: '421',
    bullets: [
      { de: 'Lift, Färbung und Form in einem', en: 'Lift, tint and shape in one' },
      { de: 'Öffnet den Blick ganz natürlich', en: 'Opens the eyes, entirely natural' },
      { de: 'Hält viele Wochen ohne Aufwand', en: 'Lasts for weeks with no effort' },
    ],
    image: '/assets/tr-lash-brow.png',
  },
  {
    id: 'foot-care',
    category: { de: 'Foot Care', en: 'Foot Care' },
    name: { de: 'Signature Fußpflege', en: 'Signature Foot Care' },
    rating: '4,9',
    reviews: '690',
    bullets: [
      { de: 'Fachgerechte, medizinische Pflege', en: 'Expert, medical-grade care' },
      { de: 'Warmes Fußbad und sanftes Peeling', en: 'Warm soak and a gentle scrub' },
      { de: 'Der Boden, auf dem du stehst — versorgt', en: 'The ground you stand on — cared for' },
    ],
    image: '/assets/tr-foot-care.png',
  },
  {
    id: 'foot-reflex',
    category: { de: 'Foot Care', en: 'Foot Care' },
    name: { de: 'Reflexzonen-Massage', en: 'Reflexology Massage' },
    rating: '4,8',
    reviews: '455',
    bullets: [
      { de: 'Gezielter Druck auf die Fußreflexzonen', en: 'Targeted pressure on the foot reflex zones' },
      { de: 'Wirkt bis in Nacken und Schultern', en: 'Reaches all the way to neck and shoulders' },
      { de: 'Tiefe Entspannung von unten nach oben', en: 'Deep release from the ground up' },
    ],
    image: '/assets/tr-foot-reflex.png',
  },
  {
    id: 'candle',
    category: { de: 'Massage', en: 'Massage' },
    name: { de: 'Kerzenmassage', en: 'Candle Massage' },
    rating: '4,9',
    reviews: '733',
    bullets: [
      { de: 'Warmes, pflegendes Öl aus der Kerze', en: 'Warm nourishing oil poured from the candle' },
      { de: 'Fließende Streichungen von Kopf bis Fuß', en: 'Flowing strokes from head to toe' },
      { de: 'Ein Ganzkörper-Ritual der Ruhe', en: 'A full-body ritual of calm' },
    ],
    image: '/assets/tr-candle.png',
  },
  {
    id: 'hot-stone',
    category: { de: 'Massage', en: 'Massage' },
    name: { de: 'Hot Stone Ritual', en: 'Hot Stone Ritual' },
    rating: '4,8',
    reviews: '512',
    bullets: [
      { de: 'Warme Basaltsteine lösen die Muskulatur', en: 'Warm basalt stones melt the muscles' },
      { de: 'Wärme, die tief in die Faszien zieht', en: 'Heat that reaches deep into the fascia' },
      { de: 'Ideal für kalte, angespannte Tage', en: 'Made for cold, tense days' },
    ],
    image: '/assets/tr-hot-stone.png',
  },
  {
    id: 'thai-yoga',
    category: { de: 'Massage', en: 'Massage' },
    name: { de: 'Thai Yoga Massage', en: 'Thai Yoga Massage' },
    rating: '4,7',
    reviews: '398',
    bullets: [
      { de: 'Geführtes Dehnen und sanfter Druck', en: 'Guided stretching and gentle pressure' },
      { de: 'Öffnet Hüften, Rücken und Schultern', en: 'Opens hips, back and shoulders' },
      { de: 'Beweglichkeit, die man sofort spürt', en: 'Mobility you feel right away' },
    ],
    image: '/assets/tr-thai-yoga.png',
  },
  {
    id: 'steam-aroma',
    category: { de: 'Wellness', en: 'Wellness' },
    name: { de: 'Dampf & Aroma', en: 'Steam & Aroma' },
    rating: '4,8',
    reviews: '427',
    bullets: [
      { de: 'Warmer Dampf mit ätherischen Ölen', en: 'Warm steam with essential oils' },
      { de: 'Öffnet Atem und Poren zugleich', en: 'Opens the breath and the pores at once' },
      { de: 'Der weiche Auftakt zu jedem Ritual', en: 'The soft opening to any ritual' },
    ],
    image: '/assets/tr-steam-aroma.png',
  },
];

/** Curated subsets for the two carousels. */
export const AUSWAHL_IDS = ['head-spa', 'aqua-facial', 'gua-sha', 'candle', 'foot-care', 'thai-yoga'];
export const BESTSELLER_IDS = ['aqua-facial', 'head-spa', 'candle', 'foot-reflex', 'hot-stone', 'gua-sha'];

export function treatmentsByIds(ids: string[]): Treatment[] {
  return ids.map((id) => TREATMENTS.find((t) => t.id === id)).filter((t): t is Treatment => Boolean(t));
}

/* ── Ritual keyword ticker ("Bekannt aus" slot) ───────────── */
export const RITUAL_TICKER: Localized[] = [
  { de: 'Japanese Head Spa', en: 'Japanese Head Spa' },
  { de: 'Aqua Facial', en: 'Aqua Facial' },
  { de: 'Gua Sha Lift', en: 'Gua Sha Lift' },
  { de: 'Kopfhaut-Detox', en: 'Scalp Detox' },
  { de: 'Reflexzonen', en: 'Reflexology' },
  { de: 'Kerzenmassage', en: 'Candle Massage' },
  { de: 'Hot Stone', en: 'Hot Stone' },
  { de: 'Thai Yoga', en: 'Thai Yoga' },
  { de: 'Dampf & Aroma', en: 'Steam & Aroma' },
];

/* ── Kinetic statement ────────────────────────────────────── */
export const KINETIC = {
  words: [
    { de: 'Kopf', en: 'Head' },
    { de: 'Gesicht', en: 'Face' },
    { de: 'Füße', en: 'Feet' },
    { de: 'Ruhe', en: 'Calm' },
  ] as Localized[],
  statementLead: { de: 'Alte Rituale.', en: 'Ancient rituals.' } as Localized,
  statementItalic: { de: 'Moderne Ruhe.', en: 'Modern calm.' } as Localized,
  body: {
    de: 'Wir verbinden überlieferte Rituale mit moderner Sorgfalt — immer getragen von menschlicher Berührung. Handwerk ist unser Werkzeug. Hände sind unsere Technologie.',
    en: 'We join inherited rituals with modern care — always carried by human touch. Craft is our tool. Hands are our technology.',
  } as Localized,
  image: '/assets/kinetic-bg.png',
};

/* ── Interactive focus explorer (the clickable pillar section) ── */
export interface FocusGroup {
  id: string;
  index: string;
  word: Localized;
  blurb: Localized;
  image?: string;
  treatmentIds: string[];
}

export const FOCUS_GROUPS: FocusGroup[] = [
  {
    id: 'head',
    index: '01',
    word: { de: 'Kopf', en: 'Head' },
    blurb: {
      de: 'Wo der Tag sich sammelt. Warmes Wasser, langsame Hände, ein stiller Kopf.',
      en: 'Where the day collects. Warm water, slow hands, a quiet mind.',
    },
    image: '/assets/focus-head.png',
    treatmentIds: ['head-spa', 'scalp-detox'],
  },
  {
    id: 'face',
    index: '02',
    word: { de: 'Gesicht', en: 'Face' },
    blurb: {
      de: 'Tiefenreinigung, Gua Sha und ein Glow, den man am nächsten Morgen noch sieht.',
      en: 'Deep cleansing, Gua Sha and a glow you still see the next morning.',
    },
    image: '/assets/focus-face.png',
    treatmentIds: ['aqua-facial', 'sleep-glow', 'gua-sha', 'lash-brow'],
  },
  {
    id: 'feet',
    index: '03',
    word: { de: 'Füße', en: 'Feet' },
    blurb: {
      de: 'Fachgerechte Pflege und Reflexzonen, die bis in die Schultern ziehen.',
      en: 'Expert care and reflex zones that reach all the way to the shoulders.',
    },
    image: '/assets/focus-feet.png',
    treatmentIds: ['foot-care', 'foot-reflex'],
  },
  {
    id: 'body',
    index: '04',
    word: { de: 'Körper', en: 'Body' },
    blurb: {
      de: 'Von der Kerzenmassage bis Thai Yoga — Wärme, die den Körper loslassen lässt.',
      en: 'From candle massage to Thai yoga — warmth that lets the body let go.',
    },
    image: '/assets/focus-body.png',
    treatmentIds: ['candle', 'hot-stone', 'thai-yoga', 'steam-aroma'],
  },
];

/* ── Editorial carousel cards ─────────────────────────────── */
export const EDITORIAL_AUSWAHL = {
  kicker: { de: 'Unsere Auswahl', en: 'Our selection' } as Localized,
  quote: {
    de: 'Selfcare ist das bedeutungsvollste Geschenk — für andere und für dich selbst.',
    en: 'Self-care is the most meaningful gift — for others and for yourself.',
  } as Localized,
  image: '/assets/editorial-auswahl.png',
};

export const EDITORIAL_BESTSELLER = {
  kicker: { de: 'Unsere Bestseller', en: 'Our bestsellers' } as Localized,
  quote: {
    de: 'satuuu99 bringt dich zurück zu dir selbst. Durch die Kraft der Berührung.',
    en: 'satuuu99 brings you back to yourself. Through the power of touch.',
  } as Localized,
  image: '/assets/editorial-bestseller.png',
};

/* ── Studio ───────────────────────────────────────────────── */
export const STUDIO = {
  eyebrow: { de: 'Das Studio', en: 'The studio' } as Localized,
  title: { de: 'Dein Ort zum', en: 'Your place to' } as Localized,
  titleItalic: { de: 'Abschalten.', en: 'switch off.' } as Localized,
  body: {
    de: 'Hinter einer ruhigen Fassade an der Manhagener Allee liegt ein Raum, der bewusst leise gehalten ist. Warmes Licht, Holz, Leinen und der Duft von warmem Öl — kein Wartezimmer, eher das Haus einer Freundin, die alles über Ruhe weiß.',
    en: 'Behind a quiet façade on Manhagener Allee lies a room kept deliberately still. Warm light, wood, linen and the scent of warm oil — nothing of the waiting room, more like the home of a friend who knows everything about rest.',
  } as Localized,
  cta: { de: 'Mehr erfahren', en: 'Learn more' } as Localized,
  hoursLabel: { de: 'Öffnungszeiten', en: 'Opening hours' } as Localized,
  image: '/assets/studio.png',
};

/* ── Reviews ──────────────────────────────────────────────── */
export interface Review {
  title: Localized;
  quote: Localized;
  name: string;
  month: Localized;
}

export const RATING = { value: '4,9', count: '1.200+', total: '1.050' };

export const REVIEWS: Review[] = [
  {
    title: { de: 'Keine Standard-Behandlung', en: 'Never a standard treatment' },
    quote: { de: 'Das Team nimmt sich wirklich Zeit und passt alles an. Es fühlt sich nie nach Routine an.', en: 'The team really takes their time and adapts everything. It never feels like routine.' },
    name: 'Sebastian S.',
    month: { de: 'Juni 2025', en: 'June 2025' },
  },
  {
    title: { de: 'Das Design macht viel aus', en: 'The design matters' },
    quote: { de: 'Ruhig, reduziert und einfach angenehm. Man schaltet schnell ab, und alles ist sehr hochwertig.', en: 'Calm, reduced and simply pleasant. You switch off quickly, and it all feels premium.' },
    name: 'Saskia B.',
    month: { de: 'August 2025', en: 'August 2025' },
  },
  {
    title: { de: 'Spürbar leichter', en: 'Noticeably lighter' },
    quote: { de: 'Nach dem Head Spa fühlte sich mein Kopf direkt leichter an. Die Spannung war deutlich reduziert.', en: 'After the head spa my head felt lighter at once. The tension was clearly reduced.' },
    name: 'Ricarda S.',
    month: { de: 'September 2025', en: 'September 2025' },
  },
  {
    title: { de: 'Endlich runtergekommen', en: 'Finally came down' },
    quote: { de: 'Ich habe erst hier gemerkt, wie angespannt ich war. Ich gehe jetzt regelmäßig zu satuuu99.', en: 'Only here did I notice how tense I was. I go to satuuu99 regularly now.' },
    name: 'Anja H.',
    month: { de: 'März 2025', en: 'March 2025' },
  },
  {
    title: { de: 'Man fühlt sich ernst genommen', en: 'You feel taken seriously' },
    quote: { de: 'Es wird zugehört, nachgefragt und genau auf den Körper eingegangen. Sehr aufmerksam.', en: 'They listen, they ask, they respond to the body precisely. So attentive.' },
    name: 'Andrea R.',
    month: { de: 'August 2025', en: 'August 2025' },
  },
  {
    title: { de: 'Mehr als nur Entspannung', en: 'More than relaxation' },
    quote: { de: 'Es entspannt, aber man merkt auch, dass im Körper wirklich etwas passiert.', en: 'It relaxes, but you also feel that something real is happening in the body.' },
    name: 'Anita L.',
    month: { de: 'Juli 2025', en: 'July 2025' },
  },
  {
    title: { de: 'Ruhig von Anfang an', en: 'Calm from the start' },
    quote: { de: 'Schon bevor es losgeht, sorgt alles dafür, dass man entspannter wird. Sehr individuell.', en: 'Even before it begins, everything helps you relax. Very individual.' },
    name: 'Anna O.',
    month: { de: 'Juni 2025', en: 'June 2025' },
  },
  {
    title: { de: 'Alles läuft reibungslos', en: 'Everything runs smoothly' },
    quote: { de: 'Die Buchung war einfach, das Team super freundlich, der ganze Ablauf angenehm unkompliziert.', en: 'Booking was easy, the team lovely, the whole process pleasantly simple.' },
    name: 'Sandro H.',
    month: { de: 'Januar 2025', en: 'January 2025' },
  },
];

/* ── Video testimonial wall ───────────────────────────────── */
export interface VideoTestimonial {
  id: string;
  name: string;
  treatment: Localized;
  rating: string;
  reviews: string;
  poster?: string;
  video?: string;
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  { id: 'v1', name: 'Mara', treatment: { de: 'Japanese Head Spa', en: 'Japanese Head Spa' }, rating: '4,9', reviews: '812', poster: '/assets/vid-head.png', video: '/assets/vid-head.mp4' },
  { id: 'v2', name: 'Julius', treatment: { de: 'Aqua Facial', en: 'Aqua Facial' }, rating: '4,9', reviews: '745', poster: '/assets/vid-face.png', video: '/assets/vid-face.mp4' },
  { id: 'v3', name: 'Fenja', treatment: { de: 'Kerzenmassage', en: 'Candle Massage' }, rating: '4,9', reviews: '733', poster: '/assets/vid-body.png', video: '/assets/vid-body.mp4' },
];

export const VIDEO_WALL = {
  ratingLabel: { de: '1.200+ zufriedene Gäste', en: '1,200+ happy guests' } as Localized,
  titleLead: { de: 'Deine Momente.', en: 'Your moments.' } as Localized,
  titleItalic: { de: 'Deine Worte.', en: 'Your words.' } as Localized,
  body: {
    de: 'Entdecke, warum unsere Rituale für so viele Menschen zu einem festen Teil ihrer Woche geworden sind.',
    en: 'Discover why our rituals have become a steady part of so many people’s week.',
  } as Localized,
  cta: { de: 'Buch deine Pause', en: 'Book your pause' } as Localized,
};

/* ── Final CTA ────────────────────────────────────────────── */
export const FINAL_CTA = {
  eyebrow: { de: 'Termin', en: 'Booking' } as Localized,
  title: { de: 'Schenk deinem Körper eine Stunde Stille.', en: 'Give your body one quiet hour.' } as Localized,
  body: {
    de: 'Wir nehmen nur wenige Gäste pro Tag. Schreib oder ruf uns an — wir finden dein Ritual.',
    en: 'We take only a few guests each day. Write or call — we will find your ritual.',
  } as Localized,
  cta: { de: 'Buchen', en: 'Book now' } as Localized,
};

/* ── Footer ───────────────────────────────────────────────── */
export const FOOTER = {
  tagline: {
    de: 'Ein stilles Studio für Kopf, Gesicht, Füße und Körper. Ahrensburg, seit 2019.',
    en: 'A quiet studio for head, face, feet and body. Ahrensburg, since 2019.',
  } as Localized,
  columns: [
    {
      title: { de: 'Rituale', en: 'Rituals' } as Localized,
      links: [
        { label: { de: 'Japanese Head Spa', en: 'Japanese Head Spa' } as Localized, href: '#rituale' },
        { label: { de: 'Gesicht & Facials', en: 'Face & facials' } as Localized, href: '#rituale' },
        { label: { de: 'Fußpflege', en: 'Foot care' } as Localized, href: '#rituale' },
        { label: { de: 'Massage & Wärme', en: 'Massage & warmth' } as Localized, href: '#rituale' },
      ],
    },
    {
      title: { de: 'Studio', en: 'Studio' } as Localized,
      links: [
        { label: { de: 'Über uns', en: 'About' } as Localized, href: '#studio' },
        { label: { de: 'Schenken', en: 'Gift cards' } as Localized, href: '#schenken' },
        { label: { de: 'Stimmen', en: 'Reviews' } as Localized, href: '#stimmen' },
        { label: { de: 'Kontakt', en: 'Contact' } as Localized, href: '#kontakt' },
      ],
    },
  ],
  legalLinks: [
    { label: { de: 'Impressum', en: 'Imprint' } as Localized, href: '#impressum' },
    { label: { de: 'Datenschutz', en: 'Privacy' } as Localized, href: '#datenschutz' },
  ],
};
