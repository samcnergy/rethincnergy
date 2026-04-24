import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm uppercase tracking-widest text-copper-600">404</p>
      <h1 className="mt-4 font-serif text-5xl text-ink-800">Page not found</h1>
      <p className="mt-4 max-w-md text-base text-ink-500">
        The page you&apos;re looking for doesn&apos;t exist, or may have moved. Let&apos;s get you
        back on course.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Talk to us</Link>
        </Button>
      </div>
    </Container>
  );
}
