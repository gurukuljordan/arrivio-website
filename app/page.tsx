import { AppScreensShowcase } from "@/components/AppScreensShowcase";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroBlock } from "@/components/HeroBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustStrip } from "@/components/TrustStrip";
import { appScreenshots, homepageFeatures } from "@/content/site";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <TrustStrip />

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="In-App Experience"
            title="See ARRIVIO in action"
            description="A live-style visual reel of core newcomer journeys inside the ARRIVIO app."
          />
          <div className="mt-10">
            <AppScreensShowcase screenshots={appScreenshots} />
          </div>
        </Container>
      </section>

      <section className="relative py-20">
        <Container>
          <SectionHeading
            eyebrow="The Problem"
            title="Starting over in a new country is high-stakes and fragmented"
            description="Newcomers often juggle disconnected systems and unfamiliar rules while under pressure to secure income, housing, and legal clarity."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Job search confusion",
                "Language barriers",
                "Housing difficulty",
                "No credit history",
                "Complex immigration systems"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-soft">
                  {item}
                </div>
              ))}
            </div>
            <div className="image-luxe rounded-2xl border border-slate-200 shadow-soft">
              <Image
                src="/images/urban-walk.jpg"
                alt="People walking through a busy city at sunset"
                width={2000}
                height={1333}
                className="h-full min-h-64 w-full object-cover"
              />
              <p className="image-pill absolute bottom-4 left-4 px-3 py-1 text-xs font-semibold text-brand-dark">
                Life moves fast in a new city
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-tint relative overflow-hidden bg-slate-50 py-20">
        <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" aria-hidden />
        <div className="absolute -right-12 bottom-4 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl" aria-hidden />
        <Container>
          <SectionHeading
            eyebrow="The Solution"
            title="ARRIVIO unifies newcomer life tasks into one AI-powered operating layer"
            description="Instead of switching between scattered resources, ARRIVIO helps users plan, decide, and execute key life actions in one guided journey."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <div className="image-luxe">
                <Image
                  src="/images/city-map.jpg"
                  alt="A newcomer using a map to navigate a new city"
                  width={1800}
                  height={1200}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-dark">Guidance in context</h3>
                <p className="mt-2 text-sm text-slate-600">
                  ARRIVIO delivers step-by-step AI guidance based on where you are and what you need next.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <div className="image-luxe">
                <Image
                  src="/images/new-home.jpg"
                  alt="Newcomers settling into a new home"
                  width={1800}
                  height={1200}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-dark">Outcomes that matter</h3>
                <p className="mt-2 text-sm text-slate-600">
                  From finding housing to building credit, ARRIVIO keeps users moving toward real milestones.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Feature Grid"
            title="Core capabilities for real relocation outcomes"
            description="Built to support the most critical steps from day one to long-term settlement."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homepageFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From uncertainty to momentum in three steps"
            description="A simple path designed for speed, clarity, and confidence."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Arrive",
                text: "Set your country, goals, and current stage so ARRIVIO can personalize guidance."
              },
              {
                step: "02",
                title: "Ask Arrivio AI",
                text: "Get contextual support for jobs, housing, documentation, and daily decisions."
              },
              {
                step: "03",
                title: "Build Your New Life",
                text: "Execute clear next actions and track progress across the milestones that matter."
              }
            ].map((item) => (
              <li key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">Step {item.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-tint py-20">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <SectionHeading
                  eyebrow="Mission"
                  title="A mission-driven platform with global ambition"
                  description="ARRIVIO exists to reduce friction in the immigrant journey and build trusted digital infrastructure for every newcomer, in every market."
                />
                <p className="mt-6 max-w-3xl text-slate-600">
                  We are building ARRIVIO as a long-term technology company focused on practical outcomes, responsible AI, and inclusive access to life-changing opportunities.
                </p>
              </div>
              <div className="image-luxe rounded-2xl border border-slate-200">
                <Image
                  src="/images/team-collaboration.jpg"
                  alt="Diverse professionals collaborating in an office"
                  width={1800}
                  height={1200}
                  className="h-72 w-full object-cover"
                />
                <p className="image-pill absolute bottom-4 left-4 px-3 py-1 text-xs font-semibold text-brand-dark">
                  Global team. Long-term mission.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Start Your ARRIVIO Journey"
        description="Join early access to receive launch updates and be among the first users shaping the global newcomer platform."
        showEarlyAccessForm
        source="homepage-final-cta"
      />

      <Container className="pb-20">
        <ContactSection />
      </Container>
    </>
  );
}
