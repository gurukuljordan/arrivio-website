import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { companyContact } from "@/content/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn what ARRIVIO is, why it exists, and how we are building a global AI platform for newcomers and immigrants."
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="ARRIVIO is building trusted AI infrastructure for newcomer life"
        description="We are building ARRIVIO as a serious, long-term technology company focused on practical outcomes for immigrants worldwide."
      />

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <div className="image-luxe">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Diverse team collaborating around a laptop"
                width={1800}
                height={1200}
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="p-8">
              <SectionHeading
                eyebrow="Founder Story"
                title="Built from firsthand understanding of newcomer challenges"
                description="ARRIVIO started with a simple observation: critical life decisions are too fragmented and stressful for people starting over."
              />
              <p className="mt-5 text-slate-600">
                The founder vision is to combine AI and practical relocation workflows into one platform that helps people move from uncertainty to stability faster.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <div className="image-luxe">
              <Image
                src="/images/new-home.jpg"
                alt="People moving into a new home"
                width={1800}
                height={1200}
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="p-8">
              <SectionHeading
                eyebrow="Why ARRIVIO Exists"
                title="Because starting over should not mean navigating blind"
                description="Millions of skilled people relocate each year, but support systems remain disconnected, inconsistent, and hard to trust."
              />
              <p className="mt-5 text-slate-600">
                ARRIVIO bridges this gap with AI-powered support that is practical, accessible, and aligned with real-world newcomer priorities.
              </p>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-tint bg-slate-50 py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-brand-dark">Mission</h2>
              <p className="mt-4 text-slate-600">
                Empower newcomers with a unified AI platform for jobs, housing, language, credit, and immigration guidance.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-brand-dark">Vision</h2>
              <p className="mt-4 text-slate-600">
                Become the global default platform for starting life in a new country with speed, clarity, and confidence.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-brand-dark">Future Direction</h2>
              <p className="mt-4 text-slate-600">
                Expand ARRIVIO into a full newcomer operating system across geographies, institutions, and life milestones.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-semibold text-brand-dark">Company Information</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Company</p>
                <p className="mt-2 text-sm font-semibold text-brand-dark">ARRIVIO</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Location</p>
                <p className="mt-2 text-sm font-semibold text-brand-dark">{companyContact.location}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">General inquiries</p>
                <a href={`mailto:${companyContact.helloEmail}`} className="mt-2 block text-sm font-semibold text-brand-dark hover:text-brand-primary">
                  {companyContact.helloEmail}
                </a>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Support</p>
                <a
                  href={`mailto:${companyContact.supportEmail}`}
                  className="mt-2 block text-sm font-semibold text-brand-dark hover:text-brand-primary"
                >
                  {companyContact.supportEmail}
                </a>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
