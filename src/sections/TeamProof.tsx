import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../components/ui/Icons";
import { Photo } from "../components/media/Photo";
import { TEAM } from "../data/team";
import { useLang } from "../lib/i18n";

/**
 * Who will actually be in the room. Qualifications come from the official
 * studio profile; portraits wait for each person's approval.
 */
export function TeamProof() {
  const { t } = useLang();
  return (
    <section className="team-proof section-shell">
      <div className="section-heading">
        <p className="eyebrow">
          {t({ de: "Wer behandelt", en: "Who treats" })}
        </p>
        <h2>
          {t({
            de: "Vier Menschen. Kein anonymer Ablauf.",
            en: "Four people. No anonymous routine.",
          })}
        </h2>
        <p>
          {t({
            de: "Inhaberin Nina bringt nach offizieller Studioangabe über 20 Jahre Erfahrung mit und ist in traditioneller Thai-Massage, Gua Sha sowie Wellness- und Spa-Massagen qualifiziert. Sue hat ihren Abschluss als Fachpraktikerin für Wellness, Massage und Prävention an den Döpfer-Schulen Hamburg gemacht. Pim und Tuk ergänzen das Team mit langjähriger Massageerfahrung.",
            en: "According to the official studio profile, owner Nina brings more than 20 years of experience and is qualified in traditional Thai massage, gua sha and wellness and spa massage. Sue qualified as a wellness, massage and prevention practitioner at Döpfer-Schulen Hamburg. Pim and Tuk add long-standing massage experience.",
          })}
        </p>
      </div>
      <ul className="team-proof-list">
        {TEAM.map((member) => (
          <li key={member.name}>
            <strong>{member.name}</strong>
            <span>{t(member.role)}</span>
          </li>
        ))}
      </ul>
      <figure className="team-proof-image">
        <Photo id="hands-light-study" sizes="(min-width: 900px) 30vw, 100vw" />
      </figure>
      <Link className="text-link" to="/studio">
        {t({ de: "Mehr über das Studio", en: "More about the studio" })}
        <ArrowRightIcon />
      </Link>
    </section>
  );
}
