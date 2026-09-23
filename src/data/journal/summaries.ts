import type { JournalSummary } from "./types";

/**
 * Every published article in reading order, newest editorial guide first.
 *
 * Article bodies live in ./bodies.ts so that listing surfaces — the homepage
 * preview and the journal hub — do not have to download them.
 */
export const JOURNAL_SUMMARIES: JournalSummary[] = [
  {
    slug: "head-spa-vorbereitung-haare",
    category: { de: "Head Spa", en: "Head spa" },
    title: {
      de: "Head Spa und deine Haare: Vorbereitung, Ablauf und der Tag danach",
      en: "Head spa and your hair: preparation, ritual and the day after",
    },
    intro: {
      de: "Werden die Haare nass? Was ist mit Extensions, frischer Färbung und Styling? Die praktischen Antworten, bevor du buchst.",
      en: "Does hair get wet? What about extensions, fresh colour and styling? The practical answers before you book.",
    },
    photo: "head-spa-water-rinse",
    related: "head-spa",
  },
  {
    slug: "wellnessmassage-oder-medizinische-massage",
    category: { de: "Massage", en: "Massage" },
    title: {
      de: "Wellnessmassage oder medizinische Massage? Der Unterschied, klar erklärt",
      en: "Wellness massage or medical massage? The difference, clearly explained",
    },
    intro: {
      de: "Wann eine Wellnessmassage die richtige Wahl ist — und wann der erste Termin in eine ärztliche oder physiotherapeutische Praxis gehört.",
      en: "When a wellness massage is the right choice — and when the first appointment belongs with a doctor or physiotherapist.",
    },
    photo: "body-massage-shoulders",
    related: "anti-stress-gua-sha",
  },
  {
    slug: "welche-gesichtsbehandlung-passt",
    category: { de: "Gesicht", en: "Face" },
    title: {
      de: "Aqua Facial, Sleep & Glow oder Gua Sha? So findest du die passende Gesichtsbehandlung",
      en: "Aqua Facial, Sleep & Glow or gua sha? Choosing the right facial",
    },
    intro: {
      de: "Drei Gesichtsbehandlungen, drei völlig unterschiedliche Erlebnisse. Der praktische Vergleich, bevor du buchst.",
      en: "Three facial treatments, three completely different experiences. A practical comparison before you book.",
    },
    photo: "facial-massage-warm-light",
    related: "aqua-facial",
  },
  {
    slug: "erste-wellnessbehandlung-was-erwarten",
    category: { de: "Studio", en: "Studio" },
    title: {
      de: "Zum ersten Mal in einem Wellnessstudio: was dich erwartet",
      en: "Your first time in a wellness studio: what to expect",
    },
    intro: {
      de: "Umkleiden, Abdeckung, Trinkgeld, Reden oder Schweigen — die unausgesprochenen Fragen, ehrlich beantwortet.",
      en: "Changing, draping, tipping, talking or staying quiet — the unspoken questions, honestly answered.",
    },
    photo: "studio-candlelight-mood",
    related: "anti-stress-gua-sha",
  },
  {
    slug: "dein-erster-head-spa-besuch",
    category: { de: "Head Spa", en: "Head spa" },
    title: {
      de: "Dein erster Head-Spa-Besuch",
      en: "Your first head spa visit",
    },
    intro: {
      de: "Was dich bei einem Japanese Head Spa in Ahrensburg erwartet und wie du deine Auszeit planst.",
      en: "What to expect from a Japanese head spa in Ahrensburg and how to plan your time with us.",
    },
    photo: "head-spa-forehead-hold",
    related: "head-spa",
  },
  {
    slug: "welches-ritual-passt-zu-dir",
    category: { de: "Rituale", en: "Rituals" },
    title: {
      de: "Eine Pause, die zu dir passt",
      en: "A pause that feels like you",
    },
    intro: {
      de: "Kopf, Gesicht, Körper oder Füße: Ein kleiner Wegweiser durch unsere Wellnessanwendungen.",
      en: "Head, face, body or feet: a guide to finding your next wellness ritual.",
    },
    photo: "skin-texture-profile",
    related: "anti-stress-gua-sha",
  },
  {
    slug: "auszeit-in-ahrensburg",
    category: { de: "Unser Ort", en: "Our place" },
    title: {
      de: "Eine Auszeit in Ahrensburg",
      en: "A little time in Ahrensburg",
    },
    intro: {
      de: "Ein ruhiger Gegenpol zum Alltag, in der Manhagener Allee und in der Nähe von Hamburg.",
      en: "A quiet counterpoint to everyday life on Manhagener Allee, near Hamburg.",
    },
    photo: "studio-room-atmosphere",
    related: "head-spa",
  },
  {
    slug: "gua-sha-ritual-gesicht",
    category: { de: "Gesichtspflege", en: "Facial care" },
    title: {
      de: "Gua Sha: Berührung mit Ruhe",
      en: "Gua sha: care at a slower pace",
    },
    intro: {
      de: "Was hinter dem stillen Gesichtspflege-Ritual steckt und wie wir Druck, Tempo und Ablauf auf dich abstimmen.",
      en: "What shapes this quiet facial ritual and how we adapt its pressure, pace and flow to you.",
    },
    photo: "facial-stone-detail",
    related: "gua-sha",
  },
  {
    slug: "wellness-termin-richtig-planen",
    category: { de: "Vor deinem Besuch", en: "Before your visit" },
    title: {
      de: "So wird aus einem Termin eine echte Pause",
      en: "How an appointment becomes a real pause",
    },
    intro: {
      de: "Ein kleiner Leitfaden für Anreise, Wünsche und die Zeit nach deinem Wellness-Ritual in Ahrensburg.",
      en: "A simple guide to arrival, preferences and the time after your wellness ritual in Ahrensburg.",
    },
    photo: "resting-hand-cheek",
    related: "anti-stress-gua-sha",
  },
];

export function journalSummary(slug: string) {
  return JOURNAL_SUMMARIES.find((item) => item.slug === slug);
}
