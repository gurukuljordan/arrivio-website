import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited } from "@/lib/earlyAccess";
import { validateContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

const SMTP_HOST = "smtp.zoho.com";
const SMTP_PORT = 465;
const SMTP_SECURE = true;
const SMTP_USER = "hello@arrivioai.com";
const SUPPORT_EMAIL = "support@arrivioai.com";
const MAIL_FROM = "ARRIVIO AI <hello@arrivioai.com>";
const MAIL_SUBJECT = "New Contact Message from Arrivio Website";

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isOriginAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowedOrigins = new Set([
    "https://arrivioai.com",
    "https://www.arrivioai.com",
    "http://localhost:3000",
    "http://127.0.0.1:3000"
  ]);

  return allowedOrigins.has(origin);
}

function createTextBody(payload: { fullName: string; email: string; message: string }): string {
  return [
    "New Contact Message from Arrivio Website",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    "Message:",
    payload.message
  ].join("\n");
}

export async function POST(request: Request) {
  if (!isOriginAllowed(request)) {
    return NextResponse.json({ error: "Origin not allowed." }, { status: 403 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const validated = validateContactPayload(payload);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.message }, { status: 400 });
  }

  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailPassword) {
    return NextResponse.json(
      { error: "Service temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: emailPassword
    }
  });

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: SUPPORT_EMAIL,
      subject: MAIL_SUBJECT,
      replyTo: validated.data.email,
      text: createTextBody(validated.data)
    });
  } catch {
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
