import { Container } from "@/components/ui/Container";
import { PROJECTS } from "@/lib/projects";
import { ProjectEntry } from "./ProjectEntry";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="text-ink-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
              <span aria-hidden className="bg-line h-px w-8" />
              01 / Selected work
            </p>

            <h2 className="mt-8 max-w-[20ch] font-serif text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tight md:mt-12">
              Real systems. <span className="text-ink-3 italic">Real users.</span>{" "}
              <span className="text-accent italic">Real production.</span>
            </h2>
          </div>

          <p className="text-ink-3 max-w-xs font-mono text-[11px] leading-relaxed tracking-[0.05em]">
            Four projects.
            <br />
            Three in production.
            <br />
            One in active development.
          </p>
        </header>

        <div className="mt-16 md:mt-20">
          {PROJECTS.map((project) => (
            <ProjectEntry key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
