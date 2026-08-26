"use client";

import { gsap } from "@/components/lenis-provider";
import { useGsapScene } from "@/hooks/use-gsap";
import { entryStates } from "@/lib/services";

/**
 * 02 — WHERE WE ENTER. Project states animate into an aligned starting set.
 */
export function WhereWeEnter() {
  const ref = useGsapScene<HTMLElement>((_ctx, scope) => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from("[data-enter-chip]", {
        scrollTrigger: {
          trigger: scope,
          start: "top 75%",
        },
        x: (i) => [-220, 180, -140, 240, -190, 130, -90][i % 7],
        y: (i) => [120, -90, 180, -140, 90, -60, 150][i % 7],
        rotation: (i) => [-7, 5, -4, 8, -6, 4, -3][i % 7],
        opacity: 0,
        ease: "power2.out",
        stagger: 0.04,
        duration: 0.9,
      });
    });
  });

  return (
    <section
      ref={ref}
      data-enter
      aria-labelledby="enter-heading"
      className="relative overflow-hidden bg-paper pt-28 pb-16 text-ink md:pt-14 md:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(to_bottom,#080b12_0%,rgba(8,11,18,0.82)_14%,rgba(40,85,245,0.2)_48%,rgba(242,243,246,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-[-5%] h-24 w-[110%] bg-cobalt/15 blur-2xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:pt-14">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-bold uppercase text-cobalt">02 / Where we enter</p>
            <h2
              id="enter-heading"
              className="display-crop font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl"
            >
              Start with what you have.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/70 md:justify-self-end">
            Bring us an early idea, an existing product, a manual process or
            software that needs attention. We will help you decide what to do
            next and can stay through delivery.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pt-10 sm:px-6 lg:px-10">
        {/* Disconnected states */}
        <ul
          aria-label="Project states we can start from"
          className="flex max-w-4xl flex-wrap gap-2 sm:gap-3"
        >
          {entryStates.map((state) => (
            <li
              key={state}
              data-enter-chip
              className="whitespace-nowrap rounded-full border border-ink/25 px-4 py-2 font-sans text-xs font-bold uppercase"
            >
              {state}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
