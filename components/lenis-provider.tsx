"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function usePrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Restrained Lenis smooth scrolling, synced with GSAP ScrollTrigger.
 * Disabled entirely when the user prefers reduced motion.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
      anchors: true,
    });
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Recalculate scroll-driven timelines and preserve fragment navigation.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const target = hash ? document.getElementById(hash) : null;

      if (target) {
        if (window.__lenis) {
          window.__lenis.scrollTo(target, { immediate: true });
        } else {
          target.scrollIntoView();
        }
      } else if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0 });
      }

      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}

export { gsap, ScrollTrigger };
