"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import { gsap } from "@/components/lenis-provider";

import { Separator } from "@/components/ui/separator";
import { useGsapScene } from "@/hooks/use-gsap";
import { site } from "@/lib/site";

const ParticleObject = dynamic(
  () =>
    import("@/components/canvasui/ParticleObject").then(
      (module) => module.ParticleObject,
    ),
  { ssr: false },
);

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const contactActions = [
  {
    label: "Email",
    href: site.emailHref,
    icon: IconMail,
    external: false,
  },
  {
    label: "WhatsApp",
    href: site.whatsapp,
    icon: IconBrandWhatsapp,
    external: true,
  },
  {
    label: "GitHub",
    href: site.founder.github,
    icon: IconBrandGithub,
    external: true,
  },
] as const;

export function SiteFooter() {
  const ref = useGsapScene<HTMLElement>((_ctx, scope) => {
    gsap.from("[data-footer-reveal]", {
      scrollTrigger: {
        trigger: scope,
        start: "top 82%",
      },
      y: 32,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from("[data-footer-logo]", {
      scrollTrigger: {
        trigger: scope,
        start: "top 86%",
      },
      scale: 0.86,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-white/10 bg-ink font-sans text-paper"
      aria-label="Site footer"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cobalt/35 to-transparent"
      />
      <div
        data-footer-logo
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] top-[5%] h-[72%] select-none overflow-hidden opacity-30"
      >
        <ParticleObject
          src="/icon.svg"
          count={3200}
          size={3.2}
          sizeVariance={0.4}
          color="#ffffff"
          radius={140}
          strength={0.55}
          swirl={0.7}
          spring={1.15}
          damping={0.44}
          drift={0.18}
          scale={2.7}
          floatIntensity={0.2}
          rotationIntensity={0.06}
          floatSpeed={0.65}
          orbit={false}
          zoom={false}
          className="size-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <p
          data-footer-reveal
          className="font-sans text-xs font-bold uppercase text-structure"
        >
          Contact
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,8fr)_minmax(18rem,4fr)] lg:items-end lg:gap-16">
          <h2
            data-footer-reveal
            className="display-crop max-w-5xl font-display text-5xl font-bold uppercase text-white sm:text-6xl lg:text-7xl"
          >
            Tell us what needs work.
            <span className="mt-2 block text-cobalt">
              Are you ready to begin?
            </span>
          </h2>
          <p
            data-footer-reveal
            className="max-w-md text-base leading-relaxed text-paper/70 sm:text-lg"
          >
            Share the idea, product or process that needs attention. We will
            reply with a practical starting point.
          </p>
        </div>

        <div
          data-footer-reveal
          className="mt-12 flex flex-wrap items-center gap-3"
          aria-label="Contact TecHBK"
        >
          {contactActions.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="group inline-flex min-h-14 items-center gap-3 rounded-full border border-white/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(174,180,191,0.08))] px-6 py-3 font-sans text-sm font-bold uppercase text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_2px_rgba(8,11,18,0.55),0_18px_45px_-26px_rgba(0,0,0,0.9)] backdrop-blur-xl outline-offset-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/15"
              >
                <Icon
                  className="size-5 text-white/80 transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
                {action.label}
              </a>
            );
          })}
        </div>

        <Separator className="my-12 bg-white/15" />

        <div
          data-footer-reveal
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-paper/70 outline-offset-4 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-sm text-structure sm:text-right">
            <p>{site.availability}</p>
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}