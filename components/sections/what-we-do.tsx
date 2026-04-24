import { Brain, Code2, Workflow } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";

const PILLARS = [
  {
    icon: Brain,
    title: "Strategy",
    body:
      "Fractional AI and growth advisory for founders who need a clear plan — not another dashboard. Positioning, roadmap, and priorities informed by 20+ years of operating across industries.",
  },
  {
    icon: Code2,
    title: "Software",
    body:
      "Three ReTHINK CNERGY products — SiteMarketing.ai for marketing strategy, Brain.Gritiva for AI agent orchestration, and Powerful Blueprints for career storytelling from proven professionals.",
  },
  {
    icon: Workflow,
    title: "Systems",
    body:
      "Custom AI builds for qualified clients: from structured content pipelines to internal tools. We ship things that work in production, then hand over a running system.",
  },
];

export function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-heading" className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-copper-600">What we do</p>
            <h2
              id="what-we-do-heading"
              className="mt-4 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
            >
              Three disciplines, one firm.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Small businesses don&apos;t need another vendor. They need a partner that
              thinks across strategy, software, and systems — and can actually execute.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={i * 0.05}>
                    <article className="h-full rounded-lg border border-sand-200 bg-card p-6 transition-colors hover:border-copper-400">
                      <div className="flex size-10 items-center justify-center rounded-md bg-ink-800 text-sand-50">
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <h3 className="mt-5 font-serif text-2xl text-ink-800">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500">{pillar.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
