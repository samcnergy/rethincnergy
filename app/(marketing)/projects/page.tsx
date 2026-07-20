import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, ORGANIZATION_JSONLD } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects";

export const metadata = buildMetadata({
  title: "Projects — AI Ventures",
  description:
    "Rethink Cnergy is an AI venture studio with three active projects: AloHelp (healthcare diagnostics), AI Search Optimization, and a Private Language Model (proprietary LLM infrastructure).",
  path: "/projects",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="projects-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Projects
          </p>
          <h1
            id="projects-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            We launch and scale AI-powered companies.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Three ventures in market. Each runs on our Private Language Model — proprietary
            LLM — and operates as its own business unit with separate financials,
            investment story, and path to profitability.
          </p>
        </Container>
      </section>

      <section aria-label="Active ventures" className="py-24 lg:py-32">
        <Container>
          <ul className="grid gap-8">
            {PROJECTS.map((project, i) => (
              <li key={project.slug}>
                <article className="rounded-lg border border-sand-200 bg-card p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
                        Project {i + 1} of {PROJECTS.length}
                      </p>
                      <h2 className="mt-3 font-serif text-4xl text-ink-800">
                        {project.name}
                      </h2>
                      <p className="mt-2 text-sm text-ink-500">{project.tagline}</p>

                      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">
                            Status
                          </dt>
                          <dd className="mt-1 text-ink-700">{project.status}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">
                            Seeking
                          </dt>
                          <dd className="mt-1 text-ink-700">{project.seeking}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">
                            Market
                          </dt>
                          <dd className="mt-1 text-ink-700">{project.market}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">
                            Profitability
                          </dt>
                          <dd className="mt-1 text-ink-700">{project.pathToProfitability}</dd>
                        </div>
                      </dl>

                      <Link
                        href={project.href}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper-600 hover:text-copper-700"
                      >
                        View full project details <ArrowRight className="size-4" />
                      </Link>
                    </div>

                    <div className="lg:col-span-7">
                      <p className="text-base leading-relaxed text-ink-600">
                        {project.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-3 text-sm text-ink-600"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-500"
                              aria-hidden
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-xs text-ink-400 uppercase tracking-wider">
                        Business model · {project.businessModel}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Interested in backing a venture?"
        heading="Each project has its own investment story. Let&rsquo;s talk."
        body="Whether you&rsquo;re evaluating AloHelp for healthcare AI, the AI Search Optimization platform, or our Private Language Model as infrastructure — we&rsquo;re happy to walk through the details."
        primaryLabel="Start the conversation"
        secondaryHref="/gritiva"
        secondaryLabel="Private Language Model"
      />

      <JsonLd id="projects-org-jsonld" data={ORGANIZATION_JSONLD} />
      <JsonLd id="projects-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
