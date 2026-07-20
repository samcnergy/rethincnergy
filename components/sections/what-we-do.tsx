import Link from "next/link";
import { Activity, Search, Cpu } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { PROJECTS } from "@/lib/projects";

const ICONS = {
  alohelp: Activity,
  "ai-search-optimization": Search,
  "gritiva-ai-brain": Cpu,
};

export function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-heading" className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
              Three active projects
            </p>
            <h2
              id="what-we-do-heading"
              className="mt-4 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
            >
              We&apos;re launching and scaling three AI ventures.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Each project runs on our Private Language Model — proprietary LLM — and
              operates as its own business unit with a separate investment story.
            </p>
            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper-600 hover:text-copper-700"
            >
              View all projects <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {PROJECTS.map((project, i) => {
                const Icon = ICONS[project.slug];
                return (
                  <Reveal key={project.slug} delay={i * 0.05}>
                    <Link href={project.href} className="group block h-full">
                      <article className="flex h-full flex-col rounded-lg border border-sand-200 bg-card p-6 transition-colors hover:border-copper-400">
                        <div className="flex size-10 items-center justify-center rounded-md bg-ink-800 text-sand-50">
                          <Icon className="size-5" aria-hidden />
                        </div>
                        <h3 className="mt-5 font-serif text-2xl text-ink-800">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-wider text-copper-600">
                          {project.status}
                        </p>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                          {project.description}
                        </p>
                        <p className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-copper-600 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="size-3" />
                        </p>
                      </article>
                    </Link>
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
