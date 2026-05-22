import Link from "next/link";
import { type Project } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type CaseStudyHeroProps = {
  project: Project;
};

const STATUS_LABEL: Record<Project["status"], string> = {
  production: "Live in production",
  "in-development": "In development",
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="border-line/60 border-b pt-8 pb-20 md:pt-12 md:pb-28">
      <Container>
        <Link
          href="/#work"
          className="text-ink-3 hover:text-accent inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors"
          data-cursor-hover
        >
          <span aria-hidden>←</span>
          Back to work
        </Link>

        <div className="mt-12 flex flex-col gap-3 md:mt-16">
          <p className="text-ink-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-[0.18em] uppercase">
            <span>{project.index}</span>
            <span aria-hidden>·</span>
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <span
              className={cn(
                "flex items-center gap-1.5",
                project.status === "production" ? "text-accent" : "text-ink-2",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "inline-block size-1.5 rounded-full",
                  project.status === "production" ? "bg-accent" : "bg-ink-3",
                )}
              />
              {STATUS_LABEL[project.status]}
            </span>
          </p>
          <p className="text-ink-3 font-mono text-[10px] tracking-[0.2em] uppercase">
            {project.company}
          </p>
        </div>

        <h1 className="mt-8 max-w-[20ch] font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight md:mt-12">
          {project.title}
        </h1>

        <p className="text-ink-2 mt-6 max-w-2xl text-lg leading-relaxed md:mt-8 md:text-xl">
          {project.tagline}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <dl className="border-line/60 mt-12 grid grid-cols-1 gap-px overflow-hidden border sm:grid-cols-3 md:mt-16">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-bg p-5 md:p-6">
                <dt className="text-ink-3 font-mono text-[10px] tracking-[0.2em] uppercase">
                  {metric.label}
                </dt>
                <dd className="text-accent mt-2 font-serif text-3xl leading-none md:text-4xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}
