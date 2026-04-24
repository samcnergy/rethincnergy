import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { CLIENTS, clientUtmUrl } from "@/lib/clients";

export function ClientGrid({ campaign = "home" }: { campaign?: string }) {
  return (
    <section aria-labelledby="client-grid-heading" className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Selected clients</p>
            <h2
              id="client-grid-heading"
              className="mt-4 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
            >
              Firms we&rsquo;ve helped ship.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-500">
            Independent firms that bring ReTHINK CNERGY in for strategy, GEO readiness, and
            content systems. These are our clients — not our products.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {CLIENTS.map((c) => (
            <li key={c.slug}>
              <article className="group flex h-full flex-col rounded-lg border border-sand-200 bg-card p-6 transition-colors hover:border-copper-400">
                <Badge variant="outline" className="w-fit border-copper-400 text-copper-600">
                  {c.industry}
                </Badge>
                <h3 className="mt-4 font-serif text-2xl text-ink-800">{c.name}</h3>
                <p className="mt-1 text-sm text-ink-400">{c.domain}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">{c.tagline}</p>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                  <Link
                    href={`/clients/${c.slug}`}
                    className="text-sm font-medium text-ink-800 underline-offset-4 hover:underline"
                  >
                    Our role
                  </Link>
                  <a
                    href={clientUtmUrl(c, campaign)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-600 hover:text-copper-700"
                  >
                    Visit {c.domain}
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
