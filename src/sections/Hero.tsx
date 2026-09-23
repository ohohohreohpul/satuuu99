import { useLang } from "../lib/i18n";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { ScrollScrubVideo } from "../components/ui/ScrollScrubVideo";
import { ArrowRightIcon } from "../components/ui/Icons";

export function Hero() {
  const { t } = useLang();
  // GSAP pins .hero by wrapping it in a pin-spacer. The wrapper div keeps
  // that DOM change inside a node React owns, so leaving the page can
  // unmount cleanly instead of failing on removeChild.
  return (
    <div className="hero-pin">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            {t({
              de: "Wellness & Head Spa · Ahrensburg bei Hamburg",
              en: "Wellness & head spa · Ahrensburg near Hamburg",
            })}
          </p>
          <h1 id="hero-title">
            {t({ de: "Langsamer werden.", en: "Slower days." })}
            <br />
            <span>{t({ de: "Bei dir ankommen.", en: "More of you." })}</span>
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
        </div>
        <div className="hero-media">
          <ScrollScrubVideo
            src={MEDIA.hero.video}
            poster={MEDIA.hero.poster}
            label={t({
              de: "Behutsame Kopf- und Nackenmassage in warmem Tageslicht",
              en: "Gentle head and neck massage in warm daylight",
            })}
            className="hero-film"
          />
        </div>
      </section>
    </div>
  );
}
