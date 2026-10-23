import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../lib/i18n";
import {
  onConsentSettingsOpen,
  saveConsent,
  useConsent,
} from "../../lib/consent";

/**
 * Asks once for consent to the optional chat assistant. Declining is as easy
 * and as prominent as accepting, and the choice can be changed at any time
 * from "Cookie-Einstellungen" in the footer.
 */
export function ConsentBanner() {
  const { t } = useLang();
  const consent = useConsent();
  const [isReopened, setIsReopened] = useState(false);
  const banner = useRef<HTMLElement>(null);

  useEffect(
    () =>
      onConsentSettingsOpen(() => {
        setIsReopened(true);
        // Move focus to the reopened banner so keyboard users land on it.
        requestAnimationFrame(() => banner.current?.focus());
      }),
    [],
  );

  if (consent && !isReopened) return null;

  const decide = (chat: boolean) => {
    saveConsent(chat);
    setIsReopened(false);
  };

  return (
    <section
      ref={banner}
      className="consent-banner"
      role="region"
      aria-labelledby="consent-title"
      tabIndex={-1}
    >
      <div className="consent-banner-copy">
        <h2 id="consent-title">
          {t({ de: "Ihre Privatsphäre", en: "Your privacy" })}
        </h2>
        <p>
          {t({
            de: "Für Fragen und Terminwünsche bieten wir einen Chat-Assistenten des Anbieters Zenno (WX Company Limited, Thailand) an. Er wird erst geladen, wenn Sie zustimmen: Dann werden Ihre Chat-Eingaben und technische Daten wie Ihre IP-Adresse an Zenno übertragen, in der EU gespeichert und unter Umständen auch außerhalb der EU (Thailand, USA) verarbeitet; zudem werden Informationen in Ihrem Browser gespeichert. Ohne Zustimmung funktioniert die Website vollständig, nur ohne Chat. Ihre Entscheidung können Sie jederzeit unter „Cookie-Einstellungen“ ändern.",
            en: "For questions and appointment requests we offer a chat assistant from the provider Zenno (WX Company Limited, Thailand). It only loads if you agree: your chat messages and technical data such as your IP address are then sent to Zenno, stored in the EU and possibly also processed outside the EU (Thailand, USA); information is also stored in your browser. Without consent the website works fully, just without the chat. You can change your decision at any time under “Cookie settings”.",
          })}{" "}
          <Link to="/datenschutz#chat-assistent">
            {t({ de: "Datenschutzerklärung", en: "Privacy policy" })}
          </Link>
        </p>
      </div>
      <div className="consent-banner-actions">
        <button
          type="button"
          className="consent-choice"
          onClick={() => decide(false)}
        >
          {t({ de: "Ablehnen", en: "Decline" })}
        </button>
        <button
          type="button"
          className="consent-choice"
          onClick={() => decide(true)}
        >
          {t({ de: "Chat erlauben", en: "Allow chat" })}
        </button>
      </div>
    </section>
  );
}
