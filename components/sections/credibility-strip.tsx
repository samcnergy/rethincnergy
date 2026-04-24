import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

const ITEMS = [
  "Founded 2021",
  "Orange County, California",
  "20+ years international business",
  "Wharton AI-certified leadership",
];

export function CredibilityStrip() {
  return (
    <section aria-label="Company credentials" className="mt-20 lg:mt-28">
      <Container>
        <div className="rounded-xl border border-sand-200 bg-card">
          <dl className="flex flex-col divide-y divide-sand-200 text-sm sm:flex-row sm:divide-x sm:divide-y-0">
            {ITEMS.map((item) => (
              <div key={item} className="flex-1 px-6 py-5">
                <dt className="text-xs uppercase tracking-wider text-copper-600">Fact</dt>
                <dd className="mt-1 font-serif text-base text-ink-800">{item}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Separator className="mt-0 hidden" />
      </Container>
    </section>
  );
}
