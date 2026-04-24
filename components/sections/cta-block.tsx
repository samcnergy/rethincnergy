import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

interface CtaBlockProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaBlock({
  eyebrow = "Next step",
  heading,
  body,
  primaryHref = "/contact",
  primaryLabel = "Book a strategy call",
  secondaryHref,
  secondaryLabel,
}: CtaBlockProps) {
  return (
    <section aria-labelledby="cta-heading" className="pb-24 lg:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-ink-800 px-8 py-16 text-sand-50 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-copper-500/20 blur-3xl"
          />
          <p className="text-xs uppercase tracking-[0.22em] text-copper-300">{eyebrow}</p>
          <h2
            id="cta-heading"
            className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-sand-50 sm:text-5xl"
          >
            {heading}
          </h2>
          {body && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200">{body}</p>
          )}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href={primaryHref}>
                {primaryLabel} <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sand-200 text-sand-50 hover:bg-sand-50 hover:text-ink-800"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
