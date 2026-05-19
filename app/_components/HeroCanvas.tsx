"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const CHARSET = "01·-=+*∙▪░⋅";
const CELL_SIZE = 22;
const FONT_SIZE = 13;
const INFLUENCE_RADIUS = 180;
const REPULSION_STRENGTH = 28;

type Cell = {
  baseX: number;
  baseY: number;
  char: string;
  phase: number;
};

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cells: Cell[] = [];
    let dpr = 1;
    let width = 0;
    let height = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let targetMouseX = -9999;
    let targetMouseY = -9999;
    let rafId = 0;

    const accent =
      getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() ||
      "#d2f700";
    const ink3 =
      getComputedStyle(document.documentElement).getPropertyValue("--color-ink-3").trim() ||
      "#6a6a70";

    const buildGrid = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      cells = [];
      const cols = Math.ceil(width / CELL_SIZE) + 1;
      const rows = Math.ceil(height / CELL_SIZE) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          cells.push({
            baseX: col * CELL_SIZE,
            baseY: row * CELL_SIZE,
            char: CHARSET[Math.floor(Math.random() * CHARSET.length)],
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const handleResize = () => buildGrid();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = event.clientX - rect.left;
      targetMouseY = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -9999;
      targetMouseY = -9999;
    };

    const tick = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px var(--font-mono), "JetBrains Mono", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      mouseX += (targetMouseX - mouseX) * 0.12;
      mouseY += (targetMouseY - mouseY) * 0.12;

      const t = time / 1000;

      for (const cell of cells) {
        const dx = cell.baseX - mouseX;
        const dy = cell.baseY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let offsetX = 0;
        let offsetY = 0;
        let intensity = 0;

        if (dist < INFLUENCE_RADIUS) {
          const force = 1 - dist / INFLUENCE_RADIUS;
          intensity = force;
          const angle = Math.atan2(dy, dx);
          offsetX = Math.cos(angle) * force * REPULSION_STRENGTH;
          offsetY = Math.sin(angle) * force * REPULSION_STRENGTH;
        }

        const breath = Math.sin(t * 0.5 + cell.phase) * 0.5 + 0.5;
        const alpha = 0.04 + breath * 0.06 + intensity * 0.5;

        const x = cell.baseX + offsetX;
        const y = cell.baseY + offsetY;

        if (intensity > 0.1) {
          ctx.fillStyle = `${accent}${Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0")}`;
        } else {
          ctx.fillStyle = `${ink3}${Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0")}`;
        }

        ctx.fillText(cell.char, x, y);
      }

      rafId = requestAnimationFrame(tick);
    };

    buildGrid();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 size-full"
    />
  );
}
