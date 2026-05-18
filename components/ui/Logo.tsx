import Link from "next/link";

type LogoProps = {
  href?: string;
};

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className="group inline-flex flex-col leading-none"
      aria-label="Alexander Mokeichuk — home"
    >
      <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase">
        Alexander Mokeichuk
        <span aria-hidden className="bg-accent inline-block size-1.5 rounded-full" />
      </span>
      <span className="text-ink-3 mt-1 font-mono text-[10px] tracking-[0.18em] uppercase">
        Full-stack engineer
      </span>
    </Link>
  );
}
