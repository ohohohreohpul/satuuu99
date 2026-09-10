import { useLang } from "../../lib/i18n";
export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={lang === "de" ? "Sprache" : "Language"}
    >
      {(["de", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          aria-label={option === "de" ? "Deutsch" : "English"}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
