import type { PhotoId } from "../media/photos";
import type { Localized } from "../../lib/i18n";

export interface TreatmentQuestion {
  q: Localized;
  a: Localized;
}

/**
 * Copy for one treatment page. Every field answers a distinct visitor
 * question, so the ten programme pages do not repeat one another.
 *
 * `answer` is deliberately a single self-contained paragraph of roughly
 * 40–80 words: it is the passage a visitor skims first and the passage an
 * answer engine can quote without surrounding context.
 */
export interface TreatmentCopy {
  answer: Localized;
  definition: Localized;
  /** What the guest may notice during and right after the ritual. */
  experience: Localized;
  suited: Localized;
  /** Situations that need a conversation before booking. */
  beforeBooking: Localized;
  prepare: Localized;
  after: Localized;
  steps: Localized[];
  questions: TreatmentQuestion[];
  /** Two to four supporting photographs shown as a treatment sequence. */
  sequence: PhotoId[];
  /** Short caption per sequence photograph, in the same order. */
  sequenceCaptions: Localized[];
}

export type TreatmentCopyMap = Record<string, TreatmentCopy>;
