import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/utils";

export const SITE_NAME = "ReTHINK CNERGY";
export const SITE_TAGLINE =
  "AI strategy, GEO/AEO readiness, and production software for small businesses.";
export const SITE_DESCRIPTION =
  "ReTHINK CNERGY is a California-based boutique firm that helps small businesses rethink how they operate, market, and grow in the age of AI. Strategy, GEO readiness, and a portfolio of production software products.";

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
  };
}

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "ReTHINK CNERGY, Inc.",
  url: SITE_URL,
  logo: absoluteUrl("/og/logo.svg"),
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
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://sitemarketing.ai",
    "https://powerfulblueprints.com",
  ],
  description: SITE_DESCRIPTION,
};

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
