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
    tagline: "GEO platform for local professionals. AI Visibility Assessment + monthly retainers.",
    category: "Marketing strategy · Generative Engine Optimization",
    audience:
      "Physicians, attorneys, and real estate agents generating $1–5M annually who are unaware that AI search has changed how clients find them.",
    problem:
      "AI search has fundamentally changed how clients find professionals. Most local professionals — physicians, attorneys, real estate agents — don't yet know this. Their visibility on ChatGPT, Perplexity, and Google AI Overviews is close to zero, and traditional SEO won't fix it.",
    description:
      "SiteMarketing.ai is a GEO platform built for local professionals. It starts with a free AI Visibility Assessment — scoring your website, social authority, and LLM presence — then delivers a monthly retainer roadmap optimizing your content for AI platform algorithms across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
    what: "Free AI Visibility Assessment · Monthly GEO retainers · Content optimization for AI platforms · Citation monitoring across ChatGPT, Perplexity, and Gemini · Strategic Partner Network.",
    who: "Physicians, attorneys, and real estate agents in major U.S. markets generating $1–5M annually who want to own their visibility in AI search.",
  },
  {
    slug: "powerfulblueprints",
    name: "Powerful Blueprints",
    domain: "powerfulblueprints.com",
    url: "https://powerfulblueprints.com",
    tagline: "Free AI-optimized content publishing platform. Integrates with SiteMarketing.ai.",
    category: "Editorial platform · AI Search Visibility",
    audience:
      "Local professionals — physicians, attorneys, real estate agents — who want to publish thought leadership content that AI systems actually read and cite.",
    problem:
      "Publishing content that AI systems read and cite requires structured formatting, schema markup, and semantic HTML that most professionals and generic publishing tools skip entirely.",
    description:
      "Powerful Blueprints is a free publishing platform for professionals building AI search visibility. Articles are structured for GEO from the start — schema markup, semantic HTML, and microdata built in. One-click distribution pushes content across your own site, LinkedIn, Medium, and other platforms. Integrates directly with SiteMarketing.ai for professionals on paid GEO retainers.",
    what: "AI-optimized article publishing · Built-in GEO schema markup · Multi-platform distribution (LinkedIn, Medium, Quora, Reddit, and more) · AI citation monitoring · SiteMarketing.ai integration.",
    who: "Local professionals who want a free entry point to AI search visibility — and a clear path to the full SiteMarketing.ai GEO retainer when they are ready to scale.",
  },
  {
    slug: "alohelp",
    name: "AloHelp",
    domain: "alohelp.ai",
    url: "https://alohelp.ai",
    tagline:
      "Clinical-grade AI diagnostics. First module: AutismRI (autism spectrum disorder detection via MRI). Expanding to ADHD, Alzheimer's, and additional neurological conditions.",
    category: "Medical diagnostics · SaMD",
    audience:
      "Pediatric neurologists, child psychiatrists, and radiology practices that want an objective neuroimaging-based aid to the autism diagnostic workup.",
    problem:
      "Autism is often diagnosed years later than it could be. Behavioral assessments like ADOS-2 are subjective, specialist-limited, and slow, while fewer than half of at-risk children are screened by age 3. The window where early intervention compounds the most gets missed.",
    description:
      "AloHelp is a scalable AI diagnostic platform for neurological conditions. Its first module, AutismRI, analyzes MRI and fMRI brain imaging together with patient metadata using a multi-branch deep learning model, returning an autism risk assessment in seconds with Grad-CAM visual explanations that show clinicians which brain regions drove the result. Future modules extend the same platform to ADHD, Alzheimer's, and additional neurological conditions.",
    what:
      "AutismRI module · Structural &amp; functional MRI analysis · Multi-modal deep learning (3D CNN + ResNet) · Grad-CAM explainability · Clinician report + HIPAA-aligned cloud API · Roadmap: ADHD, Alzheimer's modules.",
    who: "Pediatric neurology, child psychiatry, and radiology practices ready to integrate an AI-assisted imaging-based diagnostic aid — and clinical partners for the FDA De Novo clearance pathway.",
    comingSoon: true,
  },
  {
    slug: "braingritiva",
    name: "Brain.Gritiva",
    domain: "brain.gritiva.com",
    url: "https://brain.gritiva.com",
    tagline:
      "AI-powered system management software. Orchestration and automation for operators building intelligent workflows.",
    category: "AI orchestration · System management",
    audience:
      "Technical operators and small business owners who want control over their AI stack without running enterprise infrastructure.",
    problem:
      "Off-the-shelf chatbots don&rsquo;t give enough control. Enterprise AI platforms are overkill and expensive. The middle ground — where you can configure your own agents, swap models, and watch what&rsquo;s actually happening — has been missing.",
    description:
      "Brain.Gritiva is a hosted AI orchestration workspace for operators who need more than a chatbot and less than enterprise infrastructure. Build and test custom AI agents, manage multi-model workflows, monitor system performance via Brain Server, and deploy agents into the workflows where they earn their keep.",
    what: "Multi-model agent builder · Workflow automation · Brain Server monitoring · Deployment controls · Open-source model support.",
    who: "Operators who want a real grip on their AI stack — not a walled-garden chatbot and not a DIY Kubernetes project.",
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
