import { NextResponse } from "next/server";
import { isRateLimited, validateEarlyAccessPayload } from "@/lib/earlyAccess";

const RESEND_API_URL = "https://api.resend.com/emails";

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

export async function POST(request: Request) {
  if (!isOriginAllowed(request)) {
    return NextResponse.json({ error: "Origin not allowed." }, { status: 403 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(`early-access:${ip}`)) {
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

  const validated = validateEarlyAccessPayload(payload);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.message }, { status: 400 });
  }

  if (validated.data.website) {
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.EARLY_ACCESS_TO_EMAIL || "support@arrivioai.com";
  const fromEmail = process.env.EARLY_ACCESS_FROM_EMAIL || "ARRIVIO <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Service temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const submittedAt = new Date().toISOString();

  const emailHtml = `
    <div style="font-family: Inter, Arial, sans-serif; line-height: 1.5; color: #0f172a;">
      <h2 style="margin: 0 0 12px;">New ARRIVIO Early Access Request</h2>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${validated.data.email}</p>
      <p style="margin: 0 0 8px;"><strong>Full name:</strong> ${validated.data.fullName ?? "Not provided"}</p>
      <p style="margin: 0 0 8px;"><strong>Country:</strong> ${validated.data.country ?? "Not provided"}</p>
      <p style="margin: 0 0 8px;"><strong>Source:</strong> ${validated.data.source ?? "support-page"}</p>
      <p style="margin: 0 0 8px;"><strong>IP:</strong> ${ip}</p>
      <p style="margin: 0;"><strong>Submitted:</strong> ${submittedAt}</p>
    </div>
  `;

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: "New ARRIVIO Early Access Signup",
      reply_to: validated.data.email,
      html: emailHtml
    })
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { error: "Could not submit your request right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
