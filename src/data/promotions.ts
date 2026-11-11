import type { Localized } from "../lib/i18n";
import { CONTACT } from "./content";

/**
 * Short seasonal promotions next to the Christmas offer (src/data/offer.ts).
 * Each one shows itself between its dates, in German time, and hides
 * afterwards without a redeploy.
 */
/** Photo for the slide-in card, self-hosted under public/assets/promo. */
export interface PromotionImage {
  /** Path without extension; .webp and .jpg renditions exist. */
  src: string;
  alt: Localized;
  /** Provenance: Unsplash License, free for commercial use. */
  credit: string;
}

export interface Promotion {
  id: string;
  startsAt: Date;
  endsAt: Date;
  eyebrow: Localized;
  title: Localized;
  copy: Localized;
  /** Fine print: where or how the promotion applies. */
  note: Localized;
  /** One line for the scrolling top bar. */
  ticker: Localized;
  image: PromotionImage;
  cta: { label: Localized; href: string; external?: boolean };
}

export const BLACK_FRIDAY: Promotion = {
  id: "black-friday",
  startsAt: new Date("2026-11-11T00:00:00+01:00"),
  endsAt: new Date("2026-11-30T23:59:59+01:00"),
  eyebrow: {
    de: "Black Friday · 11.–30. November",
    en: "Black Friday · 11–30 November",
  },
  title: {
    de: "Zu jedem Gutschein ein Geschenk.",
    en: "A gift with every gift card.",
  },
  copy: {
    de: "Vom 11. bis 30. November legen wir jedem Gutschein, den Sie bei uns im Studio kaufen, ein Geschenk dazu. Ob für einen lieben Menschen oder für Ihre eigene Auszeit: Sichern Sie sich jetzt schon die schönste Zeit des Jahres – und schenken Sie doppelt Freude.",
    en: "From 11 to 30 November, every gift card you buy at our studio comes with a gift from us. Whether for someone you love or for your own time out: secure the nicest time of the year now – and give twice the joy.",
  },
  note: {
    de: "Gilt beim Gutscheinkauf vor Ort in unserem Studio.",
    en: "Applies to gift cards bought in person at our studio.",
  },
  image: {
    src: "/assets/promo/promo-gift-card",
    alt: {
      de: "Gutschein-Umschlag mit kupferfarbenem Wachssiegel auf dunklem Holz",
      en: "Gift card envelope with a copper wax seal on dark wood",
    },
    credit: "mk. s., Unsplash (https://unsplash.com/photos/KGDVTn9lYDE)",
  },
  ticker: {
    de: "Black Friday bis 30.11.: Zu jedem Gutschein ein Geschenk – beim Kauf im Studio",
    en: "Black Friday until 30 Nov: a gift with every gift card – when bought at the studio",
  },
  cta: {
    label: { de: "Anfahrt & Öffnungszeiten", en: "Directions & opening hours" },
    href: "/kontakt",
  },
};

export const WINTER_HOT_STONE: Promotion = {
  id: "winter-hot-stone",
  startsAt: new Date("2026-11-11T00:00:00+01:00"),
  // Runs until New Year, as the studio decided.
  endsAt: new Date("2026-12-31T23:59:59+01:00"),
  eyebrow: { de: "Winterzeit", en: "Winter season" },
  title: {
    de: "Hot Stone zu jeder Massage – ohne Aufpreis.",
    en: "Hot stone with every massage – at no extra cost.",
  },
  copy: {
    de: "Wenn es draußen kalt und grau wird, schenken wir Ihnen extra Wärme: In der Winterzeit ergänzen wir jede Massage mit warmen Hot Stones. Die erwärmten Steine gleiten über Rücken und Schultern, ihre Wärme dringt angenehm tief und lässt Sie spürbar zur Ruhe kommen – die schönste Pause von Kälte und Alltag.",
    en: "When it turns cold and grey outside, we give you extra warmth: during the winter season we add warm hot stones to every massage. The heated stones glide over back and shoulders, their warmth reaches pleasantly deep and lets you settle noticeably – the nicest break from the cold and the everyday.",
  },
  note: {
    de: "Bei jeder Massage in der Winterzeit inklusive.",
    en: "Included with every massage during the winter season.",
  },
  image: {
    src: "/assets/promo/promo-hot-stone",
    alt: {
      de: "Warme Hot Stones auf dem Rücken bei einer Massage im Kerzenlicht",
      en: "Warm hot stones on a back during a candlelit massage",
    },
    credit: "Taylor Heery, Unsplash (https://unsplash.com/photos/_TyrA1RUaiI)",
  },
  ticker: {
    de: "Winterzeit: Hot Stone zu jeder Massage – ohne Aufpreis",
    en: "Winter season: hot stone with every massage – at no extra cost",
  },
  cta: {
    label: { de: "Massage buchen", en: "Book a massage" },
    href: CONTACT.booking,
    external: true,
  },
};

export const PROMOTIONS: Promotion[] = [BLACK_FRIDAY, WINTER_HOT_STONE];

/** Massages that come with hot stones while the winter promotion runs. */
export const HOT_STONE_TREATMENT_IDS: ReadonlySet<string> = new Set([
  "anti-stress-gua-sha",
  "cupping-massage",
  "candle",
  "steam",
  "foot-massage",
]);

export function isPromotionActive(
  promotion: Promotion,
  now: Date = new Date(),
): boolean {
  return now >= promotion.startsAt && now <= promotion.endsAt;
}

export function activePromotions(now: Date = new Date()): Promotion[] {
  return PROMOTIONS.filter((promotion) => isPromotionActive(promotion, now));
}

/** Whether a treatment currently includes hot stones. */
export function hasWinterHotStone(
  treatmentId: string,
  now: Date = new Date(),
): boolean {
  return (
    HOT_STONE_TREATMENT_IDS.has(treatmentId) &&
    isPromotionActive(WINTER_HOT_STONE, now)
  );
}
