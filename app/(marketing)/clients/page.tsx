import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { CLIENTS, clientUtmUrl } from "@/lib/clients";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Clients",
  description:
    "Independent firms ReTHINK CNERGY advises on strategy, GEO readiness, and AI-assisted content systems.",
  path: "/clients",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Clients", item: absoluteUrl("/clients") },
  ],
};

const CLIENTS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: CLIENTS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: absoluteUrl(`/clients/${c.slug}`),
    name: c.name,
  })),
};

export default function ClientsPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Clients</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl">
            Independent firms we advise.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            A small number of firms we partner with on strategy, GEO readiness, and
            AI-assisted content systems. These are our clients — they run their own
            businesses. They are not ReTHINK CNERGY products.
          </p>
        </Container>
      </section>

      <section aria-label="Client list" className="py-24 lg:py-32">
        <Container>
          <ul className="grid gap-8">
            {CLIENTS.map((c) => (
              <li key={c.slug}>
                <article className="grid gap-8 rounded-lg border border-sand-200 bg-card p-8 lg:grid-cols-12 lg:p-10">
                  <div className="min-w-0 lg:col-span-4">
                    <Badge variant="outline" className="w-fit border-copper-400 text-copper-600">
                      {c.industry}
                    </Badge>
                    <h2 className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">{c.name}</h2>
                    <p className="mt-2 text-sm text-ink-400">{c.domain}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/clients/${c.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-ink-800 hover:text-copper-600"
                      >
                        Our role <ArrowRight className="size-4" />
                      </Link>
                      <a
                        href={clientUtmUrl(c, "clients-list")}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 text-sm font-medium text-copper-600 hover:text-copper-700"
                      >
                        Visit site <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                  <div className="min-w-0 space-y-5 text-base leading-relaxed text-ink-600 lg:col-span-8">
                    <p className="font-serif text-xl text-ink-800">{c.tagline}</p>
                    <p>{c.description}</p>
                    <dl className="grid gap-5 border-t border-sand-200 pt-5 sm:grid-cols-2">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-copper-600">
                          Who they serve
                        </dt>
                        <dd className="mt-1 text-sm text-ink-600">{c.who}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-copper-600">
                          Our role
                        </dt>
                        <dd className="mt-1 text-sm text-ink-600">{c.engagement}</dd>
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
        eyebrow="Looking for a similar engagement?"
        heading="If you&rsquo;re a specialist firm that needs an AI-fluent strategy partner, start here."
        primaryLabel="Talk to us"
        secondaryHref="/services"
        secondaryLabel="See services"
      />

      <JsonLd id="clients-list-jsonld" data={CLIENTS_JSONLD} />
      <JsonLd id="clients-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
