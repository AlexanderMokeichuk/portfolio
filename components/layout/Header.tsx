"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { num: "01", label: "Work", href: "#work" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-line/60 bg-bg/70 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4 md:py-5">
          <Logo />

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-2 hover:text-ink group inline-flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
                  >
                    <span className="text-ink-3 group-hover:text-accent transition-colors">
                      {item.num}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="border-line hover:border-ink-3 inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors"
            aria-label="Switch language"
          >
            <span className="text-accent">EN</span>
            <span className="text-ink-3">·</span>
            <span className="text-ink-3">RU</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
