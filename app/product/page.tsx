import type { Metadata } from "next";
import { AppScreensShowcase } from "@/components/AppScreensShowcase";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { appScreenshots } from "@/content/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore the ARRIVIO app and its AI-powered tools for jobs, housing, credit, language practice, and immigration guidance."
};

const featureSections = [
  {
    title: "AI Assistant",
    description:
      "Ask complex relocation questions and get practical, context-aware guidance for your destination country.",
    details: "Guided Q&A across work, housing, and life setup with multilingual support.",
    image: "/images/city-map.jpg",
    alt: "A woman checking a map in a city"
  },
  {
    title: "Resume Builder",
    description:
      "Create role-specific resumes that align with local hiring norms and recruiter expectations.",
    details: "AI suggestions for structure, language clarity, and outcome-focused bullet points.",
    image: "/images/diverse-office.jpg",
    alt: "Professionals collaborating in an office"
  },
  {
    title: "Job Finder",
    description:
      "Match your profile with role opportunities and clear preparation steps for applications.",
    details: "Targeted discovery workflows designed for early newcomer momentum.",
    image: "/images/urban-walk.jpg",
    alt: "People moving through a city"
  },
  {
    title: "Housing Help",
    description:
      "Navigate rental systems, documents, and common risks with confidence.",
    details: "Guidance for applications, paperwork readiness, and practical housing decisions.",
    image: "/images/new-home.jpg",
    alt: "Couple moving into a new home"
  },
  {
    title: "Credit Help",
    description:
      "Understand how financial credibility works and what actions build trust from day one.",
    details: "Action plans for payment behavior, utilization, and foundational credit strategy.",
    image: "/images/team-collaboration.jpg",
    alt: "Team discussing financial planning on a laptop"
  },
  {
    title: "English Practice",
    description:
      "Improve communication for interviews, daily interactions, and formal processes.",
    details: "Scenario-based AI conversation practice adapted to real newcomer situations.",
    image: "/images/diverse-office.jpg",
    alt: "Diverse team in discussion"
  },
  {
    title: "Immigration Guides",
    description:
      "Track key legal milestones and documentation requirements through structured guidance.",
    details: "Clear next steps and timelines to reduce confusion across immigration workflows.",
    image: "/images/hero-city.jpg",
    alt: "City intersection with people and transport"
  }
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="ARRIVIO App"
        title="One app for the most critical newcomer decisions"
        description="ARRIVIO combines AI guidance and relocation workflows into a single product experience built for global newcomers."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="App Screenshots"
            title="ARRIVIO product screens"
            description="Real screenshots from the ARRIVIO app used for web and app-review visibility."
          />
          <div className="mt-10">
            <AppScreensShowcase screenshots={appScreenshots} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {featureSections.map((feature, index) => (
              <article
                key={feature.title}
                className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index % 2 === 1 ? "md:translate-y-4" : ""}`}
              >
                <h2 className="text-2xl font-semibold text-brand-dark">{feature.title}</h2>
                <p className="mt-3 text-slate-600">{feature.description}</p>
                <div className="image-luxe mt-5 rounded-xl border border-slate-200">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={1800}
                    height={1200}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 transition group-hover:text-slate-700">{feature.details}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Download ARRIVIO"
        description="Get the app and start building your next chapter with AI-powered guidance from day one."
      />
    </>
  );
}
