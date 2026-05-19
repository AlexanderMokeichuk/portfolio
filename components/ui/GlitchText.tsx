"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type GlitchTextProps = {
  children: string;
  className?: string;
  as?: "span" | "div";
  active?: boolean;
};

export function GlitchText({ children, className, as = "span", active }: GlitchTextProps) {
  const [hoverActive, setHoverActive] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const Tag = as;
  const text = children;
  const isGlitching = !shouldReduceMotion && (hoverActive || active === true);

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setHoverActive(true)}
      onMouseLeave={() => setHoverActive(false)}
      data-cursor-hover
    >
      <span aria-hidden className={cn("relative z-10", isGlitching && "glitch-base")}>
        {text}
      </span>
      {isGlitching && (
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
