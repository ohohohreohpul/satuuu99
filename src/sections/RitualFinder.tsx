import { useState } from "react";
import { Link } from "react-router-dom";
import { FOCUS_GROUPS } from "../data/content";
import { useLang } from "../lib/i18n";
import { ArrowRightIcon } from "../components/ui/Icons";
export function RitualFinder() {
  const { t } = useLang();
  const [focus, setFocus] = useState("head");
  const group = FOCUS_GROUPS.find((g) => g.id === focus)!;
  return (
    <section className="ritual-finder section-shell">
      <div>
        <p className="eyebrow">
          {t({ de: "Dein Ritual finden", en: "Find your ritual" })}
        </p>
        <h2>
          {t({
            de: "Was braucht heute deine Aufmerksamkeit?",
            en: "What needs your attention today?",
          })}
        </h2>
        <p>
          {t({
            de: "Wähle deinen Schwerpunkt. Wir zeigen dir, wo deine Pause beginnen kann.",
            en: "Choose your focus. We’ll show you where your pause can begin.",
          })}
        </p>
      </div>
      <div>
        <fieldset>
          <legend>
            {t({
              de: "Ich wünsche mir Zeit für …",
              en: "I would like time for …",
            })}
          </legend>
          <div className="finder-options">
            {FOCUS_GROUPS.map((g) => (
              <label key={g.id}>
                <input
                  type="radio"
                  name="focus"
                  value={g.id}
                  checked={focus === g.id}
                  onChange={() => setFocus(g.id)}
                />
                <span>{t(g.word)}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="finder-result" aria-live="polite">
          <p className="eyebrow">
            {t({ de: "Deine Auswahl", en: "Your selection" })}
          </p>
          <h3>{t(group.title)}</h3>
          <p>{t(group.blurb)}</p>
          <Link className="text-link" to={"/behandlungen?focus=" + focus}>
            {t({
              de: "Passende Rituale ansehen",
              en: "Explore matching rituals",
            })}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
