import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { SITE_CONTACT } from "@/lib/seo";

export function InvestmentCallout() {
  return (
    <section
      aria-labelledby="investment-heading"
      className="bg-sand-100 py-24 lg:py-32"
    >
      <Container size="narrow">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Investment opportunities
          </p>
          <h2
            id="investment-heading"
            className="mt-4 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
          >
            Backing the next generation of AI ventures.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-600">
            <p>
              Rethink Cnergy is building three self-funded AI companies —
              AutismRI (clinical-grade diagnostics for autism spectrum
              disorder), AI Search Optimization (GEO platform for local
              professionals), and Gritiva AI Brain (proprietary LLM
              infrastructure). Each operates as its own business unit with a
              separate revenue model, team, and path to profitability.
            </p>
            <p>
              If you&rsquo;re an investor interested in healthcare AI,
              AI-driven marketing, or proprietary LLM infrastructure — we&rsquo;d
              like to hear from you.
            </p>
          </div>
          <div className="mt-8">
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-600 hover:text-copper-700"
            >
              {SITE_CONTACT.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
