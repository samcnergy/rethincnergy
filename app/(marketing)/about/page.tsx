import { Container } from "@/components/layout/container";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, PARHAM_JSONLD, ORGANIZATION_JSONLD } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "About ReTHINK CNERGY",
  description:
    "ReTHINK CNERGY is a boutique AI strategy and software firm founded in 2021 by Parham Shariat and Mohammad Salamati in Orange County, California.",
  path: "/about",
});

const TEAM = [
  {
    name: "Meysam",
    role: "Full-stack web developer",
    body: "Ships the production stacks that power our client engagements and products.",
  },
  {
    name: "Ehsan",
    role: "AI & machine learning engineer",
    body: "Builds the models, pipelines, and evaluations behind our applied AI work.",
  },
  {
    name: "Derek",
    role: "UI/UX & graphic design",
    body: "Keeps every client-facing surface clear, calm, and credible.",
  },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
  ],
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="about-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">About</p>
          <h1
            id="about-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            Substance over hype. Execution over promises.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-500">
            ReTHINK CNERGY is a boutique strategy and software firm founded in 2021 in
            Orange County, California. We work with a small number of clients each year —
            founders and operators who are ready to invest in getting it right, not just
            getting it done.
          </p>
        </Container>
      </section>

      <section aria-labelledby="origin-heading" className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="origin-heading" className="font-serif text-3xl text-ink-800 sm:text-4xl">
                Origin
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-600 lg:col-span-8">
              <p>
                The firm was founded on October 25, 2021 by Parham Shariat and Mohammad
                Salamati around a simple idea: small businesses are the backbone of the
                economy, and they deserve the same quality of strategic thinking that
                large companies reserve for themselves.
              </p>
              <p>
                We started with marketing audits, then expanded into software. Today
                ReTHINK CNERGY is the parent of a portfolio of products —
                SiteMarketing.ai, SiteOptimization.ai, IranianCitizen.com, and
                PowerfulBlueprints.com — that each solve a specific, well-scoped problem
                for a specific audience.
              </p>
              <p>
                We believe in substance over hype, execution over promises, and building
                real value that lasts. That belief shapes who we work with, what we ship,
                and how we talk about our work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="founders-heading" className="bg-sand-100 py-24 lg:py-32">
        <Container>
          <h2
            id="founders-heading"
            className="font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
          >
            Founders
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <article className="rounded-lg border border-sand-200 bg-card p-8">
              <div
                aria-hidden
                className="mb-6 flex size-20 items-center justify-center rounded-full bg-ink-800 font-serif text-2xl text-sand-50"
              >
                PS
              </div>
              <h3 className="font-serif text-2xl text-ink-800">Parham Shariat</h3>
              <p className="text-sm text-copper-600">CEO &amp; Co-founder · Strategic Director</p>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                Parham brings over two decades of international business experience across
                healthcare, technology, real estate, and consumer goods. His background
                includes scaling businesses, negotiating franchise agreements, structuring
                investments, and launching brands globally. He leads strategy and
                positioning at ReTHINK CNERGY and is Wharton AI-certified.
              </p>
              <p className="mt-4 text-sm text-ink-500">
                Parham&apos;s strength is converting complex concepts into actionable
                plans — the kind a founder can execute on Monday morning.
              </p>
            </article>
            <article className="rounded-lg border border-sand-200 bg-card p-8">
              <div
                aria-hidden
                className="mb-6 flex size-20 items-center justify-center rounded-full bg-copper-500 font-serif text-2xl text-sand-50"
              >
                MS
              </div>
              <h3 className="font-serif text-2xl text-ink-800">Mohammad Salamati</h3>
              <p className="text-sm text-copper-600">CTO &amp; Co-founder</p>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                Mohammad leads the technology organization with specialization in AI,
                machine learning, computer vision, and full-stack development. His
                portfolio includes commercial drone systems, healthcare diagnostics
                platforms, and social analytics tools.
              </p>
              <p className="mt-4 text-sm text-ink-500">
                He emphasizes streamlined technical solutions that address genuine
                business problems — not technology for its own sake.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="team-heading" className="py-24 lg:py-32">
        <Container>
          <h2
            id="team-heading"
            className="font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
          >
            Core team &amp; collaborators
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            The founding group includes four specialists and an ensemble of AI agents
            handling financial, operational, and content functions — a deliberately small
            senior team augmented by the software we build.
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {TEAM.map((member) => (
              <li key={member.name}>
                <article className="h-full rounded-lg border border-sand-200 bg-card p-6">
                  <h3 className="font-serif text-xl text-ink-800">{member.name}</h3>
                  <p className="text-sm text-copper-600">{member.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">{member.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="philosophy-heading" className="bg-ink-800 py-24 text-sand-50 lg:py-32">
        <Container size="narrow">
          <p className="text-xs uppercase tracking-[0.22em] text-copper-300">Philosophy</p>
          <h2
            id="philosophy-heading"
            className="mt-4 font-serif text-4xl leading-tight text-sand-50 sm:text-5xl"
          >
            We work with clients who are ready to invest in getting it right — not just
            getting it done.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ink-200">
            That single sentence, more than any process or framework, is how we decide
            who to take on and how we measure whether an engagement succeeded. Substance
            over hype. Execution over promises. Real value that lasts.
          </p>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Let&rsquo;s talk"
        heading="If this sounds like the firm you&rsquo;ve been looking for, let&rsquo;s set up a call."
        primaryLabel="Book a strategy call"
      />

      <JsonLd id="person-jsonld" data={PARHAM_JSONLD} />
      <JsonLd id="about-org-jsonld" data={ORGANIZATION_JSONLD} />
      <JsonLd id="about-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
