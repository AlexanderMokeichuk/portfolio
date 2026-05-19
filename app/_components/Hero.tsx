import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-12 pb-32 md:pt-20 md:pb-40">
      <Container>
        <div className="flex flex-col gap-2 font-mono text-[11px] tracking-[0.18em] uppercase md:flex-row md:items-center md:gap-3">
          <p className="text-ink-2 flex items-center gap-2">
            <span aria-hidden className="bg-accent inline-block size-1.5 rounded-full" />
            Available for work
          </p>
          <span aria-hidden className="text-ink-3 hidden md:inline">
            ·
          </span>
          <p className="text-ink-3">Bishkek, KG · UTC+6</p>
        </div>

        <h1 className="mt-10 max-w-[18ch] font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight md:mt-14">
          <span className="block">Three production</span>
          <span className="block">
            systems. <span className="text-ink-3">Zero</span>
          </span>
          <span className="block">
            <span className="text-ink-3 italic">post-release</span>{" "}
            <span className="text-ink-3 italic">bugs.</span>
          </span>
          <span className="text-accent block italic">One developer.</span>
        </h1>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <p className="text-ink max-w-md text-lg leading-relaxed md:text-xl">
              <span className="font-medium">Alexander Mokeichuk.</span>{" "}
              <span className="text-ink-2">Full-stack engineer.</span>
            </p>
            <p className="text-ink-2 mt-3 max-w-md text-base leading-relaxed">
              I design and ship production systems end-to-end. React, React Native, Node.js.
              Currently building one of those at{" "}
              <span className="text-ink font-mono text-sm">Shoro</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            <Button href="#work">
              View work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <div className="text-ink-3 mt-24 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase md:mt-32">
          <span aria-hidden className="bg-line h-px w-12" />
          Scroll
          <span aria-hidden className="animate-pulse">
            ↓
          </span>
        </div>
      </Container>
    </section>
  );
}
