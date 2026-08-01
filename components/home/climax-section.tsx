"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { gsap } from "@/components/lenis-provider";
import { TechBKLogo } from "@/components/techbk-wordmark";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useGsapScene } from "@/hooks/use-gsap";

const ParticleObject = dynamic(
  () =>
    import("@/components/canvasui/ParticleObject").then(
      (module) => module.ParticleObject
    ),
  { ssr: false }
);

const milestones = [
  {
    index: "01",
    label: "Direction",
    title: "Decide.",
    description: "Define the problem and agree on a practical route.",
    status: "Direction set",
  },
  {
    index: "02",
    label: "Delivery",
    title: "Build.",
    description: "Review working software as it takes shape.",
    status: "Software built",
  },
  {
    index: "03",
    label: "Operation",
    title: "Run.",
    description: "Launch it, support it and keep improving it.",
    status: "Support active",
  },
] as const;

/** The delivery sequence completes, then resolves into a live system. */
export function ClimaxSection() {
  const [showParticles, setShowParticles] = useState(false);
  const ref = useGsapScene<HTMLElement>((_ctx, scope) => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const stages = gsap.utils.toArray<HTMLElement>("[data-climax-stage]");
      const progress = scope.querySelector<HTMLElement>(
        "[data-climax-progress] [data-slot='progress-indicator']"
      );

      gsap.set(stages, { yPercent: 28, opacity: 0 });
      gsap.set(progress, { xPercent: -100 });
      gsap.set("[data-climax-burst-circle]", { scale: 0.01 });
      gsap.set("[data-climax-final]", { opacity: 0, scale: 0.9 });
      gsap.set("[data-climax-final-detail]", { opacity: 0, y: 24 });
      gsap.set("[data-climax-particles]", { opacity: 0, scale: 0.82 });
      gsap.set("[data-climax-live-letter]", {
        yPercent: 110,
        rotation: (index) => [-8, 5, -4, 4, 0][index] ?? 0,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "+=260%",
          scrub: 0.75,
          pin: true,
          anticipatePin: 1,
        },
      });

      stages.forEach((stage, index) => {
        tl.to(
          stage,
          { yPercent: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          index * 0.72
        ).to(
          progress,
          {
            xPercent: -66 + index * 33,
            duration: 0.72,
            ease: "none",
          },
          index * 0.72
        );
      });

      tl.to({}, { duration: 0.35 })
        .to(
          "[data-climax-sequence]",
          { opacity: 0, scale: 0.94, duration: 0.8, ease: "power2.inOut" }
        )
        .to(
          "[data-climax-burst-circle]",
          { scale: 1.45, duration: 1, ease: "power3.inOut" },
          "<"
        )
        .to(
          "[data-climax-final]",
          { opacity: 1, scale: 1, duration: 0.65, ease: "power3.out" },
          "<+0.35"
        )
        .to(
          "[data-climax-particles]",
          { opacity: 0.42, scale: 1, duration: 1, ease: "power3.out" },
          "<"
        )
        .to(
          "[data-climax-live-letter]",
          {
            yPercent: 0,
            rotation: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.07,
            ease: "back.out(1.35)",
          },
          "<+0.1"
        )
        .to(
          "[data-climax-final-detail]",
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power2.out" },
          "<+0.3"
        )
        .to({}, { duration: 0.8 });
    });

    mm.add("(max-width: 1023px)", () => {
      const progress = scope.querySelector<HTMLElement>(
        "[data-climax-progress] [data-slot='progress-indicator']"
      );
      const sequence = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-climax-sequence]",
          start: "top 72%",
        },
      });

      sequence
        .from("[data-climax-stage]", {
          y: 36,
          opacity: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: "power3.out",
        })
        .fromTo(
          progress,
          { xPercent: -100 },
          { xPercent: 0, duration: 0.9, ease: "power2.out" },
          "<+0.1"
        );

      gsap.from("[data-climax-final-detail]", {
        scrollTrigger: {
          trigger: "[data-climax-final]",
          start: "top 72%",
        },
        y: 32,
        opacity: 0,
        stagger: 0.08,
        duration: 0.75,
        ease: "power3.out",
      });
      gsap.from("[data-climax-particles]", {
        scrollTrigger: {
          trigger: "[data-climax-final]",
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.86,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from("[data-climax-live-letter]", {
        scrollTrigger: {
          trigger: "[data-climax-final]",
          start: "top 72%",
        },
        yPercent: 110,
        rotation: (index) => [-8, 5, -4, 4, 0][index] ?? 0,
        opacity: 0,
        stagger: 0.07,
        duration: 0.8,
        ease: "back.out(1.25)",
      });
    });
  });

  useEffect(() => {
    const finalState = ref.current?.querySelector("[data-climax-final]");
    if (!finalState) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShowParticles(true);
        observer.disconnect();
      },
      { rootMargin: "240px 0px" }
    );
    observer.observe(finalState);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <section
      ref={ref}
      data-climax
      aria-labelledby="climax-heading"
      className="relative overflow-hidden bg-ink text-paper lg:min-h-svh"
    >
      <div
        data-climax-burst
        aria-hidden="true"
        className="climax-burst pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex"
      >
        <div
          data-climax-burst-circle
          className="climax-burst-circle size-[90vmax] shrink-0 rounded-full bg-cobalt"
        />
      </div>

      <div
        data-climax-sequence
        className="climax-sequence relative z-10 mx-auto flex min-h-svh w-full max-w-[1600px] flex-col justify-between gap-16 px-4 py-24 sm:px-6 md:py-28 lg:absolute lg:inset-0 lg:gap-10 lg:px-10 lg:py-20"
      >
        <div className="flex items-center justify-between gap-6">
          <Badge variant="secondary" className="text-structure">
            07 / Delivery
          </Badge>
          <span className="label-tech text-structure">Project signal</span>
        </div>

        <div>
          <h2 id="climax-heading" className="sr-only">
            From decision to software in use
          </h2>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
            {milestones.map((milestone) => (
              <li
                key={milestone.index}
                data-climax-stage
                className="border-t border-white/20 pt-5"
              >
                <Badge variant="secondary" className="text-structure">
                  {milestone.index} / {milestone.label}
                </Badge>
                <p className="display-crop mt-5 font-display text-[18vw] font-bold uppercase tracking-tight sm:text-[13vw] md:text-[7.5vw] lg:text-[6.4vw]">
                  {milestone.title}
                </p>
                <p className="mt-5 max-w-xs text-base leading-relaxed text-paper/65">
                  {milestone.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <Separator className="mb-6 bg-white/15" />
          <Progress
            data-climax-progress
            value={100}
            aria-hidden="true"
            className="h-1 bg-white/15 [&_[data-slot=progress-indicator]]:bg-cobalt"
          />
          <ol className="mt-5 grid grid-cols-3 gap-3">
            {milestones.map((milestone) => (
              <li
                key={milestone.status}
                className="label-tech text-structure"
              >
                {milestone.status}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div
        data-climax-final
        className="climax-final relative z-20 flex min-h-[78svh] flex-col justify-between bg-cobalt px-4 py-20 sm:min-h-[82svh] sm:px-6 md:py-24 lg:absolute lg:inset-0 lg:min-h-0 lg:bg-transparent lg:px-10 lg:py-20 lg:opacity-0"
      >
        <div
          data-climax-particles
          aria-hidden="true"
          className="pointer-events-none absolute inset-[8%] opacity-40 lg:pointer-events-auto"
        >
          {showParticles ? (
            <ParticleObject
              src="/icon.svg"
              count={4200}
              size={3.6}
              sizeVariance={0.4}
              color="#ffffff"
              radius={140}
              strength={0.65}
              swirl={0.7}
              spring={1.15}
              damping={0.44}
              drift={0.18}
              scale={3.1}
              floatIntensity={0.25}
              rotationIntensity={0.08}
              floatSpeed={0.7}
              orbit={false}
              zoom={false}
              className="size-full"
            />
          ) : null}
        </div>

        <div
          data-climax-final-detail
          className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6"
        >
          <Badge className="text-white/75">Delivery complete</Badge>
          <Badge className="text-white/75">Support active</Badge>
        </div>

        <p
          aria-label="Live."
          className="display-crop relative z-10 mx-auto w-full max-w-[1600px] overflow-hidden pb-[0.08em] font-display text-[32vw] font-bold uppercase tracking-[-0.07em] text-white sm:text-[29vw] lg:text-[23vw]"
        >
          {Array.from("Live.").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              data-climax-live-letter
              aria-hidden="true"
              className="inline-block origin-bottom"
            >
              {letter}
            </span>
          ))}
        </p>

        <div
          data-climax-final-detail
          className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-8 border-t border-white/25 pt-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-lg leading-relaxed text-white/85">
            Launch is not the end. We stay involved to support and improve what
            we build.
          </p>
          <TechBKLogo className="h-10 w-auto text-white sm:h-12" />
        </div>
      </div>
    </section>
  );
}
