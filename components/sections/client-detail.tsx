import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { clientUtmUrl, type Client } from "@/lib/clients";
import { absoluteUrl } from "@/lib/utils";

interface ClientDetailProps {
  client: Client;
}

export function ClientDetail({ client: c }: ClientDetailProps) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: c.name,
    url: c.url,
    description: c.description,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Clients", item: absoluteUrl("/clients") },
      {
        "@type": "ListItem",
        position: 3,
        name: c.name,
        item: absoluteUrl(`/clients/${c.slug}`),
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
                <Link href="/clients" className="hover:text-copper-600">
                  Clients
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-copper-600">{c.industry}</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ink-800 sm:text-6xl lg:text-7xl">
            {c.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-500">{c.tagline}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <a href={clientUtmUrl(c, "detail")} target="_blank" rel="noopener">
                Visit {c.domain} <ArrowUpRight className="size-4" />
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
                {c.industry}
              </Badge>
              <h2 className="mt-5 font-serif text-3xl text-ink-800 sm:text-4xl">
                About {c.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">{c.description}</p>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <h2 className="font-serif text-3xl text-ink-800 sm:text-4xl">
                Our role
              </h2>
              <p className="text-base leading-relaxed text-ink-600">{c.engagement}</p>
              <dl className="grid gap-6 border-t border-sand-200 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-copper-600">
                    Who they serve
                  </dt>
                  <dd className="mt-2 text-base text-ink-600">{c.who}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-copper-600">
                    Relationship
                  </dt>
                  <dd className="mt-2 text-base text-ink-600">
                    Independent firm · ReTHINK CNERGY advisory engagement
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow={`${c.name} is an independent firm`}
        heading="Want a similar engagement for your firm?"
        primaryLabel="Book a strategy call"
        secondaryHref={clientUtmUrl(c, "detail-cta")}
        secondaryLabel={`Visit ${c.domain}`}
      />

      <JsonLd id={`client-jsonld-${c.slug}`} data={orgJsonLd} />
      <JsonLd id={`client-breadcrumb-jsonld-${c.slug}`} data={breadcrumbJsonLd} />
    </>
  );
}
