"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/components/lenis-provider";

const SESSION_KEY = "techbk-intro-shown";

/**
 * First-visit loader: counts 000% → 100% in under 1.2s, then its
 * progress line wipes upward to become the hero's system line.
 * Skipped on client-side navigation and repeat visits, and removed
 * entirely under prefers-reduced-motion.
 */
export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const skip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem(SESSION_KEY) === "1";

    if (skip) {
      root.style.visibility = "hidden";
      const id = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(id);
    }

    root.style.visibility = "visible";

    sessionStorage.setItem(SESSION_KEY, "1");

    const counter = counterRef.current;
    const line = lineRef.current;
    const progress = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => setVisible(false),
    });

    tl.to(progress, {
      value: 100,
      duration: 0.85,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counter) {
          counter.textContent = `${String(Math.round(progress.value)).padStart(3, "0")}%`;
        }
        if (line) {
          line.style.transform = `scaleX(${progress.value / 100})`;
        }
      },
    })
      // The loader line becomes the hero system line: wipe the panel away
      // from the line upward.
      .to(root, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.35,
        ease: "power2.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink p-6 text-paper sm:p-10"
      style={{ clipPath: "inset(0 0 0% 0)", visibility: "hidden" }}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-bold tracking-tight">
          TecHBK
        </span>
        <span className="label-tech text-structure">System ready</span>
      </div>
      <div>
        <span
          ref={counterRef}
          className="tabular font-display text-[18vw] font-bold leading-none tracking-tight sm:text-[10rem]"
        >
          000%
        </span>
        <div className="mt-4 h-px w-full bg-white/15">
          <div
            ref={lineRef}
            className="h-px w-full origin-left bg-cobalt"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
