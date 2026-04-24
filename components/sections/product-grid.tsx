import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS, productUtmUrl } from "@/lib/products";

export function ProductGrid({ campaign = "home" }: { campaign?: string }) {
  return (
    <section
      aria-labelledby="product-grid-heading"
      className="bg-ink-800 py-24 text-sand-50 lg:py-32"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-copper-300">
              Product portfolio
            </p>
            <h2
              id="product-grid-heading"
              className="mt-4 font-serif text-4xl leading-tight text-sand-50 sm:text-5xl"
            >
              Four products, one operating philosophy.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-200">
            Each product in the ReTHINK CNERGY family solves a concrete problem for a
            specific audience. No vaporware, no landing-page theater.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <article className="group flex h-full flex-col rounded-lg border border-ink-600 bg-ink-700 p-6 transition-colors hover:border-copper-500">
                <Badge variant="outline" className="w-fit border-copper-500 text-copper-300">
                  {p.category}
                </Badge>
                <h3 className="mt-4 font-serif text-2xl text-sand-50 [overflow-wrap:anywhere]">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">{p.tagline}</p>
                <p className="mt-5 text-xs uppercase tracking-widest text-copper-400">For</p>
                <p className="mt-1 text-sm text-ink-100">{p.who}</p>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm font-medium text-sand-50 underline-offset-4 hover:underline"
                  >
                    Learn more
                  </Link>
                  <a
                    href={productUtmUrl(p, campaign)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-300 hover:text-copper-200"
                  >
                    Visit {p.domain}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
