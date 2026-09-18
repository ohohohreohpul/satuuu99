import type { Localized } from "../lib/i18n";

export interface TeamMember {
  name: string;
  role: Localized;
  bio: Localized;
}

/**
 * Taken from the official studio profile. Biographies stay at the level the
 * studio itself publishes; portraits and longer personal statements wait for
 * each person's written approval — see docs/ASSET-BRIEF.md.
 */
export const TEAM: TeamMember[] = [
  {
    name: "Nina",
    role: { de: "Inhaberin", en: "Owner" },
    bio: {
      de: "Nina hat satuuu99 gegründet und bringt nach offizieller Studioangabe mehr als 20 Jahre Erfahrung mit. Sie ist in traditioneller Thai-Massage, Gua Sha sowie Wellness- und Spa-Massagen qualifiziert und führt die meisten Gespräche vor einer Erstbehandlung selbst.",
      en: "Nina founded satuuu99 and, according to the official studio profile, brings more than 20 years of experience. She is qualified in traditional Thai massage, gua sha and wellness and spa massage, and personally leads most consultations before a first treatment.",
    },
  },
  {
    name: "Sue",
    role: {
      de: "Fachpraktikerin für Wellness, Massage und Prävention",
      en: "Wellness, massage and prevention practitioner",
    },
    bio: {
      de: "Sue hat ihren Abschluss als Fachpraktikerin für Wellness, Massage und Prävention an den Döpfer-Schulen Hamburg gemacht. Ihre Ausbildung verbindet Massagetechnik mit einem klaren Blick dafür, wo eine Wellnessanwendung endet und eine medizinische Fachperson zuständig ist.",
      en: "Sue qualified as a wellness, massage and prevention practitioner at Döpfer-Schulen Hamburg. Her training combines massage technique with a clear sense of where a wellness treatment ends and a medical professional takes over.",
    },
  },
  {
    name: "Pim",
    role: { de: "Massage", en: "Massage" },
    bio: {
      de: "Pim bringt langjährige Massageerfahrung in das Team ein und arbeitet mit einem eigenen Schwerpunkt innerhalb unseres Körperprogramms. Gäste, die kräftiger massiert werden möchten, sind bei ihr gut aufgehoben.",
      en: "Pim brings long-standing massage experience to the team and works with her own emphasis within our body programme. Guests who prefer firmer work are in good hands with her.",
    },
  },
  {
    name: "Tuk",
    role: { de: "Massage", en: "Massage" },
    bio: {
      de: "Tuk ergänzt das Team mit langjähriger Erfahrung und einem ruhigen, gleichmäßigen Arbeitsstil. Wenn du eine Anwendung ohne Tempowechsel bevorzugst, sag es bei der Buchung — wir versuchen, das bei der Einteilung zu berücksichtigen.",
      en: "Tuk adds long-standing experience and a calm, even working style. If you prefer a treatment without changes of pace, mention it when booking — we try to take that into account when scheduling.",
    },
  },
];
