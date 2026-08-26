import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

const NODE_DENSITY = 1 / 22000; // nodes per px²
const MAX_NODES = 46;
const LINK_RADIUS = 150;

/**
 * Ambient constellation field for the hero: slow-drifting nodes that link with
 * thin iris lines when the cursor comes near, echoing the expertise graph.
 * Canvas-based, paused off-screen, disabled for reduced-motion / touch.
 */
const HeroSparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement!;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let frame = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const seed = () => {
      const count = Math.min(MAX_NODES, Math.round(width * height * NODE_DENSITY));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 0.7 + Math.random() * 1.1,
      }));
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      frame = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // gentle attraction toward the cursor
        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_RADIUS * 1.6 && d > 1) {
            n.x += (dx / d) * 0.16;
            n.y += (dy / d) * 0.16;
          }
        }
      }

      // links between nearby nodes, strongest close to the cursor
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const cursorFalloff = pointer.active
          ? Math.max(0, 1 - Math.hypot(pointer.x - a.x, pointer.y - a.y) / (LINK_RADIUS * 1.8))
          : 0;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK_RADIUS) continue;
          const proximity = 1 - d / LINK_RADIUS;
          const alpha = 0.05 * proximity + 0.35 * proximity * cursorFalloff;
          if (alpha < 0.012) continue;
          ctx.strokeStyle = `hsla(258, 88%, 72%, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        ctx.fillStyle = `hsla(258, 88%, 78%, ${0.18 + 0.5 * cursorFalloff})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r + cursorFalloff * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(parent);

    resize();
    if (fine) {
      parent.addEventListener("pointermove", onMove, { passive: true });
      parent.addEventListener("pointerleave", onLeave);
    }
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export default HeroSparks;
