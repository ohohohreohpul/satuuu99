import { Link } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { FinalCTA } from "../sections/FinalCTA";

export function HeadSpaHamburgPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Japanese Head Spa nahe Hamburg | satuuu99",
      en: "Japanese Head Spa near Hamburg | satuuu99",
    }),
    t({
      de: "Japanese Head Spa für Hamburg und Umgebung im satuuu99 Studio in Ahrensburg. Entdecke das ruhige Pflegeritual für Kopfhaut und Haar.",
      en: "Japanese Head Spa for Hamburg and the surrounding area at the satuuu99 studio in Ahrensburg. Discover a calm care ritual for scalp and hair.",
    }),
  );

  return (
    <>
      <PageHero
        eyebrow={t({
          de: "Head Spa nahe Hamburg",
          en: "Head Spa near Hamburg",
        })}
        title={
          <>
            {t({ de: "Japanese Head Spa", en: "Japanese Head Spa" })}
            <br />
            <span className="soft-text">
              {t({
                de: "für Hamburg & Umgebung.",
                en: "for Hamburg & beyond.",
              })}
            </span>
          </>
        }
        copy={t({
          de: "Unser Studio liegt in Ahrensburg, vor den Toren Hamburgs. Hier erwartet dich ein ruhiges Pflegeritual für Kopfhaut und Haar mit warmem Wasser und behutsamer Berührung.",
          en: "Our studio is in Ahrensburg, just outside Hamburg. A calm scalp and hair care ritual with warm water and gentle touch awaits you here.",
        })}
        image={MEDIA.treatments.head}
        imageAlt={t({
          de: "Japanese Head Spa nahe Hamburg bei satuuu99",
          en: "Japanese Head Spa near Hamburg at satuuu99",
        })}
      >
        <a className="button" href={CONTACT.booking}>
          {t({ de: "Head Spa buchen", en: "Book a Head Spa" })}
          <ArrowRightIcon />
        </a>
      </PageHero>

      <section className="local-story section-shell">
        <div>
          <p className="eyebrow">
            {t({
              de: "Deine Auszeit bei Hamburg",
              en: "Your pause near Hamburg",
            })}
          </p>
          <h2>
            {t({
              de: "Raus aus dem Tempo. Rein in einen ruhigeren Moment.",
              en: "Step away from the pace and into a quieter moment.",
            })}
          </h2>
        </div>
        <div>
          <p>
            {t({
              de: "Beim Japanese Head Spa verbindest du Pflege für Kopfhaut und Haar mit einer entspannenden Kopf- und Nackenmassage. Du liegst bequem, warmes Wasser läuft durch dein Haar, und wir nehmen uns Zeit für dich.",
              en: "Japanese Head Spa combines scalp and hair care with a relaxing head and neck massage. You lie back comfortably, warm water runs through your hair, and we take time for you.",
            })}
          </p>
          <Link className="text-link" to="/behandlungen/head-spa">
            {t({ de: "Behandlung im Detail", en: "Treatment details" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="local-facts">
        <div className="section-shell local-facts-grid">
          <div>
            <span>01</span>
            <h2>
              {t({ de: "Studio in Ahrensburg", en: "Studio in Ahrensburg" })}
            </h2>
            <p>
              {CONTACT.addressLines[0]}
              <br />
              {CONTACT.addressLines[1]}
            </p>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer">
              {t({ de: "Route planen", en: "Plan your route" })}
              <ArrowUpRightIcon />
            </a>
          </div>
          <div>
            <span>02</span>
            <h2>
              {t({ de: "Persönlich abgestimmt", en: "Personally tailored" })}
            </h2>
            <p>
              {t({
                de: "Wir besprechen vorab, welche aktuell verfügbare Anwendung zu dir passt.",
                en: "We discuss which currently available treatment suits you before we begin.",
              })}
            </p>
          </div>
          <div>
            <span>03</span>
            <h2>{t({ de: "Online buchbar", en: "Book online" })}</h2>
            <p>
              {t({
                de: "Im Kalender siehst du freie Termine und kannst deine Auszeit direkt reservieren.",
                en: "See available appointments in the calendar and reserve your time directly.",
              })}
            </p>
            <a href={CONTACT.booking}>
              {t({ de: "Termine ansehen", en: "View appointments" })}
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
