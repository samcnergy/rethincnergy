export type Client = {
  slug: "iraniancitizen" | "salamatlegal";
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  engagement: string;
  industry: string;
  who: string;
};

export const CLIENTS: Client[] = [
  {
    slug: "iraniancitizen",
    name: "Iranian Citizen Services",
    domain: "iraniancitizen.com",
    url: "https://www.iraniancitizen.com",
    industry: "Diaspora services · Document consulting",
    tagline:
      "Document consulting for Iranians in the United States and Canada.",
    description:
      "Iranian Citizen Services is a document-consulting firm — not a law firm — that helps Iranians living in the U.S. and Canada obtain and maintain Iranian government documents. Passports, national ID (smart cards), birth certificates, powers of attorney, and navigation of the Mikhak portal, all handled with a focus on accuracy before submission so clients don&rsquo;t lose months to rejections and missing paperwork.",
    who:
      "Iranians in the U.S. and Canada handling travel, inheritance, family matters, or any civil tie that requires current Iranian documents.",
    engagement:
      "ReTHINK CNERGY supports Iranian Citizen Services on digital strategy, site architecture, and AI-assisted content systems that compound authority in the Iranian diaspora search surface.",
  },
  {
    slug: "salamatlegal",
    name: "Salamat Legal",
    domain: "salamatlegal.com",
    url: "https://salamatlegal.com",
    industry: "Iranian law · Cross-border legal services",
    tagline:
      "A trusted bridge between Iran and the world for diaspora and international clients.",
    description:
      "Salamat Legal provides comprehensive legal services for clients navigating Iranian law — real estate, family, and intellectual property — from dual offices in Tehran and Orange County. The firm is led by Shirin Salamat, an attorney with 20+ years of experience, and supported by licensed Iranian Bar Association members.",
    who:
      "Iranians living abroad who need trusted legal guidance in Iran, and international businesses seeking to protect their intellectual property in the Iranian market.",
    engagement:
      "ReTHINK CNERGY partners with Salamat Legal on positioning, GEO/AEO readiness, and the content architecture that makes a specialist firm discoverable to both diaspora clients and international counsel.",
  },
];

export function clientBySlug(slug: Client["slug"]): Client | undefined {
  return CLIENTS.find((c) => c.slug === slug);
}

export function clientUtmUrl(client: Client, campaign = "clients") {
  const url = new URL(client.url);
  url.searchParams.set("utm_source", "rethinkcnergy");
  url.searchParams.set("utm_medium", "clients");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
