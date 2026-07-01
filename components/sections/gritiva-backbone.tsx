import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";

const WHY = [
  {
    label: "Cost",
    body: "API-based LLMs charge per query. At scale — 10,000+ queries/month — that's $600–$1,800/month in LLM costs alone, with no volume discounts.",
  },
  {
    label: "Specialization",
    body: "General LLMs are trained on broad internet data. Medical AI needs medical literature. Marketing AI needs content and search algorithm data. Domain expertise requires domain training.",
  },
  {
    label: "Control",
    body: "Gritiva runs on-premise or hybrid. Data stays inside your infrastructure. No dependency on third-party pricing changes, throttling, or API instability.",
  },
];

const USED_IN = [
  { name: "AloHelp", detail: "Trained on medical imaging datasets for autism diagnostics", href: "/projects/alohelp" },
  { name: "SiteMarketing.ai", detail: "Trained on content, search algorithms, and LLM citation patterns", href: "/projects/ai-search-optimization" },
  { name: "Client platforms", detail: "Custom training and deployment for external platform engagements", href: "/services" },
];

export function GritivaBackbone() {
  return (
    <section
      aria-labelledby="gritiva-backbone-heading"
      className="bg-ink-800 py-24 text-sand-50 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-copper-300">
                The backbone
              </p>
              <h2
                id="gritiva-backbone-heading"
                className="mt-4 font-serif text-4xl leading-tight text-sand-50 sm:text-5xl"
              >
                Gritiva AI Brain
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-200">
                Specialized AI that runs locally. No API dependency. No per-query costs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-300">
                We built our own LLM because every domain problem requires
                domain-specific training — and because API economics don&rsquo;t scale
                for production applications. Gritiva is the infrastructure backbone
                for every Rethink project, and available as a white-label offering for
                external partners.
              </p>
              <Link
                href="/gritiva"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper-300 hover:text-copper-200"
              >
                Learn more about Gritiva <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h3 className="font-serif text-xl text-sand-50">Why we built our own LLM</h3>
              <div className="mt-6 space-y-5">
                {WHY.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 text-xs font-medium uppercase tracking-wider text-copper-300 w-24">
                      {item.label}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-300">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-10 font-serif text-xl text-sand-50">Used in</h3>
              <ul className="mt-6 space-y-4">
                {USED_IN.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="group flex items-start gap-4 rounded-md p-3 -mx-3 hover:bg-white/5 transition-colors">
                      <span className="shrink-0 font-medium text-sand-50 w-32 text-sm">{item.name}</span>
                      <span className="text-sm text-ink-300 group-hover:text-ink-200 transition-colors">
                        {item.detail}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
