import { Container } from "@/components/ui/Container";

const TIMELINE = [
  {
    period: "2024.08",
    periodEnd: "now",
    org: "Shoro",
    role: "Full-stack engineer",
    event: "Shipped 3 products to production. Now solo on full-stack delivery.",
    active: true,
  },
  {
    period: "2024.05",
    periodEnd: "2024.07",
    org: "Attractor Software",
    role: "Full-stack intern",
    event: "Built a booking platform — JWT auth, role model, i18n, Excel export.",
  },
  {
    period: "2024",
    org: "Attractor School",
    role: "Frontend / Full-stack",
    event: "Completed engineering track.",
  },
];

const CAPABILITIES = [
  {
    title: "Shipping",
    items: ["End-to-end products", "Production discipline", "Integration contracts"],
  },
  {
    title: "Architecture",
    items: ["Real-time systems", "API design", "Cross-team communication"],
  },
  {
    title: "Stack",
    items: ["React, React Native, Node", "TypeScript, Prisma", "MongoDB, MySQL, PostgreSQL"],
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <p className="text-ink-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
          <span aria-hidden className="bg-line h-px w-8" />
          02 / About
        </p>

        <h2 className="mt-8 max-w-[18ch] font-serif text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tight md:mt-12">
          A developer who <span className="text-accent italic">ships</span> —{" "}
          <span className="text-ink-3">not just codes.</span>
        </h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-20">
          <div className="text-ink-2 space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              <span className="text-ink font-medium">I build production systems.</span> Not side
              projects, not demos, not portfolios pretending to be products. Three live products
              right now: a real-time CRM, two cross-platform mobile apps, and an admin platform with
              email-alert worker — all running, all used daily.
            </p>
            <p>
              The team was downsized. I went from frontend specialist to{" "}
              <span className="text-ink">solo full-stack ownership</span> overnight — schema design,
              REST APIs, deployment, the works. Zero post-release issues on the new product since
              launch.
            </p>
            <p>
              I care about clean architecture, real-time UX, and writing code that doesn&apos;t
              break under load. The rest follows from that.
            </p>
          </div>

          <div>
            <p className="text-ink-3 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase">
              ~/career.log
            </p>
            <ul className="border-line/60 divide-line/60 divide-y border-y">
              {TIMELINE.map((entry) => (
                <li key={entry.org} className="grid gap-2 py-5 md:grid-cols-[7rem_1fr] md:gap-6">
                  <div className="text-ink-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
                    {entry.active && (
                      <span aria-hidden className="bg-accent inline-block size-1.5 rounded-full" />
                    )}
                    <span>
                      {entry.period}
                      {entry.periodEnd && (
                        <>
                          <span className="text-ink-3 mx-1">→</span>
                          <span className={entry.active ? "text-accent" : ""}>
                            {entry.periodEnd}
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                  <div>
                    <p className="text-ink font-medium">
                      {entry.org}
                      <span className="text-ink-3 ml-2 font-normal">— {entry.role}</span>
                    </p>
                    <p className="text-ink-2 mt-1 text-sm leading-relaxed">{entry.event}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <p className="text-ink-3 mb-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
            <span aria-hidden className="bg-line h-px w-8" />
            What I&apos;m good at
          </p>

          <div className="border-line/60 grid gap-px overflow-hidden border md:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="bg-bg p-6 md:p-8">
                <p className="text-accent font-mono text-[11px] tracking-[0.18em] uppercase">
                  {cap.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="text-ink-2 text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
