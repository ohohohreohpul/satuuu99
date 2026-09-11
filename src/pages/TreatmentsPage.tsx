import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { TreatmentCatalogue } from "../components/treatments/TreatmentCatalogue";
import { ArrowRightIcon } from "../components/ui/Icons";
import { CONTACT, FOCUS_GROUPS } from "../data/content";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { FinalCTA } from "../sections/FinalCTA";

export function TreatmentsPage() {
  const { t } = useLang();
  const { search } = useLocation();
  usePageMeta(
    t({ de: "Behandlungen — satuuu99", en: "Treatments — satuuu99" }),
    t({
      de: "Head Spa, Gesichtspflege, Fußpflege und Wellnessmassagen in Ahrensburg.",
      en: "Head spa, facial care, foot care and wellness massage in Ahrensburg.",
    }),
  );

  useEffect(() => {
    const focus = new URLSearchParams(search).get("focus");
    if (focus)
      requestAnimationFrame(() =>
        document.getElementById(focus)?.scrollIntoView(),
      );
  }, [search]);

  return (
    <>
      <PageHero
        eyebrow={t({ de: "Behandlungen", en: "Treatments" })}
        title={
          <>
            {t({ de: "Finde deine", en: "Find your" })}
            <br />
            <span className="soft-text">
              {t({ de: "Art von Pause.", en: "kind of pause." })}
            </span>
          </>
        }
        copy={t({
          de: "Von Kopf bis Fuß: ruhige Rituale, persönliche Aufmerksamkeit und Zeit, die nur dir gehört.",
          en: "From head to toe: calm rituals, personal attention and time that belongs only to you.",
        })}
        image={MEDIA.treatments.head}
        imageAlt={t({
          de: "Sanftes Head-Spa-Ritual",
          en: "Gentle head spa ritual",
        })}
      >
        <a className="button" href={CONTACT.booking}>
          {t({ de: "Termin buchen", en: "Book a visit" })}
          <ArrowRightIcon />
        </a>
      </PageHero>
      <nav
        className="page-index section-shell"
        aria-label={t({ de: "Behandlungsbereiche", en: "Treatment areas" })}
      >
        {FOCUS_GROUPS.map((group, index) => (
          <a key={group.id} href={`#${group.id}`}>
            0{index + 1} {t(group.word)}
          </a>
        ))}
      </nav>
      <div className="section-shell catalogue-shell">
        <TreatmentCatalogue groups={FOCUS_GROUPS} />
      </div>
      <section className="choice-note section-shell">
        <p className="eyebrow">
          {t({ de: "Noch unsicher?", en: "Not sure yet?" })}
        </p>
        <h2>
          {t({
            de: "Wir finden gemeinsam heraus, was gerade zu dir passt.",
            en: "We’ll work out together what feels right for you.",
          })}
        </h2>
        <Link className="text-link" to="/kontakt">
          {t({ de: "Mit uns sprechen", en: "Talk to us" })}
          <ArrowRightIcon />
        </Link>
      </section>
      <FinalCTA />
    </>
  );
}
