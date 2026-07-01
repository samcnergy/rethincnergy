export type Project = {
  slug: "alohelp" | "ai-search-optimization" | "gritiva-ai-brain";
  name: string;
  shortName: string;
  tagline: string;
  status: string;
  seeking: string;
  pathToProfitability: string;
  market: string;
  businessModel: string;
  description: string;
  highlights: string[];
  href: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "alohelp",
    name: "AutismRI",
    shortName: "AutismRI",
    tagline:
      "Healthcare AI diagnostics. AutismRI: autism spectrum disorder detection via MRI.",
    status: "In development",
    seeking: "Pre-seed · $500K",
    pathToProfitability: "2027–2028",
    market: "$4B+ healthcare AI diagnostics",
    businessModel: "SaaS for clinics and hospitals",
    description:
      "Clinical-grade AI diagnostic platform. First module: AutismRI analyzes structural MRI to identify neuroanatomical markers associated with autism spectrum disorder — 86% sensitivity, 89% specificity, exceeding the ADOS-2 gold standard. Future modules extend the platform to ADHD and Alzheimer's.",
    highlights: [
      "Trained on ABIDE dataset — 1,008 subjects, 19 international research sites",
      "86% sensitivity, 89% specificity vs. ADOS-2 gold standard",
      "Grad-CAM explainability — clinicians see which brain regions drove the result",
      "HIPAA-aligned cloud API · Clinician reporting in seconds",
      "Platform architecture supports ADHD and Alzheimer's modules",
    ],
    href: "/projects/alohelp",
  },
  {
    slug: "ai-search-optimization",
    name: "AI Search Optimization",
    shortName: "AI Search",
    tagline:
      "GEO platform for local professionals. AI visibility for physicians, attorneys, and real estate agents.",
    status: "Live · Pre-revenue",
    seeking: "Seed / Series A",
    pathToProfitability: "2025–2026",
    market: "$1B+ GEO market · local professionals",
    businessModel: "SaaS subscriptions · $500–$3K/month per client",
    description:
      "Two products, one mission: own your visibility in AI search. SiteMarketing.ai delivers a free AI Visibility Assessment then a monthly GEO retainer optimizing presence across ChatGPT, Perplexity, Gemini, and Google AI Overviews. Powerful Blueprints is the free publishing platform that feeds the funnel.",
    highlights: [
      "Free AI Visibility Assessment — scores website, social authority, LLM presence",
      "Monthly GEO retainers · $500–$3K/month",
      "Citation monitoring across ChatGPT, Perplexity, and Gemini",
      "Powerful Blueprints: free AI-optimized content publishing platform",
      "Target: physicians, attorneys, real estate agents generating $1–5M/year",
    ],
    href: "/projects/ai-search-optimization",
  },
  {
    slug: "gritiva-ai-brain",
    name: "Gritiva AI Brain",
    shortName: "Gritiva",
    tagline:
      "Proprietary LLM infrastructure. Specialized AI that runs locally — no API dependency, no per-query costs.",
    status: "Live · Beta",
    seeking: "Expansion capital",
    pathToProfitability: "Revenue from day one",
    market: "DevOps, healthcare, legal, marketing",
    businessModel: "Licensing · $500–$50K/year · White-label partnerships",
    description:
      "Rethink's proprietary large language model — trained on domain-specific data, deployed locally or hybrid, with no per-query API dependency. The infrastructure backbone for AloHelp and SiteMarketing.ai. Available as a white-label platform for external partners who need specialized AI without the ChatGPT API economics.",
    highlights: [
      "Train on your domain: medical, legal, marketing, infrastructure",
      "Local or hybrid deployment — data never leaves your infrastructure",
      "Fixed annual licensing vs. per-query API costs at scale",
      "HIPAA-ready · SOC 2 compliant · GDPR-compatible",
      "White-label available for agencies and platform builders",
    ],
    href: "/gritiva",
  },
];

export function projectBySlug(slug: Project["slug"]): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
