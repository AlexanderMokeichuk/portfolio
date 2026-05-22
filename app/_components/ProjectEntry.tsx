import Link from "next/link";
import { type Project } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type ProjectEntryProps = {
  project: Project;
};

const STATUS_LABEL: Record<Project["status"], string> = {
  production: "Live in production",
  "in-development": "In development",
};

export function ProjectEntry({ project }: ProjectEntryProps) {
  const isFeatured = project.featured === true;

  return (
    <article
      id={project.slug}
      className={cn(
        "group border-line/60 relative scroll-mt-24 border-t transition-all duration-500 ease-out",
        "hover:pl-4 md:hover:pl-6",
        isFeatured ? "py-16 md:py-24" : "py-12 md:py-16",
      )}
    >
      <span
        aria-hidden
        className="bg-accent absolute top-0 bottom-0 left-0 w-px origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
      />

      <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="flex flex-col gap-3 md:gap-2">
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

        {project.hasCaseStudy && (
          <Link
            href={`/work/${project.slug}`}
            className="text-ink-2 hover:text-accent group-hover:text-accent inline-flex items-center gap-1.5 self-start font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
            data-cursor-hover
          >
            Read case study
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        )}
      </header>

      <h3
        className={cn(
          "mt-6 max-w-[20ch] font-serif leading-[1.05] tracking-tight transition-colors duration-500 md:mt-10",
          "group-hover:text-accent",
          isFeatured ? "text-[clamp(2.5rem,6vw,5.5rem)]" : "text-[clamp(1.75rem,3.5vw,3.5rem)]",
        )}
      >
        {project.title}
      </h3>

      <p
        className={cn(
          "text-ink-2 mt-4 max-w-2xl leading-relaxed md:mt-6",
          isFeatured ? "text-lg md:text-xl" : "text-base md:text-lg",
        )}
      >
        {project.tagline}
      </p>

      {isFeatured && project.metrics && (
        <dl className="border-line/60 mt-10 grid grid-cols-1 gap-px overflow-hidden border sm:grid-cols-3">
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

      <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <p className="text-ink-3 mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">Role</p>
          <p className="text-ink font-medium">{project.role.label}</p>
          <p className="text-ink-2 mt-2 text-sm leading-relaxed">{project.role.context}</p>

          <p className="text-ink-3 mt-8 mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
            Highlights
          </p>
          <ul className="space-y-2.5">
            {project.highlights.map((point) => (
              <li
                key={point}
                className="text-ink-2 relative pl-5 text-sm leading-relaxed before:absolute before:left-0 before:text-current before:content-['→']"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-ink-3 mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">Stack</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge variant="default">{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
