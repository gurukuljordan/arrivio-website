import Link from "next/link";
import type { BlogArticle } from "@/content/site";

type BlogCardProps = {
  article: BlogArticle;
};

export function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">{article.category}</p>
      <h3 className="mt-3 text-xl font-semibold text-brand-dark">{article.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>{article.date}</span>
        <span>{article.readTime}</span>
      </div>
      <Link href={`/blog/${article.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-blue-700">
        Read article
      </Link>
    </article>
  );
}
