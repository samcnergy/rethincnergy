import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "AloHelp — Healthcare AI Diagnostics",
  description:
    "AloHelp is Rethink Cnergy's clinical-grade AI diagnostic platform. First module: AutismRI — autism spectrum disorder detection via MRI with 86% sensitivity and 89% specificity. FDA De Novo pathway.",
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
    { "@type": "ListItem", position: 3, name: "AloHelp", item: absoluteUrl("/projects/alohelp") },
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
            AloHelp
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-500">
            Clinical-grade AI diagnostics for neurological conditions. First module:
            AutismRI — autism spectrum disorder detection via MRI that outperforms
            the behavioral gold standard.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-sand-200 pt-10 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Status</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">FDA De Novo pathway</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-copper-600">Seeking</dt>
              <dd className="mt-1 text-base font-medium text-ink-800">$2M Series A</dd>
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
                standardized MRI workflow and Gritiva AI Brain infrastructure —
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
                { term: "Infrastructure", detail: "Gritiva AI Brain — domain-trained proprietary LLM running on-premise or hybrid" },
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

      {/* FDA pathway */}
      <section aria-labelledby="fda-heading" className="bg-ink-800 py-24 text-sand-50 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.22em] text-copper-300">
                Regulatory pathway
              </p>
              <h2 id="fda-heading" className="mt-4 font-serif text-3xl text-sand-50 sm:text-4xl">
                FDA De Novo Classification
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-200">
                No prior FDA-cleared MRI-based autism diagnostic device exists.
                AutismRI is establishing the category — and becoming the first-mover
                predicate for future devices.
              </p>
              <p className="mt-4 text-sm text-ink-300">
                Regulatory advisor: Ken Block Consulting (KBC) — specialists in FDA
                medical device strategy and De Novo submissions.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ol className="space-y-6">
                {[
                  { date: "Q3 2025", title: "Pre-submission meeting (Q-Sub)", detail: "Confirm De Novo pathway appropriateness, validate test plan, receive FDA feedback on clinical study design." },
                  { date: "2026", title: "Full De Novo Submission", detail: "Clinical performance data, software documentation, cybersecurity protocols, risk analysis per ISO 14971, HIPAA documentation." },
                  { date: "2027", title: "Anticipated FDA De Novo Authorization", detail: "Establishes AutismRI as Class II device. Opens reimbursement pathway (CPT coding, insurance coverage). Series A milestone." },
                ].map((step, i) => (
                  <li key={i} className="flex gap-6">
                    <div className="shrink-0 text-right w-16">
                      <span className="text-xs font-medium text-copper-300">{step.date}</span>
                    </div>
                    <div className="border-l border-copper-700 pl-6">
                      <h3 className="font-medium text-sand-50">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
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
            Each new module leverages the same Gritiva AI Brain infrastructure and
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
            Series A · $2M
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-600">
            <p>
              Capital will fund the FDA De Novo clinical study and submission, pilot
              deployments with partner clinics, and team expansion (medical affairs,
              sales, regulatory).
            </p>
            <p>
              Business model: SaaS subscription for clinics and hospital systems —
              per-seat or per-scan pricing, post-FDA clearance in 2027. Expansion
              modules (ADHD, Alzheimer&rsquo;s) add additional revenue streams on the
              same infrastructure.
            </p>
            <p>
              Path to profitability: 2027–2028, following FDA clearance and initial
              clinic deployments.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-600 hover:text-copper-700"
            >
              Inquire about AloHelp →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Clinical partnerships"
        heading="We&rsquo;re seeking clinic partners for the FDA De Novo clearance pathway."
        body="If your practice is interested in piloting AutismRI, or if you&rsquo;re evaluating the AloHelp platform for a healthcare investment, we&rsquo;d like to hear from you."
        primaryLabel="Start the conversation"
        secondaryHref="/projects"
        secondaryLabel="View all projects"
      />

      <JsonLd id="alohelp-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
