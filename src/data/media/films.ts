import type { Localized } from "../../lib/i18n";

export interface FilmAsset {
  /** Seconds of silent footage; loops seamlessly enough for ambient use. */
  duration: number;
  alt: Localized;
}

export const FILM_DIR = "/assets/film";

/**
 * Short, silent ambient loops derived from the supplied footage. They are
 * decorative: every section that uses one also carries its meaning in text.
 */
export const FILMS = {
  "head-massage": {
    duration: 7,
    alt: {
      de: "Ruhige Kopf- und Kopfhautmassage im Liegen",
      en: "A calm head and scalp massage, lying down",
    },
  },
  "foot-massage": {
    duration: 7,
    alt: {
      de: "Fußmassage mit ruhigen, gleichmäßigen Griffen",
      en: "Foot massage with calm, even strokes",
    },
  },
  "foot-detail": {
    duration: 7,
    alt: {
      de: "Detail einer sorgfältigen Fußbehandlung",
      en: "Detail of an attentive foot treatment",
    },
  },
  "leg-massage": {
    duration: 7,
    alt: {
      de: "Massage von Unterschenkel und Fuß mit pflegendem Öl",
      en: "Massage of lower leg and foot with nourishing oil",
    },
  },
  "spa-massage": {
    duration: 7,
    alt: {
      de: "Fließende Wellnessmassage mit warmem Öl",
      en: "Flowing wellness massage with warm oil",
    },
  },
} as const satisfies Record<string, FilmAsset>;

export type FilmId = keyof typeof FILMS;
