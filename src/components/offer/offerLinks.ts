import { CONTACT } from "../../data/content";

/** WhatsApp chat with the studio, opened with a ready-written first line. */
export function whatsappEnquiry(text: string): string {
  return `${CONTACT.whatsappHref}?text=${encodeURIComponent(text)}`;
}

/** Email to the studio with the subject already filled in. */
export function emailEnquiry(subject: string): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
}
