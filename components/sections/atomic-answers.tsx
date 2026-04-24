import Link from "next/link";

import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { HOME_FAQS } from "@/lib/home-faqs";

function stripMarks(s: string) {
  return s
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, "&");
}

export function AtomicAnswers() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: stripMarks(faq.q),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarks(`${faq.answer} ${faq.evidence} ${faq.takeaway}`),
      },
    })),
  };

  return (
    <section aria-label="Common questions about AI strategy and GEO" className="py-24 lg:py-32">
      <Container size="narrow">
        <p className="text-xs uppercase tracking-[0.22em] text-copper-600">
          Common questions, direct answers
        </p>
        <p className="mt-6 font-serif text-4xl leading-tight text-ink-800 sm:text-5xl">
          Direct answers to what small-business operators actually ask about AI, GEO, and
          strategy.
        </p>
        <p className="mt-6 text-base leading-relaxed text-ink-500">
          Each block below follows the same pattern — a question, a two-to-three sentence
          direct answer, a paragraph of evidence, and a takeaway. Use the FAQ page for
          the longer list.
        </p>

        <div className="mt-16 space-y-16 border-t border-sand-200 pt-12">
          {HOME_FAQS.map((faq) => (
            <article key={faq.slug} id={`answer-${faq.slug}`} className="scroll-mt-24">
              <h2
                className="font-serif text-3xl leading-snug text-ink-800 sm:text-4xl"
                dangerouslySetInnerHTML={{ __html: faq.q }}
              />
              <p
                className="mt-6 text-lg leading-relaxed text-ink-700"
                data-atomic="answer"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
              <p
                className="mt-5 text-base leading-relaxed text-ink-500"
                data-atomic="evidence"
                dangerouslySetInnerHTML={{ __html: faq.evidence }}
              />
              <p
                className="mt-6 border-l-2 border-copper-500 pl-4 text-base leading-relaxed text-ink-800"
                data-atomic="takeaway"
                dangerouslySetInnerHTML={{ __html: faq.takeaway }}
              />
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/faq"
            className="font-medium text-ink-800 underline-offset-4 hover:text-copper-600 hover:underline"
          >
            See the full FAQ — 32 questions
          </Link>
          <span className="text-ink-400" aria-hidden>·</span>
          <Link
            href="/contact"
            className="font-medium text-copper-600 underline-offset-4 hover:text-copper-700 hover:underline"
          >
            Ask us your own
          </Link>
        </div>
      </Container>

      <JsonLd id="home-faq-jsonld" data={faqJsonLd} />
    </section>
  );
}
