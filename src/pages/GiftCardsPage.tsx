import { Link } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT, GIFT_CARD_PURCHASE } from "../data/content";
import { isOfferPromoted, OFFER_PATH } from "../data/offer";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

const GIFT_FAQS = [
  {
    q: {
      de: "Wie kann ich bei satuuu99 einen Gutschein kaufen?",
      en: "How can I buy a satuuu99 gift card?",
    },
    a: {
      de: `Online in unserem Buchungsportal, telefonisch oder per WhatsApp unter ${CONTACT.phone} oder per E-Mail an ${CONTACT.email}. Sagen Sie uns, ob der Gutschein auf einen Betrag oder eine bestimmte Behandlung lauten soll — wir beraten Sie gern, was zur beschenkten Person passt.`,
      en: `Online in our booking portal, by phone or WhatsApp on ${CONTACT.phone}, or by email to ${CONTACT.email}. Tell us whether the card should be for an amount or a particular treatment — we are happy to suggest what suits the person you are giving it to.`,
    },
  },
  {
    q: {
      de: "Wie löse ich einen Satuuu-Gutschein ein?",
      en: "How do I redeem a Satuuu gift card?",
    },
    a: {
      de: "Schreiben Sie uns eine E-Mail mit dem Gutscheincode oder rufen Sie an. Wir prüfen den Gutschein, besprechen mit Ihnen die passende Behandlung und legen gemeinsam einen Termin fest. Bringen Sie den Gutschein zum Termin mit — als Karte oder als Foto auf dem Handy.",
      en: "Send us an email with the gift card code, or call. We check the card, discuss which treatment suits and agree a time together. Bring the card to your appointment — as a card or a photo on your phone.",
    },
  },
  {
    q: {
      de: "Kann ich einen Gutschein für eine andere Behandlung verwenden?",
      en: "Can I use a gift card for a different treatment?",
    },
    a: {
      de: "In der Regel ja, wenn er auf einen Betrag und nicht auf eine bestimmte Anwendung lautet. Bei einem Gutschein für eine konkrete Behandlung sprechen Sie uns bitte vorher an; wir finden fast immer eine Lösung.",
      en: "Generally yes, if it is for an amount rather than a specific treatment. For a card naming a particular treatment, please speak to us first; we can almost always find a solution.",
    },
  },
  {
    q: {
      de: "Wie lange ist mein Gutschein gültig?",
      en: "How long is my gift card valid?",
    },
    a: {
      de: "Das hängt vom jeweiligen Gutschein ab. Melden Sie sich mit Ihrem Code bei uns, dann prüfen wir die Gültigkeit. Warten Sie damit nicht bis zum letzten Monat — für beliebte Zeiten am Abend und am Samstag ist etwas Vorlauf sinnvoll.",
      en: "That depends on the individual card. Contact us with your code and we will check its validity. Do not leave it until the last month — popular evening and Saturday slots benefit from some notice.",
    },
  },
  {
    q: {
      de: "Kann ich mit einem Gutschein online buchen?",
      en: "Can I book online with a gift card?",
    },
    a: {
      de: "Buchen Sie den Termin wie gewohnt im Online-Kalender und schreiben Sie uns kurz, dass Sie einen Gutschein einlösen möchten. Dann ist beim Termin klar, wie abgerechnet wird, und Sie müssen nicht vor Ort etwas klären.",
      en: "Book the appointment as usual in the online calendar and send us a note that you would like to redeem a gift card. That way the billing is clear before your visit and nothing needs sorting out on the day.",
    },
  },
  {
    q: {
      de: "Welche Behandlung soll ich verschenken?",
      en: "Which treatment should I give as a gift?",
    },
    a: {
      de: "Wenn Sie die Vorlieben nicht kennen, ist die Kerzenmassage eine verlässliche Wahl, weil sie leicht zu mögen und wenig fordernd ist. Das Japanese Head Spa ist ein besonderes Geschenk für Menschen, die schwer abschalten — aber bedenken Sie, dass dabei die Haare nass werden.",
      en: "If you do not know their preferences, candle massage is a reliable choice because it is easy to enjoy and undemanding. Japanese Head Spa makes a memorable gift for people who struggle to switch off — but bear in mind that it leaves the hair wet.",
    },
  },
];

export function GiftCardsPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Gutscheine kaufen & einlösen | satuuu99 Ahrensburg bei Hamburg",
      en: "Buy & redeem gift cards | satuuu99 Ahrensburg near Hamburg",
    }),
    t({
      de: "Gutscheine von satuuu99 in Ahrensburg bei Hamburg: online, telefonisch, per WhatsApp oder E-Mail kaufen — und so einfach lösen Sie Ihren Gutschein ein.",
      en: "Gift cards from satuuu99 in Ahrensburg near Hamburg: buy online, by phone, on WhatsApp or by email — and how easily you redeem yours.",
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
              {t({ de: "der Ihnen wichtig ist.", en: "who matters to you." })}
            </span>
          </>
        }
        copy={t({
          de: "Ein Moment zum Ankommen, Durchatmen und Sich-kümmern-lassen. Gutscheine erhalten Sie online, telefonisch, per WhatsApp oder E-Mail — und bestehende Satuuu-Gutscheine können Sie jederzeit einlösen.",
          en: "A moment to arrive, breathe and let someone take care of you. Gift cards are available online, by phone, on WhatsApp or by email — and existing Satuuu gift cards can be redeemed at any time.",
        })}
        photo={MEDIA.editorial.gift}
      >
        <a className="button" href={CONTACT.booking}>
          {t({ de: "Gutschein online kaufen", en: "Buy a gift card online" })}
          <ArrowUpRightIcon />
        </a>
        {isOfferPromoted() && (
          <Link className="text-link" to={OFFER_PATH}>
            {t({
              de: "Weihnachts-Gutscheinpakete",
              en: "Christmas gift-card packs",
            })}
            <ArrowRightIcon />
          </Link>
        )}
      </PageHero>

      <section className="gift-page-body section-shell">
        <p className="eyebrow">
          {t({ de: "Gutschein einlösen", en: "Redeem a gift card" })}
        </p>
        <div>
          <h2>
            {t({
              de: "Ihr Gutschein wartet auf seinen guten Moment.",
              en: "Your gift card is waiting for the right moment.",
            })}
          </h2>
          <p className="answer-lead">
            {t({
              de: "Sie haben einen Satuuu-Gutschein? Schreiben Sie uns eine E-Mail mit dem Code oder rufen Sie an. Wir prüfen die Gültigkeit, besprechen mit Ihnen, welche der elf Anwendungen passt, und legen gemeinsam einen Termin fest. Den Gutschein bringen Sie zum Termin mit — als Karte oder als Foto.",
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
          <p className="status-note">{t(GIFT_CARD_PURCHASE)}</p>
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
                de: `Schreiben Sie an ${CONTACT.email} oder rufen Sie uns unter ${CONTACT.phone} an. Nennen Sie den Gutscheincode und, falls bekannt, den Betrag oder die Behandlung, auf die er lautet.`,
                en: `Write to ${CONTACT.email} or call us on ${CONTACT.phone}. Give the gift card code and, if you know it, the amount or the treatment it names.`,
              })}
            </p>
          </li>
          <li>
            <h3>{t({ de: "Behandlung wählen", en: "Choose a treatment" })}</h3>
            <p>
              {t({
                de: "Wenn Sie nicht sicher sind, welche der elf Anwendungen passt, beschreiben Sie einfach, wie es Ihnen geht — wir empfehlen Ihnen etwas. Der Vergleich aller Behandlungen hilft Ihnen bei der Vorauswahl.",
                en: "If you are unsure which of the eleven treatments fits, simply describe how you feel and we will suggest something. The comparison of all treatments helps you shortlist.",
              })}
            </p>
          </li>
          <li>
            <h3>{t({ de: "Termin festlegen", en: "Agree a time" })}</h3>
            <p>
              {t({
                de: "Buchen Sie im Online-Kalender oder lassen Sie uns gemeinsam einen Termin finden. Für Abende und Samstage planen Sie etwas Vorlauf ein — das sind die beliebtesten Zeiten.",
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
              de: "Kerzenmassage — eine verlässliche Wahl, wenn Sie die Vorlieben nicht kennen",
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
