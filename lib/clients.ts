export type Client = {
  slug: "iraniancitizen" | "salamatlegal" | "millenniumdesign" | "parseengallery";
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
  {
    slug: "parseengallery",
    name: "Parseen Gallery",
    domain: "parseengallery.com",
    url: "https://www.parseengallery.com",
    industry: "Fine art · Luxury curation",
    tagline:
      "Curated fine art and turnkey installations for yachts, hotels, and corporate collections.",
    description:
      "Parseen Gallery curates paintings, drawings, sculptures, and collages for luxury clients, with a specialty in bespoke yacht and hotel installations that meet the technical, structural, and material demands of high-end vessels and properties. The gallery represents a roster of international artists and positions itself as a clear-eyed guide to art as an investable asset — not a mystical one.",
    who:
      "Yacht owners, luxury hoteliers, corporate art buyers, and collectors who want curated work at price points from $500 to $21,000+.",
    engagement:
      "ReTHINK CNERGY supports Parseen Gallery on digital presence, AI-assisted content, and GEO readiness — helping a specialist gallery stay discoverable to luxury buyers in both classical search and AI answer engines.",
  },
  {
    slug: "millenniumdesign",
    name: "Millennium Design & Services",
    domain: "millenniumtilemarble.com",
    url: "https://www.millenniumtilemarble.com",
    industry: "Construction · General contractor",
    tagline:
      "Orange County general contractor with a 30+ year track record in residential and commercial construction.",
    description:
      "Millennium Design & Services is an Anaheim-based general contractor operating since 1987. The team handles ground-up construction and renovation — custom homes, whole-house and kitchen/bath remodels, tenant improvements, office additions, site management, and landscape construction — with 1,400+ completed projects, 45 professionals on staff, and long-standing supplier partnerships.",
    who:
      "Residential and commercial clients across Orange County who want a contractor with a long track record and an in-house team, not a broker marking up subs.",
    engagement:
      "ReTHINK CNERGY supports Millennium Design & Services on digital presence, GEO readiness, and the content systems that convert a 30+ year project portfolio into discoverable, citable authority for high-consideration construction buyers.",
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
