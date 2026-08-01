"use client";

import { gsap } from "@/components/lenis-provider";
import { TechBKLogo } from "@/components/techbk-wordmark";
import { useGsapScene } from "@/hooks/use-gsap";

/**
 * 07 — CLIMAX. Cobalt: the single full-screen color moment.
 * Three statements resolve into the TecHBK wordmark.
 */
export function ClimaxSection() {
  const ref = useGsapScene<HTMLElement>((_ctx, scope) => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "+=220%",
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.from("[data-climax-line='1']", {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          "[data-climax-line='2']",
          { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power2.out" },
          "+=0.35"
        )
        .from(
          "[data-climax-line='3']",
          { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power2.out" },
          "+=0.35"
        )
        .from(
          "[data-climax-support]",
          { opacity: 0, y: 24, duration: 0.6 },
          "+=0.3"
        )
        // Compress the composition into the wordmark.
        .to(
          "[data-climax-statement]",
          { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
          "+=0.5"
        )
        .to("[data-climax-support]", { opacity: 0, duration: 0.4 }, "<")
        .from(
          "[data-climax-logo]",
          { opacity: 0, scale: 0.85, duration: 0.8, ease: "power2.out" },
          "<+0.2"
        )
        // Hold the resolved wordmark before the scene releases.
        .to({}, { duration: 0.9 });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.from("[data-climax-line]", {
        scrollTrigger: { trigger: scope, start: "top 65%" },
        clipPath: "inset(0 0 100% 0)",
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      });
      gsap.from("[data-climax-logo]", {
        scrollTrigger: { trigger: "[data-climax-logo]", start: "top 90%" },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });

  return (
    <section
      ref={ref}
      data-climax
      aria-labelledby="climax-heading"
      className="relative flex flex-col justify-center overflow-hidden bg-cobalt py-28 text-white md:min-h-svh md:py-0"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <h2
          id="climax-heading"
          data-climax-statement
          className="display-crop font-display font-bold uppercase tracking-tight"
        >
          <span
            data-climax-line="1"
            className="block text-[9vw] md:text-[6.5vw]"
          >
            From first decision.
          </span>
          <span
            data-climax-line="2"
            className="block text-[9vw] md:text-[6.5vw]"
          >
            To working software.
          </span>
          <span
            data-climax-line="3"
            className="block text-[9vw] text-white/60 md:text-[6.5vw]"
          >
            To what comes next.
          </span>
        </h2>

        <p
          data-climax-support
          className="mt-10 max-w-md text-lg leading-relaxed text-white/85"
        >
          TecHBK does not stop at recommendations. We help plan, build,
          launch, and maintain the system.
        </p>

        <div
          data-climax-logo
          className="mt-16 md:absolute md:inset-0 md:mt-0 md:flex md:items-center md:justify-center"
        >
          <TechBKLogo className="h-14 w-auto text-white md:h-24" />
        </div>
      </div>
    </section>
  );
}
