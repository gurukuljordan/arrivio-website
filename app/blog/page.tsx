import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { blogArticles } from "@/content/site";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "ARRIVIO Knowledge Hub with practical guidance on driver licenses, first jobs, credit scores, immigration, and resume strategy."
};

const categories = [
  "Driver license",
  "First job in a new country",
  "Credit score",
  "Immigration processes",
  "Resume tips"
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Practical guidance for newcomer milestones"
        description="Actionable resources designed to help immigrants navigate critical systems with more clarity and confidence."
      />

      <section className="py-20">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">Categories</h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {categories.map((category) => (
              <li key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700">
                {category}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
