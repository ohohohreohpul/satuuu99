import { Link } from "react-router-dom";
import {
  TREATMENT_FACTS,
  WATER_HEAT_LABEL,
} from "../../data/treatments/comparison";
import { FOCUS_GROUPS, findTreatment } from "../../data/content";
import { useLang } from "../../lib/i18n";
import { ArrowRightIcon } from "../ui/Icons";

/**
 * Side-by-side facts for every programme. Rendered as a real table so the
 * relationship between a treatment and its facts survives a screen reader,
 * a text browser and a crawler.
 */
export function TreatmentComparison() {
  const { t } = useLang();
  const rows = TREATMENT_FACTS.map((facts) => ({
    facts,
    found: findTreatment(facts.id),
  })).filter((row) => row.found);

  return (
    <div className="comparison-scroll">
      <table className="comparison-table">
        <caption>
          {t({
            de: "Alle Behandlungen im Vergleich: Fokus, Berührung, Wasser oder Wärme, Kleidung und Position.",
            en: "Every treatment compared: focus, touch, water or heat, clothing and position.",
          })}
        </caption>
        <thead>
          <tr>
            <th scope="col">{t({ de: "Behandlung", en: "Treatment" })}</th>
            <th scope="col">{t({ de: "Fokus", en: "Focus" })}</th>
            <th scope="col">{t({ de: "Berührung", en: "Touch" })}</th>
            <th scope="col">
              {t({ de: "Wasser & Wärme", en: "Water & heat" })}
            </th>
            <th scope="col">{t({ de: "Kleidung", en: "Clothing" })}</th>
            <th scope="col">{t({ de: "Position", en: "Position" })}</th>
            <th scope="col">{t({ de: "Gut, wenn", en: "Good when" })}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ facts, found }) => (
            <tr key={facts.id}>
              <th scope="row">
                <Link to={`/behandlungen/${facts.id}`}>
                  {t(found!.treatment.name)}
                  <ArrowRightIcon />
                </Link>
                <small>{t(found!.group.word)}</small>
              </th>
              <td>{t(facts.focus)}</td>
              <td>{t(facts.touch)}</td>
              <td>{t(WATER_HEAT_LABEL[facts.waterHeat])}</td>
              <td>{t(facts.clothing)}</td>
              <td>{t(facts.position)}</td>
              <td>{t(facts.bestFor)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="comparison-note">
        {t({
          de: `Verbindliche Preise und Behandlungszeiten stehen ausschließlich in der offiziellen Preisliste. Insgesamt bieten wir ${TREATMENT_FACTS.length} Anwendungen in ${FOCUS_GROUPS.length} Bereichen an.`,
          en: `Confirmed prices and durations appear only in the official price list. In total we offer ${TREATMENT_FACTS.length} treatments across ${FOCUS_GROUPS.length} areas.`,
        })}
      </p>
    </div>
  );
}
