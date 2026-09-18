import type { Localized } from "../lib/i18n";

export interface DecisionRoute {
  /** The visitor's own starting point, phrased as they would say it. */
  situation: Localized;
  treatmentId: string;
  why: Localized;
}

/**
 * A short "if this, then that" guide for visitors who arrive knowing how
 * they feel rather than which treatment they want.
 */
export const DECISION_ROUTES: DecisionRoute[] = [
  {
    situation: {
      de: "Ich komme abends nicht runter.",
      en: "I cannot wind down in the evening.",
    },
    treatmentId: "head-spa",
    why: {
      de: "Kopf, Nacken und warmes Wasser — die Anwendung, bei der du am wenigsten selbst tun musst.",
      en: "Head, neck and warm water — the treatment that asks the least of you.",
    },
  },
  {
    situation: {
      de: "Meine Haut fühlt sich stumpf an.",
      en: "My skin feels dull.",
    },
    treatmentId: "aqua-facial",
    why: {
      de: "Wasserbasierte Reinigung mit anschließender Feuchtigkeitspflege.",
      en: "Water-based cleansing followed by hydrating care.",
    },
  },
  {
    situation: {
      de: "Ich beiße tagsüber die Zähne zusammen.",
      en: "I clench my teeth during the day.",
    },
    treatmentId: "gua-sha",
    why: {
      de: "Langsame, konzentrierte Arbeit an Kiefer, Wangen und Hals.",
      en: "Slow, focused work across jaw, cheeks and throat.",
    },
  },
  {
    situation: {
      de: "Ich bin einfach nur erschöpft.",
      en: "I am simply exhausted.",
    },
    treatmentId: "sleep-glow",
    why: {
      de: "Gedämpftes Licht, kein Gerät, und Einschlafen ist ausdrücklich erlaubt.",
      en: "Low light, no devices, and falling asleep is expressly allowed.",
    },
  },
  {
    situation: {
      de: "Ich stehe den ganzen Tag.",
      en: "I am on my feet all day.",
    },
    treatmentId: "foot-massage",
    why: {
      de: "Füße und Unterschenkel im Relaxsessel, ohne dass du dich ausziehen musst.",
      en: "Feet and lower legs in a reclining chair, with no need to undress.",
    },
  },
  {
    situation: {
      de: "Mein Rücken und meine Schultern sind hart.",
      en: "My back and shoulders feel hard.",
    },
    treatmentId: "spa-massage",
    why: {
      de: "Fokus und Druck legen wir gemeinsam fest — die anpassbarste Anwendung.",
      en: "We agree focus and pressure together — our most adaptable treatment.",
    },
  },
  {
    situation: {
      de: "Normale Massagen bringen mir nichts mehr.",
      en: "Normal massages do nothing for me any more.",
    },
    treatmentId: "cupping-massage",
    why: {
      de: "Unterdruck statt Druck: ein deutlich anderes, oft intensiveres Gefühl.",
      en: "Suction instead of pressure: a markedly different, often more intense feeling.",
    },
  },
  {
    situation: {
      de: "Ich friere ständig.",
      en: "I am always cold.",
    },
    treatmentId: "candle",
    why: {
      de: "Warmes Öl aus der Massagekerze, gleichmäßig und ohne kräftige Griffe.",
      en: "Warm oil from a massage candle, even and without firm strokes.",
    },
  },
  {
    situation: {
      de: "Ich möchte gepflegte Füße für den Sommer.",
      en: "I want cared-for feet for summer.",
    },
    treatmentId: "foot-care",
    why: {
      de: "Fußbad, Nägel, trockene Fersen — Pflege statt Massage.",
      en: "Foot bath, nails, dry heels — grooming rather than massage.",
    },
  },
  {
    situation: {
      de: "Ich verschenke etwas und kenne die Vorlieben nicht.",
      en: "I am giving a gift and do not know their preferences.",
    },
    treatmentId: "spa-massage",
    why: {
      de: "Die Spa-Massage ist die sicherste Wahl, weil sie sich vor Ort anpassen lässt.",
      en: "Spa massage is the safest choice, because it can be adapted on the day.",
    },
  },
];
