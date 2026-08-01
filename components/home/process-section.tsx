"use client";

import { gsap } from "@/components/lenis-provider";
import { useGsapScene } from "@/hooks/use-gsap";
import { processSteps } from "@/lib/process";

/**
 * 05 — PROCESS. The system line becomes a project timeline, drawn
 * through each stage as the visitor scrolls. Works vertically on
 * every breakpoint — no pinning required.
 */
export function ProcessSection() {
  const ref = useGsapScene<HTMLElement>(() => {
    // Draw the timeline line with scroll.
    gsap.fromTo(
      "[data-process-line]",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: "[data-process-steps]",
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      }
    );

    // Activate each step as the line reaches it.
    gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((step) => {
      gsap.fromTo(
        step,
        { opacity: 0.25 },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power1.out",
          scrollTrigger: {
            trigger: step,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  return (
    <section
      ref={ref}
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-14 bg-paper py-24 text-ink lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-4">
            <p className="label-tech text-cobalt">05 / Process</p>
            <h2
              id="process-heading"
              className="display-crop font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl"
            >
              How a project moves.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/70 md:justify-self-end">
            The same sequence, whether we are building something new or
            taking over something live.
          </p>
        </div>

        <div className="relative mt-16">
          {/* System line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[7px] w-px bg-ink/15 md:left-1/2"
          >
            <div
              data-process-line
              className="h-full w-px bg-cobalt"
              style={{ transform: "scaleY(1)" }}
            />
          </div>

          <ol data-process-steps className="flex flex-col gap-14 md:gap-20">
            {processSteps.map((step, i) => (
              <li
                key={step.index}
                data-process-step
                className="relative grid gap-2 pl-10 md:grid-cols-2 md:gap-14 md:pl-0"
              >
                {/* Node on the line */}
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-0 size-[15px] border-2 border-cobalt bg-paper md:left-1/2 md:-translate-x-1/2"
                />
                <div
                  className={
                    i % 2 === 0
                      ? "md:pr-14 md:text-right"
                      : "md:order-2 md:pl-14"
                  }
                >
                  <p className="label-tech tabular text-cobalt">
                    {step.index}
                  </p>
                  <h3 className="display-crop mt-1 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                    {step.title}
                  </h3>
                </div>
                <p
                  className={
                    i % 2 === 0
                      ? "max-w-md text-base leading-relaxed text-ink/70 md:order-2 md:pl-14"
                      : "max-w-md text-base leading-relaxed text-ink/70 md:pr-14 md:justify-self-end md:text-right"
                  }
                >
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
