import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

export function HeroBlock() {
  return (
    <section className="section-tint relative overflow-hidden bg-hero-glow pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" aria-hidden />
      <div className="absolute -right-12 top-10 h-64 w-64 rounded-full bg-indigo-100/70 blur-3xl" aria-hidden />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="relative z-10">
            <Image
              src="/brand/transparent-logo.svg"
              alt="ARRIVIO brand logo"
              width={250}
              height={92}
              className="mb-5 h-auto w-[170px] object-contain sm:w-[210px]"
              priority
            />
            <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
              Official ARRIVIO Website
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
              AI Super App for Newcomers Worldwide
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
              Jobs, housing, credit, language, and immigration guidance powered by AI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/support"
                className="rounded-full bg-brand-primary px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Early Access
              </Link>
              <Link
                href="/product"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-400"
              >
                Download App
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-blue-100 blur-2xl" aria-hidden />
            <div className="absolute -right-6 bottom-2 h-32 w-32 rounded-full bg-indigo-100 blur-2xl" aria-hidden />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
              <div className="rounded-2xl bg-brand-gradient p-[1px]">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Product Preview</p>
                  <div className="image-luxe relative mt-4 border border-slate-200">
                    <Image
                      src="/app-screenshots/simulator-2026-04-19-080256.png"
                      alt="ARRIVIO app dashboard screenshot"
                      width={1170}
                      height={2532}
                      className="h-[28rem] w-full object-cover object-top"
                      priority
                    />
                    <p className="image-pill absolute bottom-3 left-3 px-3 py-1 text-xs font-semibold text-brand-dark">
                      Real ARRIVIO in-app experience
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 text-sm text-slate-600">
                    <p className="rounded-lg bg-slate-50 px-3 py-2">Ask ARRIVIO AI about your next relocation step.</p>
                    <p className="rounded-lg bg-slate-50 px-3 py-2">Track progress across jobs, housing, and documents.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-panel float-soft absolute -left-5 top-4 hidden rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 lg:block">
              Real-world relocation intelligence
            </div>
            <div className="glass-panel float-soft absolute -right-4 bottom-8 hidden rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 [animation-delay:1.4s] lg:block">
              Trusted support across life milestones
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
