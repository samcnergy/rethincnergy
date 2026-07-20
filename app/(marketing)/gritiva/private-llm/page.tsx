import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/sections/reveal";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Private Language Model — AI for Sensitive Data",
  description:
    "When you have sensitive data you can't trust public AI services. We install a private language model on your own server, trained on your own data — nothing crosses the network boundary.",
  path: "/gritiva/private-llm",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    {
      "@type": "ListItem",
      position: 2,
      name: "Private Language Model",
      item: absoluteUrl("/gritiva/private-llm"),
    },
  ],
};

const DATA_TYPES = [
  "Customer records",
  "Patient files",
  "Case documents",
  "Internal correspondence",
];

const WHO = [
  {
    title: "Banks & lenders",
    tag: "Compliance",
    body: "Underwriting notes, account data, and internal risk models stay inside your own walls, reviewable by your own compliance team.",
  },
  {
    title: "Hospitals & clinics",
    tag: "HIPAA",
    body: "Patient records and clinical notes never touch a third-party API. The model runs on hardware you control, in a facility you control.",
  },
  {
    title: "Government offices",
    tag: "Sovereignty",
    body: "Case files, resident data, and internal memos are queried locally. Nothing is transmitted outside the agency's own network.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Install the model on a server in your facility",
    body: "It runs on hardware you own or lease, inside your own network. There is no external endpoint and nothing is routed through the public internet.",
  },
  {
    num: "02",
    title: "Feed it your own data",
    body: "Policies, records, contracts, case history — whatever your team actually works with. The model is shaped around that data instead of the entire internet.",
  },
  {
    num: "03",
    title: "Your team gets a private, focused assistant",
    body: "Narrower than a general chatbot, but accurate about the one thing that matters: your institution's own information.",
  },
];

const COST_ROWS = [
  {
    size: "Small, single-purpose assistant",
    hardware: "1× workstation-class GPU",
    cost: "$3K–5K one-time",
  },
  {
    size: "Department-wide assistant",
    hardware: "2–4 enterprise GPUs",
    cost: "$8K–20K one-time",
  },
  {
    size: "Ongoing maintenance, any size",
    hardware: "Monitoring, patching, tuning",
    cost: "$3K–6K / month",
  },
];

export default function PrivateLLMPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 lg:pt-28" aria-labelledby="private-llm-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            AI for Sensitive Data
          </p>
          <h1
            id="private-llm-heading"
            className="mt-6 max-w-4xl font-serif text-5xl uppercase leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            Private Language Model
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-500">
            When you have sensitive data you can&rsquo;t trust ChatGPT and Claude. Your
            data is not safe with them.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a walkthrough <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#how">See how it&rsquo;s installed</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Data perimeter diagram */}
      <section className="py-24 lg:py-32" aria-label="Data perimeter diagram">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-sand-200">
              <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-sand-200">
                <div className="bg-sand-100 p-8">
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
                    Public AI services
                  </p>
                  <ul className="divide-y divide-sand-200">
                    {DATA_TYPES.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between py-3 text-sm text-ink-500"
                      >
                        <span>{item}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                          blocked
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card p-8">
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-copper-600">
                    Your server, your model
                  </p>
                  <ul className="divide-y divide-sand-200">
                    {DATA_TYPES.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between py-3 text-sm font-medium text-ink-700"
                      >
                        <span>{item}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-copper-600">
                          stays here
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-sand-200 bg-sand-50 px-8 py-3">
                <p className="text-center text-xs text-ink-400">
                  the model moves onto your infrastructure — not your data onto someone
                  else&rsquo;s
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Who this is for */}
      <section
        id="who"
        aria-labelledby="who-heading"
        className="bg-sand-100 py-24 lg:py-32"
      >
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Who this is for
          </p>
          <h2
            id="who-heading"
            className="mt-4 max-w-2xl font-serif text-3xl text-ink-800 sm:text-4xl"
          >
            Organizations that legally can&rsquo;t use ChatGPT or Claude
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            If your data is regulated, &ldquo;just use a public LLM&rdquo; was never really an
            option. This exists for the companies that got left out of that conversation.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHO.map((card) => (
              <li key={card.title}>
                <article className="h-full rounded-lg border border-sand-200 bg-card p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl text-ink-800">{card.title}</h3>
                    <span className="shrink-0 rounded border border-copper-200 px-2 py-0.5 text-xs font-medium text-copper-600">
                      {card.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">{card.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How it's installed */}
      <section id="how" aria-labelledby="how-heading" className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
                How it&rsquo;s installed
              </p>
              <h2
                id="how-heading"
                className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl"
              >
                Three steps. One server. No public API calls.
              </h2>
            </div>
            <ol className="space-y-0 lg:col-span-8">
              {STEPS.map((step) => (
                <li
                  key={step.num}
                  className="flex gap-8 border-t border-sand-200 py-8 first:border-t-0 first:pt-0"
                >
                  <span className="shrink-0 font-mono text-sm text-ink-300">{step.num}</span>
                  <div>
                    <h3 className="font-serif text-xl text-ink-800">{step.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-500">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Cost */}
      <section
        id="cost"
        aria-labelledby="cost-heading"
        className="bg-sand-100 py-24 lg:py-32"
      >
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            What it actually costs
          </p>
          <h2
            id="cost-heading"
            className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl"
          >
            The honest number, not the sales number
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            Most vendors sell &ldquo;private AI&rdquo; on the promise that it&rsquo;s cheaper. For most
            organizations, that&rsquo;s not the real reason to do it — compliance is.
            Here&rsquo;s the range, plainly.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-200">
                  <th className="pb-4 text-left text-xs font-medium uppercase tracking-wider text-copper-600">
                    Deployment size
                  </th>
                  <th className="pb-4 text-left text-xs font-medium uppercase tracking-wider text-copper-600">
                    Hardware
                  </th>
                  <th className="pb-4 text-left text-xs font-medium uppercase tracking-wider text-copper-600">
                    Cost range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                {COST_ROWS.map((row) => (
                  <tr key={row.size}>
                    <td className="py-4 text-ink-700">{row.size}</td>
                    <td className="py-4 font-mono text-xs text-ink-500">{row.hardware}</td>
                    <td className="py-4 font-mono text-xs font-medium text-ink-800">
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-400">
            Self-hosting only beats a public API on price at high volume — roughly
            35–50 million tokens a month. Below that, the case for going private is
            compliance and data control, not cost. We&rsquo;re upfront about that, because
            it&rsquo;s the case that actually applies to most of our clients.
          </p>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get started"
        heading="See it running on your own data."
        body="We'll walk through what a private deployment looks like for your organization, and what it would take to stand one up."
        primaryHref="/contact"
        primaryLabel="Request a walkthrough"
      />

      <JsonLd id="private-llm-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
