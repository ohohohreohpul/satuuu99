import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";

export function ContactPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Anfahrt & Kontakt | satuuu99 bei Hamburg",
      en: "Directions & Contact | satuuu99 near Hamburg",
    }),
    t({
      de: "Termin, Anfahrt und Kontakt zu satuuu99 in Ahrensburg bei Hamburg. Du findest uns in der Manhagener Allee 45.",
      en: "Booking, directions and contact for satuuu99 in Ahrensburg near Hamburg, at Manhagener Allee 45.",
    }),
  );
  const faqs = [
    {
      q: {
        de: "Welche Behandlung passt zu mir?",
        en: "Which treatment is right for me?",
      },
      a: {
        de: "Wenn du noch unsicher bist, schreib uns vorab. Wir helfen dir, aus den verfügbaren Anwendungen zu wählen.",
        en: "If you are unsure, send us a note before booking. We’ll help you choose from the available treatments.",
      },
    },
    {
      q: {
        de: "Wann ist das Studio geöffnet?",
        en: "When is the studio open?",
      },
      a: {
        de: "Montags bis freitags sind wir von 10:00 bis 20:00 Uhr geöffnet, samstags von 10:00 bis 18:00 Uhr. Maßgeblich für deinen Besuch ist dein gebuchter Termin.",
        en: "We are open Monday to Friday from 10am to 8pm and Saturday from 10am to 6pm. Your booked appointment is the relevant time for your visit.",
      },
    },
    {
      q: {
        de: "Kann ich direkt am Studio parken?",
        en: "Can I park at the studio?",
      },
      a: {
        de: "Ja. Nach aktueller Studioinformation befinden sich Parkplätze direkt vor unserem Eingang in der Manhagener Allee 45.",
        en: "Yes. According to current studio information, parking is available directly outside our entrance on Manhagener Allee 45.",
      },
    },
    {
      q: {
        de: "Welche Zahlungsarten werden akzeptiert?",
        en: "Which payment methods are accepted?",
      },
      a: {
        de: "Du kannst laut aktueller Studioinformation mit Karte, PayPal oder bar bezahlen.",
        en: "According to current studio information, you can pay by card, PayPal or cash.",
      },
    },
    {
      q: {
        de: "Wie erreiche ich satuuu99 telefonisch?",
        en: "How can I call satuuu99?",
      },
      a: {
        de: `Du erreichst uns unter ${CONTACT.phone}. Wenn wir gerade in einer Behandlung sind, schreib uns alternativ eine E-Mail.`,
        en: `Call us on ${CONTACT.phone}. If we are with a guest, you can also send an email.`,
      },
    },
    {
      q: { de: "Wie buche ich meinen Termin?", en: "How do I book?" },
      a: {
        de: "Über den Online-Kalender siehst du die aktuell verfügbaren Termine und kannst direkt buchen.",
        en: "The online calendar shows current availability and lets you book directly.",
      },
    },
    {
      q: {
        de: "Wo finde ich die aktuellen Preise?",
        en: "Where can I find current prices?",
      },
      a: {
        de: "Unsere offizielle Preisliste enthält Preise, Dauer und buchbare Varianten.",
        en: "Our official price list includes prices, durations and available options.",
      },
    },
  ];
  return (
    <>
      <section className="contact-page section-shell">
        <div className="contact-page-intro">
          <p className="eyebrow">{t({ de: "Kontakt", en: "Contact" })}</p>
          <h1>
            {t({ de: "Wir halten dir", en: "A little space," })}
            <br />
            <span className="soft-text">
              {t({ de: "eine Pause frei.", en: "just for you." })}
            </span>
          </h1>
        </div>
        <div className="contact-options">
          <a href={CONTACT.booking}>
            <span>01</span>
            <div>
              <small>{t({ de: "Termin", en: "Appointment" })}</small>
              <h2>{t({ de: "Online buchen", en: "Book online" })}</h2>
            </div>
            <ArrowUpRightIcon />
          </a>
          <a href={`mailto:${CONTACT.email}`}>
            <span>02</span>
            <div>
              <small>E-Mail</small>
              <h2>{CONTACT.email}</h2>
            </div>
            <ArrowRightIcon />
          </a>
          <a href={CONTACT.maps} target="_blank" rel="noreferrer">
            <span>03</span>
            <div>
              <small>{t({ de: "Studio", en: "Studio" })}</small>
              <h2>
                {CONTACT.addressLines[0]}
                <br />
                {CONTACT.addressLines[1]}
              </h2>
            </div>
            <ArrowUpRightIcon />
          </a>
          <a href={CONTACT.phoneHref}>
            <span>04</span>
            <div>
              <small>{t({ de: "Telefon", en: "Phone" })}</small>
              <h2>{CONTACT.phone}</h2>
            </div>
            <ArrowRightIcon />
          </a>
        </div>
      </section>
      <section className="faq-section section-shell">
        <p className="eyebrow">
          {t({ de: "Gut zu wissen", en: "Good to know" })}
        </p>
        <div>
          {faqs.map((faq, index) => (
            <article key={faq.q.de}>
              <span>0{index + 1}</span>
              <h2>{t(faq.q)}</h2>
              <p>{t(faq.a)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
