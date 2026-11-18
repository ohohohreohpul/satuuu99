import { CONSENT_STORAGE_KEY, openConsentSettings } from "../../lib/consent";

/**
 * Sections for services this website adds on top of the imported policy
 * (src/data/legal/datenschutz.ts is regenerated from the studio's source
 * page, so these live here and survive a re-import).
 */
export function DatenschutzSupplement() {
  return (
    <section className="legal-supplement" aria-labelledby="chat-assistent">
      <h2 id="chat-assistent">Chat-Assistent (Zenno)</h2>
      <p>
        Auf unserer Website bieten wir einen Chat-Assistenten an, über den Sie
        Fragen zu unseren Behandlungen stellen und Terminwünsche äußern können.
        Der Assistent wird vom Dienst Zenno (zennohq.com) bereitgestellt,
        betrieben von der WX Company Limited, Bangkok, Thailand (Kontakt:
        support@zennohq.com). Der Assistent wird beim Aufruf unserer Seiten
        geladen; dabei wird Ihre IP-Adresse an den Anbieter übermittelt.
      </p>
      <p>
        <strong>Verarbeitete Daten: </strong>
        Inhalte Ihrer Chat-Nachrichten und alle Angaben, die Sie darin machen
        (z. B. Name, Kontaktdaten, Terminwünsche), sowie technische
        Verbindungsdaten wie IP-Adresse, Browsertyp und Zeitpunkt des Aufrufs.
        Damit ein Gespräch fortgesetzt werden kann, speichert der Assistent
        Informationen im lokalen Speicher (Local Storage) Ihres Browsers.
      </p>
      <p>
        <strong>Zwecke: </strong>
        Beantwortung Ihrer Anfragen, Unterstützung bei Terminanfragen und
        Kommunikation mit Ihnen.
      </p>
      <p>
        <strong>Rechtsgrundlagen: </strong>
        Unser berechtigtes Interesse, Ihnen eine einfache und schnelle
        Kontaktmöglichkeit zu bieten (Art. 6 Abs. 1 S. 1 lit. f DSGVO). Soweit
        Ihre Anfrage auf den Abschluss eines Vertrags gerichtet ist, zusätzlich
        Art. 6 Abs. 1 S. 1 lit. b DSGVO. Informationen auf Ihrem Endgerät
        speichert der Assistent nur, soweit dies für den von Ihnen genutzten
        Chat erforderlich ist (§ 25 Abs. 2 Nr. 2 TDDDG).
      </p>
      <p>
        <strong>Empfänger: </strong>
        Die WX Company Limited verarbeitet die Daten als unser
        Auftragsverarbeiter (Art. 28 DSGVO).
      </p>
      <p>
        <strong>Speicherort und Übermittlung in Drittländer: </strong>
        Die Chat-Daten werden auf Servern in der Europäischen Union gespeichert.
        Der Anbieter hat seinen Sitz in Thailand und setzt für den Betrieb
        Hosting-Dienstleister ein; dadurch können Daten auch außerhalb der EU,
        insbesondere in Thailand und den USA, verarbeitet werden. Für diese
        Länder kann das Datenschutzniveau niedriger sein als in der EU. Eine
        solche Übermittlung erfolgt nur auf Grundlage der
        EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) bzw. eines
        Angemessenheitsbeschlusses (siehe auch „Internationale Datentransfers“).
      </p>
      <p>
        <strong>Speicherdauer: </strong>
        Chat-Verläufe löschen wir, sobald sie für die Bearbeitung Ihrer Anfrage
        nicht mehr erforderlich sind und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        <strong>Widerspruch: </strong>
        Sie können der Verarbeitung aus Gründen, die sich aus Ihrer besonderen
        Situation ergeben, jederzeit widersprechen (Art. 21 DSGVO). Schreiben
        Sie uns dazu an info@satuuu99.de.
      </p>

      <h2 id="google-tag-manager">Google Tag Manager</h2>
      <p>
        Wenn Sie im Cookie-Hinweis auf „Akzeptieren“ klicken, laden wir den
        Google Tag Manager der Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Irland. Der Tag Manager selbst wertet keine Daten aus;
        er steuert, welche weiteren Dienste von Google (z. B. Google Analytics
        für die Reichweitenmessung oder Google Ads für Marketing, siehe
        „Webanalyse, Monitoring und Optimierung“ und „Onlinemarketing“) auf
        unserer Website geladen werden. Beim Laden wird Ihre IP-Adresse an
        Google übermittelt.
      </p>
      <p>
        <strong>Rechtsgrundlage: </strong>
        Ihre Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG).
        Ohne Ihre Einwilligung wird der Tag Manager nicht geladen.
      </p>
      <p>
        <strong>Übermittlung in Drittländer: </strong>
        Google kann Daten in die USA übermitteln. Google ist unter dem EU-US
        Data Privacy Framework zertifiziert (Angemessenheitsbeschluss, Art. 45
        DSGVO).
      </p>
      <p>
        <strong>Widerruf: </strong>
        Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen
        widerrufen. Google-Dienste speichern danach keine Cookies oder Kennungen
        mehr; vollständig entladen wird der Tag Manager beim nächsten
        Seitenaufruf. Weitere Informationen:{" "}
        <a href="https://policies.google.com/privacy">
          https://policies.google.com/privacy
        </a>
        .
      </p>

      <h2 id="einwilligungsverwaltung">Cookie-Hinweis und Einstellungen</h2>
      <p>
        Ihre Auswahl im Cookie-Hinweis speichern wir im lokalen Speicher Ihres
        Browsers (Eintrag „{CONSENT_STORAGE_KEY}“ mit Ihrer Auswahl und dem
        Zeitpunkt), damit wir nicht bei jedem Besuch erneut fragen müssen. Diese
        Speicherung ist technisch erforderlich, um Ihre Wahl umzusetzen und
        nachweisen zu können (§ 25 Abs. 2 Nr. 2 TDDDG; Art. 6 Abs. 1 S. 1 lit. c
        i. V. m. Art. 7 Abs. 1 DSGVO). Sie bleibt bestehen, bis Sie Ihre Auswahl
        ändern oder die Websitedaten in Ihrem Browser löschen. Ebenfalls
        technisch erforderlich speichern wir Ihre gewählte Sprache und ob die
        Startanimation bereits gezeigt wurde. Ihre Auswahl können Sie jederzeit
        ändern:{" "}
        <button
          type="button"
          className="legal-consent-button"
          onClick={openConsentSettings}
        >
          Cookie-Einstellungen öffnen
        </button>
      </p>
    </section>
  );
}
