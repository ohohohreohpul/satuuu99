import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { TreatmentCatalogue } from "../components/treatments/TreatmentCatalogue";
import { TreatmentComparison } from "../components/treatments/TreatmentComparison";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { ArrowRightIcon } from "../components/ui/Icons";
import { CONTACT, FOCUS_GROUPS, findTreatment } from "../data/content";
import { DECISION_ROUTES } from "../data/decision-guide";
import { MEDIA, groupPhoto } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema } from "../lib/schema";
import { FinalCTA } from "../sections/FinalCTA";

const OVERVIEW_FAQS = [
  {
    q: {
      de: "Welche Behandlung passt zu mir, wenn ich zum ersten Mal komme?",
      en: "Which treatment suits me on a first visit?",
    },
    a: {
      de: "Für einen ruhigen Einstieg ohne Ausziehen ist das Japanese Head Spa oder die Fußmassage gut geeignet. Wenn du Verspannungen in Nacken, Schultern und Rücken lösen möchtest, ist die Anti-Stress Gua Sha Massage ein guter Einstieg — schon ab 30 Minuten. Schreib uns vorher, wenn du unsicher bist — wir beraten dich ohne Buchungsdruck.",
      en: "For a calm start with no undressing, Japanese Head Spa or the foot massage work well. If you want to release tension in neck, shoulders and back, the anti-stress gua sha massage is a good way in — from just 30 minutes. Write to us beforehand if you are unsure — we advise with no pressure to book.",
    },
  },
  {
    q: {
      de: "Wie viele Behandlungen gibt es bei satuuu99?",
      en: "How many treatments does satuuu99 offer?",
    },
    a: {
      de: "Elf Anwendungen in vier Bereichen: Kopf mit dem Japanese Head Spa, Gesicht mit Aqua Facial, Sleep & Glow und Gua Sha, Füße mit Wellness-Fußpflege und Fußmassage, und Körper mit Anti-Stress Gua Sha Massage, Bellabambi, Schröpfmassage, Kerzenmassage und Dampfmassage.",
      en: "Eleven treatments across four areas: head with Japanese Head Spa; face with Aqua Facial, Sleep & Glow and gua sha; feet with wellness foot care and foot massage; and body with anti-stress gua sha massage, Bellabambi, cupping, candle and steam massage.",
    },
  },
  {
    q: {
      de: "Muss ich mich für jede Behandlung ausziehen?",
      en: "Do I have to undress for every treatment?",
    },
    a: {
      de: "Nein. Beim Head Spa bleibt die Kleidung an, bei den Gesichtsbehandlungen wird nur das Oberteil gelockert, bei den Fußritualen kommen Schuhe und Socken aus. Nur bei den Körpermassagen ziehst du dich bis auf die Unterwäsche aus und liegst dabei mit Leinen abgedeckt.",
      en: "No. For head spa your clothing stays on; for facial treatments only the top is loosened; for foot rituals shoes and socks come off. Only for the body massages do you undress to your underwear, and you lie draped in linen throughout.",
    },
  },
  {
    q: {
      de: "Sind die Behandlungen medizinisch?",
      en: "Are the treatments medical?",
    },
    a: {
      de: "Nein. Alle Anwendungen bei satuuu99 sind Wellness- und Pflegeanwendungen. Sie ersetzen keine Diagnose, keine Physiotherapie, keine dermatologische Behandlung und keine podologische Fußpflege.",
      en: "No. Every treatment at satuuu99 is a wellness and care treatment. None replaces a diagnosis, physiotherapy, dermatological care or podiatry.",
    },
  },
  {
    q: {
      de: "Kann ich zwei Behandlungen an einem Termin kombinieren?",
      en: "Can I combine two treatments in one appointment?",
    },
    a: {
      de: "Das hängt von der Terminlage ab. Frag uns vor der Buchung per E-Mail oder Telefon; wenn es zeitlich passt, planen wir beide Anwendungen hintereinander ein.",
      en: "That depends on availability. Ask us by email or phone before booking; if the timing works, we schedule both treatments one after the other.",
    },
  },
];

export function TreatmentsPage() {
  const { t } = useLang();
  const { search } = useLocation();
  usePageMeta(
    t({
      de: "Behandlungen im Vergleich: Head Spa, Gesicht, Füße, Massage | satuuu99 Ahrensburg",
      en: "Treatments compared: head spa, face, feet, massage | satuuu99 Ahrensburg",
    }),
    t({
      de: "Elf Wellnessbehandlungen in Ahrensburg bei Hamburg im direkten Vergleich: Fokus, Berührung, Wasser oder Wärme, Kleidung und Position. Finde die Anwendung, die zu dir passt.",
      en: "Eleven wellness treatments in Ahrensburg near Hamburg compared directly: focus, touch, water or heat, clothing and position. Find the treatment that suits you.",
    }),
  );

  useEffect(() => {
    const focus = new URLSearchParams(search).get("focus");
    if (focus)
      requestAnimationFrame(() =>
        document.getElementById(focus)?.scrollIntoView(),
      );
  }, [search]);

  return (
    <>
      <StructuredData data={faqSchema(OVERVIEW_FAQS, t)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          {
            name: t({ de: "Behandlungen", en: "Treatments" }),
            path: "/behandlungen",
          },
        ])}
      />
      <PageHero
        eyebrow={t({ de: "Behandlungen", en: "Treatments" })}
        title={
          <>
            {t({ de: "Finde deine", en: "Find your" })}
            <br />
            <span className="soft-text">
              {t({ de: "Art von Pause.", en: "kind of pause." })}
            </span>
          </>
        }
        copy={t({
          de: "Elf Rituale von Kopf bis Fuß, in einem kleinen privaten Studio in Ahrensburg bei Hamburg. Unten findest du alle Anwendungen im direkten Vergleich — damit du nicht nach Namen, sondern nach Gefühl entscheiden kannst.",
          en: "Eleven rituals from head to toe, in a small private studio in Ahrensburg near Hamburg. Below you will find every treatment compared directly — so you can choose by how you want to feel rather than by name.",
        })}
        photo={MEDIA.treatments.head}
      >
        <a className="button" href={CONTACT.booking}>
          {t({ de: "Termin buchen", en: "Book a visit" })}
          <ArrowRightIcon />
        </a>
      </PageHero>

      <section className="overview-intro section-shell">
        <div>
          <p className="eyebrow">
            {t({ de: "Kurz erklärt", en: "The short answer" })}
          </p>
          <h2>
            {t({
              de: "Vier Bereiche, elf Anwendungen.",
              en: "Four areas, eleven treatments.",
            })}
          </h2>
        </div>
        <div>
          <p className="answer-lead">
            {t({
              de: "satuuu99 bietet elf Wellnessbehandlungen in vier Bereichen an: Kopf, Gesicht, Füße und Körper. Alle Anwendungen sind Pflege- und Entspannungsrituale, keine medizinischen Behandlungen. Du wirst vor jedem Termin beraten, und Druck, Tempo und Wärme stimmen wir während der Anwendung mit dir ab.",
              en: "satuuu99 offers eleven wellness treatments across four areas: head, face, feet and body. All of them are care and relaxation rituals rather than medical treatments. Every appointment begins with a consultation, and pressure, pace and warmth are agreed with you as we go.",
            })}
          </p>
          <p>
            {t({
              de: "Die Unterschiede zwischen den Ritualen liegen weniger im Ergebnis als im Erlebnis: Manche arbeiten mit warmem Wasser, andere mit Öl, Wärme oder einem glatten Stein. Bei einigen bleibst du vollständig bekleidet, bei anderen liegst du mit Leinen abgedeckt auf der Massageliege. Genau diese Punkte kannst du in der Tabelle vergleichen, bevor du eine Detailseite öffnest.",
              en: "The differences between the rituals lie less in the result than in the experience: some work with warm water, others with oil, heat or a smooth stone. In some you stay fully dressed; in others you lie draped in linen on the massage table. Those are exactly the points you can compare in the table before opening a detail page.",
            })}
          </p>
        </div>
      </section>

      <section className="comparison-section section-shell" id="vergleich">
        <div className="section-heading">
          <p className="eyebrow">
            {t({ de: "Direkter Vergleich", en: "Side by side" })}
          </p>
          <h2>
            {t({
              de: "Alle elf Rituale auf einen Blick.",
              en: "All eleven rituals at a glance.",
            })}
          </h2>
        </div>
        <TreatmentComparison />
      </section>

      <section className="decision-guide section-shell">
        <div className="section-heading">
          <p className="eyebrow">
            {t({ de: "Wenn du so ankommst", en: "If you arrive like this" })}
          </p>
          <h2>
            {t({
              de: "Sag uns, wie es dir geht — nicht, wie das Ritual heißt.",
              en: "Tell us how you feel — not what the ritual is called.",
            })}
          </h2>
          <p>
            {t({
              de: "Die meisten Gäste wissen genau, was ihnen fehlt, aber nicht, welche Anwendung dazu passt. Diese Zuordnung ist ein Vorschlag, keine Regel.",
              en: "Most guests know exactly what is bothering them but not which treatment fits. These pairings are a suggestion, not a rule.",
            })}
          </p>
        </div>
        <ul className="decision-list">
          {DECISION_ROUTES.map((route) => {
            const found = findTreatment(route.treatmentId);
            if (!found) return null;
            return (
              <li key={route.situation.de}>
                <p className="decision-situation">
                  {t({ de: "„", en: "“" })}
                  {t(route.situation)}
                  {t({ de: "“", en: "”" })}
                </p>
                <Link to={`/behandlungen/${route.treatmentId}`}>
                  {t(found.treatment.name)}
                  <ArrowRightIcon />
                </Link>
                <p className="decision-why">{t(route.why)}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <nav
        className="page-index section-shell"
        aria-label={t({ de: "Behandlungsbereiche", en: "Treatment areas" })}
      >
        {FOCUS_GROUPS.map((group, index) => (
          <a key={group.id} href={`#${group.id}`}>
            0{index + 1} {t(group.word)}
          </a>
        ))}
      </nav>

      <section className="family-gallery section-shell">
        {FOCUS_GROUPS.map((group) => (
          <figure key={group.id}>
            <Photo
              id={groupPhoto(group.id)}
              sizes="(min-width: 900px) 24vw, 45vw"
            />
            <figcaption>
              <strong>{t(group.word)}</strong>
              {t(group.blurb)}
            </figcaption>
          </figure>
        ))}
      </section>

      <div className="section-shell catalogue-shell">
        <TreatmentCatalogue groups={FOCUS_GROUPS} />
      </div>

      <section className="overview-boundary section-shell">
        <div>
          <p className="eyebrow">
            {t({ de: "Grenzen, klar benannt", en: "Clear boundaries" })}
          </p>
          <h2>
            {t({
              de: "Was wir nicht anbieten.",
              en: "What we do not offer.",
            })}
          </h2>
        </div>
        <div>
          <p>
            {t({
              de: "Wir sind ein Wellnessstudio. Wir stellen keine Diagnosen, verordnen nichts und behandeln keine Beschwerden. Für Physiotherapie, medizinische Massage nach Verordnung, dermatologische Hautbehandlungen, podologische Fußpflege oder die Abklärung von Schmerzen, Entzündungen und Haarausfall ist eine entsprechend qualifizierte Praxis zuständig — und das ist keine Einschränkung, sondern die richtige Reihenfolge.",
              en: "We are a wellness studio. We do not diagnose, prescribe or treat complaints. Physiotherapy, prescribed medical massage, dermatological skin treatment, podiatry and the assessment of pain, inflammation or hair loss belong with an appropriately qualified practice — that is not a limitation but the right order of things.",
            })}
          </p>
          <p>
            {t({
              de: "satuuu99 ist ein kleines, privates Studio in der Manhagener Allee in Ahrensburg mit einem Behandlungsraum. Wer eine Resort-Anlage erwartet, ist bei uns an der falschen Adresse; wer einen persönlichen Termin ohne Publikum sucht, genau richtig.",
              en: "satuuu99 is a small, private studio on Manhagener Allee in Ahrensburg with one treatment room. If you are expecting a resort, we are the wrong address; if you want a personal appointment with no audience, you are in the right place.",
            })}
          </p>
        </div>
      </section>

      <section className="faq-section section-shell">
        <p className="eyebrow">
          {t({ de: "Häufige Fragen", en: "Common questions" })}
        </p>
        <div>
          {OVERVIEW_FAQS.map((faq, index) => (
            <article key={faq.q.de}>
              <span>0{index + 1}</span>
              <h2>{t(faq.q)}</h2>
              <p>{t(faq.a)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="choice-note section-shell">
        <p className="eyebrow">
          {t({ de: "Noch unsicher?", en: "Not sure yet?" })}
        </p>
        <h2>
          {t({
            de: "Wir finden gemeinsam heraus, was gerade zu dir passt.",
            en: "We’ll work out together what feels right for you.",
          })}
        </h2>
        <Link className="text-link" to="/kontakt">
          {t({ de: "Mit uns sprechen", en: "Talk to us" })}
          <ArrowRightIcon />
        </Link>
      </section>
      <FinalCTA />
    </>
  );
}
