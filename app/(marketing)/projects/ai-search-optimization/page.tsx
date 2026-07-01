import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "AI Search Optimization — GEO for Local Professionals",
  description:
    "Rethink Cnergy's AI Search Optimization project: SiteMarketing.ai (GEO platform) and Powerful Blueprints (free AI-optimized publishing) — built for physicians, attorneys, and real estate agents.",
  path: "/projects/ai-search-optimization",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Search Optimization",
      item: absoluteUrl("/projects/ai-search-optimization"),
    },
  ],
};

const PRODUCTS = [
  {
    name: "SiteMarketing.ai",
    url: "https://sitemarketing.ai",
    model: "Paid · $500–$3K/month GEO retainer",
    description:
      "GEO platform for local professionals. Starts with a free AI Visibility Assessment — scoring your website, social authority, and LLM presence across ChatGPT, Perplexity, Gemini, and Google AI Overviews — then delivers a monthly retainer roadmap optimizing your content for AI platform algorithms.",
    what: [
      "Free AI Visibility Assessment",
      "Monthly GEO retainer roadmap",
      "Content optimization for AI search platforms",
      "Citation monitoring across ChatGPT, Perplexity, and Gemini",
      "Strategic Partner Network",
    ],
  },
  {
    name: "Powerful Blueprints",
    url: "https://powerfulblueprints.com",
    model: "Free · Funnel into SiteMarketing.ai",
    description:
      "Free AI-optimized content publishing platform. Articles are structured for GEO from the start — schema markup, semantic HTML, and microdata built in. One-click distribution across LinkedIn, Medium, Quora, and Reddit. Integrates directly with SiteMarketing.ai for professionals on paid retainers.",
    what: [
      "AI-optimized article publishing",
      "Built-in GEO schema markup",
      "Multi-platform distribution (LinkedIn, Medium, Quora, Reddit)",
      "AI citation monitoring",
      "SiteMarketing.ai integration",
    ],
  },
];

export default function AISearchOptimizationPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="aisearch-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Project · B2B SaaS
          </p>
          <h1
            id="aisearch-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            AI Search Optimization
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-500">
            AI search has changed how clients find professionals. Physicians, attorneys,
            and real estate agents who aren&rsquo;t visible in ChatGPT, Perplexity, and
            Google AI Overviews are invisible to a growing share of their market.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-sand-200 pt-10 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Status</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">Live · Pre-revenue</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Seeking</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">Seed / Series A</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Market</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">$1B+ GEO market</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Profitability</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">2025–2026</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* The problem */}
      <section aria-labelledby="problem-heading" className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="problem-heading" className="font-serif text-3xl text-ink-800 sm:text-4xl">
                The problem
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-600 lg:col-span-8">
              <p>
                Traditional SEO optimized for Google&rsquo;s ten blue links. AI search
                works differently — models surface professionals based on LLM training
                data, structured content, and citation authority. Most local
                professionals have near-zero visibility in AI search and don&rsquo;t
                know it.
              </p>
              <p>
                The window to build AI search authority is open now. Professionals who
                establish citations and structured content while competitors are
                unaware will compound that advantage for years. The ones who wait will
                face a significantly steeper climb.
              </p>
              <p>
                Target audience: physicians, attorneys, and real estate agents in major
                U.S. markets generating $1–5M annually. High lifetime value, high
                motivation — they just need to understand the opportunity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section aria-labelledby="products-heading" className="bg-sand-100 py-24 lg:py-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Two products
          </p>
          <h2 id="products-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            One mission: own your AI search visibility
          </h2>

          <ul className="mt-12 grid gap-8 lg:grid-cols-2">
            {PRODUCTS.map((product) => (
              <li key={product.name}>
                <article className="flex h-full flex-col rounded-lg border border-sand-200 bg-card p-8">
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-3xl text-ink-800">{product.name}</h3>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-copper-600">
                    {product.model}
                  </p>
                  <p className="mt-5 flex-1 text-base leading-relaxed text-ink-600">
                    {product.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {product.what.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-500"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-copper-600 hover:text-copper-700"
                    >
                      Visit {product.name} →
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Business model */}
      <section aria-labelledby="model-heading" className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="model-heading" className="font-serif text-3xl text-ink-800 sm:text-4xl">
                Business model
              </h2>
            </div>
            <dl className="grid gap-6 text-sm lg:col-span-8 sm:grid-cols-2">
              {[
                {
                  term: "Revenue model",
                  detail: "SaaS subscriptions via SiteMarketing.ai · $500–$3,000/month per client depending on market and scope",
                },
                {
                  term: "Free tier / funnel",
                  detail: "Powerful Blueprints (free publishing) feeds the paid SiteMarketing.ai retainer — acquisition cost stays low",
                },
                {
                  term: "Target customer",
                  detail: "Local professionals (physicians, attorneys, real estate agents) generating $1–5M annually in major U.S. markets",
                },
                {
                  term: "Future expansion",
                  detail: "White-label licensing for marketing agencies · Embedded services · International markets",
                },
                {
                  term: "Underlying tech",
                  detail: "Gritiva AI Brain trained on content, search algorithms, and LLM citation patterns — proprietary advantage vs. generic tools",
                },
                {
                  term: "Path to profitability",
                  detail: "2025–2026 · Capital will fund sales team, customer success, and product acceleration",
                },
              ].map((item) => (
                <div key={item.term} className="border-t border-sand-200 pt-5">
                  <dt className="font-medium uppercase tracking-wider text-copper-600 text-xs">
                    {item.term}
                  </dt>
                  <dd className="mt-2 text-ink-600">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Investment */}
      <section aria-labelledby="aisearch-invest-heading" className="bg-ink-800 py-24 text-sand-50 lg:py-32">
        <Container size="narrow">
          <p className="text-xs uppercase tracking-[0.22em] text-copper-300">Investment</p>
          <h2 id="aisearch-invest-heading" className="mt-4 font-serif text-3xl text-sand-50 sm:text-4xl">
            Seed / Series A
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-200">
            <p>
              Capital will fund the sales team, customer success function, and product
              enhancements that accelerate paid subscriber growth on SiteMarketing.ai.
            </p>
            <p>
              The core product and free funnel (Powerful Blueprints) are live. The
              investment thesis is a proven acquisition funnel, a subscription model
              with strong unit economics, and a market that has not yet realized the
              opportunity exists.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-300 hover:text-copper-200"
            >
              Inquire about the AI Search Optimization project →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Work with us"
        heading="Local professional who wants to own AI search? Or an investor who sees the GEO opportunity?"
        body="We&rsquo;re talking to both. Tell us who you are and what you&rsquo;re looking for."
        primaryLabel="Start the conversation"
        secondaryHref="/projects"
        secondaryLabel="View all projects"
      />

      <JsonLd id="aisearch-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
