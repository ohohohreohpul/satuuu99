/**
 * Google Tag Manager, loaded only after the visitor accepts the cookie
 * banner. Before that, nothing is requested from Google.
 *
 * Google Consent Mode v2 is set too, so the tags inside the container see
 * the visitor's choice and stop storing data if consent is withdrawn later.
 */
export const GTM_ID = "GTM-KCV4L4LR";
const GTM_SRC = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

type DataLayerEntry = Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

function dataLayer(): DataLayerEntry[] {
  window.dataLayer = window.dataLayer ?? [];
  return window.dataLayer;
}

/**
 * Google's gtag() helper. It must push the `arguments` object itself, not an
 * array: Consent Mode commands are only recognised in that form.
 */
function gtag(..._args: unknown[]): void {
  dataLayer().push(arguments);
}

type ConsentState = "granted" | "denied";

function consentSignals(state: ConsentState) {
  return {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  };
}

export function isTagManagerLoaded(): boolean {
  return document.querySelector(`script[src="${GTM_SRC}"]`) !== null;
}

/** Grants consent and loads the container once; safe to call repeatedly. */
export function loadTagManager(): void {
  if (isTagManagerLoaded()) {
    gtag("consent", "update", consentSignals("granted"));
    return;
  }
  gtag("consent", "default", consentSignals("denied"));
  gtag("consent", "update", consentSignals("granted"));
  // Standard GTM bootstrap: the gtm.js event fires "All Pages" triggers.
  dataLayer().push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.src = GTM_SRC;
  script.async = true;
  document.head.appendChild(script);
}

/**
 * Withdraws consent. The loaded container stays in memory until the next page
 * load, but its Google tags stop using cookies and identifiers.
 */
export function revokeTagManagerConsent(): void {
  if (!isTagManagerLoaded()) return;
  gtag("consent", "update", consentSignals("denied"));
}

/**
 * The site is a single-page app, so route changes do not reload the page.
 * This event lets a GTM trigger (Custom Event "virtual_page_view") count them.
 */
export function pushVirtualPageView(path: string, title: string): void {
  dataLayer().push({
    event: "virtual_page_view",
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  });
}
