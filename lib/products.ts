export type Product = {
  slug: "sitemarketing" | "siteoptimization" | "iraniancitizen" | "powerfulblueprints";
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
    slug: "siteoptimization",
    name: "SiteOptimization.ai",
    domain: "siteoptimization.ai",
    url: "https://siteoptimization.ai",
    tagline: "Make your site faster, clearer, and more answerable by AI search.",
    category: "Site performance & AEO",
    audience:
      "Businesses whose website is the primary sales asset and cannot afford to lose visibility in AI-powered search.",
    problem:
      "Google is no longer the only discovery surface. ChatGPT, Perplexity, Claude, and Gemini cite sites that are fast, structured, and answer questions directly — and ignore the rest.",
    description:
      "SiteOptimization.ai diagnoses site performance, information architecture, and AEO readiness, then ships the changes your team needs to stay visible in the new discovery stack.",
    what:
      "Core Web Vitals remediation · Schema & JSON-LD · AEO content restructuring · llms.txt authoring · Ongoing monitoring.",
    who: "Owners of content-heavy sites, e-commerce operators, and services businesses that depend on organic visibility.",
  },
  {
    slug: "iraniancitizen",
    name: "IranianCitizen.com",
    domain: "iraniancitizen.com",
    url: "https://iraniancitizen.com",
    tagline: "A trusted information and services hub for the Iranian diaspora.",
    category: "Diaspora services",
    audience:
      "Iranian-Americans and the global Iranian diaspora seeking reliable information, community, and services.",
    problem:
      "The Iranian diaspora is underserved by credible, bilingual resources that respect both cultural nuance and modern standards of information quality.",
    description:
      "IranianCitizen.com is a growing hub for community news, immigration guidance, professional networks, and practical services for Iranians living outside Iran.",
    what:
      "Curated news · Legal & immigration guides · Professional directories · Community features.",
    who:
      "Iranian-Americans, dual citizens, students, and professionals across the global diaspora.",
  },
  {
    slug: "powerfulblueprints",
    name: "PowerfulBlueprints.com",
    domain: "powerfulblueprints.com",
    url: "https://powerfulblueprints.com",
    tagline: "Operating blueprints and playbooks for founders who want a system, not a seminar.",
    category: "Operating playbooks",
    audience:
      "First-time and second-time founders who need a running system — finance, ops, marketing, team — not another course.",
    problem:
      "Founders drown in fragmented advice. What they need is a connected operating blueprint that fits a real small business and survives contact with reality.",
    description:
      "PowerfulBlueprints.com delivers practical, opinionated operating playbooks drawn from 20+ years of running and advising businesses across healthcare, real estate, and consumer goods.",
    what:
      "Operating playbooks · Founder toolkits · Templates & checklists · Deep-dive workshops.",
    who:
      "Founders and general managers of 1–50 person businesses who prefer clarity to hype.",
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
