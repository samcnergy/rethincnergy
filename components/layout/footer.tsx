import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BrandMark } from "@/components/layout/brand-mark";
import { PRODUCTS } from "@/lib/products";
import { CLIENTS } from "@/lib/clients";

const YEAR = new Date().getFullYear();

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
          <p className="mt-4 text-xs text-ink-400">
            ReTHINK CNERGY, Inc. · Orange County, California · Founded October 25, 2021
          </p>
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
            <a href="mailto:parham@rethinkcnergy.com" className="hover:text-copper-600">
              parham@rethinkcnergy.com
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
