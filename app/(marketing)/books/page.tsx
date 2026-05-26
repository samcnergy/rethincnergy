import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { AUTHORED_BOOKS, RECOMMENDED_BOOKS } from "@/lib/books";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_URL } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Books",
  description:
    "Books by Parham Shariat — The Business Strategy Series — and a short list of strategy and operating reads we recommend to clients.",
  path: "/books",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Books", item: absoluteUrl("/books") },
  ],
};

const BOOK_SERIES_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BookSeries",
  name: "The Business Strategy Series",
  author: {
    "@type": "Person",
    name: "Parham Shariat",
    url: absoluteUrl("/about"),
  },
  url: absoluteUrl("/books"),
  hasPart: AUTHORED_BOOKS.map((b) => ({
    "@type": "Book",
    name: b.title,
    alternateName: b.subtitle,
    bookEdition: b.seriesNumber ? `Book ${b.seriesNumber}` : undefined,
    author: {
      "@type": "Person",
      name: "Parham Shariat",
      url: absoluteUrl("/about"),
    },
    image: absoluteUrl(b.cover),
    inLanguage: "en",
    abstract: b.summary,
    url: `${SITE_URL}/books#${b.slug}`,
    workExample: {
      "@type": "Book",
      bookFormat: "https://schema.org/Paperback",
      isbn: "",
    },
    ...(b.buyUrl
      ? {
          offers: {
            "@type": "Offer",
            url: b.buyUrl,
            seller: { "@type": "Organization", name: "Amazon" },
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  })),
};

const PERSON_AUTHOR_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parham Shariat",
  url: absoluteUrl("/about"),
  jobTitle: "CEO & Co-founder, ReTHINK CNERGY",
  author: AUTHORED_BOOKS.map((b) => ({
    "@type": "Book",
    name: b.title,
    alternateName: b.subtitle,
    abstract: b.summary,
    url: `${SITE_URL}/books#${b.slug}`,
    image: absoluteUrl(b.cover),
    inLanguage: "en",
  })),
};

export default function BooksPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="books-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Books</p>
          <h1
            id="books-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            The Business Strategy Series.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Books by Parham Shariat on strategic architecture, leadership, pattern
            recognition, digital ownership, and AI search — written for founders and
            operators who want the thinking behind the execution.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-ink-500">
            <span className="inline-flex items-center gap-2">
              <BookOpen className="size-4 text-copper-600" aria-hidden /> 5 titles
            </span>
            <span aria-hidden>·</span>
            <span>Series in progress</span>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="authored-heading"
        className="py-24 lg:py-32"
      >
        <Container>
          <h2
            id="authored-heading"
            className="font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
          >
            Written by Parham Shariat
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            Four volumes in The Business Strategy Series, plus one companion volume
            specifically on Generative Engine Optimization.
          </p>

          <ul className="mt-16 space-y-20">
            {AUTHORED_BOOKS.map((book) => (
              <li key={book.slug} id={book.slug} className="scroll-mt-24">
                <article className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <div
                      className="relative aspect-[2/3] overflow-hidden rounded-md border border-sand-200 bg-sand-100 shadow-sm"
                      style={{ boxShadow: `0 1px 0 ${book.accentColor}22, 0 20px 40px -20px ${book.accentColor}40` }}
                    >
                      <Image
                        src={book.cover}
                        alt={book.coverAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-2">
                      {book.series && (
                        <Badge
                          variant="outline"
                          className="border-copper-400 text-copper-600"
                        >
                          {book.series}
                        </Badge>
                      )}
                      {typeof book.seriesNumber === "number" && (
                        <Badge variant="secondary">Book {book.seriesNumber}</Badge>
                      )}
                    </div>

                    <h3 className="mt-4 font-serif text-3xl leading-tight text-ink-800 sm:text-4xl">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="mt-2 font-serif text-xl leading-snug text-ink-500">
                        {book.subtitle}
                      </p>
                    )}

                    <p className="mt-6 text-lg leading-relaxed text-ink-700">
                      {book.summary}
                    </p>
                    <p
                      className="mt-5 text-base leading-relaxed text-ink-600"
                      dangerouslySetInnerHTML={{ __html: book.description }}
                    />

                    <div className="mt-6 border-l-2 border-copper-500 pl-4">
                      <p className="text-xs uppercase tracking-wider text-copper-600">
                        For
                      </p>
                      <p
                        className="mt-1 text-base leading-relaxed text-ink-600"
                        dangerouslySetInnerHTML={{ __html: book.forWhom }}
                      />
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      {book.buyUrl ? (
                        <>
                          <Button asChild size="sm" variant="default">
                            <a
                              href={book.buyUrl}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              aria-label={`Buy ${book.title} on Amazon`}
                            >
                              Buy on Amazon <ArrowUpRight className="size-4" />
                            </a>
                          </Button>
                          <span className="text-xs text-ink-400">
                            Ships from Amazon · Opens in a new tab
                          </span>
                        </>
                      ) : (
                        <Button asChild size="sm" variant="default">
                          <Link href="/contact">
                            Request a copy <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="recommended-heading"
        className="bg-sand-100 py-24 lg:py-32"
      >
        <Container>
          <h2
            id="recommended-heading"
            className="font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
          >
            Recommended reading
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            A short, opinionated list of books that align with the firm&rsquo;s thesis.
            We hand these out to clients when the topic comes up.
          </p>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RECOMMENDED_BOOKS.map((book) => (
              <li key={book.slug}>
                <article className="flex h-full flex-col rounded-lg border border-sand-200 bg-card p-6">
                  <Badge variant="outline" className="w-fit border-copper-400 text-copper-600">
                    {book.topic}
                  </Badge>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink-800">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">
                    {book.author} · {book.year}
                  </p>
                  <p
                    className="mt-4 text-sm leading-relaxed text-ink-600"
                    dangerouslySetInnerHTML={{ __html: book.why }}
                  />
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-ink-500">
            Have a recommendation we should add?{" "}
            <Link
              href="/contact"
              className="font-medium text-copper-600 underline-offset-4 hover:underline"
            >
              Send it over.
            </Link>
          </p>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Speaking & workshops"
        heading="Parham speaks on AI strategy, GEO, and the Grand Recalibration."
        body="If you&rsquo;re organizing an executive briefing, conference keynote, or half-day workshop, the books are a good starting point — talks go deeper and are tailored to the room."
        primaryLabel="Book a conversation"
        secondaryHref="/services"
        secondaryLabel="See services"
      />

      <JsonLd id="books-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
      <JsonLd id="books-series-jsonld" data={BOOK_SERIES_JSONLD} />
      <JsonLd id="books-person-author-jsonld" data={PERSON_AUTHOR_JSONLD} />
    </>
  );
}
