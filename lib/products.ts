export type Product = {
  slug: "sitemarketing" | "powerfulblueprints" | "braingritiva" | "alohelp";
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  audience: string;
  problem: string;
  what: string;
  who: string;
  category: string;
  comingSoon?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "sitemarketing",
    name: "SiteMarketing.ai",
    domain: "sitemarketing.ai",
    url: "https://sitemarketing.ai",
    tagline: "AI-driven marketing audits and strategy for growth-focused businesses.",
    category: "Marketing strategy",
    audience:
      "Small and mid-sized businesses that need serious marketing strategy without a CMO on payroll.",
    problem:
      "Most small businesses run on tactical marketing — a little social, a little ads, whatever the agency suggested last quarter. What they lack is a coherent strategy grounded in data.",
    description:
      "SiteMarketing.ai runs a rigorous audit of your current marketing footprint, then builds a 90-day growth plan with the content, channels, and measurement to back it up.",
    what:
      "Full-funnel audit · Positioning · Content engine · GEO/AEO readiness · Quarterly strategy reviews.",
    who: "Founders and operators of 10–200 person businesses ready to invest in getting marketing right.",
  },
  {
    slug: "alohelp",
    name: "AloHelp",
    domain: "alohelp.ai",
    url: "https://alohelp.ai",
    tagline:
      "AI-driven software as a medical device for earlier, more objective autism detection.",
    category: "Medical diagnostics · SaMD",
    audience:
      "Pediatric neurologists, child psychiatrists, and radiology practices that want an objective neuroimaging-based aid to the autism diagnostic workup.",
    problem:
      "Autism is often diagnosed years later than it could be. Behavioral assessments like ADOS-2 are subjective, specialist-limited, and slow, while fewer than half of at-risk children are screened by age 3. The window where early intervention compounds the most gets missed.",
    description:
      "AloHelp analyzes MRI/fMRI brain imaging together with patient metadata using a multi-branch deep learning model, then returns an autism risk assessment in seconds alongside Grad-CAM visual explanations that show clinicians which brain regions drove the result. It is designed as an objective, reproducible aid to clinical judgment — not a replacement for it.",
    what:
      "Structural &amp; functional MRI analysis · Multi-modal deep learning (3D CNN + ResNet + metadata) · Grad-CAM explainability · HIPAA-aligned cloud architecture · Clinician report + secure API.",
    who:
      "Pediatric neurology, child psychiatry, and radiology practices ready to integrate an AI-assisted, imaging-based aid into the autism diagnostic workup.",
    comingSoon: true,
  },
  {
    slug: "braingritiva",
    name: "Brain.Gritiva",
    domain: "brain.gritiva.com",
    url: "https://brain.gritiva.com",
    tagline: "An AI orchestrator for operators who want to build and run their own agents.",
    category: "AI orchestration",
    audience:
      "Technical operators and small business owners who want control over their AI stack without running enterprise infrastructure.",
    problem:
      "Off-the-shelf chatbots don&rsquo;t give enough control. Enterprise AI platforms are overkill and expensive. The middle ground — where you can configure your own agents, swap models, and watch what&rsquo;s actually happening — has been missing.",
    description:
      "Brain.Gritiva is a hosted workspace for building, testing, and running custom AI agents. Chat with multiple open-source models, compose agents with specific instructions and tools, monitor the Brain Server, and deploy each agent to the workflow where it earns its keep.",
    what:
      "Multi-model chat · Custom agent builder · Brain Server monitoring · Deployment controls · Open-source model support.",
    who:
      "Operators who want a real grip on their AI — not a walled-garden chatbot and not a DIY Kubernetes project.",
  },
  {
    slug: "powerfulblueprints",
    name: "Powerful Blueprints",
    domain: "powerfulblueprints.com",
    url: "https://powerfulblueprints.com",
    tagline: "Career stories from proven professionals — the story behind the advice.",
    category: "Editorial platform",
    audience:
      "Aspiring professionals, readers, writers, and art audiences who want the real path, not polished highlight reels.",
    problem:
      "Most career content is advice without the story. Readers end up with checklists that don't travel — no context, no decisions, no honest account of what it took.",
    description:
      "Powerful Blueprints is a structured interview platform featuring career stories from proven professionals across three editions: CEO, Author, and Artist. A consistent question framework makes the stories comparable, so readers can extract blueprints they can actually apply.",
    what:
      "CEO edition · Author edition · Artist edition · Free permanent access · Editorial review for authenticity.",
    who:
      "Readers studying the real arc of a career — aspiring professionals, young leaders, writers, collectors, and audiences who want the why behind the decisions.",
  },
];

export function productBySlug(slug: Product["slug"]): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productUtmUrl(product: Product, campaign = "portfolio") {
  const url = new URL(product.url);
  url.searchParams.set("utm_source", "rethinkcnergy");
  url.searchParams.set("utm_medium", "portfolio");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
