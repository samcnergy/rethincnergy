import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { GritivaBackbone } from "@/components/sections/gritiva-backbone";
import { InvestmentCallout } from "@/components/sections/investment-callout";
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
  title: "ReTHINK CNERGY — AI Venture Studio",
  description:
    "Rethink Cnergy is an AI venture studio. We launch and scale AI-powered companies. Our Private Language Model is the proprietary infrastructure that powers every project. Three active ventures: AloHelp, AI Search Optimization, and Private Language Model.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <GritivaBackbone />
      <InvestmentCallout />
      <Philosophy />
      <AtomicAnswers />
      <InsightsPreview />
      <CtaBlock
        eyebrow="Work with us"
        heading="Building an AI company? Need custom AI infrastructure? We should talk."
        body="We work with founders, investors, and enterprises across three paths: venture partnerships, Private Language Model licensing, and custom platform development."
        primaryLabel="Start the conversation"
        secondaryHref="/projects"
        secondaryLabel="See our projects"
      />

      <JsonLd id="home-localbusiness-jsonld" data={LOCAL_BUSINESS_JSONLD} />
      <JsonLd id="home-services-jsonld" data={HOME_SERVICES_JSONLD} />
      <JsonLd id="home-definedterms-jsonld" data={DEFINED_TERMS_JSONLD} />
    </>
  );
}
