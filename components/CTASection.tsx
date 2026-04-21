import Link from "next/link";
import { Container } from "@/components/Container";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

type CTASectionProps = {
  title: string;
  description: string;
  showEarlyAccessForm?: boolean;
  source?: string;
};

export function CTASection({ title, description, showEarlyAccessForm = false, source = "cta-section" }: CTASectionProps) {
  return (
    <section className="section-tint py-20">
      <Container>
        <div className="rounded-3xl bg-brand-gradient p-[1px] shadow-soft">
          <div className="rounded-3xl bg-white px-8 py-12 text-center md:px-16">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-dark md:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{description}</p>
            {showEarlyAccessForm ? (
              <div className="mx-auto mt-8 max-w-lg text-left">
                <EarlyAccessForm source={source} />
              </div>
            ) : (
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="rounded-full bg-brand-primary px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Join Early Access
                </Link>
                <Link
                  href="/product"
                  className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  Download App
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
