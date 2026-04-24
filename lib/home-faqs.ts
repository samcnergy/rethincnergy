export type HomeFaq = {
  slug: string;
  q: string;
  answer: string;
  evidence: string;
  takeaway: string;
};

export const HOME_FAQS: HomeFaq[] = [
  {
    slug: "cost",
    q: "How much does AI strategy consulting cost for a small business?",
    answer:
      "Most small businesses engaging a fractional AI strategy partner spend between $500 and $3,000 per month across tools and advisory. Custom AI builds start around $15,000 for a scoped prototype. GEO readiness audits are priced as a one-time fixed fee followed by a 60–120 day remediation window.",
    evidence:
      "At ReTHINK CNERGY, fractional engagements run on a monthly retainer with quarterly deliverables and on-call access for time-sensitive decisions. Pricing scales with the seniority of the operator in the room and the clarity of scope — not with how many people are assigned to the logo slide.",
    takeaway:
      "The best signal of value is not price. It is whether the engagement changes a workflow you run every week.",
  },
  {
    slug: "fractional",
    q: "What is fractional AI advisory?",
    answer:
      "Fractional AI advisory is a part-time senior strategic role — typically a fractional Chief Strategy Officer — that helps a leadership team decide where AI actually fits in the business and where it does not. There is no full-time hire, no equity, and no long-term contract.",
    evidence:
      "Engagements at ReTHINK CNERGY run three to twelve months on a monthly retainer. Deliverables include positioning, roadmaps, vendor selection, quarterly strategy reviews, and succession or M&A preparation when relevant. The founder or senior operator is the person in the room — not an account manager with a deck.",
    takeaway:
      "Fractional advisory is the right fit for 10–200 person businesses that need senior judgment more than they need headcount.",
  },
  {
    slug: "geo-time",
    q: "How long does a GEO readiness implementation take?",
    answer:
      "A full GEO (Generative Engine Optimization) implementation typically takes 60 to 120 days from audit to measurable citation lift in AI assistants like ChatGPT, Claude, Perplexity, and Gemini.",
    evidence:
      "The GRI™ (GEO Readiness Index) audit completes in weeks one and two. Structured data, JSON-LD schema, and the llms.txt file land in weeks three to six. Answer-shaped content rewrites take roughly another four weeks. Citation monitoring in AI assistants runs from the end of the implementation onward, typically at a monthly cadence.",
    takeaway:
      "Faster is usually a sign someone skipped the audit. Slower is usually a sign the engagement lost focus.",
  },
  {
    slug: "geo-vs-seo",
    q: "What is GEO and how is it different from SEO?",
    answer:
      "GEO — Generative Engine Optimization — is the practice of making a website easy for AI assistants like ChatGPT, Claude, Perplexity, and Gemini to read, quote, and cite. SEO optimizes for Google&rsquo;s link-based ranking; GEO optimizes for direct citation inside AI-generated answers.",
    evidence:
      "The two disciplines overlap — both reward fast, clean, well-structured sites — but GEO adds structured FAQ content, JSON-LD schema, clear author attribution, and an llms.txt file at the domain root. Most small businesses need both disciplines, not one or the other.",
    takeaway:
      "If your site traffic is slipping for no clear reason, a meaningful share may now be flowing to AI assistants that your site is not citeable in.",
  },
  {
    slug: "need-help",
    q: "How do I know if my small business needs AI strategy help?",
    answer:
      "You probably need an AI strategy partner if any of these are true: you have bought tools your team is not actually using; your site traffic is slipping for no clear reason; you are about to sign a $25,000-plus commitment to a vendor; or you have a specific workflow that could benefit from AI but no one internally with the bandwidth to redesign it.",
    evidence:
      "Most small businesses do not need a full-time AI hire. They need a senior operator in the room for two or three days a month — someone who can say &ldquo;not that, this&rdquo; and execute alongside the team, not just hand over a deck.",
    takeaway:
      "If you are treating AI as tool procurement, you are probably wasting money. If you are treating it as workflow redesign, you are probably undervaluing it.",
  },
  {
    slug: "what-we-do",
    q: "What does ReTHINK CNERGY actually do?",
    answer:
      "ReTHINK CNERGY is a California-based boutique firm that helps small businesses rethink how they operate, market, and grow in the age of AI. The firm combines strategic advisory — fractional AI engagements and GEO readiness — with four of its own software products and advisory engagements with a small number of independent client firms.",
    evidence:
      "ReTHINK CNERGY was founded on October 25, 2021 by Parham Shariat and Mohammad Salamati and is headquartered in Orange County, California. Leadership is Wharton AI-certified with 20-plus years of international operating experience across healthcare, real estate, and consumer goods. The four ReTHINK CNERGY products are SiteMarketing.ai, AloHelp, Brain.Gritiva, and Powerful Blueprints.",
    takeaway:
      "The firm works with a small number of clients at a time and is specifically built for small businesses that do not have the technical staff to implement AI themselves.",
  },
];
