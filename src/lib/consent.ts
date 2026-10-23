import { useSyncExternalStore } from "react";

/**
 * Visitor consent for optional third-party services. Only the chat assistant
 * needs consent today; technically necessary storage (language, intro seen,
 * this decision itself) does not.
 */
export const CONSENT_STORAGE_KEY = "satuuu99-consent";
/** Bump when the services asking for consent change, to ask again. */
const CONSENT_VERSION = 1;
const CHANGE_EVENT = "satuuu99:consent-change";
const OPEN_EVENT = "satuuu99:consent-open";

export interface ConsentDecision {
  version: number;
  chat: boolean;
  decidedAt: string;
}

function isDecision(value: unknown): value is ConsentDecision {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  return (
    candidate.version === CONSENT_VERSION &&
    typeof candidate.chat === "boolean" &&
    typeof candidate.decidedAt === "string"
  );
}

/** The stored decision, or null when the visitor has not decided yet. */
export function readConsent(): ConsentDecision | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isDecision(parsed) ? parsed : null;
  } catch {
    // Storage blocked (private mode, disabled site data): ask every visit.
    return null;
  }
}

export function saveConsent(chat: boolean): void {
  const decision: ConsentDecision = {
    version: CONSENT_VERSION,
    chat,
    decidedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(decision));
  } catch {
    // The choice still applies for this page view; it just is not remembered.
  }
  cachedDecision = decision;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Reopens the banner, e.g. from the "Cookie-Einstellungen" footer link. */
export function openConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentSettingsOpen(listener: () => void): () => void {
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
}

let cachedDecision: ConsentDecision | null | undefined;

function subscribe(listener: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== CONSENT_STORAGE_KEY) return;
    cachedDecision = readConsent();
    listener();
  };
  window.addEventListener(CHANGE_EVENT, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): ConsentDecision | null {
  if (cachedDecision === undefined) cachedDecision = readConsent();
  return cachedDecision;
}

/** Current decision; re-renders when it changes in this or another tab. */
export function useConsent(): ConsentDecision | null {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
