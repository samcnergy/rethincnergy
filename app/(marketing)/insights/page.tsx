import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Long-form writing from ReTHINK CNERGY on AI strategy, GEO readiness, and the operating shifts reshaping small business.",
  path: "/insights",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/insights") },
  ],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const articles = getAllArticles();
  return (
    <>
      <section className="pt-20 lg:pt-28">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Insights</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl">
            Writing for operators.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Essays, field notes, and frameworks on what AI actually changes for small
            businesses — and what it doesn&apos;t.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <ul className="grid gap-8">
            {articles.map((article, idx) => (
              <li key={article.slug}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group grid gap-6 border-t border-sand-200 pt-8 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="space-y-3 lg:col-span-3">
                    <time
                      dateTime={article.date}
                      className="block text-xs uppercase tracking-wider text-copper-600"
                    >
                      {formatDate(article.date)}
                    </time>
                    <p className="text-xs text-ink-400">
                      {article.author} · {article.readingTimeMinutes} min read
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <h2 className="font-serif text-3xl leading-tight text-ink-800 group-hover:text-copper-700 sm:text-4xl">
                      {article.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600">
                      {article.description}
                    </p>
                    {article.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
                {idx === articles.length - 1 && (
                  <div className="mt-8 border-t border-sand-200" aria-hidden />
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd id="insights-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
