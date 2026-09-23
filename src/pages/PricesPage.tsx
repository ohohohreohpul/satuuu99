import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { TreatmentPrices } from "../components/treatments/TreatmentPrices";
import { CONTACT, FOCUS_GROUPS } from "../data/content";
import { treatmentFacts } from "../data/treatments/comparison";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema } from "../lib/schema";
import { FinalCTA } from "../sections/FinalCTA";

const PRICE_FAQS = [
  {
    q: {
      de: "Wo finde ich die aktuellen Preise von satuuu99?",
      en: "Where do I find current satuuu99 prices?",
    },
    a: {
      de: "Die verbindlichen Preise und Behandlungszeiten stehen ausschließlich in der offiziellen Preisliste auf satuuu99.de. Dort ist auch vermerkt, ab welchem Datum sie gelten. Im Online-Kalender siehst du zusätzlich, welche Varianten gerade buchbar sind.",
      en: "Confirmed prices and durations appear only in the official price list on satuuu99.de, together with the date they apply from. The online calendar also shows which options are currently bookable.",
    },
  },
  {
    q: {
      de: "Warum stehen die Preise nicht auf dieser Seite?",
      en: "Why are the prices not listed on this page?",
    },
    a: {
      de: "Damit du nie einen veralteten Preis liest. Preise und Behandlungszeiten ändern sich, und wir führen sie an genau einer Stelle: in der offiziellen Preisliste. Diese Seite erklärt stattdessen, wie die Preise zustande kommen und wie du die passende Variante wählst.",
      en: "So that you never read an outdated figure. Prices and durations change, and we maintain them in exactly one place: the official price list. This page instead explains how the prices are structured and how to choose the right option.",
    },
  },
  {
    q: {
      de: "Wovon hängt der Preis einer Behandlung ab?",
      en: "What determines the price of a treatment?",
    },
    a: {
      de: "Vor allem von der gebuchten Dauer und vom Aufwand der Anwendung. Längere Varianten kosten mehr, weil mehr Behandlungszeit reserviert wird. Anwendungen mit Gerät, Produkt oder besonderem Material liegen in der Regel über einer reinen Massagezeit gleicher Länge.",
      en: "Mainly the duration booked and how involved the treatment is. Longer options cost more because more treatment time is reserved. Treatments using a device, product or special material usually sit above a pure massage of the same length.",
    },
  },
  {
    q: {
      de: "Welche Zahlungsarten akzeptiert satuuu99?",
      en: "Which payment methods does satuuu99 accept?",
    },
    a: {
      de: "Nach aktueller Studioinformation kannst du mit Karte, PayPal oder bar bezahlen. Bezahlt wird nach der Behandlung im Studio; für die Online-Buchung ist keine Vorauszahlung nötig.",
      en: "According to current studio information you can pay by card, PayPal or cash. Payment is taken after the treatment in the studio; no prepayment is required to book online.",
    },
  },
  {
    q: {
      de: "Ist ein Trinkgeld üblich?",
      en: "Is a tip expected?",
    },
    a: {
      de: "Nein. Ein Trinkgeld ist bei uns nicht erwartet und nicht eingerechnet. Wenn du es trotzdem gern gibst, freuen wir uns — aber der genannte Preis ist der vollständige Preis.",
      en: "No. A tip is neither expected nor included. If you would like to leave one we are glad of it — but the stated price is the full price.",
    },
  },
  {
    q: {
      de: "Was passiert, wenn ich meinen Termin nicht einhalten kann?",
      en: "What happens if I cannot keep my appointment?",
    },
    a: {
      de: "Sag uns möglichst früh per Telefon oder E-Mail ab, damit wir den Termin weitergeben können. Die jeweils gültigen Bedingungen zu Absagen und Terminänderungen erfährst du direkt bei uns oder im Buchungssystem.",
      en: "Let us know by phone or email as early as you can so we can pass the slot on. The applicable conditions for cancellations and changes are available directly from us or in the booking system.",
    },
  },
];

export function PricesPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Preise & Behandlungsdauer | satuuu99 Ahrensburg bei Hamburg",
      en: "Prices & treatment durations | satuuu99 Ahrensburg near Hamburg",
    }),
    t({
      de: "So sind die Preise bei satuuu99 in Ahrensburg aufgebaut: Dauer, Aufwand, Zahlungsarten und die Wahl der passenden Variante. Verbindliche Preise in der offiziellen Preisliste.",
      en: "How prices are structured at satuuu99 in Ahrensburg: duration, complexity, payment methods and choosing the right option. Confirmed prices in the official price list.",
    }),
  );

  return (
    <>
      <StructuredData data={faqSchema(PRICE_FAQS, t)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          { name: t({ de: "Preise", en: "Prices" }), path: "/preise" },
        ])}
      />
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
          <p className="answer-lead">
            {t({
              de: "Die verbindlichen Preise und Behandlungszeiten von satuuu99 stehen in der offiziellen Preisliste — dort und nur dort, damit du nie eine veraltete Zahl liest. Diese Seite erklärt, wie die Preise aufgebaut sind, welche Dauer zu welchem Anlass passt und wie du bei uns bezahlst.",
              en: "The confirmed prices and durations for satuuu99 are in the official price list — there and only there, so you never read an outdated figure. This page explains how the prices are structured, which duration suits which occasion, and how payment works.",
            })}
          </p>
          <a className="button" href={CONTACT.prices}>
            {t({ de: "Preisliste öffnen", en: "Open price list" })}
            <ArrowUpRightIcon />
          </a>
        </div>
      </section>

      <section className="price-logic section-shell">
        <div className="section-heading">
          <p className="eyebrow">
            {t({ de: "Wie der Preis entsteht", en: "How the price is set" })}
          </p>
          <h2>
            {t({
              de: "Drei Dinge bestimmen, was dein Termin kostet.",
              en: "Three things decide what your appointment costs.",
            })}
          </h2>
        </div>
        <ol className="price-logic-list">
          <li>
            <span>01</span>
            <h3>
              {t({ de: "Die gebuchte Dauer", en: "The duration booked" })}
            </h3>
            <p>
              {t({
                de: "Der größte Faktor. Reserviert wird Behandlungszeit — und die längere Variante derselben Anwendung kostet entsprechend mehr. Rechne zusätzlich einige Minuten für das Vorgespräch, das Umkleiden und das ruhige Ankommen danach ein; diese Zeit ist im Termin enthalten, aber nicht Teil der reinen Behandlungszeit.",
                en: "The biggest factor. What is reserved is treatment time, so the longer option of the same treatment costs proportionally more. Allow a few extra minutes for the consultation, changing and settling afterwards; that time is part of the appointment but not of the treatment time itself.",
              })}
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>
              {t({ de: "Der Aufwand der Anwendung", en: "How involved it is" })}
            </h3>
            <p>
              {t({
                de: "Eine Anwendung mit Gerät, Pflegeprodukt oder besonderem Material — etwa das Aqua Facial, die Schröpfmassage oder die Kerzenmassage — liegt in der Regel über einer reinen Massagezeit gleicher Länge. Das liegt am Material und an der Vorbereitung, nicht an einem angenommenen Mehrwert.",
                en: "A treatment involving a device, care product or special material — Aqua Facial, cupping massage or candle massage, for example — usually sits above a pure massage of the same length. That reflects materials and preparation, not an assumed added value.",
              })}
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>{t({ de: "Nichts danach", en: "Nothing afterwards" })}</h3>
            <p>
              {t({
                de: "Es gibt bei uns keine Pflichtpakete, keine Abos und keinen Verkaufsteil am Ende des Termins. Wenn du wissen möchtest, welches Produkt wir verwendet haben, sagen wir es dir gern — ein Verkaufsgespräch gehört nicht dazu. Ein Trinkgeld ist nicht erwartet und nicht eingerechnet.",
                en: "There are no mandatory packages, no subscriptions and no sales pitch at the end of your appointment. If you want to know which product we used we will happily tell you — a sales conversation is not part of it. A tip is neither expected nor included.",
              })}
            </p>
          </li>
        </ol>
      </section>

      <section className="price-duration section-shell">
        <figure className="price-duration-image">
          <Photo
            id="skin-texture-eye-detail"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
        </figure>
        <div>
          <p className="eyebrow">
            {t({ de: "Welche Dauer?", en: "Which duration?" })}
          </p>
          <h2>
            {t({
              de: "Kurz, mittel oder lang — nach Anlass, nicht nach Budget.",
              en: "Short, medium or long — by occasion, not by budget.",
            })}
          </h2>
          <p>
            {t({
              de: "Eine kürzere Variante ist sinnvoll, wenn du eine Anwendung zum ersten Mal ausprobierst, wenn du in der Mittagspause kommst oder wenn du einen klaren Fokus hast — etwa nur Nacken und Schultern. Sie reicht für ein vollständiges Ritual, lässt aber weniger Raum für Wiederholungen.",
              en: "A shorter option makes sense when you are trying a treatment for the first time, when you come in a lunch break, or when you have one clear focus — neck and shoulders only, for example. It is enough for a complete ritual but leaves less room for repetition.",
            })}
          </p>
          <p>
            {t({
              de: "Die längere Variante lohnt sich, wenn du wirklich abschalten möchtest, wenn mehrere Körperbereiche einbezogen werden sollen oder wenn du dazu neigst, in den ersten zwanzig Minuten noch gedanklich bei der Arbeit zu sein. Bei Geschenken ist die längere Dauer die verlässlichere Wahl, weil sie mehr Spielraum lässt.",
              en: "The longer option is worth it if you genuinely want to switch off, if several areas of the body should be included, or if you tend to spend the first twenty minutes still thinking about work. For gifts the longer duration is the more reliable choice, because it leaves more room.",
            })}
          </p>
          <p>
            {t({
              de: "Welche Dauern für welche Anwendung angeboten werden, steht in der Preisliste und im Kalender. Wenn du zwischen zwei Varianten schwankst, schreib uns kurz — wir sagen dir ehrlich, ob die längere in deinem Fall einen Unterschied macht.",
              en: "Which durations are offered for which treatment is set out in the price list and the calendar. If you are torn between two options, write to us — we will tell you honestly whether the longer one makes a difference in your case.",
            })}
          </p>
        </div>
      </section>

      <section className="prices-overview section-shell">
        <div className="section-heading">
          <p className="eyebrow">
            {t({ de: "Was es gibt", en: "What is offered" })}
          </p>
          <h2>
            {t({
              de: "Elf Anwendungen, nach Bereich sortiert.",
              en: "Eleven treatments, sorted by area.",
            })}
          </h2>
          <p>
            {t({
              de: "Die Angabe hinter jedem Namen nennt die Position und die Kleidung — die beiden Punkte, die Gäste am häufigsten vorher wissen möchten.",
              en: "The note after each name gives the position and clothing — the two things guests most often want to know in advance.",
            })}
          </p>
        </div>
        <div className="prices-list">
          {FOCUS_GROUPS.map((group, index) => (
            <div className="price-group" key={group.id}>
              <p>
                <span>0{index + 1}</span>
                {t(group.word)}
              </p>
              <ul>
                {group.treatments.map((item) => {
                  const facts = treatmentFacts(item.id);
                  return (
                    <li key={item.id}>
                      <Link to={`/behandlungen/${item.id}`}>
                        {t(item.name)}
                      </Link>
                      {facts && (
                        <small>
                          {t(facts.position)} · {t(facts.clothing)}
                        </small>
                      )}
                      <TreatmentPrices prices={item.prices} />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="prices-actions">
          <a className="button" href={CONTACT.prices}>
            {t({ de: "Verbindliche Preise", en: "Confirmed prices" })}
            <ArrowUpRightIcon />
          </a>
          <Link className="text-link" to="/behandlungen#vergleich">
            {t({ de: "Alle im Vergleich", en: "Compare them all" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="faq-section section-shell">
        <p className="eyebrow">
          {t({ de: "Preise & Zahlung", en: "Prices & payment" })}
        </p>
        <div>
          {PRICE_FAQS.map((faq, index) => (
            <article key={faq.q.de}>
              <span>0{index + 1}</span>
              <h2>{t(faq.q)}</h2>
              <p>{t(faq.a)}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
