"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

function subscribeToCapability(callback: () => void) {
  const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getCapability() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getServerCapability() {
  return false;
}

export function Cursor() {
  const hoverCapable = useSyncExternalStore(
    subscribeToCapability,
    getCapability,
    getServerCapability,
  );
  const shouldReduceMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [touchDetected, setTouchDetected] = useState(false);

  const positionRef = useRef({ x: 0, y: 0 });
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const enabled = hoverCapable && !shouldReduceMotion && !touchDetected;

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.closest(INTERACTIVE_SELECTOR)) {
        setHovering(true);
      }
    };

    const handleOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.closest(INTERACTIVE_SELECTOR)) {
        setHovering(false);
      }
    };

    const handleTouch = () => {
      setTouchDetected(true);
    };

    let rafId = 0;
    const tick = () => {
      const { x, y } = positionRef.current;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mouseout", handleOut, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true, once: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      window.removeEventListener("touchstart", handleTouch);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="bg-accent pointer-events-none fixed top-0 left-0 z-[9999] size-1.5 rounded-full"
        style={{ transform: "translate3d(-100px, -100px, 0)", marginLeft: -3, marginTop: -3 }}
      />
      <motion.div
        ref={ringRef}
        aria-hidden
        className="border-accent/60 pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border"
        animate={{
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          opacity: hovering ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.4 }}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          marginLeft: hovering ? -24 : -14,
          marginTop: hovering ? -24 : -14,
        }}
      />
    </>
  );
}
