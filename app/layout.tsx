import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { ORGANIZATION_JSONLD, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const viewport: Viewport = {
  themeColor: "#0B1929",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI strategy for small businesses`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Parham Shariat" }, { name: "Mohammad Salamati" }],
  creator: "ReTHINK CNERGY, Inc.",
  publisher: "ReTHINK CNERGY, Inc.",
  keywords: [
    "ReTHINK CNERGY",
    "AI strategy",
    "GEO",
    "Generative Engine Optimization",
    "AEO",
    "small business consulting",
    "Parham Shariat",
    "AI consulting California",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink-800 focus:px-4 focus:py-2 focus:text-sand-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd id="organization-jsonld" data={ORGANIZATION_JSONLD} />
      </body>
    </html>
  );
}
