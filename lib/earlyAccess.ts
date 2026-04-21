export type EarlyAccessPayload = {
  email: string;
  fullName?: string;
  country?: string;
  website?: string;
  source?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEarlyAccessPayload(payload: unknown):
  | { ok: true; data: Omit<EarlyAccessPayload, "website"> & { website?: string } }
  | { ok: false; message: string } {
  if (!payload || typeof payload !== "object") {
    return { ok: false, message: "Invalid request payload." };
  }

  const raw = payload as Record<string, unknown>;
  const email = String(raw.email ?? "").trim().toLowerCase();
  const fullName = String(raw.fullName ?? "").trim();
  const country = String(raw.country ?? "").trim();
  const website = String(raw.website ?? "").trim();
  const source = String(raw.source ?? "support-page").trim();

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return { ok: false, message: "Please provide a valid email address." };
  }

  if (fullName.length > 120 || country.length > 120 || source.length > 120) {
    return { ok: false, message: "Some fields are too long." };
  }

  return {
    ok: true,
    data: {
      email,
      fullName: fullName || undefined,
      country: country || undefined,
      website: website || undefined,
      source: source || "support-page"
    }
  };
}

type RateWindow = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 10;

const globalForRateLimit = globalThis as typeof globalThis & {
  __arrivioRateLimitMap?: Map<string, RateWindow>;
};

const rateLimitMap = globalForRateLimit.__arrivioRateLimitMap ?? new Map<string, RateWindow>();
globalForRateLimit.__arrivioRateLimitMap = rateLimitMap;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const existing = rateLimitMap.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitMap.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (existing.count >= MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  return false;
}
