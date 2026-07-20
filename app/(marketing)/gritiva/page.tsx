import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, SITE_CONTACT } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Gritiva AI Brain — Proprietary LLM Infrastructure",
  description:
    "Gritiva AI Brain is Rethink Cnergy's proprietary large language model. Specialized AI that runs locally — no API dependency, no per-query costs. Train on your domain. Deploy anywhere.",
  path: "/gritiva",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Gritiva", item: absoluteUrl("/gritiva") },
  ],
};

const DEPLOYMENT_OPTIONS = [
  {
    id: "on-premise",
    name: "On-Premise",
    best: "Healthcare, finance, regulated industries",
    detail:
      "Deploy Gritiva entirely on your infrastructure. Your data never leaves your servers. Fixed annual license plus infrastructure costs.",
    href: "/gritiva/private-llm",
  },
  {
    id: "hybrid",
    name: "Hybrid",
    best: "Companies wanting data privacy with managed infrastructure",
    detail:
      "Your data stays local. Inference runs on Rethink's managed infrastructure. Fixed annual license plus monthly managed fee.",
    href: null,
  },
  {
    id: "managed-saas",
    name: "Managed SaaS",
    best: "Teams without in-house infrastructure",
    detail:
      "Fully managed by Rethink. Data encryption in transit and at rest. Fixed annual license plus usage-based monthly fee.",
    href: null,
  },
  {
    id: "white-label",
    name: "White-Label Partnership",
    best: "Agencies, platform builders, and system integrators",
    detail:
      "Build your product on Gritiva. Rebrand it. Sell it to your customers. Revenue-sharing partnership plus infrastructure fees.",
    href: null,
  },
];

const COMPARISON = [
  { factor: "Cost model", gritiva: "Fixed annual license", chatgpt: "Per-query API", claude: "Per-query API", opensource: "Free (self-hosted)" },
  { factor: "Domain specialization", gritiva: "Fine-tune on your data", chatgpt: "General training only", claude: "General training only", opensource: "Fine-tune yourself" },
  { factor: "Privacy", gritiva: "On-premise option", chatgpt: "Data sent to OpenAI", claude: "Data sent to Anthropic", opensource: "Full control" },
  { factor: "HIPAA compliance", gritiva: "Ready", chatgpt: "Not HIPAA", claude: "Not HIPAA", opensource: "Depends on setup" },
  { factor: "White-label", gritiva: "Yes", chatgpt: "No", claude: "No", opensource: "Possible but unsupported" },
  { factor: "Managed support", gritiva: "Dedicated Rethink team", chatgpt: "OpenAI tiers", claude: "Anthropic tiers", opensource: "Community only" },
];

export default function GritivaPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="gritiva-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Gritiva AI Brain
          </p>
          <h1
            id="gritiva-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            Specialized AI that runs locally. No API dependency.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-500">
            Gritiva AI Brain is a proprietary large language model designed for
            specialized applications. Train on your domain. Deploy on your
            infrastructure. Pay a fixed cost — not per query.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-sand-200 pt-10 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Status</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">Live · Beta</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Seeking</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">Expansion capital</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Revenue</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">From day one</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Deployment</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">On-premise · Hybrid · SaaS</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Why we built it */}
      <section aria-labelledby="why-heading" className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="why-heading" className="font-serif text-3xl text-ink-800 sm:text-4xl">
                Why we built our own LLM
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-8">
              {[
                {
                  label: "API economics don't scale",
                  body: "ChatGPT API runs $0.002–$0.06 per 1K tokens. For production applications with 10,000+ queries/month, that's $600–$1,800/month in LLM costs alone — with no volume discounts and no control over pricing changes.",
                },
                {
                  label: "General training doesn't work for specialists",
                  body: "Medical AI needs medical literature and imaging protocols. Legal AI needs case law and regulatory frameworks. Marketing AI needs content performance and search algorithm data. General LLMs are trained on the internet — not your domain.",
                },
                {
                  label: "API dependency is a business risk",
                  body: "Third-party providers can change pricing, throttle access, or alter their terms without notice. Data leaves your infrastructure on every query. Gritiva runs on-premise or hybrid — you own the model and the data.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-6">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-500" aria-hidden />
                  <div>
                    <h3 className="font-medium text-ink-800">{item.label}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-500">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Deployment options */}
      <section id="deployment" aria-labelledby="deployment-heading" className="bg-sand-100 py-24 lg:py-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Deployment options
          </p>
          <h2 id="deployment-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            Four ways to deploy Gritiva
          </h2>

          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {DEPLOYMENT_OPTIONS.map((option) => (
              <li key={option.id}>
                <article className="flex h-full flex-col rounded-lg border border-sand-200 bg-card p-8">
                  <h3 className="font-serif text-2xl text-ink-800">{option.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-copper-600">
                    Best for: {option.best}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-ink-600">
                    {option.detail}
                  </p>
                  {option.href && (
                    <div className="mt-5">
                      <Link
                        href={option.href}
                        className="text-xs font-medium text-copper-600 hover:text-copper-700"
                      >
                        Learn more →
                      </Link>
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Use cases */}
      <section aria-labelledby="use-cases-heading" className="py-24 lg:py-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Use cases
          </p>
          <h2 id="use-cases-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            Gritiva in production
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            Each of Rethink&rsquo;s projects runs on a domain-trained version of Gritiva.
            The same infrastructure is available to external partners.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                domain: "Healthcare",
                example: "AloHelp / AutismRI",
                detail: "Medical imaging datasets. HIPAA-compliant. Deployed in clinical environments. Proven 86%/89% sensitivity/specificity on autism diagnostics.",
                href: "/projects/alohelp",
              },
              {
                domain: "Marketing & Content",
                example: "SiteMarketing.ai",
                detail: "Content performance data, search algorithm training, LLM citation patterns. Trained to optimize AI search visibility for local professionals.",
                href: "/projects/ai-search-optimization",
              },
              {
                domain: "DevOps & Infrastructure",
                example: "Gritiva DevOps Platform",
                detail: "System automation, log analysis, incident response, documentation generation. Runs locally — no external API calls for sensitive infrastructure data.",
                href: null,
              },
              {
                domain: "Legal",
                example: "Custom client platforms",
                detail: "Contract analysis, case law summaries, compliance monitoring. Jurisdiction-specific fine-tuning. On-premise for data sovereignty.",
                href: null,
              },
              {
                domain: "Software Development",
                example: "Custom platform builds",
                detail: "Fine-tuned on your codebase and architecture patterns. Code generation, debugging, testing, documentation.",
                href: null,
              },
              {
                domain: "Your domain",
                example: "White-label partnership",
                detail: "Train Gritiva on your data. Deploy under your brand. Sell to your customers. Revenue-sharing model.",
                href: null,
              },
            ].map((item) => (
              <article key={item.domain} className="rounded-lg border border-sand-200 bg-card p-6">
                <h3 className="font-serif text-xl text-ink-800">{item.domain}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-copper-600">
                  {item.example}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.detail}</p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-4 inline-block text-xs font-medium text-copper-600 hover:text-copper-700"
                  >
                    View project →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Competitive comparison */}
      <section aria-labelledby="comparison-heading" className="py-24 lg:py-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Competitive positioning
          </p>
          <h2 id="comparison-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            Gritiva vs. the alternatives
          </h2>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-200">
                  <th className="pb-4 text-left font-medium uppercase tracking-wider text-copper-600 text-xs">
                    Factor
                  </th>
                  <th className="pb-4 text-left font-medium uppercase tracking-wider text-copper-600 text-xs">
                    Gritiva AI Brain
                  </th>
                  <th className="pb-4 text-left font-medium text-ink-400 text-xs">
                    ChatGPT API
                  </th>
                  <th className="pb-4 text-left font-medium text-ink-400 text-xs">
                    Claude API
                  </th>
                  <th className="pb-4 text-left font-medium text-ink-400 text-xs">
                    Open-Source LLMs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {COMPARISON.map((row) => (
                  <tr key={row.factor}>
                    <td className="py-4 font-medium text-ink-700 text-xs uppercase tracking-wider">
                      {row.factor}
                    </td>
                    <td className="py-4 font-medium text-ink-800">{row.gritiva}</td>
                    <td className="py-4 text-ink-500">{row.chatgpt}</td>
                    <td className="py-4 text-ink-500">{row.claude}</td>
                    <td className="py-4 text-ink-500">{row.opensource}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* White-label & partnerships */}
      <section aria-labelledby="partner-heading" className="bg-sand-100 py-24 lg:py-32">
        <Container size="narrow">
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            White-label partnerships
          </p>
          <h2 id="partner-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            Build your product on Gritiva
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-600">
            <p>
              If you&rsquo;re an agency, systems integrator, or platform builder who needs
              domain-specialized AI for your clients — Gritiva is available as a
              white-label platform. Your branding. Your customers. Your pricing. Our
              infrastructure.
            </p>
            <p>
              We handle the model fine-tuning, infrastructure management, and ongoing
              model updates. You handle the customer relationship and go-to-market.
              Revenue-sharing model — we&rsquo;re aligned with your growth.
            </p>
          </div>
          <div className="mt-8">
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-600 hover:text-copper-700"
            >
              Apply for white-label partnership →
            </a>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get started with Gritiva"
        heading="Whether you&rsquo;re evaluating Gritiva for your infrastructure or as an investment — let&rsquo;s talk."
        primaryLabel="Schedule a demo"
        secondaryHref="/projects"
        secondaryLabel="View all projects"
      />

      <JsonLd id="gritiva-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
