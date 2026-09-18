import type { Localized } from "../../lib/i18n";
import type { PhotoId } from "../media/photos";

/** Card-level facts about an article: enough for every listing surface. */
export interface JournalSummary {
  slug: string;
  category: Localized;
  title: Localized;
  intro: Localized;
  photo: PhotoId;
  /** Treatment page this article leads to. */
  related: string;
}

export interface JournalSection {
  title: Localized;
  text: Localized;
}
