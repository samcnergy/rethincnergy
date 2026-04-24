import { Hero } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ProductGrid } from "@/components/sections/product-grid";
import { ClientGrid } from "@/components/sections/client-grid";
import { Philosophy } from "@/components/sections/philosophy";
import { AtomicAnswers } from "@/components/sections/atomic-answers";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildMetadata,
  LOCAL_BUSINESS_JSONLD,
  HOME_SERVICES_JSONLD,
  DEFINED_TERMS_JSONLD,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ReTHINK CNERGY — AI strategy for small businesses",
  description:
    "ReTHINK CNERGY is a California-based firm helping small businesses rethink how they operate, market, and grow in the age of AI. Strategy, GEO readiness, and production software.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <WhatWeDo />
      <ProductGrid campaign="home" />
      <ClientGrid campaign="home" />
      <Philosophy />
      <AtomicAnswers />
      <InsightsPreview />
      <CtaBlock
        eyebrow="Work with us"
        heading="If you&rsquo;re ready to invest in getting it right, we should talk."
        body="We take on a small number of engagements at a time. Tell us what you&rsquo;re trying to build, and we&rsquo;ll tell you whether we&rsquo;re the right fit."
        primaryLabel="Start the conversation"
        secondaryHref="/services"
        secondaryLabel="See services"
      />

      <JsonLd id="home-localbusiness-jsonld" data={LOCAL_BUSINESS_JSONLD} />
      <JsonLd id="home-services-jsonld" data={HOME_SERVICES_JSONLD} />
      <JsonLd id="home-definedterms-jsonld" data={DEFINED_TERMS_JSONLD} />
    </>
  );
}
