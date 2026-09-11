import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT, FOCUS_GROUPS, findTreatment } from "../data/content";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { FinalCTA } from "../sections/FinalCTA";

export function TreatmentDetailPage() {
  const { treatmentId = "" } = useParams();
  const found = findTreatment(treatmentId);
  const { t } = useLang();
  usePageMeta(
    found ? `${t(found.treatment.name)} — satuuu99` : "Behandlung — satuuu99",
    found ? t(found.treatment.description) : undefined,
  );
  if (!found) return <Navigate to="/behandlungen" replace />;
  const { group, treatment } = found;
  const image =
    MEDIA.programmes[treatment.id] ||
    MEDIA.treatments[group.id] ||
    MEDIA.hero.poster;
  const related = FOCUS_GROUPS.flatMap((item) => item.treatments)
    .filter((item) => item.id !== treatment.id)
    .slice(0, 3);

  return (
    <>
      <article className="treatment-page">
        <div className="treatment-page-copy">
          <Link className="back-link" to={`/behandlungen?focus=${group.id}`}>
            {t({ de: "Behandlungen", en: "Treatments" })} / {t(group.word)}
          </Link>
          <p className="eyebrow">
            {t({ de: "Dein Ritual", en: "Your ritual" })}
          </p>
          <h1>{t(treatment.name)}</h1>
          <p className="treatment-lead">{t(treatment.description)}</p>
          <div className="treatment-page-actions">
            <a className="button" href={CONTACT.booking}>
              {t({ de: "Termin buchen", en: "Book a visit" })}
              <ArrowRightIcon />
            </a>
            <a className="text-link" href={CONTACT.prices}>
              {t({ de: "Preis & Dauer", en: "Price & duration" })}
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
        <figure className="treatment-page-image">
          <img src={image} alt={t(treatment.name)} />
        </figure>
        <div className="treatment-points">
          <p className="eyebrow">
            {t({ de: "Was dich erwartet", en: "What to expect" })}
          </p>
          <ol>
            {(treatment.highlights || []).map((highlight, index) => (
              <li key={highlight.de}>
                <span>0{index + 1}</span>
                {t(highlight)}
              </li>
            ))}
          </ol>
        </div>
      </article>
      <section className="related section-shell">
        <p className="eyebrow">
          {t({ de: "Auch für dich", en: "You may also like" })}
        </p>
        <div className="related-grid">
          {related.map((item) => (
            <Link to={`/behandlungen/${item.id}`} key={item.id}>
              <h2>{t(item.name)}</h2>
              <ArrowRightIcon />
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
