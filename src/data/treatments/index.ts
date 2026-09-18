import { HEAD_COPY } from "./head";
import { FACE_COPY } from "./face";
import { FEET_COPY } from "./feet";
import { BODY_COPY } from "./body";
import type { TreatmentCopy, TreatmentCopyMap } from "./types";

export type { TreatmentCopy, TreatmentQuestion } from "./types";

const TREATMENT_COPY: TreatmentCopyMap = {
  ...HEAD_COPY,
  ...FACE_COPY,
  ...FEET_COPY,
  ...BODY_COPY,
};

/** Editorial copy for one programme, or undefined if none is written yet. */
export function treatmentCopy(treatmentId: string): TreatmentCopy | undefined {
  return TREATMENT_COPY[treatmentId];
}
