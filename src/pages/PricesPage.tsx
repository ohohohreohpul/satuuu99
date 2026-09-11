import { ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT, FOCUS_GROUPS } from "../data/content";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";

export function PricesPage() {
  const { t } = useLang();
  usePageMeta(
    t({ de: "Preise — satuuu99", en: "Prices — satuuu99" }),
    t({
      de: "Aktuelle Preise und Behandlungsdauer bei satuuu99.",
      en: "Current prices and treatment durations at satuuu99.",
    }),
  );
  return (
    <section className="prices-page section-shell">
      <div className="prices-intro">
        <p className="eyebrow">
          {t({ de: "Preise & Dauer", en: "Prices & duration" })}
        </p>
        <h1>
          {t({ de: "Klar wählen.", en: "Choose clearly." })}
          <br />
          <span className="soft-text">
            {t({ de: "In Ruhe ankommen.", en: "Arrive at ease." })}
          </span>
        </h1>
        <p>
          {t({
            de: "Alle aktuellen Preise, Behandlungszeiten und buchbaren Varianten findest du in unserer offiziellen Preisliste.",
            en: "Find all current prices, treatment times and available options in our official price list.",
          })}
        </p>
        <a className="button" href={CONTACT.prices}>
          {t({ de: "Preisliste öffnen", en: "Open price list" })}
          <ArrowUpRightIcon />
        </a>
      </div>
      <div className="prices-list">
        {FOCUS_GROUPS.map((group, index) => (
          <div className="price-group" key={group.id}>
            <p>
              <span>0{index + 1}</span>
              {t(group.word)}
            </p>
            <ul>
              {group.treatments.map((item) => (
                <li key={item.id}>{t(item.name)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
