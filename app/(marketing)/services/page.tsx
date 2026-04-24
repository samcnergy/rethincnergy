import { Brain, Search, Code2, Mic } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "AI strategy, GEO/AEO readiness, custom AI builds, and speaking engagements from ReTHINK CNERGY. Built for small and mid-sized businesses ready to invest in getting it right.",
  path: "/services",
});

const SERVICES = [
  {
    icon: Brain,
    name: "AI Strategy & Advisory",
    problem:
      "You need a senior strategic operator in the room — just not a full-time one on the payroll.",
    who: "Founders, CEOs, and boards of 10–200 person businesses.",
    deliverables: [
      "Fractional Chief Strategy Officer engagements",
      "Board and investor advisory",
      "Quarterly strategy reviews and operating plans",
      "Succession and M&A preparation",
    ],
    shape:
      "Typical engagement runs 3–12 months. Monthly retainer with quarterly deliverables and on-call access for time-sensitive decisions.",
  },
  {
    icon: Search,
    name: "GEO / AEO Readiness",
    problem:
      "AI answer engines are reshaping discovery. Your site needs to be quotable, structured, and citeable — now.",
    who: "Content-heavy sites, e-commerce operators, and services businesses that depend on organic discovery.",
    deliverables: [
      "GRI™ (GEO Readiness Index) audit and scoring",
      "Structured data and schema implementation",
      "llms.txt authoring",
      "Answer-shaped content rewrites and FAQ buildouts",
      "Ongoing citation tracking",
    ],
    shape:
      "One-time audit plus 60–120 day remediation. Optional ongoing monitoring at a monthly rate.",
  },
  {
    icon: Code2,
    name: "Custom AI Builds",
    problem:
      "Off-the-shelf tools don&rsquo;t fit your workflow. You need bespoke software that earns its keep.",
    who: "Qualified clients with a specific internal workflow or customer-facing product.",
    deliverables: [
      "Scoped prototype in 2–4 weeks",
      "Production system with documentation",
      "Handover training and runbooks",
      "Optional ongoing support",
    ],
    shape:
      "Fixed-scope, milestone-based engagement. We scope small first to prove the premise, then build.",
  },
  {
    icon: Mic,
    name: "Speaking & Workshops",
    problem:
      "Your team, association, or conference needs a credible voice on AI strategy and GEO — not another vendor pitch.",
    who: "Industry associations, executive teams, and conferences.",
    deliverables: [
      "Keynotes on AI strategy and the Grand Recalibration",
      "Half-day workshops on GEO readiness",
      "Private executive briefings",
    ],
    shape:
      "Dates fill quickly. Inquire with the event, audience, and desired format; we&rsquo;ll reply within two business days.",
  },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.problem,
      provider: { "@type": "Organization", name: "ReTHINK CNERGY" },
      areaServed: "US",
      url: absoluteUrl("/services"),
    },
  })),
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="services-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Services</p>
          <h1
            id="services-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            Who do we work with?
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Small businesses that need to jump-start their business using technology —
            and want a partner who can think strategically and ship.
          </p>
        </Container>
      </section>

      <section aria-label="Service offerings" className="py-24 lg:py-32">
        <Container>
          <ul className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.name}>
                  <article className="flex h-full flex-col rounded-lg border border-sand-200 bg-card p-8">
                    <div className="flex size-12 items-center justify-center rounded-md bg-ink-800 text-sand-50">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <h2 className="mt-6 font-serif text-3xl text-ink-800">{service.name}</h2>
                    <p
                      className="mt-4 text-base leading-relaxed text-ink-600"
                      dangerouslySetInnerHTML={{ __html: service.problem }}
                    />
                    <dl className="mt-6 space-y-5 text-sm">
                      <div>
                        <dt className="font-medium uppercase tracking-wider text-copper-600">
                          Who it&apos;s for
                        </dt>
                        <dd className="mt-1 text-ink-600">{service.who}</dd>
                      </div>
                      <div>
                        <dt className="font-medium uppercase tracking-wider text-copper-600">
                          Deliverables
                        </dt>
                        <dd className="mt-2">
                          <ul className="list-disc space-y-1.5 pl-5 text-ink-600 marker:text-copper-500">
                            {service.deliverables.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium uppercase tracking-wider text-copper-600">
                          Engagement shape
                        </dt>
                        <dd
                          className="mt-1 text-ink-600"
                          dangerouslySetInnerHTML={{ __html: service.shape }}
                        />
                      </div>
                    </dl>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="services-contact" className="bg-sand-100 py-24 lg:py-32">
        <Container size="narrow">
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
            Start the conversation
          </p>
          <h2
            id="services-contact"
            className="mt-4 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
          >
            Tell us what you&rsquo;re building.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500">
            We reply within two business days to every qualified inquiry. No forms in a
            black hole.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Container>
      </section>

      <JsonLd id="services-jsonld" data={SERVICE_JSONLD} />
      <JsonLd id="services-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
