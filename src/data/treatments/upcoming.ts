import type { Treatment } from "../content";
import type { TreatmentFacts } from "./comparison";
import type { TreatmentCopy } from "./types";

/**
 * Deep Bodywork — the studio's new signature programme. It is on the site as
 * "Demnächst" (isComingSoon in data/content.ts): listed with its copy and
 * price, but booking buttons are replaced until the new treatment table
 * arrives. To open bookings:
 *   1. remove isComingSoon (and set isNew) in the body group in data/content.ts,
 *   2. add DEEP_BODYWORK_FACTS to TREATMENT_FACTS (data/treatments/comparison.ts),
 *   3. update the treatment counts ("elf" → "zwölf") and llms.txt,
 *   4. add "deep-bodywork" to the detail-page test list.
 * The studio deliberately avoids calling it Thai massage.
 */
export const DEEP_BODYWORK: Treatment = {
  id: "deep-bodywork",
  name: { de: "Deep Bodywork", en: "Deep Bodywork" },
  isNew: true,
  prices: [{ minutes: 90, euros: 119 }],
  description: {
    de: "Unsere Signature-Behandlung: intensive Dehnung und gezielte Druckpunktarbeit. Inspiriert von dynamischen Dehntechniken und gezieltem Tiefendruck verbindet Deep Bodywork passive Dehnbewegungen, intensive Drucktechniken und gezielte Mobilisation – für Menschen mit Verspannungen, eingeschränkter Beweglichkeit und hoher muskulärer Belastung.",
    en: "Our signature treatment: intensive stretching and targeted pressure-point work. Inspired by dynamic stretching techniques and targeted deep pressure, Deep Bodywork combines passive stretches, intensive pressure techniques and targeted mobilisation – for people with tension, restricted mobility and high muscular strain.",
  },
  highlights: [
    {
      de: "Passive Dehnbewegungen und gezielte Mobilisation",
      en: "Passive stretches and targeted mobilisation",
    },
    {
      de: "Intensive Druckpunktarbeit mit gezieltem Tiefendruck",
      en: "Intensive pressure-point work with targeted deep pressure",
    },
    {
      de: "Schwerpunkte wie Rücken, Schultern, Nacken, Hüfte und Beine",
      en: "Focus areas such as back, shoulders, neck, hips and legs",
    },
    {
      de: "Ideal bei Belastung durch langes Sitzen oder einseitige Haltung",
      en: "Ideal for strain from long sitting or one-sided posture",
    },
    {
      de: "Nur für gesunde, körperlich belastbare und erfahrene Gäste",
      en: "Only for healthy, physically resilient and experienced guests",
    },
  ],
};

export const DEEP_BODYWORK_COPY: TreatmentCopy = {
  answer: {
    de: "Deep Bodywork ist die Signature-Behandlung von satuuu99 in Ahrensburg: 90 Minuten intensive Körperarbeit aus passiven Dehnbewegungen, gezielter Druckpunktarbeit und Mobilisation. Sie richtet sich an gesunde, körperlich belastbare Gäste mit Erfahrung in intensiveren Dehntechniken – nicht an Anfänger. Die Anwendung dient dem Wohlbefinden und ersetzt keine medizinische oder physiotherapeutische Behandlung.",
    en: "Deep Bodywork is the signature treatment at satuuu99 in Ahrensburg: 90 minutes of intensive bodywork combining passive stretches, targeted pressure-point work and mobilisation. It is for healthy, physically resilient guests with experience of more intensive stretching – not for beginners. The treatment is for wellbeing and does not replace medical or physiotherapy treatment.",
  },
  definition: {
    de: "Deep Bodywork ist eine intensive Form der Körperarbeit, inspiriert von dynamischen Dehntechniken und gezieltem Tiefendruck. Durch eine Kombination aus passiven Dehnbewegungen, intensiven Drucktechniken und gezielter Mobilisation werden verschiedene Muskelgruppen und Körperbereiche angesprochen. Mögliche Schwerpunkte sind Verspannungen in Rücken und Schultern, der Nacken- und Schulterbereich, Beweglichkeit und Flexibilität, muskuläre Spannungen im Hüft- und Beinbereich sowie körperliche Belastungen durch lange Büroarbeit. Den Schwerpunkt Ihres Termins legen wir im Vorgespräch gemeinsam fest.",
    en: "Deep Bodywork is an intensive form of bodywork, inspired by dynamic stretching techniques and targeted deep pressure. A combination of passive stretches, intensive pressure techniques and targeted mobilisation addresses different muscle groups and areas of the body. Possible focus areas are tension in back and shoulders, the neck and shoulder area, mobility and flexibility, muscular tension in hips and legs, and physical strain from long office work. We agree the focus of your appointment together beforehand.",
  },
  experience: {
    de: "Deep Bodywork ist deutlich intensiver als eine Wellnessmassage. Sie werden passiv gedehnt und bewegt, während wir mit gezieltem Druck an Druckpunkten und verspannten Bereichen arbeiten. Wichtig ist, dass Sie die Muskulatur vollständig loslassen und sich bewegen lassen – gleichzeitig geben Sie uns jederzeit Rückmeldung, wenn eine Dehnung oder ein Druck unangenehm oder schmerzhaft wird. Viele Gäste fühlen sich danach spürbar beweglicher und gelöster.",
    en: "Deep Bodywork is considerably more intensive than a wellness massage. You are stretched and moved passively while we work with targeted pressure on pressure points and tense areas. It matters that you let your muscles go completely and allow yourself to be moved – while telling us at any moment if a stretch or pressure becomes uncomfortable or painful. Many guests feel noticeably more mobile and released afterwards.",
  },
  suited: {
    de: "Wählen Sie Deep Bodywork, wenn Sie gesund und körperlich belastbar sind, Erfahrung mit intensiveren Dehntechniken haben und eine Behandlung für Verspannungen, eingeschränkte Beweglichkeit oder hohe muskuläre Belastung suchen – etwa durch langes Sitzen oder eine einseitige Körperhaltung. Wenn Sie zum ersten Mal zu uns kommen oder es lieber sanfter mögen, ist die Anti-Stress Gua Sha Massage der bessere Einstieg.",
    en: "Choose Deep Bodywork if you are healthy and physically resilient, have experience of more intensive stretching and are looking for a treatment for tension, restricted mobility or high muscular strain – for instance from long sitting or one-sided posture. If this is your first visit or you prefer something gentler, the anti-stress gua sha massage is the better start.",
  },
  beforeBooking: {
    de: "Deep Bodywork ist nur für gesunde und körperlich belastbare Personen geeignet und nicht für Anfänger. Die Behandlung ist nicht geeignet bei Bandscheibenvorfällen oder Osteoporose. Informieren Sie uns außerdem vor der Buchung über Schwangerschaft, akute Schmerzen, frische Verletzungen, Operationen in den letzten Monaten, Gelenkbeschwerden, Thrombose oder ein Thromboserisiko, Herz-Kreislauf-Erkrankungen und blutverdünnende Medikamente. Im Zweifel klären Sie bitte ärztlich, ob die Anwendung für Sie geeignet ist.",
    en: "Deep Bodywork is only suitable for healthy and physically resilient people and not for beginners. It is not suitable for slipped discs or osteoporosis. Please also tell us before booking about pregnancy, acute pain, recent injuries, surgery in the past months, joint problems, thrombosis or a thrombosis risk, cardiovascular conditions and blood-thinning medication. If in doubt, please ask a doctor whether the treatment is suitable for you.",
  },
  prepare: {
    de: "Essen Sie vorher nichts Schweres und kommen Sie ein paar Minuten früher. Bringen Sie bequeme, dehnbare Kleidung mit oder fragen Sie uns vorab danach. Überlegen Sie, welche Bereiche Sie besonders beschäftigen und welche Bewegungen Ihnen schwerfallen – das hilft uns, den Schwerpunkt festzulegen.",
    en: "Avoid a heavy meal beforehand and arrive a few minutes early. Bring comfortable, stretchy clothing or ask us about it beforehand. Think about which areas trouble you most and which movements feel difficult – that helps us set the focus.",
  },
  after: {
    de: "Stehen Sie nach der Behandlung langsam auf und gönnen Sie sich einen ruhigen Moment. Trinken Sie über den Tag verteilt ausreichend Wasser und verzichten Sie direkt danach auf intensiven Sport. Ein Muskelgefühl am Folgetag ist nach intensiver Arbeit möglich; anhaltende oder starke Schmerzen gehören ärztlich abgeklärt.",
    en: "Get up slowly after the treatment and allow yourself a calm moment. Drink enough water across the day and avoid intense exercise straight afterwards. A muscular feeling the next day is possible after intensive work; persistent or strong pain should be medically assessed.",
  },
  steps: [
    {
      de: "Im Vorgespräch klären wir Erfahrung, Belastbarkeit, Schwerpunkte und was ausgespart wird.",
      en: "In the consultation we clarify experience, resilience, focus areas and anything left out.",
    },
    {
      de: "Sie machen es sich bequem; wir beginnen ruhig, damit die Muskulatur loslassen kann.",
      en: "You settle in; we start calmly so the muscles can let go.",
    },
    {
      de: "Passive Dehnbewegungen und Mobilisation öffnen die Körperbereiche Schritt für Schritt.",
      en: "Passive stretches and mobilisation open up the areas of the body step by step.",
    },
    {
      de: "Gezielte Druckpunktarbeit vertieft die Behandlung an Ihren Schwerpunkten.",
      en: "Targeted pressure-point work deepens the treatment at your focus areas.",
    },
    {
      de: "Während der gesamten Behandlung geben Sie jederzeit Rückmeldung zu Dehnung und Druck.",
      en: "Throughout the treatment you give feedback on stretch and pressure at any time.",
    },
    {
      de: "Zum Abschluss haben Sie Zeit, liegen zu bleiben und nachzuspüren.",
      en: "At the end you have time to lie still and let it settle.",
    },
  ],
  questions: [
    {
      q: {
        de: "Was kostet Deep Bodywork?",
        en: "How much is Deep Bodywork?",
      },
      a: {
        de: "90 Minuten kosten 119,00 €.",
        en: "90 minutes cost €119.00.",
      },
    },
    {
      q: {
        de: "Ist Deep Bodywork für Anfänger geeignet?",
        en: "Is Deep Bodywork suitable for beginners?",
      },
      a: {
        de: "Nein. Eine gute körperliche Belastbarkeit und Erfahrung mit intensiveren Dehntechniken sind Voraussetzung. Für den Einstieg empfehlen wir die Anti-Stress Gua Sha Massage.",
        en: "No. Good physical resilience and experience of more intensive stretching are required. For a first visit we recommend the anti-stress gua sha massage.",
      },
    },
    {
      q: {
        de: "Wann sollte ich auf Deep Bodywork verzichten?",
        en: "When should I not book Deep Bodywork?",
      },
      a: {
        de: "Bei Bandscheibenvorfällen oder Osteoporose ist die Behandlung nicht geeignet. Bei Schwangerschaft, akuten Beschwerden oder Verletzungen sprechen Sie uns bitte vorher an.",
        en: "The treatment is not suitable for slipped discs or osteoporosis. For pregnancy, acute complaints or injuries please speak to us first.",
      },
    },
    {
      q: {
        de: "Tut Deep Bodywork weh?",
        en: "Does Deep Bodywork hurt?",
      },
      a: {
        de: "Die Behandlung ist intensiv, soll aber nicht schmerzhaft sein. Geben Sie uns jederzeit Rückmeldung, wenn eine Dehnung oder ein Druck unangenehm wird – wir passen die Intensität sofort an.",
        en: "The treatment is intensive but should not be painful. Tell us at any time if a stretch or pressure becomes uncomfortable – we adjust the intensity straight away.",
      },
    },
    {
      q: {
        de: "Ersetzt Deep Bodywork eine Physiotherapie?",
        en: "Does Deep Bodywork replace physiotherapy?",
      },
      a: {
        de: "Nein. Die Anwendung dient dem Wohlbefinden und der Entspannung und ersetzt keine medizinische oder physiotherapeutische Behandlung.",
        en: "No. The treatment is for wellbeing and relaxation and does not replace medical or physiotherapy treatment.",
      },
    },
  ],
  sequence: ["body-massage-shoulders", "hands-light-study"],
  sequenceCaptions: [
    {
      de: "Gezielte Druckpunktarbeit an Schultern und Rücken",
      en: "Targeted pressure-point work on shoulders and back",
    },
    {
      de: "Dehnung und Mobilisation in Ruhe",
      en: "Stretching and mobilisation at a calm pace",
    },
  ],
};

export const DEEP_BODYWORK_FACTS: TreatmentFacts = {
  id: "deep-bodywork",
  focus: {
    de: "Rücken, Schultern, Hüfte, Beine",
    en: "Back, shoulders, hips, legs",
  },
  touch: { de: "Intensiv, mit Dehnung", en: "Intensive, with stretching" },
  waterHeat: "none",
  clothing: { de: "Bequeme Kleidung", en: "Comfortable clothing" },
  position: { de: "Behandlungsliege", en: "Treatment table" },
  bestFor: {
    de: "Für Erfahrene mit hoher Belastung",
    en: "For experienced guests under strain",
  },
};
