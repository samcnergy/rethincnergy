import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { getAllArticles } from "@/lib/articles";

export function InsightsPreview() {
  const articles = getAllArticles().slice(0, 3);
  if (articles.length === 0) return null;
  return (
    <section aria-labelledby="insights-heading" className="bg-sand-100 py-24 lg:py-32">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Insights</p>
            <h2
              id="insights-heading"
              className="mt-4 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
            >
              Long-form thinking for operators.
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden items-center gap-1 text-sm font-medium text-ink-700 hover:text-copper-600 sm:inline-flex"
          >
            All insights <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/insights/${article.slug}`}
                className="group flex h-full flex-col rounded-lg border border-sand-200 bg-card p-6 transition-colors hover:border-copper-400"
              >
                <time
                  dateTime={article.date}
                  className="text-xs uppercase tracking-wider text-copper-600"
                >
                  {formatDate(article.date)}
                </time>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-ink-800 group-hover:text-copper-700">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  {article.description}
                </p>
                <div className="mt-auto pt-6 text-xs text-ink-400">
                  {article.author} · {article.readingTimeMinutes} min read
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 sm:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink-700"
          >
            All insights <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
