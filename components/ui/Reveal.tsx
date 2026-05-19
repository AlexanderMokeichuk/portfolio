"use client";

import { type HTMLAttributes, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type RevealProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
};

export function Reveal({ children, delay = 0, as = "div", className, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const MotionTag = motion[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
