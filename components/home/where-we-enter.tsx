"use client";

import { gsap } from "@/components/lenis-provider";
import { useGsapScene } from "@/hooks/use-gsap";
import { entryStates, lifecycleStages } from "@/lib/services";

/**
 * 02 — WHERE WE ENTER. Disconnected project states align into the
 * software lifecycle: plan, design, build, ship, maintain.
 * Pinned and scrubbed on desktop; static, stacked sequence on mobile.
 */
export function WhereWeEnter() {
  const ref = useGsapScene<HTMLElement>((_ctx, scope) => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "+=160%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Questions align into requirements.
      tl.from("[data-enter-chip]", {
        x: (i) => [-220, 180, -140, 240, -190, 130, -90][i % 7],
        y: (i) => [120, -90, 180, -140, 90, -60, 150][i % 7],
        rotation: (i) => [-7, 5, -4, 8, -6, 4, -3][i % 7],
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.02,
        duration: 1,
      })
        // The system line connects the aligned states.
        .from(
          "[data-enter-line]",
          { scaleX: 0, transformOrigin: "left center", duration: 0.5 },
          ">-0.1"
        )
        // Requirements become lifecycle stages.
        .to("[data-enter-chip]", {
          opacity: 0.14,
          y: -14,
          stagger: 0.015,
          duration: 0.5,
        })
        .from(
          "[data-enter-stage]",
          {
            clipPath: "inset(100% 0 0 0)",
            y: 24,
            stagger: 0.08,
            duration: 0.7,
            ease: "power2.out",
          },
          "<+0.15"
        );
    });

    mm.add("(max-width: 767px)", () => {
      gsap.from("[data-enter-stage]", {
        scrollTrigger: {
          trigger: "[data-enter-stages]",
          start: "top 85%",
        },
        clipPath: "inset(100% 0 0 0)",
        y: 16,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });

  return (
    <section
      ref={ref}
      data-enter
      aria-labelledby="enter-heading"
      className="relative overflow-hidden bg-paper pt-28 pb-16 text-ink md:flex md:min-h-svh md:flex-col md:pt-14 md:pb-0"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:pt-14">
          <div className="flex flex-col gap-4">
            <p className="label-tech text-cobalt">02 / Where we enter</p>
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

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center gap-10 px-4 py-14 sm:px-6 lg:px-10 md:py-0">
        {/* Disconnected states */}
        <ul
          aria-label="Project states we can start from"
          className="flex max-w-4xl flex-wrap gap-2 sm:gap-3"
        >
          {entryStates.map((state) => (
            <li
              key={state}
              data-enter-chip
              className="label-tech border border-ink/25 px-3 py-2 whitespace-nowrap"
            >
              {state}
            </li>
          ))}
        </ul>

        {/* System line connecting states to stages */}
        <div
          data-enter-line
          aria-hidden="true"
          className="hidden h-px w-full bg-cobalt md:block"
        />

        {/* Lifecycle stages */}
        <ol
          data-enter-stages
          aria-label="Software lifecycle stages"
          className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-x-6 md:gap-y-4"
        >
          {lifecycleStages.map((stage, i) => (
            <li key={stage} data-enter-stage className="flex items-baseline gap-3">
              <span className="label-tech tabular text-cobalt">
                0{i + 1}
              </span>
              <span className="display-crop font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-[3.4rem] xl:text-6xl">
                {stage}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
