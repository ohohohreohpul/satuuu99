import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT, FOCUS_GROUPS, findTreatment } from "../data/content";
import { treatmentPhoto } from "../data/media";
import { Photo } from "../components/media/Photo";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { FinalCTA } from "../sections/FinalCTA";
import { TreatmentEditorial } from "../components/treatments/TreatmentEditorial";
import { TreatmentPrices } from "../components/treatments/TreatmentPrices";
import { StructuredData } from "../components/seo/StructuredData";
import { treatmentCopy } from "../data/treatments";
import { photoUrl } from "../data/media";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema";

export function TreatmentDetailPage() {
  const { treatmentId = "" } = useParams();
  const found = findTreatment(treatmentId);
  const { t } = useLang();
  const copy = found ? treatmentCopy(found.treatment.id) : undefined;
  usePageMeta(
    found
      ? `${t(found.treatment.name)} in Ahrensburg bei Hamburg | satuuu99`
      : "Behandlung — satuuu99",
    copy ? metaDescription(t(copy.answer)) : undefined,
  );
  if (!found) return <Navigate to="/behandlungen" replace />;
  const { group, treatment } = found;
  const photo = treatmentPhoto(treatment.id, group.id);
  // Siblings in the same treatment family first: they are the comparison a
  // visitor on this page is most likely to be weighing up.
  const siblings = group.treatments.filter((item) => item.id !== treatment.id);
  const others = FOCUS_GROUPS.filter((item) => item.id !== group.id).flatMap(
    (item) => item.treatments.slice(0, 1),
  );
  const related = [...siblings, ...others].slice(0, 3);
  const path = `/behandlungen/${treatment.id}`;

  return (
    <>
      <StructuredData
        data={serviceSchema({
          name: t(treatment.name),
          description: copy ? t(copy.answer) : t(treatment.description),
          url: path,
          image: photoUrl(photo),
          serviceType: t(group.word),
          prices: treatment.prices,
        })}
      />
      {copy && <StructuredData data={faqSchema(copy.questions, t)} />}
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          {
            name: t({ de: "Behandlungen", en: "Treatments" }),
            path: "/behandlungen",
          },
          { name: t(treatment.name), path },
        ])}
      />
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
          <TreatmentPrices
            prices={treatment.prices}
            className="treatment-prices--page"
          />
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
          <Photo
            id={photo}
            sizes="(min-width: 900px) 45vw, 100vw"
            alt={`${t(treatment.name)} bei satuuu99 in Ahrensburg`}
            priority
          />
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
      <TreatmentEditorial group={group} treatment={treatment} />
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

/** Trims an answer paragraph to a length search results will display. */
function metaDescription(text: string, limit = 158) {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastSentence = cut.lastIndexOf(". ");
  if (lastSentence > limit * 0.5) return cut.slice(0, lastSentence + 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}
