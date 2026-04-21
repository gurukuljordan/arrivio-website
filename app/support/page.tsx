import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact ARRIVIO support, find FAQ answers, and request help with the ARRIVIO platform."
};

const faqPreview = [
  {
    question: "How do I join ARRIVIO early access?",
    answer: "Submit your email below and our team will send onboarding updates as availability expands."
  },
  {
    question: "Which countries does ARRIVIO support?",
    answer: "ARRIVIO is designed for global newcomers and is continuously expanding country-specific guidance."
  },
  {
    question: "Can ARRIVIO replace legal advice?",
    answer: "No. ARRIVIO provides educational guidance and workflow support, not legal representation."
  }
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Support for your ARRIVIO journey"
        description="Reach the ARRIVIO team for assistance, early access updates, and product help."
      />

      <section className="py-20">
        <Container className="space-y-8">
          <ContactSection />

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-semibold text-brand-dark">FAQ Preview</h2>
            <ul className="mt-6 grid gap-5">
              {faqPreview.map((item) => (
                <li key={item.question}>
                  <h3 className="text-base font-semibold text-brand-dark">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-semibold text-brand-dark">Join Product Updates</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Join the ARRIVIO early access list to receive launch updates and feature announcements.
            </p>
            <EarlyAccessForm source="support-page" />
          </article>
        </Container>
      </section>
    </>
  );
}
