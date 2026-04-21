export type ContactPayload = {
  fullName: string;
  email: string;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: unknown):
  | { ok: true; data: ContactPayload }
  | { ok: false; message: string } {
  if (!payload || typeof payload !== "object") {
    return { ok: false, message: "Invalid request payload." };
  }

  const raw = payload as Record<string, unknown>;
  const fullName = String(raw.fullName ?? "").trim();
  const email = String(raw.email ?? "").trim().toLowerCase();
  const message = String(raw.message ?? "").trim();

  if (!fullName) {
    return { ok: false, message: "Full name is required." };
  }

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return { ok: false, message: "Please provide a valid email address." };
  }

  if (!message) {
    return { ok: false, message: "Message is required." };
  }

  if (fullName.length > 120 || message.length > 4000) {
    return { ok: false, message: "Some fields are too long." };
  }

  return {
    ok: true,
    data: {
      fullName,
      email,
      message
    }
  };
}
