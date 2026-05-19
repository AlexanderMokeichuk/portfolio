import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex flex-col leading-none", className)}
      aria-label="Alexander Mokeichuk — home"
    >
      <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase md:text-[11px]">
        Alexander Mokeichuk
        <span aria-hidden className="bg-accent inline-block size-1.5 rounded-full" />
      </span>
      <span className="text-ink-3 mt-1 font-mono text-[9px] tracking-[0.18em] uppercase md:text-[10px]">
        Full-stack engineer
      </span>
    </Link>
  );
}
