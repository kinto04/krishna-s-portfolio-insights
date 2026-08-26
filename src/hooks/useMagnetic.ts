import { useEffect, useRef } from "react";

/**
 * Magnetic typography: elements marked with `data-magnetic="<strength>"` inside
 * the container lean a few pixels toward the pointer with spring-ish easing.
 * Skipped for reduced-motion users and touch-only pointers.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(maxShift = 10) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-magnetic]")
    );
    if (!targets.length) return;

    let frame = 0;
    let point: { x: number; y: number } | null = null;

    const apply = () => {
      frame = 0;
      for (const el of targets) {
        const strength = parseFloat(el.dataset.magnetic || "1") || 1;
        if (!point) {
          el.style.transform = "translate3d(0,0,0)";
          continue;
        }
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (point.x - cx) / Math.max(rect.width, 1);
        const dy = (point.y - cy) / Math.max(rect.height, 1);
        const clamp = (v: number) => Math.max(-1, Math.min(1, v));
        const tx = clamp(dx) * maxShift * strength;
        const ty = clamp(dy) * maxShift * strength * 0.5;
        el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      }
    };

    for (const el of targets) {
      el.style.willChange = "transform";
      el.style.transition = "transform 700ms var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1))";
    }

    const onMove = (e: PointerEvent) => {
      point = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      point = null;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    container.addEventListener("pointermove", onMove, { passive: true });
    container.addEventListener("pointerleave", onLeave);

    return () => {
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      for (const el of targets) {
        el.style.transform = "";
        el.style.willChange = "";
        el.style.transition = "";
      }
    };
  }, [maxShift]);

  return containerRef;
}
