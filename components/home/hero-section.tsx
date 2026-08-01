"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { gsap } from "@/components/lenis-provider";
import { useGsapScene } from "@/hooks/use-gsap";
import { site } from "@/lib/site";

const metadata = [
  "Software development consulting",
  "Remote + on-site",
  "South Africa / DRC / Global",
  "Currently available",
];

/**
 * 01 — HERO. Ink. The system line underlines the headline, then bends
 * down and out of the viewport to become the next scene's diagnostic path.
 */
export function HeroSection() {
  const ref = useGsapScene<HTMLElement>((_ctx, scope) => {
    // Scroll-driven exit: secondary words leave the viewport in opposite
    // directions; "SOFTWARE," remains as the transition anchor.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
    tl.to("[data-hero-line='2']", { xPercent: -110, ease: "none" }, 0)
      .to("[data-hero-line='3']", { xPercent: 110, ease: "none" }, 0)
      .to("[data-hero-line='1']", { xPercent: -8, ease: "none" }, 0)
      .to("[data-hero-path]", { strokeDashoffset: 0, ease: "none" }, 0)
      .to("[data-hero-meta]", { yPercent: -60, opacity: 0, ease: "none" }, 0)
      .to("[data-hero-support]", { yPercent: -40, opacity: 0, ease: "none" }, 0);

    // Entrance: metadata clipped reveal after the loader lifts.
    gsap.from("[data-hero-meta-item]", {
      yPercent: 120,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.06,
      delay: 0.9,
    });
  });

  return (
    <section
      ref={ref}
      data-hero
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink pt-14 text-paper md:min-h-svh"
    >
      {/* Metadata */}
      <div
        data-hero-meta
        className="absolute inset-x-0 top-14 px-4 pt-6 sm:px-6 lg:px-10"
      >
        <ul className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Company facts">
          {metadata.map((item) => (
            <li key={item} className="overflow-hidden">
              <span
                data-hero-meta-item
                className="label-tech block text-structure"
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* System line: underline → decision bend → exit path (desktop) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <path
          data-hero-path
          d="M40,470 L620,470 L780,560 L780,620"
          fill="none"
          stroke="var(--cobalt)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={42}
        />
      </svg>

      <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-10 sm:px-6 sm:pb-14 lg:px-10">
        <h1
          id="hero-heading"
          className="display-crop font-display font-bold uppercase"
        >
          <span
            data-hero-line="1"
            className="block text-[13.5vw] tracking-tight sm:text-[11vw] lg:text-[9vw]"
          >
            Software,
          </span>
          {/* Mobile system line: a simple underline for the anchor word */}
          <span
            aria-hidden="true"
            className="mt-4 block h-0.5 w-2/3 bg-cobalt md:hidden"
          />
          <span
            data-hero-line="2"
            className="block text-[6.5vw] tracking-tight text-structure sm:text-[5vw] lg:text-[4vw]"
          >
            from first decision
          </span>
          <span
            data-hero-line="3"
            className="block text-[6.5vw] tracking-tight text-structure sm:text-[5vw] lg:text-[4vw]"
          >
            to daily operation.
          </span>
        </h1>

        <div
          data-hero-support
          className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
            We help organizations plan, build, improve, and maintain dependable
            software — from South Africa and the DRC to the world.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={site.emailHref}>
                Email us
                <IconArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-paper hover:bg-white/10 hover:text-paper"
            >
              <Link href="/work">View our work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
