import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/utils";

export const SITE_NAME = "ReTHINK CNERGY";
export const SITE_TAGLINE =
  "AI strategy, GEO/AEO readiness, and production software for small businesses.";
export const SITE_DESCRIPTION =
  "ReTHINK CNERGY is a California-based boutique firm that helps small businesses rethink how they operate, market, and grow in the age of AI. Strategy, GEO readiness, and a portfolio of production software products.";

// Freshness signal — bumped every release. AI answer engines weight recently
// reviewed content; surfacing this in page copy and schema is a direct
// response to the "freshness_and_recency" module of the GEO audit.
export const SITE_LAST_UPDATED = "2026-04-23";

export const SITE_CONTACT = {
  email: "parham@rethinkcnergy.com",
  addressLocality: "Anaheim",
  addressRegion: "CA",
  postalCode: "",
  addressCountry: "US",
  areaServed: ["United States", "Canada"],
};

export function buildMetadata(input: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const path = input.path ?? "/";
  const description = input.description ?? SITE_DESCRIPTION;
  const url = absoluteUrl(path);
  const image = input.image ?? absoluteUrl("/og/default.svg");

  return {
    title: input.title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description,
      images: [image],
    },
    other: {
      "article:modified_time": SITE_LAST_UPDATED,
    },
  };
}

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: "ReTHINK CNERGY, Inc.",
  legalName: "ReTHINK CNERGY, Inc.",
  url: SITE_URL,
  logo: absoluteUrl("/og/logo.svg"),
  image: absoluteUrl("/og/default.svg"),
  foundingDate: "2021-10-25",
  founders: [
    {
      "@type": "Person",
      name: "Parham Shariat",
      jobTitle: "CEO & Co-founder",
    },
    {
      "@type": "Person",
      name: "Mohammad Salamati",
      jobTitle: "CTO & Co-founder",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_CONTACT.addressLocality,
    addressRegion: SITE_CONTACT.addressRegion,
    addressCountry: SITE_CONTACT.addressCountry,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_CONTACT.email,
      areaServed: SITE_CONTACT.areaServed,
      availableLanguage: ["English"],
    },
  ],
  email: SITE_CONTACT.email,
  areaServed: SITE_CONTACT.areaServed,
  knowsAbout: [
    "AI strategy",
    "Generative Engine Optimization (GEO)",
    "Answer Engine Optimization (AEO)",
    "Fractional AI advisory",
    "Small business operations",
    "Software as a Medical Device (SaMD)",
  ],
  slogan: "Rethink how your business operates in the age of AI.",
  sameAs: [
    "https://sitemarketing.ai",
    "https://brain.gritiva.com",
    "https://powerfulblueprints.com",
  ],
  description: SITE_DESCRIPTION,
  dateModified: SITE_LAST_UPDATED,
};

export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  image: absoluteUrl("/og/default.svg"),
  logo: absoluteUrl("/og/logo.svg"),
  priceRange: "$$$",
  telephone: "",
  email: SITE_CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_CONTACT.addressLocality,
    addressRegion: SITE_CONTACT.addressRegion,
    addressCountry: SITE_CONTACT.addressCountry,
  },
  areaServed: SITE_CONTACT.areaServed,
  description: SITE_DESCRIPTION,
  parentOrganization: { "@id": `${SITE_URL}#organization` },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "AI Strategy & Advisory",
      description:
        "Fractional Chief Strategy Officer engagements, board advisory, and quarterly strategy reviews for 10–200 person businesses.",
    },
    {
      "@type": "Offer",
      name: "GEO / AEO Readiness",
      description:
        "GRI™ (GEO Readiness Index) audit, structured data, llms.txt authoring, and answer-shaped content remediation for content-heavy sites.",
    },
    {
      "@type": "Offer",
      name: "Custom AI Builds",
      description:
        "Bespoke AI software for qualified clients — scoped prototype in 2–4 weeks, production handover with runbooks.",
    },
    {
      "@type": "Offer",
      name: "Speaking & Workshops",
      description:
        "Keynotes on AI strategy and the Grand Recalibration; executive briefings and half-day workshops on GEO readiness.",
    },
  ],
  dateModified: SITE_LAST_UPDATED,
};

export const HOME_SERVICES_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#ai-strategy`,
    serviceType: "AI Strategy & Advisory",
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: SITE_CONTACT.areaServed,
    description:
      "Fractional Chief Strategy Officer engagements and board advisory for 10–200 person businesses. Typical engagement runs 3–12 months on a monthly retainer with quarterly deliverables.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: "500-3000",
        unitText: "MONTH",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#geo-readiness`,
    serviceType: "GEO / AEO Readiness",
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: SITE_CONTACT.areaServed,
    description:
      "GRI™ (GEO Readiness Index) audit, structured data and schema implementation, llms.txt authoring, and answer-shaped content rewrites. Typical implementation runs 60–120 days.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#custom-builds`,
    serviceType: "Custom AI Builds",
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: SITE_CONTACT.areaServed,
    description:
      "Bespoke AI software for qualified clients. Fixed-scope, milestone-based engagements starting at $15,000 for a scoped prototype in 2–4 weeks, followed by production handover.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#speaking`,
    serviceType: "Speaking & Workshops",
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: SITE_CONTACT.areaServed,
    description:
      "Keynotes on AI strategy and the Grand Recalibration, executive briefings, and half-day workshops on GEO readiness.",
  },
];

export const PARHAM_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parham Shariat",
  jobTitle: "CEO & Co-founder, ReTHINK CNERGY",
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  knowsAbout: [
    "AI strategy",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "Small business operations",
    "International business",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The Wharton School",
  },
  url: absoluteUrl("/about"),
};

// Defined-term JSON-LD helps AI assistants disambiguate industry jargon.
export const DEFINED_TERMS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "ReTHINK CNERGY Glossary",
  hasDefinedTerm: [
    {
      "@type": "DefinedTerm",
      name: "GEO (Generative Engine Optimization)",
      description:
        "The practice of structuring a website so that AI assistants like ChatGPT, Claude, Perplexity, and Gemini can read, quote, and cite it in generated answers. GEO is the AI-era complement to SEO.",
      url: absoluteUrl("/faq"),
    },
    {
      "@type": "DefinedTerm",
      name: "AEO (Answer Engine Optimization)",
      description:
        "The narrower discipline of shaping page content so that it can be lifted directly as an answer by an answer engine. Typically achieved via FAQ schema, short direct-answer paragraphs, and clean heading hierarchy.",
      url: absoluteUrl("/faq"),
    },
    {
      "@type": "DefinedTerm",
      name: "Fractional AI Advisory",
      description:
        "A part-time senior strategic role — typically a fractional Chief Strategy Officer — that helps a leadership team decide where AI fits in the business. Monthly retainer, no full-time hire, no equity.",
      url: absoluteUrl("/services"),
    },
    {
      "@type": "DefinedTerm",
      name: "GRI™ (GEO Readiness Index)",
      description:
        "ReTHINK CNERGY's diagnostic score (1–5) across five dimensions: structured data coverage, answer-shaped content, authoritativeness signals, llms.txt completeness, and technical quality.",
      url: absoluteUrl("/services"),
    },
  ],
};
