import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading" className="py-24 lg:py-32">
      <Container size="narrow">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-copper-600">
          The Grand Recalibration
        </p>
        <h2
          id="philosophy-heading"
          className="mt-4 text-center font-serif text-4xl leading-tight text-ink-800 sm:text-5xl"
        >
          Every small business is being re-priced by AI.
        </h2>
        <Reveal>
          <blockquote className="mt-12 border-l-2 border-copper-500 pl-8">
            <p className="font-serif text-2xl leading-snug text-ink-800 sm:text-3xl">
              &ldquo;The age of AI is not about replacing operators. It&apos;s about
              recalibrating them — faster decisions, sharper positioning, tighter
              systems. The businesses that adapt will compound. The rest will
              quietly lose ground to the ones that did.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-ink-500">
              <span className="font-medium text-ink-700">Parham Shariat</span> ·
              Founder, ReTHINK CNERGY
            </footer>
          </blockquote>
        </Reveal>
        <p className="mt-10 text-center text-base leading-relaxed text-ink-500">
          Our thesis is simple. Generative Engine Optimization, structured data, and
          real operating discipline are no longer optional — they are the new
          minimum viable business. We help clients close the gap.
        </p>
      </Container>
    </section>
  );
}
