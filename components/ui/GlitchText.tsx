"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type GlitchTextProps = {
  children: string;
  className?: string;
  as?: "span" | "div";
};

export function GlitchText({ children, className, as = "span" }: GlitchTextProps) {
  const [active, setActive] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const Tag = as;
  const text = children;

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      data-cursor-hover
    >
      <span aria-hidden className={cn("relative z-10", active && "glitch-base")}>
        {text}
      </span>
      {active && (
        <>
          <span
            aria-hidden
            className="glitch-layer glitch-layer-a pointer-events-none absolute inset-0"
          >
            {text}
          </span>
          <span
            aria-hidden
            className="glitch-layer glitch-layer-b pointer-events-none absolute inset-0"
          >
            {text}
          </span>
        </>
      )}
    </Tag>
  );
}
