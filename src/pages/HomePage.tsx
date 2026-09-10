import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { Hero } from "../sections/Hero";
import { FocusExplorer } from "../sections/FocusExplorer";
import { Studio } from "../sections/Studio";
import { GiftCards } from "../sections/GiftCards";
import { FinalCTA } from "../sections/FinalCTA";
export function HomePage() {
  const { t } = useLang();
  usePageMeta(
    "satuuu99 — Wellness & Head Spa · Ahrensburg",
    t({
      de: "Deine Pause in Ahrensburg. Japanese Head Spa, Gesichtspflege, Wellness-Fußpflege und Massagen bei satuuu99. Entdecke unsere Behandlungen und buche deine Auszeit.",
      en: "Your pause in Ahrensburg. Japanese head spa, facials, wellness foot care and massage at satuuu99. Explore our treatments and book a little time for yourself.",
    }),
  );
  return (
    <>
      <Hero />
      <FocusExplorer />
      <Studio />
      <GiftCards />
      <FinalCTA />
    </>
  );
}
