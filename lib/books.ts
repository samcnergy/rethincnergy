export type AuthoredBook = {
  slug: string;
  seriesNumber?: number;
  series?: string;
  title: string;
  subtitle?: string;
  summary: string;
  description: string;
  forWhom: string;
  cover: string;
  coverAlt: string;
  accentColor: string;
  status: "published" | "coming-soon";
  buyUrl?: string;
};

export type RecommendedBook = {
  slug: string;
  title: string;
  author: string;
  year: string;
  why: string;
  topic: "Strategy" | "Macro" | "Operating" | "AI & GEO" | "Leadership";
};

export const AUTHORED_BOOKS: AuthoredBook[] = [
  {
    slug: "business-strategy-plan-age-of-ai",
    seriesNumber: 1,
    series: "The Business Strategy Series",
    title: "The Business Strategy Plan",
    subtitle: "In the Age of AI",
    summary:
      "The foundational methodology of the Business Strategy Series — strategic architecture before tactics, marketing, or AI tools.",
    description:
      "Before you write a business plan, launch a product, or invest in technology, you must answer one essential question: what is the strategic architecture of your business? Most founders skip this step and move straight into tactics, leaving them with unclear positioning, fragmented execution, and costly pivots. This book introduces the frameworks for designing a business that is coherent, resilient, and scalable in an AI-driven economy: a defensible brand statement, names and narratives AI systems can recognize and cite, cultures of innovation, crisis planning, and architecture built for long-term value creation, acquisition, or exit — before you write a single line of a business plan.",
    forWhom:
      "Founders, business owners, and senior leaders who want to build organizations strategically rather than operate reactively — and who understand that in the age of AI, clarity of strategy is the ultimate competitive advantage.",
    cover: "/Books/business-strategy-plan.jpg",
    coverAlt:
      "The Business Strategy Plan in the Age of AI — Book 1, The Business Strategy Series by Parham Shariat",
    accentColor: "#7B7E3A",
    status: "published",
  },
  {
    slug: "38-letters-rockefeller-to-his-son",
    seriesNumber: 2,
    series: "The Business Strategy Series",
    title: "The 38 Letters of Rockefeller to His Son",
    subtitle: "With Author's Reflections",
    summary:
      "The leadership and strategic principles of the Business Strategy Series — thirty-eight letters on power, stewardship, and continuity.",
    description:
      "This is not a biography or a business history. It is a collection of thirty-eight letters — each one a lesson — written by a father who understood that wealth without wisdom is merely inheritance, and that power without principle is only temporary. What makes the letters enduring is not their origin in the Gilded Age but their focus on timeless questions: how do you think clearly under pressure, build something that lasts, and prepare the next generation to lead? Strategic, psychological, and often unforgiving in its honesty, this volume provides the leadership and philosophical foundation that underpins sustainable enterprise.",
    forWhom:
      "Senior leaders, entrepreneurs, investors, and future leaders who understand that enduring success is not built by tactics alone — but by the quality of thought, character, and judgment behind every strategic decision.",
    cover: "/Books/38-letters-rockefeller.jpg",
    coverAlt:
      "The 38 Letters of Rockefeller to His Son, with Author's Reflections — Book 2, The Business Strategy Series by Parham Shariat",
    accentColor: "#D41F1F",
    status: "published",
  },
  {
    slug: "six-ways-to-make-a-seven",
    seriesNumber: 3,
    series: "The Business Strategy Series",
    title: "Six Ways to Make a Seven",
    subtitle: "Knowing When To Walk Away",
    summary:
      "Timing, strategy, pattern recognition, and consistency — the four forces that determine every significant business decision.",
    description:
      "Most people walk up to a craps table the same way they walk into a business decision — excited, reactive, and following whoever looks like they know what they are doing. This book is about the four forces that determine every outcome at the craps table and every significant decision in business: timing, strategy, pattern recognition, and consistency. Drawing on more than two decades of navigating markets across three continents — from commercial real estate in Washington DC to institutional-scale deals in Dubai, and from the dot-com era to the rise of artificial intelligence — Parham Shariat lays out an honest account of a career built on reading cycles, positioning early, pressing when the math justified it, and protecting capital when everyone around him was deploying theirs.",
    forWhom:
      "The young entrepreneur figuring out how business actually works — not the version they teach in school, but the real version. Four craps strategy lessons are included at the back of the book.",
    cover: "/Books/six-ways-to-make-a-seven.jpg",
    coverAlt:
      "Six Ways to Make a Seven, Knowing When To Walk Away — Book 3, The Business Strategy Series by Parham Shariat",
    accentColor: "#111111",
    status: "published",
  },
  {
    slug: "digital-real-estate",
    seriesNumber: 4,
    series: "The Business Strategy Series",
    title: "Digital Real Estate",
    subtitle: "How to Own More Space on the Internet",
    summary:
      "A framework that reframes content the way a smart investor thinks about real estate: location, substance, and time.",
    description:
      "Most businesses are renting attention. Almost none are building digital assets. Every day, owners pour money into content that vanishes in seventy-two hours — chasing viral moments, posting product photos nobody remembers, and hiring &ldquo;content creators&rdquo; who deliver millions of views and zero clients. Drawing on years of experience with large real estate investors and in marketing, Parham Shariat introduces a framework that reframes content and digital presence the way a smart investor thinks about real estate: location, substance, and time. You will learn why the businesses winning right now aren&rsquo;t the ones with the flashiest videos — they&rsquo;re the ones whose expertise is structured, owned, and impossible for AI search engines to ignore.",
    forWhom:
      "Business owners and operators who want to stop renting attention and start owning digital assets that compound. Companion to The Complete Guide to Dominating AI Search and The Business Strategy Plan.",
    cover: "/Books/digital-real-estate.jpg",
    coverAlt:
      "Digital Real Estate, How to Own More Space on the Internet — Book 4, The Business Strategy Series by Parham Shariat",
    accentColor: "#8C1AB9",
    status: "published",
  },
  {
    slug: "complete-guide-to-dominating-ai-search",
    series: "Companion volume",
    title: "The Complete Guide to Dominating AI Search",
    subtitle:
      "A Proven Framework for Getting Your Business Recommended by AI Search Engines through Generative Engine Optimization",
    summary:
      "The step-by-step manual for getting recommended by ChatGPT, Claude, Perplexity, and Gemini — drawn from 11 months of testing across 50+ businesses.",
    description:
      "After analyzing 50+ businesses and running an intensive eleven-month testing protocol, business strategist Parham Shariat discovered exactly what makes AI systems recommend certain businesses and ignore others. This book is the complete, battle-tested framework: the AI search revolution and the 12–18 month competitive lead available to businesses that act in the next 90 days; foundation building for brand, website, and technical infrastructure so AI systems can discover and cite you; the Atomic Answer Block Framework and the exact content formats that trigger AI recommendations; a 90-day content sprint with week-by-week milestones; authority signals that matter in the AI era — backlinks, schema, and E-E-A-T; distribution at scale across 15+ platforms; measurement and optimization; and advanced tactics including custom GPTs.",
    forWhom:
      "Owners of B2B service businesses generating $1–5M annually who have genuine expertise to share and can commit 10–15 hours per week for 90 days to establish a sustainable competitive advantage.",
    cover: "/Books/complete-guide-ai-search.jpg",
    coverAlt:
      "The Complete Guide to Dominating AI Search — A Proven Framework for Getting Your Business Recommended by AI Search Engines through Generative Engine Optimization, by Parham Shariat",
    accentColor: "#1F3A93",
    status: "published",
  },
];

// Curated recommendations that align with the firm's thesis. Edit freely.
export const RECOMMENDED_BOOKS: RecommendedBook[] = [
  {
    slug: "antifragile",
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    year: "2012",
    why: "The clearest framework we&rsquo;ve found for thinking about systems that gain from disorder — directly applicable to small-business resilience in the age of AI.",
    topic: "Macro",
  },
  {
    slug: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel with Blake Masters",
    year: "2014",
    why: "Required reading for founders trying to build something genuinely new instead of incrementally better. Pairs well with The Business Strategy Plan.",
    topic: "Strategy",
  },
  {
    slug: "innovators-dilemma",
    title: "The Innovator's Dilemma",
    author: "Clayton Christensen",
    year: "1997",
    why: "Still the best account of why successful businesses get displaced. AI is the disruption story most operators are currently living through.",
    topic: "Strategy",
  },
  {
    slug: "influence",
    title: "Influence",
    author: "Robert Cialdini",
    year: "1984",
    why: "The grammar of persuasion. Every marketing decision a small business makes is implicitly an Influence chapter — better to know which one.",
    topic: "Operating",
  },
  {
    slug: "good-strategy-bad-strategy",
    title: "Good Strategy / Bad Strategy",
    author: "Richard Rumelt",
    year: "2011",
    why: "The book that separates real strategy from goal-setting in business attire. The diagnosis-policy-action triad is a workhorse in client engagements.",
    topic: "Strategy",
  },
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    why: "Operators who can name their own cognitive biases make better decisions under uncertainty. Foundational for anyone making capital allocation calls.",
    topic: "Leadership",
  },
];

export function authoredBookBySlug(slug: string): AuthoredBook | undefined {
  return AUTHORED_BOOKS.find((b) => b.slug === slug);
}
