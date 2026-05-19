import { Container } from "@/components/ui/Container";

const PRIMARY_EMAIL = "alexandermokeichuk2001@gmail.com";

const CHANNELS = [
  {
    label: "GitHub",
    handle: "@AlexanderMokeichuk",
    href: "https://github.com/AlexanderMokeichuk",
    context: "Code, commits, the portfolio repo you're reading from",
  },
  {
    label: "Telegram",
    handle: "@alexmokei",
    href: "https://t.me/alexmokei",
    context: "Fastest channel for project discussions",
  },
  {
    label: "LinkedIn",
    handle: "in/alexandermokeichuk",
    href: "https://www.linkedin.com/in/alexandermokeichuk/",
    context: "Career history and endorsements",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <p className="text-ink-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
          <span aria-hidden className="bg-line h-px w-8" />
          03 / Contact
        </p>

        <h2 className="mt-8 max-w-[18ch] font-serif text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] tracking-tight md:mt-12">
          Let&apos;s build <span className="text-accent italic">something</span> that ships.
        </h2>

        <div className="mt-12 grid gap-16 md:mt-20 md:grid-cols-[1.4fr_1fr] md:gap-24">
          <div>
            <p className="text-ink-3 mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
              Primary
            </p>

            <a
              href={`mailto:${PRIMARY_EMAIL}`}
              className="group inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[clamp(1rem,2.5vw,1.5rem)] break-all transition-colors"
            >
              <span className="text-accent group-hover:text-ink transition-colors">
                {PRIMARY_EMAIL}
              </span>

              <span aria-hidden className="text-ink-3 group-hover:text-accent transition-colors">
                ↗
              </span>
            </a>

            <p className="text-ink-3 mt-12 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase">
              Other channels
            </p>

            <ul className="divide-line/60 border-line/60 divide-y border-y">
              {CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid items-baseline gap-1 py-5 md:grid-cols-[6rem_1fr_auto] md:gap-6"
                  >
                    <span className="text-ink-3 group-hover:text-accent font-mono text-[10px] tracking-[0.2em] uppercase transition-colors">
                      {channel.label}
                    </span>

                    <div className="flex flex-col gap-1">
                      <span className="text-ink group-hover:text-accent font-mono text-[14px] transition-colors">
                        {channel.handle}
                      </span>

                      <span className="text-ink-3 text-sm leading-relaxed">{channel.context}</span>
                    </div>

                    <span
                      aria-hidden
                      className="text-ink-3 group-hover:text-accent hidden font-mono text-sm transition-all group-hover:translate-x-0.5 md:inline"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className="border-line/60 bg-surface border p-6 md:p-8">
            <p className="text-ink-3 mb-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
              <span aria-hidden className="bg-accent inline-block size-1.5 rounded-full" />
              Availability
            </p>

            <dl className="space-y-6">
              <div>
                <dt className="text-ink-3 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Open to
                </dt>

                <dd className="text-ink mt-2 leading-relaxed">
                  Freelance contracts and remote full-time roles.
                </dd>
              </div>

              <div>
                <dt className="text-ink-3 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Time zone
                </dt>

                <dd className="text-ink mt-2 leading-relaxed">
                  UTC+6 — Bishkek.
                  <br />
                  <span className="text-ink-2 text-sm">Comfortable with EU / CET overlap.</span>
                </dd>
              </div>

              <div>
                <dt className="text-ink-3 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Response
                </dt>

                <dd className="text-ink mt-2 leading-relaxed">Usually within one business day.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
