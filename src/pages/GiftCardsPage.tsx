import { PageHero } from "../components/layout/PageHero";
import { ArrowRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";

export function GiftCardsPage() {
  const { t } = useLang();
  usePageMeta(
    t({ de: "Gutscheine — satuuu99", en: "Gift cards — satuuu99" }),
    t({
      de: "Satuuu99 Gutscheine einlösen und eine persönliche Auszeit verschenken.",
      en: "Redeem a satuuu99 gift card and give the gift of personal time.",
    }),
  );
  const subject = encodeURIComponent(
    t({ de: "Satuuu-Gutschein einlösen", en: "Redeem a Satuuu gift card" }),
  );
  return (
    <>
      <PageHero
        eyebrow={t({ de: "Zeit verschenken", en: "Give a little time" })}
        title={
          <>
            {t({ de: "Für jemanden,", en: "For someone" })}
            <br />
            <span className="soft-text">
              {t({ de: "der dir wichtig ist.", en: "who matters to you." })}
            </span>
          </>
        }
        copy={t({
          de: "Ein Moment zum Ankommen, Durchatmen und Sich-kümmern-lassen.",
          en: "A moment to arrive, breathe and let someone take care of you.",
        })}
        image={MEDIA.treatments.face}
        imageAlt={t({
          de: "Ruhiges Gesichtspflege-Ritual",
          en: "Calm facial care ritual",
        })}
      />
      <section className="gift-page-body section-shell">
        <p className="eyebrow">
          {t({ de: "Gutschein einlösen", en: "Redeem a gift card" })}
        </p>
        <div>
          <h2>
            {t({
              de: "Dein Gutschein wartet auf seinen guten Moment.",
              en: "Your gift card is waiting for the right moment.",
            })}
          </h2>
          <p>
            {t({
              de: "Du hast bereits einen Satuuu-Gutschein? Schreib uns kurz. Wir helfen dir gern, die passende Behandlung und einen Termin zu finden.",
              en: "Already have a Satuuu gift card? Send us a note. We’ll help you choose the right treatment and find a time to visit.",
            })}
          </p>
          <a
            className="button"
            href={`mailto:${CONTACT.email}?subject=${subject}`}
          >
            {t({ de: "Gutschein einlösen", en: "Redeem your gift card" })}
            <ArrowRightIcon />
          </a>
          <p className="status-note">
            {t({
              de: "Der Verkauf neuer Gutscheine ist derzeit pausiert.",
              en: "Sales of new gift cards are currently paused.",
            })}
          </p>
        </div>
      </section>
    </>
  );
}
