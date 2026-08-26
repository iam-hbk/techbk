"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { gsap } from "@/components/lenis-provider";
import { useGsapScene } from "@/hooks/use-gsap";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
const heroPoster = "/assets/hero-poster.jpg";

/**
 * 01 - HERO. A moving system backdrop sits behind the existing TecHBK
 * message, keeping the ink/cobalt/paper palette and scroll choreography.
 */
export function HeroSection() {
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

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
      .to("[data-hero-media]", { scale: 1.08, opacity: 0.68, ease: "none" }, 0)
      .to("[data-hero-support]", { yPercent: -40, opacity: 0, ease: "none" }, 0);

    gsap.from("[data-hero-line]", {
      yPercent: 18,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.25,
    });
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    const updateVideoPreference = () => {
      setShouldLoadVideo(mediaQuery.matches);
      setCanPlayVideo(false);
    };

    updateVideoPreference();
    mediaQuery.addEventListener("change", updateVideoPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateVideoPreference);
    };
  }, []);

  return (
    <section
      ref={ref}
      data-hero
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink pt-14 text-paper md:min-h-svh"
    >
      <div data-hero-media aria-hidden="true" className="absolute inset-0">
        <Image
          src={heroPoster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="translate-x-[3%] scale-[1.08] object-cover opacity-85 saturate-100"
        />
        {shouldLoadVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={heroPoster}
            onCanPlay={() => setCanPlayVideo(true)}
            className={`absolute inset-0 h-full w-full translate-x-[3%] scale-[1.08] object-cover saturate-100 transition-opacity duration-700 ${
              canPlayVideo ? "opacity-85" : "opacity-0"
            }`}
            src={heroVideo}
          />
        ) : null}
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(40,85,245,0.26),transparent_38%),linear-gradient(180deg,rgba(8,11,18,0.06),rgba(8,11,18,0.58))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>{/* System line: underline -> decision bend -> exit path (desktop) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full md:block"
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

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pb-10 sm:px-6 sm:pb-14 lg:px-10">
        <h1
          id="hero-heading"
          className="display-crop font-display font-bold uppercase text-paper drop-shadow-[0_1rem_2.5rem_rgba(0,0,0,0.32)]"
        >
          <span
            data-hero-line="1"
            className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl"
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
            className="block text-2xl text-structure lg:text-3xl xl:text-4xl"
          >
            built for the way
          </span>
          <span
            data-hero-line="3"
            className="block text-2xl text-structure lg:text-3xl xl:text-4xl"
          >
            your organisation works.
          </span>
        </h1>

        <div
          data-hero-support
          className="mt-10 border-t border-white/15 pt-8"
        >
          <p className="max-w-md text-base leading-relaxed text-paper/85 sm:text-lg">
            We design, build and maintain websites, platforms and internal
            tools. Based in South Africa and the DRC, we work with clients
            wherever they are.
          </p>
        </div>
      </div>
    </section>
  );
}
