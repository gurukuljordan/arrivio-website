import { Container } from "@/components/Container";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="section-tint relative overflow-hidden bg-hero-glow py-16 md:py-20">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" aria-hidden />
      <div className="absolute -right-10 top-2 h-44 w-44 rounded-full bg-indigo-100/70 blur-3xl" aria-hidden />
      <Container>
        <div className="glass-panel max-w-3xl rounded-3xl p-8 md:p-10">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">{eyebrow}</p>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-brand-dark md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-slate-600">{description}</p>
        </div>
      </Container>
    </section>
  );
}
