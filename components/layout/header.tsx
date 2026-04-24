"use client";

import Link from "next/link";
import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { BrandMark } from "@/components/layout/brand-mark";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Clients" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        scrolled
          ? "border-sand-200 bg-background/85 backdrop-blur"
          : "border-transparent bg-background"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label="ReTHINK CNERGY home">
          <BrandMark />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-copper-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="sm" variant="default">
            <Link href="/contact">Book a strategy call</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          className="inline-flex size-10 items-center justify-center rounded-md text-ink-700 hover:bg-sand-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      {open && (
        <div id="site-mobile-nav" className="border-t border-sand-200 bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-ink-700 hover:bg-sand-100"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3" onClick={() => setOpen(false)}>
              <Link href="/contact">Book a strategy call</Link>
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
