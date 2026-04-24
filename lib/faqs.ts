export type Faq = {
  q: string;
  a: string;
  category: string;
};

export const FAQ_CATEGORIES = [
  "Getting started with AI",
  "Tools & costs",
  "Marketing & content",
  "Operations & workflow",
  "Customer experience",
  "Data, privacy & compliance",
  "Hiring & change management",
  "GEO / AEO / AI search",
  "Measurement & ROI",
  "Risks & limits",
] as const;

export const FAQS: Faq[] = [
  {
    q: "How can a small business start using AI without a big budget?",
    a: "Pick one weekly task that produces writing, summaries, or reports. Replace the slowest step with an AI-assisted version, measure the time saved for a month, and expand from there. Most small businesses can see a usable return in under 60 days without paying for anything beyond a $20/month AI subscription.",
    category: "Getting started with AI",
  },
  {
    q: "What AI tools should a small business owner actually use in 2026?",
    a: "Start with one conversational model (ChatGPT, Claude, or Gemini), one writing assistant inside your existing docs, and one vertical tool specific to your industry. Resist the urge to subscribe to ten tools. Three that you actually use will out-perform ten that you don&rsquo;t.",
    category: "Tools & costs",
  },
  {
    q: "How much does it cost to implement AI in a small business?",
    a: "Ranges are wide. A solo operator can run useful AI workflows for under $50/month. A 10-person services business adding AI to marketing and operations usually budgets $500–$3,000/month across tools and consulting. Custom builds start at $15,000 and climb from there based on scope.",
    category: "Tools & costs",
  },
  {
    q: "Can AI replace my employees?",
    a: "For most small businesses, no. AI replaces tasks, not people. The operators we work with use AI to make each employee effectively 30–50% more productive, then reinvest that capacity into better customer service, new offerings, or faster response times.",
    category: "Hiring & change management",
  },
  {
    q: "What is the best AI tool for writing marketing content?",
    a: "The tool matters less than the prompt quality and editorial discipline. Most of our clients use Claude or ChatGPT for long-form content and a dedicated assistant (like Grammarly or a built-in Google Docs feature) for polish. Owner-reviewed output beats tool-generated output every time.",
    category: "Marketing & content",
  },
  {
    q: "How do I use AI to improve my SEO?",
    a: "In 2026, traditional SEO is only part of the story. You need to think in terms of GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) — structuring content so AI answer engines can cite it. Start with FAQ schema, an llms.txt file, and answer-shaped H2s on your service pages.",
    category: "GEO / AEO / AI search",
  },
  {
    q: "What is GEO and how is it different from SEO?",
    a: "SEO optimizes for Google&rsquo;s link-based ranking. GEO — Generative Engine Optimization — optimizes for AI assistants that summarize, cite, or quote your site in their answers. Most small businesses need both; GEO is increasingly where net-new discovery happens.",
    category: "GEO / AEO / AI search",
  },
  {
    q: "Should I create an llms.txt file for my website?",
    a: "If your website is a meaningful sales asset, yes. An llms.txt file is a plain-English summary that tells AI crawlers what your business does, who you serve, and where the authoritative content lives. It takes an hour to author and compounds over time.",
    category: "GEO / AEO / AI search",
  },
  {
    q: "How can I make my website more visible in ChatGPT and Perplexity?",
    a: "Publish clear, answer-shaped content; add structured data (FAQPage, Organization, Service, Product schemas); ensure your site is fast and crawlable; do not block AI user agents in robots.txt; and build citations on reputable third-party sites that AI engines already trust.",
    category: "GEO / AEO / AI search",
  },
  {
    q: "How do I use AI to write better emails to my customers?",
    a: "Feed the model your last five successful emails, a one-paragraph brief on what you want the new email to do, and a clear reader profile. Ask for three variants with different angles. Pick one, edit it, send. The quality multiplier comes from feeding examples, not from generic prompts.",
    category: "Marketing & content",
  },
  {
    q: "Can AI help me with customer service for a small business?",
    a: "Yes, in two layers. Use AI to draft suggested replies for common questions inside your existing inbox, and consider a simple AI chat widget on your site for after-hours inquiries. Keep the human fully in the loop until you trust the draft quality. Never auto-send responses on complaints.",
    category: "Customer experience",
  },
  {
    q: "What should I not use AI for in my business?",
    a: "Never use AI to send unreviewed responses in sensitive situations (complaints, medical, legal, HR). Do not use consumer AI tools for confidential client data unless the vendor agreement supports it. Do not use AI-generated content as a substitute for real expertise on your service pages.",
    category: "Risks & limits",
  },
  {
    q: "How do I measure the ROI of AI in my business?",
    a: "Pick two or three metrics before you start: hours saved per week on the targeted workflow, cycle time on a defined process, and a revenue or retention metric tied to the change. Measure a two-week baseline, roll the AI change, and review after 30 days. If no metric moved, the tool is not the fit.",
    category: "Measurement & ROI",
  },
  {
    q: "Is my customer data safe when I use AI tools?",
    a: "It depends on the tool. Consumer plans on most AI vendors do not offer business-grade data protection. Use business or enterprise tiers that include data-use opt-outs and written terms. Never paste confidential client data into a free tier.",
    category: "Data, privacy & compliance",
  },
  {
    q: "What are the legal risks of using AI in a small business?",
    a: "Main risks are: copyright on generated content, accuracy and liability on customer-facing outputs, data-handling under HIPAA / CCPA / GDPR if applicable, and misrepresentation if an AI agent makes promises on your behalf. A two-page internal policy covers 90% of the exposure.",
    category: "Data, privacy & compliance",
  },
  {
    q: "How do I train my team to use AI effectively?",
    a: "Start with a live workshop that walks through three to five real workflows your team runs every week. Ship a one-page prompt playbook. Hold a 30-minute weekly office hours session for a month. Skip the generic video course — context-specific training beats it every time.",
    category: "Hiring & change management",
  },
  {
    q: "Will AI change how I hire in the next three years?",
    a: "Yes. Entry-level task volume shrinks; seniority and judgment become more valuable. Most small businesses will hire fewer juniors and invest more in experienced operators who can design AI-assisted workflows for the rest of the team.",
    category: "Hiring & change management",
  },
  {
    q: "What&rsquo;s the fastest-ROI use of AI for a services business?",
    a: "Proposals and scopes. Build a small library of your best past proposals, use an AI assistant to generate first drafts tailored to each new client, then edit. Our clients typically cut proposal time by 60–70% while holding quality.",
    category: "Marketing & content",
  },
  {
    q: "Can AI help me automate bookkeeping or finance tasks?",
    a: "AI is good at categorizing transactions, drafting monthly narratives for owners, and flagging anomalies. It is not a replacement for a qualified bookkeeper or CPA. Pair an AI assistant with a human professional for best results.",
    category: "Operations & workflow",
  },
  {
    q: "How do I pick the right AI model for my small business?",
    a: "For most small businesses, the specific model matters less than picking one that your team actually uses daily and paying for the business tier. Revisit the choice every 12 months — the leading model shifts more often than most SaaS categories.",
    category: "Tools & costs",
  },
  {
    q: "Should I build a custom AI tool or use an off-the-shelf one?",
    a: "Default to off-the-shelf. Build custom only when you have a specific, repeatable workflow that earns meaningful revenue or saves meaningful hours, and where no tool fits. A good rule of thumb: custom builds under $20,000 almost always have an off-the-shelf alternative worth trying first.",
    category: "Tools & costs",
  },
  {
    q: "How is AI changing local search and Google Maps visibility?",
    a: "AI assistants now often answer &ldquo;near me&rdquo; queries without showing Maps directly. Keep your Google Business Profile complete, add schema to your location pages, and publish detailed service-area pages. AI engines read all three.",
    category: "GEO / AEO / AI search",
  },
  {
    q: "What is the Grand Recalibration?",
    a: "&ldquo;The Grand Recalibration&rdquo; is our term for four forces — falling cost of intelligence, real-rate pressure on spending, a demographic bulge through prime spending years, and assistant-first discovery — landing on small businesses at the same time. It&rsquo;s the reason every small business is being quietly re-priced right now.",
    category: "Getting started with AI",
  },
  {
    q: "How often should I refresh my AI-assisted content?",
    a: "Every 6–12 months for evergreen pages, faster for FAQ pages tied to fast-moving topics. AI engines increasingly prefer recently-updated content; a light refresh cadence beats big annual rewrites.",
    category: "Marketing & content",
  },
  {
    q: "Should I worry about AI-generated content penalties from Google?",
    a: "Google&rsquo;s guidance has settled around quality, not origin. AI-generated content that is accurate, useful, and original-feeling performs fine. Thin, undifferentiated AI content performs poorly — that&rsquo;s a content problem, not an AI problem.",
    category: "Marketing & content",
  },
  {
    q: "How do I integrate AI into my existing software stack?",
    a: "Start with the tools you already pay for — most of Google Workspace, Microsoft 365, HubSpot, and the major CRMs now ship AI features at no extra cost. Exhaust those first before adding new line items.",
    category: "Operations & workflow",
  },
  {
    q: "What&rsquo;s the difference between an AI agent and a chatbot?",
    a: "A chatbot answers questions. An AI agent takes actions — booking meetings, running searches, updating records. Agents are powerful and riskier; constrain them to narrow, reversible actions until you&rsquo;ve stress-tested them for a few months.",
    category: "Operations & workflow",
  },
  {
    q: "Can AI help me with hiring and recruiting?",
    a: "Yes, for screening resumes against a well-written job description, drafting outreach, and summarizing interview notes. Keep human decision-making on the final call and document your process for compliance.",
    category: "Hiring & change management",
  },
  {
    q: "How do I write a good AI policy for my small business?",
    a: "Keep it to one page. Cover: which tools are approved, what data is off-limits (client PII, financials), who reviews outputs before they go to customers, and how the policy gets updated. Review quarterly.",
    category: "Data, privacy & compliance",
  },
  {
    q: "Is AI a fad or is it here to stay?",
    a: "The marketing cycle is faddish; the underlying capability shift is not. Language models have already changed the cost curve on writing, summarization, and decision-support work. That is structural. The branding around it will keep shifting; the capability will keep compounding.",
    category: "Risks & limits",
  },
  {
    q: "What is the single biggest mistake small businesses make with AI?",
    a: "Treating AI as a tool procurement exercise instead of a workflow redesign. Buying licenses does not move the needle. Re-thinking how a weekly process runs, with AI in the middle of it, does.",
    category: "Getting started with AI",
  },
  {
    q: "How do I know if I need an AI consultant?",
    a: "You probably need one if any of these are true: you&rsquo;ve bought tools your team isn&rsquo;t using; your website traffic is slipping for no clear reason; you&rsquo;re about to sign a $25k+ commitment to a vendor; or you have a specific workflow that could benefit but no one internally with the bandwidth to redesign it.",
    category: "Getting started with AI",
  },
];
