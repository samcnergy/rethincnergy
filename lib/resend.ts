import { Resend } from "resend";

let client: Resend | null = null;

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!client) client = new Resend(key);
  return client;
}

export const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO ?? "parham@rethinkcnergy.com";
export const CONTACT_EMAIL_FROM =
  process.env.CONTACT_EMAIL_FROM ?? "ReTHINK CNERGY <hello@rethinkcnergy.com>";
