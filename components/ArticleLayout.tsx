import type { BlogArticle } from "@/content/site";
import { Container } from "@/components/Container";

type ArticleLayoutProps = {
  article: BlogArticle;
};

export function ArticleLayout({ article }: ArticleLayoutProps) {
  return (
    <section className="py-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">{article.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-dark">{article.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{article.description}</p>
          <div className="mt-4 text-sm text-slate-500">
            <time dateTime={article.date}>{article.date}</time> · {article.readTime}
          </div>

          <div className="mt-10 space-y-5">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
