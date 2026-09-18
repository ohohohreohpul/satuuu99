import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { Photo } from "../components/media/Photo";
import { CONTACT } from "../data/content";
import { useLang } from "../lib/i18n";

/**
 * Where the studio is and how long it takes to get there — the question a
 * first-time visitor from Hamburg or the surrounding towns asks before any
 * question about the treatments themselves.
 */
export function LocalOrientation() {
  const { t } = useLang();
  return (
    <section className="local-orientation section-shell">
      <figure className="local-orientation-image">
        <Photo
          id="studio-room-atmosphere"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
        <figcaption className="media-note">
          {t({
            de: "Atmosphärenbild — Behandlungsraum",
            en: "Atmosphere image — treatment room",
          })}
        </figcaption>
      </figure>
      <div className="local-orientation-copy">
        <p className="eyebrow">
          {t({ de: "Wo du uns findest", en: "Where to find us" })}
        </p>
        <h2>
          {t({
            de: "Mitten in Ahrensburg, 25 Kilometer vor Hamburg.",
            en: "Central Ahrensburg, 25 kilometres from Hamburg.",
          })}
        </h2>
        <p>
          {t({
            de: `satuuu99 liegt in der ${CONTACT.addressLines[0]} in ${CONTACT.addressLines[1].replace("22926 ", "")} — ein kleines, privates Studio mit einem Behandlungsraum. Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang, und vom Bahnhof Ahrensburg sowie von der U1 sind es wenige Minuten zu Fuß.`,
            en: `satuuu99 is at ${CONTACT.addressLines.join(", ")} — a small, private studio with one treatment room. According to current studio information, parking is directly outside the entrance, and it is a few minutes on foot from Ahrensburg station and the U1.`,
          })}
        </p>
        <dl className="local-orientation-facts">
          <div>
            <dt>{t({ de: "Aus Hamburg", en: "From Hamburg" })}</dt>
            <dd>
              {t({
                de: "25–35 Min über die A1",
                en: "25–35 min via the A1",
              })}
            </dd>
          </div>
          <div>
            <dt>
              {t({ de: "Aus den Walddörfern", en: "From the Walddörfer" })}
            </dt>
            <dd>{t({ de: "15–25 Min", en: "15–25 min" })}</dd>
          </div>
          <div>
            <dt>
              {t({
                de: "Bargteheide & Großhansdorf",
                en: "Bargteheide & Großhansdorf",
              })}
            </dt>
            <dd>{t({ de: "gut 10 Min", en: "just over 10 min" })}</dd>
          </div>
          <div>
            <dt>{t({ de: "Geöffnet", en: "Open" })}</dt>
            <dd>
              {t(CONTACT.hours.weekdays)}
              <br />
              {t(CONTACT.hours.saturday)}
            </dd>
          </div>
        </dl>
        <p className="local-orientation-note">
          {t({
            de: "Was es bei uns nicht gibt: Sauna, Pool, Dampfkabine oder eine Spa-Landschaft. satuuu99 hat einen Behandlungsraum, und genau das ist der Punkt — du teilst ihn mit niemandem. Wir sind außerdem keine medizinische Einrichtung: Alle zehn Anwendungen sind Wellness- und Pflegerituale und ersetzen weder Physiotherapie noch eine dermatologische Behandlung oder podologische Fußpflege.",
            en: "What we do not have: a sauna, pool, steam cabin or spa landscape. satuuu99 has one treatment room, and that is exactly the point — you share it with nobody. We are also not a medical facility: all ten treatments are wellness and care rituals, and none replaces physiotherapy, dermatological care or podiatry.",
          })}
        </p>
        <div className="local-orientation-links">
          <a href={CONTACT.maps} target="_blank" rel="noreferrer">
            {t({ de: "Route planen", en: "Plan your route" })}
            <ArrowUpRightIcon />
          </a>
          <Link to="/kontakt">
            {t({ de: "Anfahrt & Parken", en: "Directions & parking" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
