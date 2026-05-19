"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GlitchText } from "@/components/ui/GlitchText";

const SEQUENCE_LINES = 4;
const LINE_DURATION_MS = 400;
const LINE_GAP_MS = 80;
const INITIAL_DELAY_MS = 6000;
const MIN_INTERVAL_MS = 12000;
const MAX_INTERVAL_MS = 18000;

function randomInterval() {
  return Math.floor(Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS)) + MIN_INTERVAL_MS;
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeLine, setActiveLine] = useState<number | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeouts: number[] = [];
    let nextCycleTimeout: number | undefined;

    const runSequence = () => {
      for (let i = 0; i < SEQUENCE_LINES; i++) {
        const startAt = i * (LINE_DURATION_MS + LINE_GAP_MS);
        timeouts.push(
          window.setTimeout(() => setActiveLine(i), startAt),
          window.setTimeout(() => setActiveLine(null), startAt + LINE_DURATION_MS),
        );
      }
      const cycleDuration = SEQUENCE_LINES * (LINE_DURATION_MS + LINE_GAP_MS);
      nextCycleTimeout = window.setTimeout(runSequence, cycleDuration + randomInterval());
    };

    const initialTimeout = window.setTimeout(runSequence, INITIAL_DELAY_MS);

    return () => {
      window.clearTimeout(initialTimeout);
      if (nextCycleTimeout) window.clearTimeout(nextCycleTimeout);
      timeouts.forEach(window.clearTimeout);
    };
  }, [shouldReduceMotion]);

  return (
    <section className="relative pt-12 pb-32 md:pt-20 md:pb-40">
      <Container>
        <Reveal>
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
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-10 max-w-[18ch] font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight md:mt-14">
            <GlitchText as="span" className="block" active={activeLine === 0}>
              Three production
            </GlitchText>
            <GlitchText as="span" className="block" active={activeLine === 1}>
              systems. Zero
            </GlitchText>
            <GlitchText as="span" className="text-ink-3 block italic" active={activeLine === 2}>
              post-release bugs.
            </GlitchText>
            <GlitchText as="span" className="text-accent block italic" active={activeLine === 3}>
              One developer.
            </GlitchText>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal delay={0.2}>
            <p className="text-ink max-w-md text-lg leading-relaxed md:text-xl">
              <span className="font-medium">Alexander Mokeichuk.</span>{" "}
              <span className="text-ink-2">Full-stack engineer.</span>
            </p>
            <p className="text-ink-2 mt-3 max-w-md text-base leading-relaxed">
              I design and ship production systems end-to-end. React, React Native, Node.js.
              Currently building one of those at{" "}
              <span className="text-ink font-mono text-sm">Shoro</span>.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
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
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="text-ink-3 mt-24 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase md:mt-32">
            <span aria-hidden className="bg-line h-px w-12" />
            Scroll
            <span aria-hidden className="animate-pulse">
              ↓
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
