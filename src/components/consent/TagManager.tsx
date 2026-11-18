import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useConsent } from "../../lib/consent";
import {
  loadTagManager,
  pushVirtualPageView,
  revokeTagManagerConsent,
} from "../../lib/tagManager";

/**
 * Loads Google Tag Manager once the visitor accepts the cookie banner, and
 * reports route changes to it. Declining, or never answering, means no
 * request to Google at all. Prerendered snapshots never contain it either,
 * since the prerender browser has no stored consent.
 */
export function TagManager() {
  const consent = useConsent();
  const { pathname } = useLocation();
  const isAccepted = consent?.accepted === true;
  // The path GTM already counted through its own gtm.js page view.
  const countedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!isAccepted) {
      revokeTagManagerConsent();
      return;
    }
    loadTagManager();
    countedPath.current ??= window.location.pathname;
  }, [isAccepted]);

  useEffect(() => {
    if (!isAccepted || countedPath.current === null) return;
    if (countedPath.current === pathname) return;
    countedPath.current = pathname;
    return afterTitleChange(() =>
      pushVirtualPageView(pathname, document.title),
    );
  }, [isAccepted, pathname]);

  return null;
}

/** Longest wait for a lazily loaded route to set its title. */
const TITLE_WAIT_MS = 1500;

/**
 * Runs `report` once the route has set its document title (lazy routes set it
 * only after their chunk loads), or after TITLE_WAIT_MS if it never changes.
 * Returns a cleanup that cancels the pending report.
 */
function afterTitleChange(report: () => void): () => void {
  const previous = document.title;
  let isDone = false;
  const finish = () => {
    if (isDone) return;
    isDone = true;
    observer.disconnect();
    window.clearTimeout(timer);
    report();
  };
  const observer = new MutationObserver(() => {
    if (document.title !== previous) finish();
  });
  observer.observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  const timer = window.setTimeout(finish, TITLE_WAIT_MS);
  return () => {
    isDone = true;
    observer.disconnect();
    window.clearTimeout(timer);
  };
}
