import type { Localized } from "../../lib/i18n";

export type PhotoAspect = "4:5" | "3:2" | "1:1";

export interface PhotoAsset {
  aspect: PhotoAspect;
  /** Rendition widths present under /assets/photo, ascending. */
  widths: number[];
  /** Describes what the photograph actually shows, for screen readers. */
  alt: Localized;
}

export const PHOTO_DIR = "/assets/photo";
export const PHOTO_ASPECT_RATIO: Record<PhotoAspect, number> = {
  "4:5": 4 / 5,
  "3:2": 3 / 2,
  "1:1": 1,
};

const STANDARD_WIDTHS = [480, 768, 1200, 1600];
const LEAD_WIDTHS = [480, 768, 1200, 1600, 2000];
/** The 2026 generated set was mastered at 1100px; it is not upscaled here. */
const GENERATED_WIDTHS = [480, 768, 1100];

/**
 * Derived renditions of the licensed wellness photography supplied for the
 * relaunch. These are professional stock photographs of comparable rituals,
 * not documentation of the Ahrensburg premises — see docs/ASSET-BRIEF.md for
 * the provenance record and the shots still to be photographed on site.
 */
export const PHOTOS = {
  "head-spa-candlelight": {
    aspect: "4:5",
    widths: LEAD_WIDTHS,
    alt: {
      de: "Gast liegt entspannt zurück, während die Hände der Behandlerin Stirn und Schläfen halten",
      en: "A guest lies back while the practitioner's hands rest on forehead and temples",
    },
  },
  "head-spa-forehead-hold": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Nahaufnahme einer ruhigen Kopfmassage an Stirn und Haaransatz",
      en: "Close view of a calm head massage at the forehead and hairline",
    },
  },
  "head-spa-cradled-head": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Zwei Hände stützen behutsam den Kopf einer liegenden Gästin",
      en: "Two hands gently support the head of a reclining guest",
    },
  },
  "head-spa-scalp-touch": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Behandlerin arbeitet langsam an Kopfhaut und Nacken einer liegenden Gästin",
      en: "A practitioner works slowly across a reclining guest's scalp and neck",
    },
  },
  "facial-massage-warm-light": {
    aspect: "3:2",
    widths: LEAD_WIDTHS,
    alt: {
      de: "Gesichtsmassage in warmem Licht, Hände arbeiten entlang Wange und Kiefer",
      en: "Facial massage in warm light, hands working along cheek and jaw",
    },
  },
  "facial-massage-towel": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Gästin mit Handtuch im Haar erhält eine ruhige Gesichtsmassage",
      en: "A guest with a towel around her hair receives a calm facial massage",
    },
  },
  "facial-gua-sha-pressure": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Langsame, konzentrierte Arbeit an Stirn und Schläfe während einer Gesichtsbehandlung",
      en: "Slow, focused work across forehead and temple during a facial treatment",
    },
  },
  "facial-overhead-view": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Blick von oben auf eine Gesichtsbehandlung mit Handtuch und gedämpftem Licht",
      en: "Overhead view of a facial treatment with towel and soft light",
    },
  },
  "aqua-facial-mist": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Feiner Sprühnebel wird während einer Gesichtsbehandlung aufgetragen",
      en: "A fine mist is applied during a facial treatment",
    },
  },
  "facial-care-application": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Pflegeprodukt wird bei Kerzenlicht sorgfältig auf Gesicht und Hals verteilt",
      en: "Care product applied carefully across face and neck by candlelight",
    },
  },
  "studio-candlelight-mood": {
    aspect: "3:2",
    widths: LEAD_WIDTHS,
    alt: {
      de: "Ruhiger Behandlungsmoment bei Kerzenlicht, Handtuch und weiche Textilien",
      en: "A quiet treatment moment by candlelight, with towel and soft textiles",
    },
  },
  "foot-massage-candlelight": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Fußmassage bei Kerzenlicht, beide Hände stützen den Fuß der Gästin",
      en: "Foot massage by candlelight, both hands supporting the guest's foot",
    },
  },
  "foot-care-towel": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Fuß auf einem gefalteten Handtuch, Hände arbeiten an Ferse und Fußgewölbe",
      en: "A foot resting on a folded towel, hands working at heel and arch",
    },
  },
  "skin-texture-freckles": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Nahaufnahme eines ruhigen Gesichts mit natürlicher Hauttextur und Sommersprossen",
      en: "Close portrait of a calm face with natural skin texture and freckles",
    },
  },
  "skin-texture-profile": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Profil eines entspannten Gesichts mit unretuschierter Haut",
      en: "Profile of a relaxed face with unretouched skin",
    },
  },
  "skin-texture-eye-detail": {
    aspect: "1:1",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Detail von Augenbraue, Wimpern und feiner Hauttextur",
      en: "Detail of brow, lashes and fine skin texture",
    },
  },
  "skin-texture-beard": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Hautdetail an Wange und Bartansatz",
      en: "Skin detail across cheek and beard line",
    },
  },
  "skin-texture-cheek": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Nahaufnahme von Wange, Mund und natürlicher Hautstruktur",
      en: "Close view of cheek, mouth and natural skin structure",
    },
  },
  "resting-hand-cheek": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Ruhendes Gesicht, an die eigene Hand gelehnt, Augen geschlossen",
      en: "A resting face leaning on its own hand, eyes closed",
    },
  },
  "face-eyes-closed": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Nahaufnahme eines Gesichts mit geschlossenen Augen in weichem Licht",
      en: "Close portrait of a face with closed eyes in soft light",
    },
  },
  "face-calm-profile": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Gästin liegt entspannt mit geschlossenen Augen im Behandlungsraum",
      en: "A guest lies relaxed with closed eyes in the treatment room",
    },
  },
  "face-warm-light-portrait": {
    aspect: "3:2",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Gesichtsbehandlung in warmem Abendlicht mit sorgfältiger Handführung",
      en: "Facial treatment in warm evening light with attentive hands",
    },
  },
  "hands-light-study": {
    aspect: "4:5",
    widths: STANDARD_WIDTHS,
    alt: {
      de: "Studie zweier Hände im Streiflicht",
      en: "A study of two hands in raking light",
    },
  },
  "head-spa-water-rinse": {
    aspect: "4:5",
    widths: GENERATED_WIDTHS,
    alt: {
      de: "Warmes Wasser läuft durch das Haar, während Hände die Kopfhaut stützen",
      en: "Warm water runs through the hair while hands support the scalp",
    },
  },
  "facial-stone-detail": {
    aspect: "4:5",
    widths: GENERATED_WIDTHS,
    alt: {
      de: "Glatter Gua-Sha-Stein wird langsam über Wange und Kiefer geführt",
      en: "A smooth gua sha stone guided slowly across cheek and jaw",
    },
  },
  "foot-ritual-detail": {
    aspect: "4:5",
    widths: GENERATED_WIDTHS,
    alt: {
      de: "Ferse einer Gästin, von zwei Händen auf cremefarbenem Leinen gestützt",
      en: "A guest's heel supported by two hands on cream linen",
    },
  },
  "body-massage-shoulders": {
    aspect: "4:5",
    widths: GENERATED_WIDTHS,
    alt: {
      de: "Massage von Schulter und oberem Rücken mit pflegendem Öl und Leinenabdeckung",
      en: "Massage across shoulder and upper back with nourishing oil and linen draping",
    },
  },
  "body-cupping-glasses": {
    aspect: "4:5",
    widths: GENERATED_WIDTHS,
    alt: {
      de: "Schröpfgläser werden über geölte Haut des Rückens bewegt",
      en: "Cupping glasses guided across oiled skin on the back",
    },
  },
  "studio-room-atmosphere": {
    aspect: "3:2",
    widths: GENERATED_WIDTHS,
    alt: {
      de: "Atmosphärenbild eines ruhigen Behandlungsraums mit Leinen und Tageslicht",
      en: "Atmosphere image of a calm treatment room with linen and daylight",
    },
  },
} as const satisfies Record<string, PhotoAsset>;

export type PhotoId = keyof typeof PHOTOS;

export function isPhotoId(value: string): value is PhotoId {
  return value in PHOTOS;
}
