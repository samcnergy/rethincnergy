import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { PRODUCTS, productUtmUrl } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "SiteMarketing.ai, AloHelp, Brain.Gritiva, and Powerful Blueprints — the four software products built and run by ReTHINK CNERGY.",
  path: "/products",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
  ],
};

const PRODUCTS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: absoluteUrl(`/products/${p.slug}`),
    name: p.name,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Products</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl">
            Production software for small business growth.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Four focused products built and run by ReTHINK CNERGY — from AI-driven
            marketing to Software as a Medical Device. Each one solves a specific problem
            for a specific audience. No vaporware. No landing-page theater.
          </p>
        </Container>
      </section>

      <section aria-label="All products" className="py-24 lg:py-32">
        <Container>
          <ul className="grid gap-8">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <article className="group grid gap-8 rounded-lg border border-sand-200 bg-card p-8 transition-colors hover:border-copper-400 lg:grid-cols-12 lg:p-10">
                  <div className="min-w-0 lg:col-span-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="w-fit border-copper-400 text-copper-600">
                        {p.category}
                      </Badge>
                      {p.comingSoon && (
                        <Badge variant="accent" className="w-fit">
                          Pre-launch
                        </Badge>
                      )}
                    </div>
                    <h2 className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">{p.name}</h2>
                    <p className="mt-2 text-sm text-ink-400">{p.domain}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/products/${p.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-ink-800 hover:text-copper-600"
                      >
                        Learn more <ArrowRight className="size-4" />
                      </Link>
                      {p.comingSoon ? (
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-sm font-medium text-copper-600 hover:text-copper-700"
                        >
                          Request a demo <ArrowRight className="size-4" />
                        </Link>
                      ) : (
                        <a
                          href={productUtmUrl(p, "products")}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1 text-sm font-medium text-copper-600 hover:text-copper-700"
                        >
                          Visit site <ArrowUpRight className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0 space-y-5 text-base leading-relaxed text-ink-600 lg:col-span-8">
                    <p className="font-serif text-xl text-ink-800">{p.tagline}</p>
                    <p>{p.description}</p>
                    <dl className="grid gap-5 border-t border-sand-200 pt-5 sm:grid-cols-3">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-copper-600">Who</dt>
                        <dd className="mt-1 text-sm text-ink-600">{p.who}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-xs uppercase tracking-wider text-copper-600">
                          What&apos;s included
                        </dt>
                        <dd className="mt-1 text-sm text-ink-600">{p.what}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Not sure which one?"
        heading="We&rsquo;ll help you pick the right surface."
        body="Tell us a little about your business and we&rsquo;ll point you to the product — or the engagement — that fits. No pressure, no pitch."
        primaryLabel="Talk to us"
        secondaryHref="/services"
        secondaryLabel="See services"
      />

      <JsonLd id="products-list-jsonld" data={PRODUCTS_JSONLD} />
      <JsonLd id="products-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
