import { NextResponse } from "next/server";
import { z } from "zod";

import { CONTACT_EMAIL_FROM, CONTACT_EMAIL_TO, getResend } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LeadSchema = z.object({
  source: z.string().min(1).max(64),
  email: z.string().email(),
  name: z.string().optional(),
  notes: z.string().max(2000).optional(),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 422 });
  }
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const resend = getResend();
  if (resend) {
    try {
      await resend.emails.send({
        from: CONTACT_EMAIL_FROM,
        to: CONTACT_EMAIL_TO,
        subject: `Qualified lead · ${parsed.data.source}`,
        text: [
          `Source: ${parsed.data.source}`,
          `Email: ${parsed.data.email}`,
          parsed.data.name ? `Name: ${parsed.data.name}` : null,
          parsed.data.notes ? `\n${parsed.data.notes}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
