export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-ink-3 font-mono text-xs tracking-wider uppercase">
        design tokens / sandbox
      </p>

      <h1 className="mt-6 font-serif text-6xl leading-none tracking-tight">
        Building <span className="text-accent italic">production</span> systems
        <br />
        <span className="text-ink-2">from zero.</span>
      </h1>

      <p className="text-ink-2 mt-8 max-w-xl text-lg leading-relaxed">
        Full-stack developer based in Bishkek. Working with{" "}
        <span className="text-accent font-mono text-sm">React</span>,{" "}
        <span className="text-accent font-mono text-sm">React Native</span>, and{" "}
        <span className="text-accent font-mono text-sm">Node.js</span>.
      </p>

      <div className="mt-12 flex gap-2">
        <span className="bg-surface border-line rounded border px-3 py-1 font-mono text-xs">
          font-mono
        </span>
        <span className="bg-accent-soft text-accent border-accent rounded border px-3 py-1 font-mono text-xs">
          accent
        </span>
        <span className="bg-warn rounded px-3 py-1 font-mono text-xs text-black">warn</span>
      </div>
    </main>
  );
}
