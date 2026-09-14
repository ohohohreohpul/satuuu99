import { ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT, FOCUS_GROUPS } from "../data/content";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";

export function PricesPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Wellness & Head Spa Preise | satuuu99 Ahrensburg",
      en: "Wellness & Head Spa Prices | satuuu99 Ahrensburg",
    }),
    t({
      de: "Aktuelle Preise und Behandlungsdauer für Head Spa, Gesichtspflege und Wellnessmassagen bei satuuu99 nahe Hamburg.",
      en: "Current prices and treatment durations for head spa, facial care and wellness massage at satuuu99 near Hamburg.",
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
