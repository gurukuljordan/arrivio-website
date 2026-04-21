"use client";

import { FormEvent, useMemo, useState } from "react";

type EarlyAccessFormProps = {
  source?: string;
};

export function EarlyAccessForm({ source = "support-page" }: EarlyAccessFormProps) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const isDisabled = useMemo(() => isSubmitting || !email.trim(), [isSubmitting, email]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fullName, country, website, source })
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess("Thanks. You are on the ARRIVIO early access list.");
      setEmail("");
      setFullName("");
      setCountry("");
      setWebsite("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-6 grid gap-3" aria-label="Early access form" onSubmit={handleSubmit}>
      <label className="text-sm font-medium text-slate-700" htmlFor="fullName">
        Full name (optional)
      </label>
      <input
        id="fullName"
        type="text"
        autoComplete="name"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        placeholder="Your name"
        className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-brand-primary transition focus:ring"
      />

      <label className="text-sm font-medium text-slate-700" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-brand-primary transition focus:ring"
      />

      <label className="text-sm font-medium text-slate-700" htmlFor="country">
        Destination country (optional)
      </label>
      <input
        id="country"
        type="text"
        autoComplete="country-name"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        placeholder="e.g. Canada"
        className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-brand-primary transition focus:ring"
      />

      <label className="hidden" htmlFor="website">
        Website
      </label>
      <input
        id="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
      />

      <button
        type="submit"
        disabled={isDisabled}
        className="mt-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Request Access"}
      </button>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {success ? <p className="text-sm text-emerald-700">{success}</p> : null}
    </form>
  );
}
