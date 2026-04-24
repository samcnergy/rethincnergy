import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

import { ContactSchema } from "@/lib/contact-schema";
import { CONTACT_EMAIL_FROM, CONTACT_EMAIL_TO, getResend } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function getIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

async function persistLead(payload: Record<string, unknown>) {
  const dataDir = process.env.LEADS_DIR ?? path.join(process.cwd(), ".data");
  try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    const file = path.join(dataDir, "leads.jsonl");
    fs.appendFileSync(file, JSON.stringify({ ...payload, ts: new Date().toISOString() }) + "\n");
  } catch {
    // swallow filesystem errors in ephemeral environments
  }
}

export async function POST(request: Request) {
  const ip = getIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 }
    );
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, company, need, budget, message } = parsed.data;

  await persistLead({ name, email, company, need, budget, message, ip });

  const resend = getResend();
  if (resend) {
    try {
      await resend.emails.send({
        from: CONTACT_EMAIL_FROM,
        to: CONTACT_EMAIL_TO,
        replyTo: email,
        subject: `New lead · ${need} · ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : null,
          `Need: ${need}`,
          budget ? `Budget: ${budget}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (err) {
      console.error("resend error", err);
      return NextResponse.json(
        { error: "We couldn&rsquo;t send the email. Please try again shortly." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
