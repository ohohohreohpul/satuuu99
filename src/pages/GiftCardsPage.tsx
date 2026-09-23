import { Link } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { ArrowRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

const GIFT_FAQS = [
  {
    q: {
      de: "Kann ich bei satuuu99 aktuell einen Gutschein kaufen?",
      en: "Can I currently buy a satuuu99 gift card?",
    },
    a: {
      de: "Der Verkauf neuer Gutscheine ist derzeit pausiert. Bestehende Gutscheine kannst du weiterhin einlösen. Wenn du jemandem eine Behandlung schenken möchtest, schreib uns — wir sagen dir, welche Möglichkeit es gerade gibt, statt dich auf einen Kauf zu vertrösten, den wir nicht anbieten.",
      en: "Sales of new gift cards are currently paused. Existing gift cards can still be redeemed. If you would like to give someone a treatment, write to us — we will tell you what is possible right now rather than pointing you to a purchase we do not offer.",
    },
  },
  {
    q: {
      de: "Wie löse ich einen Satuuu-Gutschein ein?",
      en: "How do I redeem a Satuuu gift card?",
    },
    a: {
      de: "Schreib uns eine E-Mail mit dem Gutscheincode oder ruf an. Wir prüfen den Gutschein, besprechen mit dir die passende Behandlung und legen gemeinsam einen Termin fest. Bring den Gutschein zum Termin mit — als Karte oder als Foto auf dem Handy.",
      en: "Send us an email with the gift card code, or call. We check the card, discuss which treatment suits and agree a time together. Bring the card to your appointment — as a card or a photo on your phone.",
    },
  },
  {
    q: {
      de: "Kann ich einen Gutschein für eine andere Behandlung verwenden?",
      en: "Can I use a gift card for a different treatment?",
    },
    a: {
      de: "In der Regel ja, wenn er auf einen Betrag und nicht auf eine bestimmte Anwendung lautet. Bei einem Gutschein für eine konkrete Behandlung sprich uns bitte vorher an; wir finden fast immer eine Lösung.",
      en: "Generally yes, if it is for an amount rather than a specific treatment. For a card naming a particular treatment, please speak to us first; we can almost always find a solution.",
    },
  },
  {
    q: {
      de: "Wie lange ist mein Gutschein gültig?",
      en: "How long is my gift card valid?",
    },
    a: {
      de: "Das hängt vom jeweiligen Gutschein ab. Melde dich mit deinem Code bei uns, dann prüfen wir die Gültigkeit. Warte damit nicht bis zum letzten Monat — für beliebte Zeiten am Abend und am Samstag ist etwas Vorlauf sinnvoll.",
      en: "That depends on the individual card. Contact us with your code and we will check its validity. Do not leave it until the last month — popular evening and Saturday slots benefit from some notice.",
    },
  },
  {
    q: {
      de: "Kann ich mit einem Gutschein online buchen?",
      en: "Can I book online with a gift card?",
    },
    a: {
      de: "Buche den Termin wie gewohnt im Online-Kalender und schreib uns kurz, dass du einen Gutschein einlösen möchtest. Dann ist beim Termin klar, wie abgerechnet wird, und du musst nicht vor Ort etwas klären.",
      en: "Book the appointment as usual in the online calendar and send us a note that you would like to redeem a gift card. That way the billing is clear before your visit and nothing needs sorting out on the day.",
    },
  },
  {
    q: {
      de: "Welche Behandlung soll ich verschenken?",
      en: "Which treatment should I give as a gift?",
    },
    a: {
      de: "Wenn du die Vorlieben nicht kennst, ist die Kerzenmassage eine verlässliche Wahl, weil sie leicht zu mögen und wenig fordernd ist. Das Japanese Head Spa ist ein besonderes Geschenk für Menschen, die schwer abschalten — aber bedenke, dass dabei die Haare nass werden.",
      en: "If you do not know their preferences, candle massage is a reliable choice because it is easy to enjoy and undemanding. Japanese Head Spa makes a memorable gift for people who struggle to switch off — but bear in mind that it leaves the hair wet.",
    },
  },
];

export function GiftCardsPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Gutschein einlösen | satuuu99 Ahrensburg bei Hamburg",
      en: "Redeem a gift card | satuuu99 Ahrensburg near Hamburg",
    }),
    t({
      de: "So löst du deinen satuuu99 Gutschein in Ahrensburg bei Hamburg ein: Code senden, Behandlung wählen, Termin festlegen. Der Verkauf neuer Gutscheine ist derzeit pausiert.",
      en: "How to redeem your satuuu99 gift card in Ahrensburg near Hamburg: send the code, choose a treatment, agree a time. Sales of new gift cards are currently paused.",
    }),
  );
  const subject = encodeURIComponent(
    t({ de: "Satuuu-Gutschein einlösen", en: "Redeem a Satuuu gift card" }),
  );

  return (
    <>
      <StructuredData data={faqSchema(GIFT_FAQS, t)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          {
            name: t({ de: "Gutscheine", en: "Gift cards" }),
            path: "/gutscheine",
          },
        ])}
      />
      <PageHero
        eyebrow={t({ de: "Zeit verschenken", en: "Give a little time" })}
        title={
          <>
            {t({ de: "Für jemanden,", en: "For someone" })}
            <br />
            <span className="soft-text">
              {t({ de: "der dir wichtig ist.", en: "who matters to you." })}
            </span>
          </>
        }
        copy={t({
          de: "Ein Moment zum Ankommen, Durchatmen und Sich-kümmern-lassen. Bestehende Satuuu-Gutscheine kannst du jederzeit einlösen — der Verkauf neuer Gutscheine ist derzeit pausiert.",
          en: "A moment to arrive, breathe and let someone take care of you. Existing Satuuu gift cards can be redeemed at any time — sales of new gift cards are currently paused.",
        })}
        photo={MEDIA.editorial.gift}
      />

      <section className="gift-page-body section-shell">
        <p className="eyebrow">
          {t({ de: "Gutschein einlösen", en: "Redeem a gift card" })}
        </p>
        <div>
          <h2>
            {t({
              de: "Dein Gutschein wartet auf seinen guten Moment.",
              en: "Your gift card is waiting for the right moment.",
            })}
          </h2>
          <p className="answer-lead">
            {t({
              de: "Du hast einen Satuuu-Gutschein? Schreib uns eine E-Mail mit dem Code oder ruf an. Wir prüfen die Gültigkeit, besprechen mit dir, welche der elf Anwendungen passt, und legen gemeinsam einen Termin fest. Den Gutschein bringst du zum Termin mit — als Karte oder als Foto.",
              en: "Have a Satuuu gift card? Send us an email with the code, or call. We check its validity, discuss which of the eleven treatments suits, and agree a time together. Bring the card to your appointment — as a card or a photo.",
            })}
          </p>
          <a
            className="button"
            href={`mailto:${CONTACT.email}?subject=${subject}`}
          >
            {t({ de: "Gutschein einlösen", en: "Redeem your gift card" })}
            <ArrowRightIcon />
          </a>
          <p className="status-note">
            {t({
              de: "Der Verkauf neuer Gutscheine ist derzeit pausiert.",
              en: "Sales of new gift cards are currently paused.",
            })}
          </p>
        </div>
      </section>

      <section className="gift-steps section-shell">
        <div className="section-heading">
          <p className="eyebrow">
            {t({ de: "In drei Schritten", en: "In three steps" })}
          </p>
          <h2>
            {t({
              de: "Vom Gutschein zum Termin.",
              en: "From gift card to appointment.",
            })}
          </h2>
        </div>
        <ol>
          <li>
            <h3>{t({ de: "Code senden", en: "Send the code" })}</h3>
            <p>
              {t({
                de: `Schreib an ${CONTACT.email} oder ruf uns unter ${CONTACT.phone} an. Nenne den Gutscheincode und, falls bekannt, den Betrag oder die Behandlung, auf die er lautet.`,
                en: `Write to ${CONTACT.email} or call us on ${CONTACT.phone}. Give the gift card code and, if you know it, the amount or the treatment it names.`,
              })}
            </p>
          </li>
          <li>
            <h3>{t({ de: "Behandlung wählen", en: "Choose a treatment" })}</h3>
            <p>
              {t({
                de: "Wenn du nicht sicher bist, welche der elf Anwendungen passt, beschreib einfach, wie es dir geht — wir empfehlen dir etwas. Der Vergleich aller Behandlungen hilft dir bei der Vorauswahl.",
                en: "If you are unsure which of the eleven treatments fits, simply describe how you feel and we will suggest something. The comparison of all treatments helps you shortlist.",
              })}
            </p>
          </li>
          <li>
            <h3>{t({ de: "Termin festlegen", en: "Agree a time" })}</h3>
            <p>
              {t({
                de: "Buche im Online-Kalender oder lass uns gemeinsam einen Termin finden. Für Abende und Samstage plane etwas Vorlauf ein — das sind die beliebtesten Zeiten.",
                en: "Book in the online calendar or let us find a time together. Allow some notice for evenings and Saturdays — those are the most popular slots.",
              })}
            </p>
          </li>
        </ol>
        <div className="prices-actions">
          <Link className="text-link" to="/behandlungen#vergleich">
            {t({
              de: "Behandlungen vergleichen",
              en: "Compare treatments",
            })}
            <ArrowRightIcon />
          </Link>
          <Link className="text-link" to="/kontakt">
            {t({ de: "Kontakt & Anfahrt", en: "Contact & directions" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="contact-photos section-shell">
        <figure>
          <Photo
            id="head-spa-forehead-hold"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Japanese Head Spa — ein Geschenk für Menschen, die schwer abschalten",
              en: "Japanese Head Spa — a gift for people who struggle to switch off",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="body-massage-shoulders"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Kerzenmassage — eine verlässliche Wahl, wenn du die Vorlieben nicht kennst",
              en: "Candle massage — a reliable choice when you do not know their preferences",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo id="foot-care-towel" sizes="(min-width: 900px) 32vw, 100vw" />
          <figcaption className="media-note">
            {t({
              de: "Wellness-Fußpflege — für alle, die viel auf den Beinen sind",
              en: "Wellness foot care — for anyone who is on their feet a lot",
            })}
          </figcaption>
        </figure>
      </section>

      <section className="faq-section section-shell">
        <p className="eyebrow">
          {t({ de: "Fragen zu Gutscheinen", en: "About gift cards" })}
        </p>
        <div>
          {GIFT_FAQS.map((faq, index) => (
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
