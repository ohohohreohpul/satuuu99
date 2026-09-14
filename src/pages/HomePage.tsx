import { StudioUpdates } from "../sections/StudioUpdates";
import { useHomeMotion } from "../lib/useHomeMotion";
import { BrandStory } from "../sections/BrandStory";
import { RitualFinder } from "../sections/RitualFinder";
import { JournalPreview } from "./JournalPage";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { Hero } from "../sections/Hero";
import { FocusExplorer } from "../sections/FocusExplorer";
import { Studio } from "../sections/Studio";
import { GiftCards } from "../sections/GiftCards";
import { FinalCTA } from "../sections/FinalCTA";
export function HomePage() {
  const { t, lang } = useLang();
  useHomeMotion(lang);
  usePageMeta(
    t({
      de: "Head Spa & Wellness nahe Hamburg | satuuu99 Ahrensburg",
      en: "Head Spa & Wellness near Hamburg | satuuu99 Ahrensburg",
    }),
    t({
      de: "Japanese Head Spa, Gesichtspflege und Wellnessmassagen in Ahrensburg bei Hamburg. Entdecke satuuu99 und buche deine persönliche Auszeit.",
      en: "Japanese head spa, facial care and wellness massage in Ahrensburg near Hamburg. Discover satuuu99 and book time for yourself.",
    }),
  );
  return (
    <>
      <Hero />
      <BrandStory />
      <FocusExplorer />
      <RitualFinder />
      <Studio />
      <GiftCards />
      <StudioUpdates />
      <JournalPreview />
      <FinalCTA />
    </>
  );
}
