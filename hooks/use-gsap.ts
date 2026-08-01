"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/components/lenis-provider";

/**
 * Scoped GSAP setup with automatic cleanup and reduced-motion guard.
 * Timelines are created inside a gsap.context bound to the returned ref
 * and reverted on unmount. Skipped entirely under prefers-reduced-motion,
 * leaving semantic HTML fully visible.
 */
export function useGsapScene<T extends HTMLElement>(
  build: (ctx: gsap.Context, scope: T) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const scope = ref.current;
    if (!scope) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | undefined;
    let cancelled = false;

    // Wait for fonts before measuring so pinned distances are correct.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx = gsap.context(() => build(ctx!, scope), scope);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
