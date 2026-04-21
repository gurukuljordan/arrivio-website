import { cn } from "@/components/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-dark md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}
