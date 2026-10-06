import { Link } from "react-router-dom";
import { GestureGraphic } from "../components/brand/GestureGraphic";
import { OfferPackageCard } from "../components/offer/OfferPackageCard";
import { emailEnquiry, whatsappEnquiry } from "../components/offer/offerLinks";
import { StructuredData } from "../components/seo/StructuredData";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GiftIcon,
  GlobeIcon,
  MailIcon,
  WhatsAppIcon,
} from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import {
  OFFER_ENDS_AT,
  OFFER_PATH,
  OFFER_PERIOD,
  OFFER_STARTS_AT,
  offerStatus,
  packageName,
  PURCHASE_BONUS,
  VOUCHER_PACKAGES,
  type OfferStatus,
} from "../data/offer";
import type { Localized } from "../lib/i18n";
import { useLang } from "../lib/i18n";
import { breadcrumbSchema, offerCatalogSchema } from "../lib/schema";
import { usePageMeta } from "../lib/usePageMeta";
import { FinalCTA } from "../sections/FinalCTA";

const STATUS_LINE: Record<OfferStatus, Localized> = {
  upcoming: {
    de: "Erhältlich ab 7. Oktober 2026 · bis 23. Dezember, solange der Vorrat reicht",
    en: "Available from 7 October 2026 · until 23 December, while stocks last",
  },
  active: {
    de: "Aktionszeitraum 07.10.–23.12.2026 · nur solange der Vorrat reicht",
    en: "Offer period 7 Oct – 23 Dec 2026 · only while stocks last",
  },
  ended: {
    de: "Die Weihnachtsaktion ist beendet. Gutscheine bekommst du weiterhin bei uns.",
    en: "The Christmas offer has ended. Gift cards are still available from us.",
  },
};

const CONDITIONS: Localized[] = [
  {
    de: "Alle Pakete und Sets gibt es nur solange der Vorrat reicht.",
    en: "All packs and sets are available only while stocks last.",
  },
  {
    de: "Die kleine Überraschung gibt es zu jedem Gutscheinkauf ab 70 € oder ab 60 Minuten.",
    en: "The small surprise comes with every gift-card purchase of €70 or more, or 60 minutes or more.",
  },
  {
    de: "Im Paket für 700 € wählst du für jeden der elf Gutscheine eine von vier Anwendungen — erst vor dem Termin. Andere Anwendungen sind gegen Aufpreis möglich.",
    en: "In the €700 pack you choose one of four treatments for each of the eleven cards — only before the appointment. Other treatments are possible for a surcharge.",
  },
  {
    de: "Die Handtasche suchst du dir aus unserem aktuellen Sortiment aus.",
    en: "You choose the handbag from our current range.",
  },
  {
    de: "Eingelöst werden die Gutscheine wie jeder Satuuu-Gutschein: Termin buchen und den Gutschein angeben.",
    en: "The cards are redeemed like any Satuuu gift card: book an appointment and mention the card.",
  },
];

export function OfferPage() {
  const { t, lang } = useLang();
  const status = offerStatus();
  const isPurchasable = status === "active";
  const christmas = VOUCHER_PACKAGES.filter(
    (item) => item.family === "christmas",
  );
  const sets = VOUCHER_PACKAGES.filter((item) => item.family === "set");
  const pageTitle = t({
    de: "Weihnachtsangebot: Gutscheinpakete",
    en: "Christmas offer: gift-card packs",
  });

  usePageMeta(
    `${pageTitle} | satuuu99 Ahrensburg`,
    t({
      de: "Exklusive Weihnachts-Gutscheinpakete und Gutscheinsets bei satuuu99 in Ahrensburg, 07.10.–23.12.2026: ab 150 €, bis zu 70 € gespart, mit Handtasche oder Überraschungsgeschenk.",
      en: "Exclusive Christmas gift-card packs and sets at satuuu99 in Ahrensburg, 7 Oct – 23 Dec 2026: from €150, save up to €70, with a handbag or surprise gift.",
    }),
  );

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          { name: pageTitle, path: OFFER_PATH },
        ])}
      />
      {status !== "ended" && (
        <StructuredData
          data={offerCatalogSchema({
            name: pageTitle,
            path: OFFER_PATH,
            offers: VOUCHER_PACKAGES.map((item) => ({
              name: packageName(item, lang),
              price: item.price,
            })),
            validFrom: OFFER_STARTS_AT,
            validThrough: OFFER_ENDS_AT,
          })}
        />
      )}

      <section
        className="offer-hero has-supergraphic"
        aria-labelledby="offer-title"
      >
        <GestureGraphic tone="dark" className="gesture--offer" />
        <div className="offer-hero-copy section-shell">
          <p className="eyebrow">
            {t({
              de: "Weihnachtsangebot · Zu unserem neuen Auftritt",
              en: "Christmas offer · Celebrating our new look",
            })}
          </p>
          <h1 id="offer-title">
            {t({ de: "Wertvolle Momente", en: "Precious moments" })}
            <br />
            <span>{t({ de: "zum Verschenken.", en: "to give away." })}</span>
          </h1>
          <p className="offer-hero-lead">
            {t({
              de: "satuuu99 hat ein neues Gesicht — und das feiern wir mit dir. Zur Weihnachtszeit gibt es exklusive Gutscheinpakete und Gutscheinsets: mit Handtasche aus unserem Sortiment, Geschenkset oder einer Überraschung obendrauf.",
              en: "satuuu99 has a new look — and we are celebrating with you. For the Christmas season there are exclusive gift-card packs and sets: with a handbag from our range, a gift set or a surprise on top.",
            })}
          </p>
          <p className={`offer-status offer-status--${status}`}>
            {t(STATUS_LINE[status])}
          </p>
          <div className="offer-hero-actions">
            {status === "ended" ? (
              <Link className="button" to="/gutscheine">
                {t({ de: "Zu den Gutscheinen", en: "See gift cards" })}
                <ArrowRightIcon />
              </Link>
            ) : (
              <a className="button" href="#pakete">
                {t({ de: "Pakete ansehen", en: "See the packs" })}
                <ArrowRightIcon />
              </a>
            )}
            {isPurchasable && (
              <a className="text-link" href={CONTACT.booking}>
                {t({ de: "Online kaufen", en: "Buy online" })}
                <ArrowUpRightIcon />
              </a>
            )}
          </div>
        </div>
      </section>

      {status !== "ended" && (
        <>
          <section className="offer-bonus section-shell">
            <GiftIcon aria-hidden="true" />
            <p>{t(PURCHASE_BONUS)}</p>
          </section>

          <section
            id="pakete"
            className="offer-family section-shell"
            aria-labelledby="offer-christmas-title"
          >
            <div className="section-heading">
              <p className="eyebrow">
                {t({
                  de: "01 / Weihnachts-Gutscheinpakete",
                  en: "01 / Christmas gift-card packs",
                })}
              </p>
              <h2 id="offer-christmas-title">
                {t({
                  de: "Großzügig schenken.",
                  en: "Give generously.",
                })}
              </h2>
              <p>
                {t({
                  de: "Zwei große Pakete mit Handtasche aus unserem Sortiment — für einen besonderen Menschen oder für ein ganzes Jahr Auszeit.",
                  en: "Two generous packs with a handbag from our range — for someone special, or for a whole year of time out.",
                })}
              </p>
            </div>
            <div className="offer-grid">
              {christmas.map((item) => (
                <OfferPackageCard
                  key={item.id}
                  item={item}
                  isPurchasable={isPurchasable}
                />
              ))}
            </div>
          </section>

          <section
            className="offer-family offer-family--sets section-shell"
            aria-labelledby="offer-sets-title"
          >
            <div className="section-heading">
              <p className="eyebrow">
                {t({ de: "02 / Gutscheinsets", en: "02 / Gift-card sets" })}
              </p>
              <h2 id="offer-sets-title">
                {t({
                  de: "Zwei Sets rund ums Head Spa.",
                  en: "Two sets built around head spa.",
                })}
              </h2>
              <p>
                {t({
                  de: "Head Spa Deluxe und Anti-Stress Gua Sha Massage als kompaktes Set, jeweils mit Überraschungsgeschenk.",
                  en: "Head Spa Deluxe and the anti-stress gua sha massage as a compact set, each with a surprise gift.",
                })}
              </p>
            </div>
            <div className="offer-grid">
              {sets.map((item) => (
                <OfferPackageCard
                  key={item.id}
                  item={item}
                  isPurchasable={isPurchasable}
                />
              ))}
            </div>
          </section>

          <section
            className="offer-channels section-shell"
            aria-labelledby="offer-channels-title"
          >
            <div className="section-heading">
              <p className="eyebrow">
                {t({ de: "03 / So bekommst du es", en: "03 / How to buy" })}
              </p>
              <h2 id="offer-channels-title">
                {t({
                  de: "Drei Wege zu deinem Paket.",
                  en: "Three ways to your pack.",
                })}
              </h2>
            </div>
            <ol className="offer-channel-list">
              <li>
                <GlobeIcon aria-hidden="true" />
                <h3>{t({ de: "Online", en: "Online" })}</h3>
                <p>
                  {t({
                    de: "In unserem Buchungsportal kannst du Gutscheine direkt online kaufen.",
                    en: "You can buy gift cards directly online in our booking portal.",
                  })}
                </p>
                <a className="text-link" href={CONTACT.booking}>
                  {t({ de: "Zum Buchungsportal", en: "Open booking portal" })}
                  <ArrowUpRightIcon />
                </a>
              </li>
              <li>
                <WhatsAppIcon aria-hidden="true" />
                <h3>
                  {t({ de: "Telefon & WhatsApp", en: "Phone & WhatsApp" })}
                </h3>
                <p>
                  {t({
                    de: `Ruf uns an oder schreib uns per WhatsApp unter ${CONTACT.phone}.`,
                    en: `Call us or message us on WhatsApp at ${CONTACT.phone}.`,
                  })}
                </p>
                <a
                  className="text-link"
                  href={whatsappEnquiry(
                    t({
                      de: "Hallo, ich interessiere mich für euer Weihnachtsangebot.",
                      en: "Hello, I am interested in your Christmas offer.",
                    }),
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t({ de: "WhatsApp schreiben", en: "Message on WhatsApp" })}
                  <ArrowUpRightIcon />
                </a>
              </li>
              <li>
                <MailIcon aria-hidden="true" />
                <h3>E-Mail</h3>
                <p>
                  {t({
                    de: `Schreib an ${CONTACT.email} und nenne das Paket, das du verschenken möchtest.`,
                    en: `Write to ${CONTACT.email} and name the pack you would like to give.`,
                  })}
                </p>
                <a
                  className="text-link"
                  href={emailEnquiry(
                    t({ de: "Weihnachtsangebot", en: "Christmas offer" }),
                  )}
                >
                  {t({ de: "E-Mail schreiben", en: "Send an email" })}
                  <ArrowRightIcon />
                </a>
              </li>
            </ol>
          </section>

          <section
            className="offer-conditions section-shell"
            aria-labelledby="offer-conditions-title"
          >
            <p className="eyebrow">
              {t({ de: "Gut zu wissen", en: "Good to know" })}
            </p>
            <div>
              <h2 id="offer-conditions-title">
                {t({ de: "Aktionszeitraum", en: "Offer period" })}{" "}
                {t(OFFER_PERIOD)}
              </h2>
              <ul>
                {CONDITIONS.map((condition) => (
                  <li key={condition.de}>{t(condition)}</li>
                ))}
              </ul>
              <Link className="text-link" to="/gutscheine">
                {t({
                  de: "So löst du einen Gutschein ein",
                  en: "How to redeem a gift card",
                })}
                <ArrowRightIcon />
              </Link>
            </div>
          </section>
        </>
      )}

      <FinalCTA />
    </>
  );
}
