import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type CaseStudySectionProps = {
  label: string;
  title: string;
  children: ReactNode;
  id?: string;
};

export function CaseStudySection({ label, title, children, id }: CaseStudySectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <p className="text-ink-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
          <span aria-hidden className="bg-line h-px w-8" />
          {label}
        </p>

        <h2 className="mt-6 max-w-[24ch] font-serif text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.05] tracking-tight md:mt-8">
          {title}
        </h2>

        <div className="mt-10 max-w-3xl md:mt-14">{children}</div>
      </Container>
    </section>
  );
}
