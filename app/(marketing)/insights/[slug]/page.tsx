import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { PARHAM_JSONLD } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return buildMetadata({ title: "Article", path: "/insights" });
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-10 font-serif text-4xl text-ink-800" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 font-serif text-3xl text-ink-800" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-10 font-serif text-2xl text-ink-800" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-6 text-lg leading-relaxed text-ink-600" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mt-6 list-disc space-y-2 pl-6 text-lg text-ink-600 marker:text-copper-500"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mt-6 list-decimal space-y-2 pl-6 text-lg text-ink-600 marker:text-copper-500"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-8 border-l-2 border-copper-500 pl-6 font-serif text-xl italic text-ink-800"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-copper-600 underline-offset-4 hover:underline" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-ink-800" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-sand-100 px-1.5 py-0.5 font-mono text-sm text-ink-800"
      {...props}
    />
  ),
};

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ReTHINK CNERGY",
      url: absoluteUrl("/"),
    },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
    keywords: article.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/insights") },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: absoluteUrl(`/insights/${article.slug}`),
      },
    ],
  };

  return (
    <>
      <article className="pt-20 lg:pt-28">
        <Container size="narrow">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.22em] text-copper-600 hover:text-copper-700"
          >
            <ArrowLeft className="size-4" /> All insights
          </Link>
          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-ink-400">
              <time dateTime={article.date} className="text-copper-600">
                {formatDate(article.date)}
              </time>
              <span aria-hidden>·</span>
              <span>{article.author}</span>
              <span aria-hidden>·</span>
              <span>{article.readingTimeMinutes} min read</span>
            </div>
            <h1 className="mt-5 font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-500">
              {article.description}
            </p>
          </header>
          <div className="mt-12">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>
          {article.authorBio && (
            <aside className="mt-20 rounded-lg border border-sand-200 bg-card p-6 lg:p-8">
              <p className="text-xs uppercase tracking-wider text-copper-600">Author</p>
              <h2 className="mt-2 font-serif text-2xl text-ink-800">{article.author}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600">{article.authorBio}</p>
            </aside>
          )}
          {article.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </Container>
      </article>

      <div className="pb-24" />

      <JsonLd id={`article-jsonld-${article.slug}`} data={articleJsonLd} />
      <JsonLd id={`article-breadcrumb-jsonld-${article.slug}`} data={breadcrumbJsonLd} />
      {article.author === "Parham Shariat" && (
        <JsonLd id={`article-person-jsonld-${article.slug}`} data={PARHAM_JSONLD} />
      )}
    </>
  );
}
