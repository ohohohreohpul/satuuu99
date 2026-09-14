import { useEffect } from "react";

const SITE_URL = "https://satuuu99.de";

function setMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

/** Sets route-specific search and social metadata. */
export function usePageMeta(
  title: string,
  description?: string,
  noIndex = false,
) {
  useEffect(() => {
    document.title = title;
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noIndex ? "noindex, follow" : "index, follow",
    );
    const canonicalUrl = `${SITE_URL}${window.location.pathname.replace(/\/$/, "") || "/"}`;
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        description,
      );
      setMeta(
        'meta[name="twitter:description"]',
        "name",
        "twitter:description",
        description,
      );
    }
  }, [title, description, noIndex]);
}
