import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang, type Localized } from "../lib/i18n";
type Update = {
  id: string;
  title: Localized;
  body: Localized;
  href: string;
  label: Localized;
  expiresAt?: string;
};
const pair = (v: unknown): v is Localized =>
  !!v &&
  typeof v === "object" &&
  "de" in v &&
  "en" in v &&
  typeof v.de === "string" &&
  typeof v.en === "string";
export function StudioUpdates() {
  const { t } = useLang();
  const [items, setItems] = useState<Update[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    async function refresh() {
      try {
        const response = await fetch("/content/studio-updates.json", {
          signal: controller.signal,
          cache: "no-cache",
        });
        if (!response.ok) return;
        const data = await response.json();
        if (!Array.isArray(data.items)) return;
        setItems(
          data.items.filter(
            (x: Update) =>
              x &&
              typeof x.id === "string" &&
              pair(x.title) &&
              pair(x.body) &&
              pair(x.label) &&
              typeof x.href === "string" &&
              /^\/(?!\/)/.test(x.href) &&
              (!x.expiresAt || Date.parse(x.expiresAt) > Date.now()),
          ),
        );
      } catch {
        /* Optional updates never block navigation or booking. */
      }
    }
    void refresh();
    const timer = window.setInterval(refresh, 300000);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, []);
  if (!items.length) return null;
  return (
    <section
      className="studio-updates section-shell"
      aria-label={t({ de: "Aktuelles aus dem Studio", en: "Studio updates" })}
    >
      <p className="eyebrow">
        {t({ de: "Aus unserem Studio", en: "From our studio" })}
      </p>
      <div>
        {items.map((item) => (
          <article key={item.id}>
            <h2>{t(item.title)}</h2>
            <p>{t(item.body)}</p>
            <Link className="text-link" to={item.href}>
              {t(item.label)} ↗
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
