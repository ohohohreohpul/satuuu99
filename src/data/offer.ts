import type { Localized } from "../lib/i18n";

/**
 * Christmas gift-card offer celebrating the studio's rebrand, as supplied by
 * the studio (flyers "Exklusive Gutscheinpakete" and "Exklusive
 * Gutscheinsets"). Valid while stocks last within the window below.
 */
export const OFFER_PATH = "/angebot";

/** First and last day of the offer, in German time. */
export const OFFER_STARTS_AT = new Date("2026-10-07T00:00:00+02:00");
export const OFFER_ENDS_AT = new Date("2026-12-23T23:59:59+01:00");

export const OFFER_PERIOD: Localized = {
  de: "07.10.2026 – 23.12.2026",
  en: "7 October – 23 December 2026",
};

/** Regular price of one 60-minute gift card, used to explain the 700 € pack. */
export const SINGLE_VOUCHER_PRICE = 70;

export type OfferStatus = "upcoming" | "active" | "ended";

export function offerStatus(now: Date = new Date()): OfferStatus {
  if (now < OFFER_STARTS_AT) return "upcoming";
  if (now > OFFER_ENDS_AT) return "ended";
  return "active";
}

/** Teasers and menu links announce the offer until it ends. */
export function isOfferPromoted(now: Date = new Date()): boolean {
  return offerStatus(now) !== "ended";
}

export interface PackageItem {
  quantity: number;
  name: Localized;
  duration: Localized;
  /** Closest treatment page, so visitors can read what the gift contains. */
  treatmentId?: string;
}

export interface PackageChoice {
  count: number;
  minutes: number;
  options: { name: Localized; treatmentId: string }[];
  note: Localized;
}

export interface PackageExtra {
  kind: "handbag" | "gift";
  text: Localized;
}

export interface VoucherPackage {
  id: string;
  family: "christmas" | "set";
  title: Localized;
  /** Set name shown above the price, e.g. "Premium". */
  label?: Localized;
  price: number;
  regularPrice: number;
  items: PackageItem[];
  choice?: PackageChoice;
  extras: PackageExtra[];
}

const HEAD_SPA_DELUXE: Omit<PackageItem, "quantity"> = {
  name: { de: "Head Spa Deluxe", en: "Head Spa Deluxe" },
  duration: { de: "ca. 90 Minuten", en: "approx. 90 minutes" },
  treatmentId: "head-spa",
};

const ANTI_STRESS: Omit<PackageItem, "quantity"> = {
  name: {
    de: "Anti-Stress Gua Sha Massage",
    en: "Anti-stress gua sha massage",
  },
  duration: { de: "60 Minuten", en: "60 minutes" },
  treatmentId: "anti-stress-gua-sha",
};

const SURPRISE_GIFT: PackageExtra = {
  kind: "gift",
  text: {
    de: "Inklusive Überraschungsgeschenk",
    en: "Including a surprise gift",
  },
};

const HANDBAG: PackageExtra = {
  kind: "handbag",
  text: {
    de: "Dazu suchen Sie sich eine Handtasche aus unserem Sortiment aus.",
    en: "You also choose a handbag from our range.",
  },
};

export const VOUCHER_PACKAGES: VoucherPackage[] = [
  {
    id: "weihnachtspaket-500",
    family: "christmas",
    title: {
      de: "Weihnachts-Gutscheinpaket",
      en: "Christmas gift-card pack",
    },
    price: 500,
    regularPrice: 558,
    items: [
      { quantity: 2, ...HEAD_SPA_DELUXE },
      {
        quantity: 2,
        ...ANTI_STRESS,
        duration: { de: "je 60 Minuten", en: "60 minutes each" },
      },
      {
        quantity: 1,
        name: { de: "Aqua Facial", en: "Aqua Facial" },
        duration: { de: "ca. 60 Minuten", en: "approx. 60 minutes" },
        treatmentId: "aqua-facial",
      },
      {
        quantity: 1,
        name: {
          de: "Sleep & Glow mit Goldtherapie",
          en: "Sleep & Glow with gold therapy",
        },
        duration: { de: "60 Minuten", en: "60 minutes" },
        treatmentId: "sleep-glow",
      },
      {
        quantity: 1,
        name: {
          de: "Sleep & Glow mit Lavendel",
          en: "Sleep & Glow with lavender",
        },
        duration: { de: "60 Minuten", en: "60 minutes" },
        treatmentId: "sleep-glow",
      },
    ],
    extras: [HANDBAG],
  },
  {
    id: "weihnachtspaket-700",
    family: "christmas",
    title: {
      de: "Weihnachts-Gutscheinpaket",
      en: "Christmas gift-card pack",
    },
    price: 700,
    regularPrice: 770,
    items: [],
    choice: {
      count: 11,
      minutes: 60,
      options: [
        {
          name: {
            de: "Anti-Stress Gua Sha Massage",
            en: "Anti-stress gua sha massage",
          },
          treatmentId: "anti-stress-gua-sha",
        },
        {
          name: { de: "Fußmassage", en: "Foot massage" },
          treatmentId: "foot-massage",
        },
        {
          name: { de: "Premium Fußpflege", en: "Premium foot care" },
          treatmentId: "foot-care",
        },
        {
          name: { de: "Bellabambi", en: "Bellabambi" },
          treatmentId: "bellabambi",
        },
      ],
      note: {
        de: "Für jeden Gutschein wählen Sie eine dieser vier Anwendungen — entscheiden müssen Sie sich nicht beim Kauf, sondern erst vor dem Termin. Andere Anwendungen sind gegen Aufpreis ebenfalls möglich.",
        en: "Each card is for one of these four treatments — you do not decide when you buy, only before the appointment. Other treatments are also possible for a surcharge.",
      },
    },
    extras: [
      HANDBAG,
      {
        kind: "gift",
        text: {
          de: "Plus ein großes Geschenkset mit vielen schönen Überraschungen, z. B. handgefertigten veganen Seifen.",
          en: "Plus a large gift set with lovely surprises, such as handmade vegan soaps.",
        },
      },
    ],
  },
  {
    id: "gutscheinset-premium",
    family: "set",
    title: { de: "Gutscheinset", en: "Gift-card set" },
    label: { de: "Premium", en: "Premium" },
    price: 250,
    regularPrice: 269,
    items: [
      { quantity: 1, ...HEAD_SPA_DELUXE },
      {
        quantity: 1,
        ...ANTI_STRESS,
        duration: { de: "ca. 60 Minuten", en: "approx. 60 minutes" },
      },
      {
        quantity: 2,
        name: { de: "Pure Relax Kopfmassage", en: "Pure Relax head massage" },
        duration: { de: "je ca. 45 Minuten", en: "approx. 45 minutes each" },
        treatmentId: "head-spa",
      },
    ],
    extras: [SURPRISE_GIFT],
  },
  {
    id: "gutscheinset-basis",
    family: "set",
    title: { de: "Gutscheinset", en: "Gift-card set" },
    label: { de: "Basis", en: "Basic" },
    price: 150,
    regularPrice: 169,
    items: [
      { quantity: 1, ...HEAD_SPA_DELUXE },
      {
        quantity: 1,
        ...ANTI_STRESS,
        duration: { de: "ca. 60 Minuten", en: "approx. 60 minutes" },
      },
    ],
    extras: [SURPRISE_GIFT],
  },
];

export function packageSaving(item: VoucherPackage): number {
  return item.regularPrice - item.price;
}

/** Display name used in enquiries, e.g. "Weihnachts-Gutscheinpaket 500 €". */
export function packageName(item: VoucherPackage, lang: "de" | "en"): string {
  const label = item.label ? ` ${item.label[lang]}` : "";
  return `${item.title[lang]}${label} ${item.price} €`;
}

/** Bonus that comes with every gift-card purchase during the offer. */
export const PURCHASE_BONUS: Localized = {
  de: "Zu jedem Gutscheinkauf ab 70 € oder ab 60 Minuten erhalten Sie eine kleine Überraschung von uns dazu.",
  en: "Every gift-card purchase of €70 or more, or 60 minutes or more, comes with a small surprise from us.",
};
