import type { Localized } from "../lib/i18n";

// Business destinations checked against satuuu99.de on 10 September 2026.
export const CONTACT = {
  brand: "satuuu99",
  addressLines: ["Manhagener Allee 45", "22926 Ahrensburg"],
  email: "info@satuuu99.de",
  booking: "https://satuuu99.de/kalender/",
  prices: "https://satuuu99.de/preisliste-ab-01-03-2026/",
  imprint: "https://satuuu99.de/impressum/",
  privacy: "https://satuuu99.de/datenschutz/",
  maps: "https://www.google.com/maps/search/?api=1&query=Manhagener+Allee+45+22926+Ahrensburg",
} as const;

export const NAV = [
  { label: { de: "Behandlungen", en: "Treatments" }, href: "/behandlungen" },
  { label: { de: "Das Studio", en: "The studio" }, href: "/studio" },
  { label: { de: "Gutscheine", en: "Gift cards" }, href: "/gutscheine" },
  { label: { de: "Preise", en: "Prices" }, href: "/preise" },
];

export interface Treatment {
  id: string;
  name: Localized;
  description: Localized;
  /** Short descriptive characteristics shown as a list in the expanded detail. */
  highlights?: Localized[];
  /** Marks a recently added programme so it can be flagged in the interface. */
  isNew?: boolean;
}
export interface FocusGroup {
  id: string;
  word: Localized;
  title: Localized;
  blurb: Localized;
  treatments: Treatment[];
}

export const FOCUS_GROUPS: FocusGroup[] = [
  {
    id: "head",
    word: { de: "Kopf", en: "Head" },
    title: {
      de: "Einmal den Kopf ausschalten.",
      en: "Let your mind go quiet.",
    },
    blurb: {
      de: "Warmes Wasser, behutsame Berührung und Zeit für dich. Entdecke unser Japanese Head Spa.",
      en: "Warm water, gentle touch and time to yourself. Discover our Japanese head spa.",
    },
    treatments: [
      {
        id: "head-spa",
        name: { de: "Japanese Head Spa", en: "Japanese Head Spa" },
        description: {
          de: "Ein Pflegeritual für Kopfhaut und Haar, begleitet von einer entspannenden Kopf- und Nackenmassage. Du liegst bequem, warmes Wasser läuft durch dein Haar, und wir nehmen uns Zeit. Frag uns nach den aktuell verfügbaren Anwendungen.",
          en: "A scalp and hair care ritual with a relaxing head and neck massage. You lie back comfortably, warm water runs through your hair, and we take our time. Ask us about the treatments currently available.",
        },
        highlights: [
          {
            de: "Reinigung und Pflege für Kopfhaut und Haar",
            en: "Cleansing and care for scalp and hair",
          },
          {
            de: "Warmes Wasser und sanfte Kopfhautmassage",
            en: "Warm water and a gentle scalp massage",
          },
          {
            de: "Entspannende Kopf- und Nackenmassage",
            en: "Relaxing head and neck massage",
          },
          {
            de: "Ruhiges Ritual im Liegen",
            en: "A calm ritual, lying down throughout",
          },
        ],
      },
    ],
  },
  {
    id: "face",
    word: { de: "Gesicht", en: "Face" },
    title: {
      de: "Pflege, die sich gut anfühlt.",
      en: "Care that feels as good as it looks.",
    },
    blurb: {
      de: "Sanfte Reinigung und wohltuende Massage für Gesicht und Dekolleté. Dein Moment zum Zurücklehnen.",
      en: "Gentle cleansing and soothing massage for your face and décolletage. Your moment to lean back.",
    },
    treatments: [
      {
        id: "aqua-facial",
        name: { de: "Aqua Facial", en: "Aqua Facial" },
        description: {
          de: "Gesichtspflege mit wasserbasierter Reinigung und Feuchtigkeit. Wir besprechen vorab, welche Pflege zu deiner Haut passt.",
          en: "Facial care with water-based cleansing and hydration. We discuss the right care for your skin before your treatment.",
        },
        highlights: [
          {
            de: "Wasserbasierte, sanfte Reinigung",
            en: "Gentle, water-based cleansing",
          },
          {
            de: "Feuchtigkeitspflege für Gesicht und Dekolleté",
            en: "Hydrating care for face and décolletage",
          },
          {
            de: "Vorab abgestimmt auf deine Haut",
            en: "Matched to your skin beforehand",
          },
        ],
      },
      {
        id: "sleep-glow",
        name: { de: "Sleep & Glow", en: "Sleep & Glow" },
        description: {
          de: "Ein ruhiges Gesichtspflege-Ritual mit entspannenden Massageelementen. Zeit, die Augen zu schließen und dich verwöhnen zu lassen.",
          en: "A restful facial ritual with relaxing massage. Time to close your eyes and enjoy being cared for.",
        },
        highlights: [
          {
            de: "Ruhiges Pflegeritual in gedämpftem Licht",
            en: "A quiet care ritual in soft light",
          },
          {
            de: "Entspannende Massageelemente für Gesicht und Nacken",
            en: "Relaxing massage for face and neck",
          },
          {
            de: "Ideal, wenn du einfach abschalten möchtest",
            en: "Ideal when you simply want to switch off",
          },
        ],
      },
      {
        id: "gua-sha",
        name: { de: "Gua Sha", en: "Gua Sha" },
        description: {
          de: "Langsame, sorgfältige Massage mit einem Gua-Sha-Stein. Druck und Ablauf stimmen wir mit dir ab.",
          en: "Slow, attentive massage using a gua sha stone. We tailor the pressure and treatment to you.",
        },
        highlights: [
          {
            de: "Langsame Massage mit einem glatten Gua-Sha-Stein",
            en: "Slow massage with a smooth gua sha stone",
          },
          {
            de: "Sorgfältige Arbeit an Gesicht, Kiefer und Hals",
            en: "Attentive work across face, jaw and neck",
          },
          {
            de: "Druck individuell abgestimmt",
            en: "Pressure adjusted individually",
          },
        ],
      },
    ],
  },
  {
    id: "feet",
    word: { de: "Füße", en: "Feet" },
    title: {
      de: "Eine Pause für deine Füße.",
      en: "A little care, from the ground up.",
    },
    blurb: {
      de: "Sie tragen dich durch den Tag. Gönn deinen Füßen sorgfältige Pflege und eine wohltuende Massage.",
      en: "They carry you through your day. Give your feet attentive care and a soothing massage.",
    },
    treatments: [
      {
        id: "foot-care",
        name: { de: "Wellness-Fußpflege", en: "Wellness foot care" },
        description: {
          de: "Pflege für deine Füße, verbunden mit einem entspannenden Wellnessmoment. Für gepflegte Füße und ein angenehmes Gefühl.",
          en: "Attentive foot care combined with a relaxing wellness moment. For cared-for feet and a comfortable feeling.",
        },
        highlights: [
          {
            de: "Sorgfältige Pflege für Füße und Nägel",
            en: "Attentive care for feet and nails",
          },
          {
            de: "Warmes Fußbad zum Ankommen",
            en: "A warm foot bath to arrive",
          },
          {
            de: "Abschließende Pflege für ein angenehmes Gefühl",
            en: "Finishing care for a comfortable feeling",
          },
        ],
      },
      {
        id: "foot-massage",
        name: { de: "Fußmassage", en: "Foot massage" },
        description: {
          de: "Lehn dich im Relaxsessel zurück. Sanfte bis kräftige Massagegriffe schenken deinen Füßen eine wohlverdiente Pause.",
          en: "Settle into a comfortable reclining chair. Gentle to firm massage gives your feet a well-deserved break.",
        },
        highlights: [
          {
            de: "Im bequemen Relaxsessel",
            en: "In a comfortable reclining chair",
          },
          {
            de: "Von sanft bis kräftig — du bestimmst",
            en: "From gentle to firm — you decide",
          },
          {
            de: "Pflegendes Öl für Füße und Unterschenkel",
            en: "Nourishing oil for feet and lower legs",
          },
        ],
      },
    ],
  },
  {
    id: "body",
    word: { de: "Körper", en: "Body" },
    title: {
      de: "Wärme. Berührung. Durchatmen.",
      en: "Warmth. Touch. A deeper breath.",
    },
    blurb: {
      de: "Wohltuende Wellnessmassagen mit warmem Öl und ruhigen Bewegungen. Du bestimmst, was sich richtig anfühlt.",
      en: "Soothing wellness massage with warm oil and unhurried movements. You tell us what feels right.",
    },
    treatments: [
      {
        id: "cupping-massage",
        name: { de: "Schröpfmassage", en: "Cupping massage" },
        isNew: true,
        description: {
          de: "Im Gegensatz zur klassischen Massage, bei der vor allem mit Druck und streichenden Bewegungen gearbeitet wird, entsteht bei der Schröpfmassage durch die Schröpfgläser ein angenehmer Unterdruck auf der Haut. Dadurch entsteht ein ganz anderes, oft intensiver wahrgenommenes Massagegefühl. Die Schröpfgläser werden über ausgewählte Körperbereiche bewegt und mit klassischen Massagegriffen kombiniert.",
          en: "Unlike a classic massage, which works mainly with pressure and stroking movements, a cupping massage uses cupping glasses to create a pleasant suction on the skin. This produces a very different sensation, one that is often experienced as more intense. The glasses are guided across selected areas of the body and combined with classic massage techniques.",
        },
        highlights: [
          {
            de: "Intensiveres Massagegefühl durch Unterdruck",
            en: "A more intense massage sensation through gentle suction",
          },
          {
            de: "Besondere Alternative zur klassischen Massage",
            en: "A distinctive alternative to classic massage",
          },
          {
            de: "Kombination aus Schröpftechnik und Massagegriffen",
            en: "Cupping technique combined with classic massage",
          },
          {
            de: "Individuell an dein persönliches Empfinden anpassbar",
            en: "Adapted individually to how it feels for you",
          },
          {
            de: "Ideal als intensive Wellness-Auszeit",
            en: "Ideal as an intensive wellness break",
          },
          {
            de: "Kann als besonders lockernd und wohltuend empfunden werden",
            en: "Can feel especially releasing and soothing",
          },
        ],
      },
      {
        id: "spa-massage",
        name: { de: "Spa-Massage", en: "Spa massage" },
        description: {
          de: "Eine Wellnessmassage mit fließenden Streichungen und pflegendem Öl. Deinen gewünschten Fokus besprechen wir gemeinsam.",
          en: "A wellness massage with flowing strokes and nourishing oil. We discuss your preferred focus together.",
        },
        highlights: [
          {
            de: "Fließende, ruhige Massagegriffe",
            en: "Flowing, unhurried massage strokes",
          },
          {
            de: "Warmes, pflegendes Massageöl",
            en: "Warm, nourishing massage oil",
          },
          {
            de: "Fokus und Druck gemeinsam abgestimmt",
            en: "Focus and pressure agreed together",
          },
        ],
      },
      {
        id: "candle",
        name: { de: "Kerzenmassage", en: "Candle massage" },
        description: {
          de: "Angenehm warmes Massagekerzenöl und langsame Bewegungen. Eine wohltuende Verbindung aus Wärme und Berührung.",
          en: "Comfortably warm massage candle oil and slow movements. A soothing combination of warmth and touch.",
        },
        highlights: [
          {
            de: "Angenehm warmes Öl aus der Massagekerze",
            en: "Comfortably warm oil from a massage candle",
          },
          {
            de: "Langsame, gleichmäßige Bewegungen",
            en: "Slow, even movements",
          },
          {
            de: "Wärme und Berührung in einem Ritual",
            en: "Warmth and touch in a single ritual",
          },
        ],
      },
      {
        id: "steam",
        name: { de: "Dampfmassage", en: "Steam massage" },
        description: {
          de: "Wärmender Dampf begleitet dein Massageritual. Wir beraten dich gern zu Ablauf und Verfügbarkeit.",
          en: "Warming steam accompanies your massage ritual. Ask us about the treatment and availability.",
        },
        highlights: [
          {
            de: "Wärmender Dampf während der Massage",
            en: "Warming steam throughout the massage",
          },
          {
            de: "Ruhige Massagegriffe mit pflegendem Öl",
            en: "Calm massage strokes with nourishing oil",
          },
          {
            de: "Ablauf und Verfügbarkeit gern auf Anfrage",
            en: "Treatment details and availability on request",
          },
        ],
      },
    ],
  },
];

export function findTreatment(id: string) {
  for (const group of FOCUS_GROUPS) {
    const treatment = group.treatments.find((item) => item.id === id);
    if (treatment) return { group, treatment };
  }
  return undefined;
}
