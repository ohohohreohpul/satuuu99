import { StudioUpdates } from "../sections/StudioUpdates";
import { useHomeMotion } from "../lib/useHomeMotion";
import { BrandStory } from "../sections/BrandStory";
import { RitualFinder } from "../sections/RitualFinder";
import { JournalPreview } from "../sections/JournalPreview";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { Hero } from "../sections/Hero";
import { FocusExplorer } from "../sections/FocusExplorer";
import { Studio } from "../sections/Studio";
import { GiftCards } from "../sections/GiftCards";
import { FinalCTA } from "../sections/FinalCTA";
import { VisitJourney } from "../sections/VisitJourney";
import { LocalOrientation } from "../sections/LocalOrientation";
import { TeamProof } from "../sections/TeamProof";
import { StructuredData } from "../components/seo/StructuredData";
import { faqSchema } from "../lib/schema";

const HOME_FAQS = [
  {
    q: {
      de: "Wo befindet sich satuuu99?",
      en: "Where is satuuu99?",
    },
    a: {
      de: "In der Manhagener Allee 45 in 22926 Ahrensburg, rund 25 Kilometer nordöstlich der Hamburger Innenstadt. Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang, und vom Bahnhof Ahrensburg sowie von der U1 sind es wenige Minuten zu Fuß.",
      en: "At Manhagener Allee 45 in 22926 Ahrensburg, roughly 25 kilometres northeast of central Hamburg. According to current studio information, parking is directly outside the entrance, and it is a few minutes on foot from Ahrensburg station and the U1.",
    },
  },
  {
    q: {
      de: "Welche Behandlungen bietet satuuu99 an?",
      en: "Which treatments does satuuu99 offer?",
    },
    a: {
      de: "Elf Wellnessanwendungen in vier Bereichen: Japanese Head Spa für den Kopf; Aqua Facial, Sleep & Glow und Gua Sha für das Gesicht; Wellness-Fußpflege und Fußmassage für die Füße; sowie Anti-Stress Gua Sha Massage, Bellabambi, Schröpfmassage, Kerzenmassage und Dampfmassage für den Körper.",
      en: "Eleven wellness treatments across four areas: Japanese Head Spa for the head; Aqua Facial, Sleep & Glow and gua sha for the face; wellness foot care and foot massage for the feet; and anti-stress gua sha massage, Bellabambi, cupping, candle and steam massage for the body.",
    },
  },
  {
    q: {
      de: "Wann ist satuuu99 geöffnet?",
      en: "When is satuuu99 open?",
    },
    a: {
      de: "Mittwochs bis freitags von 10:00 bis 19:00 Uhr und samstags von 10:00 bis 18:00 Uhr. Maßgeblich für deinen Besuch ist der konkret gebuchte Termin im Online-Kalender.",
      en: "Wednesday to Friday from 10am to 7pm and Saturday from 10am to 6pm. What matters for your visit is the specific appointment booked in the online calendar.",
    },
  },
  {
    q: {
      de: "Sind die Behandlungen medizinisch?",
      en: "Are the treatments medical?",
    },
    a: {
      de: "Nein. Alle Anwendungen sind Wellness- und Pflegeanwendungen. Sie ersetzen weder Physiotherapie noch eine dermatologische Behandlung oder podologische Fußpflege. Bei Schmerzen, Entzündungen oder ungeklärten Beschwerden ist eine medizinische Praxis die richtige erste Adresse.",
      en: "No. Every treatment is a wellness and care treatment. None replaces physiotherapy, dermatological care or podiatry. For pain, inflammation or unexplained symptoms, a medical practice is the right first step.",
    },
  },
];
export function HomePage() {
  const { t, lang } = useLang();
  useHomeMotion(lang);
  usePageMeta(
    t({
      de: "Head Spa & Wellness nahe Hamburg | satuuu99 Ahrensburg",
      en: "Head Spa & Wellness near Hamburg | satuuu99 Ahrensburg",
    }),
    t({
      de: "Ein privates Wellnessstudio in Ahrensburg bei Hamburg für Japanese Head Spa, Gesichtspflege und Wellnessmassagen. Buche deine persönliche Auszeit.",
      en: "A private wellness studio in Ahrensburg near Hamburg for Japanese head spa, facial care and wellness massage. Book time for yourself.",
    }),
  );
  return (
    <>
      <StructuredData data={faqSchema(HOME_FAQS, t)} />
      <Hero />
      <BrandStory />
      <FocusExplorer />
      <RitualFinder />
      <VisitJourney />
      <Studio />
      <TeamProof />
      <LocalOrientation />
      <GiftCards />
      <StudioUpdates />
      <JournalPreview />
      <FinalCTA />
    </>
  );
}
