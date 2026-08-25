import { useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Tracks the pointer inside a container and writes its position to CSS custom
 * properties (--mx / --my) on a target element, so the paint work stays in CSS.
 * Updates are coalesced into a single rAF per frame and skipped entirely for
 * reduced-motion users and touch-only pointers.
 */
export function usePointerGlow<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let next: { x: number; y: number } | null = null;

    const apply = () => {
      frame = 0;
      if (!next) return;
      glow.style.setProperty("--mx", `${next.x}%`);
      glow.style.setProperty("--my", `${next.y}%`);
    };

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      next = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
      glow.dataset.active = "true";
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      glow.dataset.active = "false";
      glow.style.setProperty("--mx", "50%");
      glow.style.setProperty("--my", "0%");
    };

    container.addEventListener("pointermove", onMove, { passive: true });
    container.addEventListener("pointerleave", onLeave);

    return () => {
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { containerRef, glowRef };
}
