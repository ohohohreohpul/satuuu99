import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../lib/i18n";
import {
  onConsentSettingsOpen,
  saveConsent,
  useConsent,
} from "../../lib/consent";

/**
 * Cookie banner. Declining is as easy and as prominent as accepting, and the
 * choice can be changed at any time from "Cookie-Einstellungen" in the
 * footer. Accepting loads Google Tag Manager; it does not switch the chat
 * assistant on or off.
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

  const decide = (accepted: boolean) => {
    saveConsent(accepted);
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
            de: "Wir verwenden Cookies und vergleichbare Technologien wie den lokalen Speicher Ihres Browsers. Notwendige Speicherungen, etwa Ihre Spracheinstellung und Ihre Auswahl in diesem Hinweis, nutzen wir immer. Für Fragen und Terminwünsche steht Ihnen unser Chat-Assistent des Anbieters Zenno (WX Company Limited) zur Verfügung; er speichert dafür Informationen in Ihrem Browser. Mit „Akzeptieren“ erlauben Sie uns zusätzlich, über den Google Tag Manager Dienste von Google zur Reichweitenmessung und für Marketing (z. B. Google Analytics) zu laden; dabei können Daten auch in die USA übermittelt werden. Mit „Ablehnen“ wird nichts davon geladen. Ihre Auswahl können Sie jederzeit unter „Cookie-Einstellungen“ ändern.",
            en: "We use cookies and similar technologies such as your browser's local storage. Necessary storage, such as your language setting and your choice in this notice, is always used. For questions and appointment requests our chat assistant from the provider Zenno (WX Company Limited) is available to you; it stores information in your browser to do so. By choosing “Accept” you also allow us to load Google services for audience measurement and marketing (e.g. Google Analytics) via Google Tag Manager; data may be transferred to the USA in the process. “Decline” loads none of this. You can change your choice at any time under “Cookie settings”.",
          })}{" "}
          <Link to="/datenschutz#google-tag-manager">
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
          {t({ de: "Akzeptieren", en: "Accept" })}
        </button>
      </div>
    </section>
  );
}
