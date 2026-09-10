import { useLang } from "../lib/i18n";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { VideoLoop } from "../components/ui/VideoLoop";
import { ArrowRightIcon } from "../components/ui/Icons";

export function Hero() {
  const { t } = useLang();
  return (
    <>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-sun" aria-hidden>
              ✳
            </span>
            {t({
              de: "Wellness & Head Spa · Ahrensburg",
              en: "Wellness & head spa · Ahrensburg",
            })}
          </p>
          <h1 id="hero-title">
            {t({ de: "Weniger Welt.", en: "A little less world." })}
            <br />
            <span>{t({ de: "Mehr du.", en: "A little more you." })}</span>
          </h1>
          <p className="hero-description">
            {t({
              de: "Warmes Wasser. Aufmerksame Hände. Und für einen Moment nichts, das du tun musst.",
              en: "Warm water. Attentive hands. And, for a moment, nothing you need to do.",
            })}
          </p>
          <a href={CONTACT.booking} className="button">
            {t({ de: "Zeit für mich buchen", en: "Make time for yourself" })}
            <ArrowRightIcon />
          </a>
          <div className="hero-footnote">
            <span>
              {t({
                de: "Deine Pause beginnt hier.",
                en: "Your pause starts here.",
              })}
            </span>
            <a
              href="#rituale"
              aria-label={t({
                de: "Behandlungen entdecken",
                en: "Discover treatments",
              })}
            >
              ↓
            </a>
          </div>
        </div>
        <div className="hero-media">
          <VideoLoop
            src={MEDIA.hero.video}
            poster={MEDIA.hero.poster}
            label={t({
              de: "Behutsame Kopf- und Nackenmassage in warmem Tageslicht",
              en: "Gentle head and neck massage in warm daylight",
            })}
            className="hero-film"
          />
          <span className="image-note">
            {t({
              de: "Die Kunst, sich Zeit zu nehmen.",
              en: "The art of taking your time.",
            })}
          </span>
        </div>
      </section>
      <div
        className="ritual-index"
        aria-label={t({ de: "Unsere Schwerpunkte", en: "Our specialities" })}
      >
        <span>
          {t({ de: "Berührung, die bleibt.", en: "Care that stays with you." })}
        </span>
        <a href="/?focus=head#rituale">Japanese Head Spa</a>
        <span aria-hidden>·</span>
        <a href="/?focus=face#rituale">
          {t({ de: "Gesichtspflege", en: "Facial care" })}
        </a>
        <span aria-hidden>·</span>
        <a href="/?focus=body#rituale">
          {t({ de: "Wellness & Massage", en: "Wellness & massage" })}
        </a>
      </div>
    </>
  );
}
