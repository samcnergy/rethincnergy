import { Mail, MapPin, Calendar } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with ReTHINK CNERGY. Tell us about your project and we will reply within two business days.",
  path: "/contact",
});

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
  ],
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 lg:pt-28">
        <Container>
          <p className="text-xs uppercase tracking-[0.22em] text-copper-600">Contact</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] text-ink-800 sm:text-6xl lg:text-7xl">
            Let&rsquo;s talk.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Tell us what you&rsquo;re working on, what&rsquo;s in the way, and what
            success looks like. We&rsquo;ll reply within two business days.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="space-y-8 text-sm text-ink-600 lg:col-span-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 text-copper-600" aria-hidden />
                <div>
                  <p className="font-medium text-ink-800">Email</p>
                  <p className="mt-1">
                    <a href="mailto:parham@rethinkcnergy.com" className="hover:text-copper-600">
                      parham@rethinkcnergy.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-copper-600" aria-hidden />
                <div>
                  <p className="font-medium text-ink-800">Headquarters</p>
                  <p className="mt-1">Orange County, California, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 size-5 text-copper-600" aria-hidden />
                <div>
                  <p className="font-medium text-ink-800">Prefer a live call?</p>
                  <p className="mt-1">
                    Email with two or three times that work for you in the next week and
                    we&rsquo;ll confirm back with a calendar hold.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-sand-200 bg-card p-5 text-sm text-ink-500">
                <p className="font-medium text-ink-800">What to expect</p>
                <ul className="mt-2 space-y-1.5 list-disc pl-5 marker:text-copper-500">
                  <li>Reply within two business days</li>
                  <li>30-minute first call, no obligation</li>
                  <li>Clear proposal if there&rsquo;s a fit, a referral if there isn&rsquo;t</li>
                </ul>
              </div>
            </aside>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <JsonLd id="contact-breadcrumb-jsonld" data={BREADCRUMB_JSONLD} />
    </>
  );
}
