import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { SITE_LAST_UPDATED } from "@/lib/seo";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-28" aria-labelledby="hero-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-to-b from-sand-100/80 via-sand-50 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 -z-10 h-[520px] w-[520px] rounded-full bg-copper-200/35 blur-3xl"
      />
      <Container>
        <Reveal>
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-copper-600">
            <span className="h-px w-10 bg-copper-500" aria-hidden />
            AI venture studio · Proprietary AI Brain · Three active projects
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1
            id="hero-heading"
            className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-ink-800 sm:text-6xl lg:text-7xl xl:text-[88px]"
          >
            We launch and scale AI companies. Every project runs on our Private Language Model.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-ink-500 sm:text-xl">
            Rethink Cnergy is an AI venture studio. We build, self-fund, and scale
            AI-powered companies. Our Private Language Model is the proprietary infrastructure
            that powers every project.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore our projects <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Book a strategy call</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-xs text-ink-400">
            <span className="uppercase tracking-wider">Last reviewed</span>{" "}
            <time dateTime={SITE_LAST_UPDATED}>{formatDate(SITE_LAST_UPDATED)}</time>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
