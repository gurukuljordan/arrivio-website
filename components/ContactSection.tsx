"use client";

import { FormEvent, useMemo, useState } from "react";
import { companyContact } from "@/content/site";

type ContactValues = {
  fullName: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUCCESS_MESSAGE = "Thanks! We'll get back to you soon.";

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  const email = values.email.trim().toLowerCase();
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<ContactValues>({
    fullName: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseError, setResponseError] = useState<string | null>(null);
  const [responseSuccess, setResponseSuccess] = useState<string | null>(null);

  const isSubmitDisabled = useMemo(() => {
    return (
      isSubmitting ||
      !values.fullName.trim() ||
      !values.email.trim() ||
      !values.message.trim()
    );
  }, [isSubmitting, values.email, values.fullName, values.message]);

  function handleChange(field: keyof ContactValues, nextValue: string) {
    setValues((current) => ({ ...current, [field]: nextValue }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setResponseError(null);
    setResponseSuccess(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim(),
          message: values.message.trim()
        })
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setResponseError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setResponseSuccess(SUCCESS_MESSAGE);
      setValues({ fullName: "", email: "", message: "" });
    } catch {
      setResponseError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-12 md:py-16" aria-labelledby="contact-us-title">
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="section-tint border-b border-slate-200/80 bg-brand-soft/40 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">Contact</p>
            <h2 id="contact-us-title" className="mt-3 text-3xl font-semibold tracking-tight text-brand-dark md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 max-w-md text-base text-brand-muted">
              We&apos;re here to help you move faster and settle smarter.
            </p>

            <dl className="mt-8 space-y-5 text-sm text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Company</dt>
                <dd className="mt-1 text-base font-semibold text-brand-dark">ARRIVIO AI INC.</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Location</dt>
                <dd className="mt-1 text-base font-semibold text-brand-dark">{companyContact.location}</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Support</dt>
                <dd className="mt-1 text-base font-semibold text-brand-dark">
                  <a href={`mailto:${companyContact.supportEmail}`} className="hover:text-brand-primary">
                    {companyContact.supportEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-white p-7 sm:p-8 lg:p-10">
            <form className="grid gap-4" onSubmit={handleSubmit} aria-label="Contact ARRIVIO support">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="contact-full-name">
                  Full Name
                </label>
                <input
                  id="contact-full-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={values.fullName}
                  onChange={(event) => handleChange("fullName", event.target.value)}
                  placeholder="Your full name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-primary/40 transition focus:border-brand-primary focus:ring"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "contact-full-name-error" : undefined}
                />
                {errors.fullName ? (
                  <p id="contact-full-name-error" className="text-xs text-red-600">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  placeholder="you@example.com"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-primary/40 transition focus:border-brand-primary focus:ring"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email ? (
                  <p id="contact-email-error" className="text-xs text-red-600">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder="Tell us how we can help."
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-primary/40 transition focus:border-brand-primary focus:ring"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="text-xs text-red-600">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {responseSuccess ? (
                  <p className="text-sm font-medium text-emerald-700" role="status">
                    {responseSuccess}
                  </p>
                ) : null}
              </div>

              {responseError ? (
                <p className="text-sm text-red-600" role="alert">
                  {responseError}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
