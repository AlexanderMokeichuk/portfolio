import { Container } from "@/components/ui/Container";
import { PROJECTS } from "@/lib/projects";
import { ProjectEntry } from "./ProjectEntry";

export function Work() {
  const productionCount = PROJECTS.filter((p) => p.status === "production").length;
  const inDevelopmentCount = PROJECTS.filter((p) => p.status === "in-development").length;

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

          <dl className="text-ink-3 flex gap-8 font-mono text-[11px] tracking-[0.14em] uppercase md:flex-col md:items-end md:gap-2 md:text-right">
            <div className="flex items-baseline gap-2 md:flex-col md:items-end md:gap-0">
              <dt>Production</dt>
              <dd className="text-accent font-serif text-2xl leading-none md:text-3xl">
                {String(productionCount).padStart(2, "0")}
              </dd>
            </div>
            <div className="flex items-baseline gap-2 md:flex-col md:items-end md:gap-0">
              <dt>In development</dt>
              <dd className="text-ink font-serif text-2xl leading-none md:text-3xl">
                {String(inDevelopmentCount).padStart(2, "0")}
              </dd>
            </div>
          </dl>
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
