import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import type { Product } from "@/lib/products";
import { productUtmUrl } from "@/lib/products";
import { absoluteUrl } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product: p }: ProductDetailProps) {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    url: p.url,
    brand: { "@type": "Brand", name: "ReTHINK CNERGY" },
    category: p.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      {
        "@type": "ListItem",
        position: 3,
        name: p.name,
        item: absoluteUrl(`/products/${p.slug}`),
      },
    ],
  };

  return (
    <>
      <section className="pt-20 lg:pt-28">
        <Container>
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.22em] text-ink-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/products" className="hover:text-copper-600">
                  Products
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-copper-600">{p.category}</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] text-ink-800 [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl xl:text-7xl">
            {p.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-500">{p.tagline}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <a href={productUtmUrl(p, "detail")} target="_blank" rel="noopener">
                Visit {p.domain} <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to the team</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Badge variant="outline" className="border-copper-400 text-copper-600">
                {p.category}
              </Badge>
              <h2 className="mt-5 font-serif text-3xl text-ink-800 sm:text-4xl">
                The problem
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">{p.problem}</p>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <h2 className="font-serif text-3xl text-ink-800 sm:text-4xl">
                What {p.name} does
              </h2>
              <p className="text-base leading-relaxed text-ink-600">{p.description}</p>
              <dl className="grid gap-6 border-t border-sand-200 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-copper-600">
                    Who it&apos;s for
                  </dt>
                  <dd className="mt-2 text-base text-ink-600">{p.audience}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-copper-600">
                    What&apos;s inside
                  </dt>
                  <dd className="mt-2 text-base text-ink-600">{p.what}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <Container size="narrow">
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            How this fits with ReTHINK CNERGY
          </p>
          <h2 className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            One product, part of a system.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-600">
            {p.name} sits inside a broader portfolio of products and advisory work. The
            same team that built it can help you pick the right combination for where
            you are — whether that&apos;s a DIY subscription, an assisted rollout, or a
            fuller advisory engagement.
          </p>
        </Container>
      </section>

      <CtaBlock
        eyebrow={`${p.name} is ready when you are`}
        heading="Visit the product or talk to us about a tailored engagement."
        primaryLabel="Book a strategy call"
        secondaryHref={productUtmUrl(p, "detail-cta")}
        secondaryLabel={`Visit ${p.domain}`}
      />

      <JsonLd id={`product-jsonld-${p.slug}`} data={productJsonLd} />
      <JsonLd id={`product-breadcrumb-jsonld-${p.slug}`} data={breadcrumbJsonLd} />
    </>
  );
}
