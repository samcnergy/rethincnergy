import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BrandMark } from "@/components/layout/brand-mark";
import { PRODUCTS } from "@/lib/products";
import { CLIENTS } from "@/lib/clients";
import { SITE_CONTACT, SITE_LAST_UPDATED } from "@/lib/seo";

const YEAR = new Date().getFullYear();

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function SiteFooter() {
  return (
    <footer className="border-t border-sand-200 bg-background">
      <Container className="grid gap-12 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-500">
            A California-based boutique firm helping small businesses rethink how they
            operate, market, and grow in the age of AI.
          </p>
          <address
            className="mt-5 space-y-1 not-italic text-xs text-ink-500"
            aria-label="ReTHINK CNERGY contact"
          >
            <p className="font-medium text-ink-700">ReTHINK CNERGY, Inc.</p>
            <p>
              <span itemProp="addressLocality">{SITE_CONTACT.addressLocality}</span>,{" "}
              <span itemProp="addressRegion">{SITE_CONTACT.addressRegion}</span>,{" "}
              <span itemProp="addressCountry">USA</span>
            </p>
            <p>
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                className="hover:text-copper-600"
                itemProp="email"
              >
                {SITE_CONTACT.email}
              </a>
            </p>
            <p>Founded October 25, 2021</p>
          </address>
        </div>
        <nav aria-label="Company" className="text-sm">
          <h4 className="mb-4 font-serif text-base text-ink-800">Company</h4>
          <ul className="space-y-3 text-ink-500">
            <li><Link href="/about" className="hover:text-copper-600">About</Link></li>
            <li><Link href="/services" className="hover:text-copper-600">Services</Link></li>
            <li><Link href="/insights" className="hover:text-copper-600">Insights</Link></li>
            <li><Link href="/faq" className="hover:text-copper-600">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-copper-600">Contact</Link></li>
          </ul>
        </nav>
        <nav aria-label="Products" className="text-sm">
          <h4 className="mb-4 font-serif text-base text-ink-800">Products</h4>
          <ul className="space-y-3 text-ink-500">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="hover:text-copper-600"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Clients" className="text-sm">
          <h4 className="mb-4 font-serif text-base text-ink-800">Clients</h4>
          <ul className="space-y-3 text-ink-500">
            {CLIENTS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/clients/${c.slug}`}
                  className="hover:text-copper-600"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-sand-200">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>© {YEAR} ReTHINK CNERGY, Inc. All rights reserved.</p>
          <p>
            <span className="uppercase tracking-wider">Site last reviewed</span>{" "}
            <time dateTime={SITE_LAST_UPDATED}>{formatDate(SITE_LAST_UPDATED)}</time>
          </p>
        </Container>
      </div>
    </footer>
  );
}
