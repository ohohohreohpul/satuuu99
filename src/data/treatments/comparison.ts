import type { Localized } from "../../lib/i18n";

/** Whether water or heat plays a part in the ritual. */
export type WaterHeat = "water" | "heat" | "warmth" | "none";

export interface TreatmentFacts {
  id: string;
  /** Body area the ritual concentrates on. */
  focus: Localized;
  /** How the touch itself feels, in plain words. */
  touch: Localized;
  waterHeat: WaterHeat;
  /** What the visitor takes off, answered honestly and up front. */
  clothing: Localized;
  /** Position during the ritual. */
  position: Localized;
  /** One line on who tends to book it. */
  bestFor: Localized;
}

export const WATER_HEAT_LABEL: Record<WaterHeat, Localized> = {
  water: { de: "Warmes Wasser", en: "Warm water" },
  heat: { de: "Feuchte Wärme", en: "Moist heat" },
  warmth: { de: "Warmes Öl", en: "Warm oil" },
  none: { de: "Ohne Wasser & Wärme", en: "No water or heat" },
};

/**
 * The comparison grid on /behandlungen. Every column answers a question a
 * visitor asks before booking, so the page supports a decision rather than
 * listing names.
 */
export const TREATMENT_FACTS: TreatmentFacts[] = [
  {
    id: "head-spa",
    focus: { de: "Kopfhaut, Haar, Nacken", en: "Scalp, hair, neck" },
    touch: { de: "Sanft bis mittel", en: "Gentle to medium" },
    waterHeat: "water",
    clothing: { de: "Bleibt an", en: "Stays on" },
    position: { de: "Rückenlage", en: "Lying on your back" },
    bestFor: {
      de: "Wenn der Kopf nicht stillsteht",
      en: "When your mind will not settle",
    },
  },
  {
    id: "aqua-facial",
    focus: { de: "Gesicht, Hals, Dekolleté", en: "Face, neck, décolletage" },
    touch: { de: "Gerät plus Massage", en: "Device plus massage" },
    waterHeat: "water",
    clothing: { de: "Oberteil gelockert", en: "Top loosened" },
    position: { de: "Rückenlage", en: "Lying on your back" },
    bestFor: {
      de: "Wenn die Haut eine Reinigung braucht",
      en: "When your skin needs a cleanse",
    },
  },
  {
    id: "sleep-glow",
    focus: { de: "Gesicht, Hals, Nacken", en: "Face, throat, nape" },
    touch: { de: "Sehr sanft", en: "Very gentle" },
    waterHeat: "none",
    clothing: { de: "Oberteil gelockert", en: "Top loosened" },
    position: { de: "Rückenlage", en: "Lying on your back" },
    bestFor: {
      de: "Wenn du einfach nur schlafen willst",
      en: "When you simply want to sleep",
    },
  },
  {
    id: "gua-sha",
    focus: { de: "Gesicht, Kiefer, Hals", en: "Face, jaw, throat" },
    touch: { de: "Langsam, mit Stein", en: "Slow, with a stone" },
    waterHeat: "none",
    clothing: { de: "Oberteil gelockert", en: "Top loosened" },
    position: { de: "Rückenlage", en: "Lying on your back" },
    bestFor: {
      de: "Bei angespanntem Kiefer",
      en: "For a held, tense jaw",
    },
  },
  {
    id: "foot-care",
    focus: { de: "Haut und Nägel", en: "Skin and nails" },
    touch: { de: "Pflegend, ruhig", en: "Grooming, calm" },
    waterHeat: "water",
    clothing: { de: "Schuhe und Socken", en: "Shoes and socks" },
    position: { de: "Relaxsessel", en: "Reclining chair" },
    bestFor: {
      de: "Vor Sommer, Urlaub oder Anlass",
      en: "Before summer, a holiday or an event",
    },
  },
  {
    id: "foot-massage",
    focus: { de: "Füße und Unterschenkel", en: "Feet and lower legs" },
    touch: { de: "Sanft bis kräftig", en: "Gentle to firm" },
    waterHeat: "warmth",
    clothing: { de: "Schuhe und Socken", en: "Shoes and socks" },
    position: { de: "Relaxsessel", en: "Reclining chair" },
    bestFor: {
      de: "Bei schweren Beinen am Abend",
      en: "For heavy legs in the evening",
    },
  },
  {
    id: "anti-stress-gua-sha",
    focus: {
      de: "Kopf, Nacken, Schultern, Rücken",
      en: "Head, neck, shoulders, back",
    },
    touch: { de: "Rhythmisch, mit Stein", en: "Rhythmic, with a stone" },
    waterHeat: "warmth",
    clothing: { de: "Oberkörper frei", en: "Upper body uncovered" },
    position: { de: "Massageliege", en: "Massage table" },
    bestFor: {
      de: "Nach langen Tagen am Schreibtisch",
      en: "After long days at the desk",
    },
  },
  {
    id: "bellabambi",
    focus: {
      de: "Rücken, Faszien, Beine, Gesicht",
      en: "Back, fascia, legs, face",
    },
    touch: { de: "Mit Gerät, intensiv", en: "Device-led, intense" },
    waterHeat: "none",
    clothing: { de: "Unterwäsche bleibt an", en: "Underwear stays on" },
    position: { de: "Massageliege", en: "Massage table" },
    bestFor: {
      de: "Wenn sich der Körper fest anfühlt",
      en: "When your body feels stiff",
    },
  },
  {
    id: "cupping-massage",
    focus: { de: "Rücken, Schultern, Beine", en: "Back, shoulders, legs" },
    touch: { de: "Ziehend, intensiver", en: "Drawing, more intense" },
    waterHeat: "warmth",
    clothing: { de: "Unterwäsche bleibt an", en: "Underwear stays on" },
    position: { de: "Massageliege", en: "Massage table" },
    bestFor: {
      de: "Wenn klassisch dir zu bekannt ist",
      en: "When classic feels too familiar",
    },
  },
  {
    id: "candle",
    focus: { de: "Rücken und Körper", en: "Back and body" },
    touch: { de: "Gleichmäßig, weich", en: "Even, soft" },
    waterHeat: "warmth",
    clothing: { de: "Unterwäsche bleibt an", en: "Underwear stays on" },
    position: { de: "Massageliege", en: "Massage table" },
    bestFor: {
      de: "Wenn Wärme das Wichtigste ist",
      en: "When warmth matters most",
    },
  },
  {
    id: "steam",
    focus: { de: "Rücken und Körper", en: "Back and body" },
    touch: { de: "Ruhig, ausstreichend", en: "Calm, sweeping" },
    waterHeat: "heat",
    clothing: { de: "Unterwäsche bleibt an", en: "Underwear stays on" },
    position: { de: "Massageliege", en: "Massage table" },
    bestFor: {
      de: "Für Saunagänger im Winter",
      en: "For sauna-goers in winter",
    },
  },
];

export function treatmentFacts(id: string) {
  return TREATMENT_FACTS.find((item) => item.id === id);
}
