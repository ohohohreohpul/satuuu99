import { Link } from "react-router-dom";
import { CONTACT } from "../../data/content";
import {
  packageName,
  packageSaving,
  SINGLE_VOUCHER_PRICE,
  type VoucherPackage,
} from "../../data/offer";
import { useLang } from "../../lib/i18n";
import {
  ArrowUpRightIcon,
  GiftIcon,
  HandbagIcon,
  MailIcon,
  WhatsAppIcon,
} from "../ui/Icons";
import { emailEnquiry, whatsappEnquiry } from "./offerLinks";

interface OfferPackageCardProps {
  item: VoucherPackage;
  /** Purchase buttons are offered only while the offer runs. */
  isPurchasable: boolean;
}

export function OfferPackageCard({
  item,
  isPurchasable,
}: OfferPackageCardProps) {
  const { t, lang } = useLang();
  const euro = new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
  const name = packageName(item, lang);
  const headingId = `offer-${item.id}`;

  return (
    <article
      className={`offer-card offer-card--${item.family}`}
      aria-labelledby={headingId}
    >
      <header className="offer-card-head">
        <h3 id={headingId}>
          <span className="offer-card-title">{t(item.title)}</span>
          {item.label && (
            <span className="offer-card-label">{t(item.label)}</span>
          )}
        </h3>
        <p className="offer-card-price">
          <strong>{euro.format(item.price)}</strong>
          <span>
            {t({ de: "statt", en: "instead of" })}{" "}
            <s>{euro.format(item.regularPrice)}</s>
          </span>
        </p>
        <p className="offer-card-saving">
          {t({ de: "Sie sparen", en: "You save" })}{" "}
          <b>{euro.format(packageSaving(item))}</b>
        </p>
      </header>

      {item.items.length > 0 && (
        <div className="offer-card-contents">
          <p className="eyebrow">
            {t({ de: "Im Paket enthalten", en: "Included" })}
          </p>
          <ul>
            {item.items.map((entry) => (
              <li key={entry.name.de}>
                <span className="offer-quantity">{entry.quantity}×</span>
                <span>
                  {entry.treatmentId ? (
                    <Link to={`/behandlungen/${entry.treatmentId}`}>
                      {t(entry.name)}
                    </Link>
                  ) : (
                    t(entry.name)
                  )}
                  <small>{t(entry.duration)}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.choice && (
        <div className="offer-card-contents">
          <p className="eyebrow">{t({ de: "Sie erhalten", en: "You get" })}</p>
          <p className="offer-choice-count">
            {t({
              de: `${item.choice.count} Gutscheine à ${item.choice.minutes} Minuten`,
              en: `${item.choice.count} gift cards of ${item.choice.minutes} minutes`,
            })}
          </p>
          <ul className="offer-choice-options">
            {item.choice.options.map((option) => (
              <li key={option.treatmentId}>
                <Link to={`/behandlungen/${option.treatmentId}`}>
                  {t(option.name)}
                </Link>
              </li>
            ))}
          </ul>
          <p className="offer-card-note">{t(item.choice.note)}</p>
          <p className="offer-card-note">
            {t({
              de: `Ein Gutschein über 60 Minuten kostet regulär ${euro.format(SINGLE_VOUCHER_PRICE)} — für ${euro.format(item.price)} bekämen Sie sonst zehn. Mit dem Weihnachtspaket schenken wir Ihnen den elften.`,
              en: `A 60-minute gift card normally costs ${euro.format(SINGLE_VOUCHER_PRICE)}, so ${euro.format(item.price)} would usually buy ten. With the Christmas pack the eleventh is our gift to you.`,
            })}
          </p>
        </div>
      )}

      <ul className="offer-card-extras">
        {item.extras.map((extra) => (
          <li key={extra.text.de}>
            {extra.kind === "handbag" ? (
              <HandbagIcon aria-hidden="true" />
            ) : (
              <GiftIcon aria-hidden="true" />
            )}
            {t(extra.text)}
          </li>
        ))}
      </ul>

      {isPurchasable && (
        <div className="offer-card-actions">
          <a className="button" href={CONTACT.booking}>
            {t({ de: "Online kaufen", en: "Buy online" })}
            <ArrowUpRightIcon />
          </a>
          <a
            className="offer-icon-link"
            href={whatsappEnquiry(
              t({
                de: `Hallo, ich möchte gern das ${name} kaufen.`,
                en: `Hello, I would like to buy the ${name}.`,
              }),
            )}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon aria-hidden="true" />
            WhatsApp
          </a>
          <a className="offer-icon-link" href={emailEnquiry(name)}>
            <MailIcon aria-hidden="true" />
            E-Mail
          </a>
        </div>
      )}
    </article>
  );
}
