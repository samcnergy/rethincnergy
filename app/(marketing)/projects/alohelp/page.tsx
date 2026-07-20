import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "AutismRI — AI Diagnostics for Autism Spectrum Disorder",
  description:
    "AutismRI is Rethink Cnergy's clinical-grade AI diagnostic module — autism spectrum disorder detection via MRI with 86% sensitivity and 89% specificity. Currently in development.",
  path: "/projects/alohelp",
});

const METRICS = [
  { label: "Sensitivity", autismRI: "86%", ados2: "84%", delta: "+2%" },
  { label: "Specificity", autismRI: "89%", ados2: "70%", delta: "+19%" },
  { label: "AUC-ROC", autismRI: "0.93", ados2: "0.90", delta: "+0.03" },
];

const ROADMAP = [
  {
    phase: "Phase 1 · Now",
    name: "AutismRI",
    description: "Autism spectrum disorder detection via structural MRI",
  },
  {
    phase: "Phase 2 · 2028",
    name: "ADHD Module",
    description: "Attention deficit hyperactivity disorder imaging analysis",
  },
  {
    phase: "Phase 3 · 2029",
    name: "Alzheimer's Module",
    description: "Early Alzheimer's and dementia detection",
  },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
    { "@type": "ListItem", position: 3, name: "AutismRI", item: absoluteUrl("/projects/alohelp") },
  ],
};

export default function AloHelpPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="alohelp-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Project · Healthcare AI
          </p>
          <h1
            id="alohelp-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            AutismRI
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-500">
            Clinical-grade AI diagnostics for neurological conditions. First module:
            AutismRI — autism spectrum disorder detection via MRI that outperforms
            the behavioral gold standard.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-sand-200 pt-10 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Status</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">In development</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Seeking</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">$500K</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Market</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">$4B+ healthcare AI</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Profitability</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">2027–2028</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* What it does */}
      <section aria-labelledby="autismri-heading" className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="autismri-heading" className="font-serif text-3xl text-ink-800 sm:text-4xl">
                AutismRI
              </h2>
              <p className="mt-2 text-sm text-copper-600 uppercase tracking-wider">First diagnostic module</p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-600 lg:col-span-8">
              <p>
                AutismRI is a clinical-grade software platform that analyzes MRI
                imaging to identify neuroanatomical patterns associated with autism
                spectrum disorder. Using a multi-branch deep learning model trained on
                the ABIDE dataset, it analyzes both structural MRI and functional fMRI
                together with patient metadata — returning a risk assessment in seconds
                with Grad-CAM visual explanations that show clinicians which brain
                regions drove the result.
              </p>
              <p>
                The software is designed to be integrated into existing clinical
                workflows as a diagnostic aid — supporting, not replacing, clinician
                judgment. Results arrive in seconds versus 30–60+ minutes for behavioral
                assessments.
              </p>
              <p>
                AloHelp is a platform, not a single product. Each module uses the same
                standardized MRI workflow and Private Language Model infrastructure —
                enabling compounding clinical value as new conditions are added.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Clinical performance */}
      <section aria-labelledby="performance-heading" className="bg-sand-100 py-24 lg:py-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Clinical validation
          </p>
          <h2 id="performance-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            Outperforms the ADOS-2 gold standard
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            Trained on the Autism Brain Imaging Data Exchange (ABIDE) — 1,008 subjects
            across 19 international research sites — AutismRI&rsquo;s performance exceeds the
            behavioral assessment benchmark on every metric.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-200">
                  <th className="pb-4 text-left font-medium uppercase tracking-wider text-copper-600 text-xs">
                    Metric
                  </th>
                  <th className="pb-4 text-center font-medium uppercase tracking-wider text-copper-600 text-xs">
                    AutismRI
                  </th>
                  <th className="pb-4 text-center font-medium uppercase tracking-wider text-copper-600 text-xs">
                    ADOS-2 Benchmark
                  </th>
                  <th className="pb-4 text-center font-medium uppercase tracking-wider text-copper-600 text-xs">
                    Improvement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                {METRICS.map((row) => (
                  <tr key={row.label}>
                    <td className="py-4 font-medium text-ink-800">{row.label}</td>
                    <td className="py-4 text-center font-medium text-ink-800">
                      {row.autismRI}
                    </td>
                    <td className="py-4 text-center text-ink-500">{row.ados2}</td>
                    <td className="py-4 text-center font-medium text-copper-600">
                      {row.delta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-ink-400">
            Sensitivity: correctly identifies autism. Specificity: correctly excludes healthy controls.
            AUC-ROC: overall discrimination ability. ADOS-2 is the current gold-standard behavioral assessment.
          </p>
        </Container>
      </section>

      {/* Technical architecture */}
      <section aria-labelledby="technical-heading" className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="technical-heading" className="font-serif text-3xl text-ink-800 sm:text-4xl">
                Technical architecture
              </h2>
            </div>
            <dl className="grid gap-6 text-sm lg:col-span-8 sm:grid-cols-2">
              {[
                { term: "AI model", detail: "Multi-branch deep learning · 3D CNN + ResNet · Trained on structural MRI and fMRI" },
                { term: "Training data", detail: "ABIDE dataset · 1,008 subjects · 520 confirmed autism cases + 488 healthy controls · Ages 6–56" },
                { term: "Explainability", detail: "Grad-CAM heatmaps show which brain regions influenced each result — full transparency for clinicians" },
                { term: "Speed", detail: "Comprehensive analysis and clinician report delivered in seconds" },
                { term: "Compliance", detail: "HIPAA-aligned cloud API · Data encryption in transit and at rest · Regulatory-grade documentation" },
                { term: "Infrastructure", detail: "Private Language Model — domain-trained proprietary LLM running on-premise or hybrid" },
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

      {/* Platform roadmap */}
      <section aria-labelledby="roadmap-heading" className="py-24 lg:py-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Platform roadmap
          </p>
          <h2 id="roadmap-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            AloHelp expands beyond autism
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            Each new module leverages the same Private Language Model infrastructure and
            MRI workflow. Clinicians who adopt AutismRI gain access to every future
            module without rebuilding their integration.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {ROADMAP.map((item) => (
              <li key={item.name}>
                <article className="h-full rounded-lg border border-sand-200 bg-card p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-copper-600">
                    {item.phase}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-ink-800">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Investment */}
      <section aria-labelledby="alohelp-invest-heading" className="bg-sand-100 py-24 lg:py-32">
        <Container size="narrow">
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Investment
          </p>
          <h2 id="alohelp-invest-heading" className="mt-4 font-serif text-3xl text-ink-800 sm:text-4xl">
            Pre-seed · $500K
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-600">
            <p>
              Capital will fund continued platform development, pilot deployments
              with partner clinics, and team expansion (medical affairs, clinical
              partnerships, engineering).
            </p>
            <p>
              Business model: SaaS subscription for clinics and hospital systems —
              per-seat or per-scan pricing. Expansion modules (ADHD,
              Alzheimer&rsquo;s) add additional revenue streams on the same
              infrastructure.
            </p>
            <p>
              Path to profitability: 2027–2028, following initial clinic deployments
              and continued development milestones.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-600 hover:text-copper-700"
            >
              Inquire about AutismRI →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Clinical partnerships"
        heading="Interested in piloting AutismRI at your practice?"
        body="If your clinic works in pediatric neurology, child psychiatry, or radiology and you&rsquo;re interested in evaluating an MRI-based autism diagnostic aid — or if you&rsquo;re looking at AutismRI as a healthcare investment — we&rsquo;d like to hear from you."
        primaryLabel="Start the conversation"
        secondaryHref="/projects"
        secondaryLabel="View all projects"
      />

      <JsonLd id="alohelp-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
