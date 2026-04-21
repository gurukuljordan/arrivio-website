import type { Feature } from "@/content/site";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/55 to-indigo-500/0" aria-hidden />
      <h3 className="text-xl font-semibold text-brand-dark">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 transition group-hover:text-slate-700">{feature.description}</p>
    </article>
  );
}
