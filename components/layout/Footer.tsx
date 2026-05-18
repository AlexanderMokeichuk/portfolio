import { Container } from "@/components/ui/Container";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/AlexanderMokeichuk" },
  { label: "Email", href: "mailto:alexandermokeichuk2001@gmail.com" },
  { label: "Telegram", href: "https://t.me/" },
];

export function Footer() {
  return (
    <footer className="border-line/60 mt-32 border-t">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase">
              <span aria-hidden className="bg-accent inline-block size-1.5 rounded-full" />
              Alexander Mokeichuk
            </p>

            <p className="text-ink-3 font-mono text-[10px] tracking-[0.16em] uppercase">
              Bishkek · UTC+6 · © 2026
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-ink-2 hover:text-accent font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-line/30 flex flex-col gap-2 border-t py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-ink-3 font-mono text-[10px] tracking-[0.16em] uppercase">
            Built with Next.js · No templates · No frameworks for UI
          </p>

          <a
            href="https://github.com/AlexanderMokeichuk/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-3 hover:text-accent font-mono text-[10px] tracking-[0.16em] uppercase transition-colors"
          >
            View source ↗
          </a>
        </div>
      </Container>
    </footer>
  );
}
