import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import { FAQS, FAQ_CATEGORIES } from "@/lib/faqs";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "FAQ — AI for Small Business",
  description:
    "Plain-English answers to the questions small business owners actually ask about AI: what to use, how to start, what it costs, and what to avoid.",
  path: "/faq",
});

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: stripHtml(faq.a),
    },
  })),
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "FAQ", item: absoluteUrl("/faq") },
  ],
};

function stripHtml(s: string) {
  return s
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, "&");
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function FaqPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28" aria-labelledby="faq-heading">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">FAQ</p>
          <h1
            id="faq-heading"
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl"
          >
            Plain-English answers about AI for small business.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            A curated set of questions small business owners actually ask us — about
            getting started, picking tools, protecting data, measuring ROI, and
            navigating the shift to AI-powered search.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container size="narrow">
          {FAQ_CATEGORIES.map((category) => {
            const items = FAQS.filter((f) => f.category === category);
            if (items.length === 0) return null;
            const catSlug = slugify(category);
            return (
              <section key={category} id={catSlug} className="mb-16 last:mb-0">
                <h2 className="mb-2 font-serif text-3xl text-ink-800 sm:text-4xl">
                  {category}
                </h2>
                <div className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {items.map((item, idx) => (
                      <AccordionItem key={idx} value={`${catSlug}-${idx}`}>
                        <AccordionTrigger>
                          <span dangerouslySetInnerHTML={{ __html: item.q }} />
                        </AccordionTrigger>
                        <AccordionContent>
                          <p dangerouslySetInnerHTML={{ __html: item.a }} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            );
          })}
        </Container>
      </section>

      <CtaBlock
        eyebrow="Still have questions?"
        heading="Ask us directly. We reply within two business days."
        primaryLabel="Get in touch"
      />

      <JsonLd id="faq-jsonld" data={FAQ_JSONLD} />
      <JsonLd id="faq-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
