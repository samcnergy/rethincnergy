import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { SITE_CONTACT } from "@/lib/seo";

const OPPORTUNITIES = [
  {
    project: "AutismRI",
    ask: "$500K",
    use: "Platform development, pilot deployments, and team expansion",
    profitability: "2027–2028",
    href: "/projects/alohelp",
  },
  {
    project: "AI Search Optimization",
    ask: "Seed / Series A",
    use: "Sales team, GTM acceleration, product enhancement",
    profitability: "2025–2026",
    href: "/projects/ai-search-optimization",
  },
  {
    project: "Gritiva AI Brain",
    ask: "Expansion capital",
    use: "Infrastructure scaling, sales, white-label partnerships",
    profitability: "Revenue from day one",
    href: "/gritiva",
  },
];

export function InvestmentCallout() {
  return (
    <section
      aria-labelledby="investment-heading"
      className="bg-sand-100 py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Investment opportunities
          </p>
          <h2
            id="investment-heading"
            className="mt-4 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
          >
            Three ventures. Three investment stories.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            Each project operates as its own business unit with a separate
            revenue model, funding ask, and path to profitability.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {OPPORTUNITIES.map((opp, i) => (
            <Reveal key={opp.project} delay={i * 0.05}>
              <Link href={opp.href} className="group block h-full">
                <article className="flex h-full flex-col rounded-lg border border-sand-200 bg-card p-8 transition-colors hover:border-copper-400">
                  <h3 className="font-serif text-2xl text-ink-800">{opp.project}</h3>
                  <p className="mt-1 text-2xl font-serif text-copper-600">{opp.ask}</p>
                  <dl className="mt-6 flex-1 space-y-4 text-sm">
                    <div>
                      <dt className="font-medium uppercase tracking-wider text-copper-600">
                        Use of capital
                      </dt>
                      <dd className="mt-1 text-ink-600">{opp.use}</dd>
                    </div>
                    <div>
                      <dt className="font-medium uppercase tracking-wider text-copper-600">
                        Path to profitability
                      </dt>
                      <dd className="mt-1 text-ink-600">{opp.profitability}</dd>
                    </div>
                  </dl>
                  <p className="mt-6 text-xs font-medium text-copper-600 group-hover:text-copper-700">
                    View project details →
                  </p>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-12 text-sm text-ink-500">
            Interested in backing one of our ventures?{" "}
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="font-medium text-copper-600 hover:text-copper-700"
            >
              {SITE_CONTACT.email}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
