"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconCheck,
  IconCopy,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * 06 - FOUNDER. Paper. Glass profile card, portrait, role, verified
 * biography, links, and direct contact actions.
 */
export function FounderSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      aria-labelledby="founder-heading"
      className="relative overflow-hidden border-t border-ink/15 bg-paper py-24 text-ink lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_72%_0%,rgba(40,85,245,0.2),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,rgba(242,243,246,0)_0%,rgba(174,180,191,0.16)_36%,rgba(8,11,18,0.62)_74%,#080b12_100%)]"
      />

      <div className="relative mx-auto grid max-w-[1600px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-20 lg:px-10">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="pointer-events-none absolute inset-x-8 -bottom-8 top-[78%] rounded-[1.25rem] bg-cobalt/80 shadow-[0_42px_90px_-28px_rgba(40,85,245,0.85)]" />

          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-ink/15 bg-white/55 p-5 shadow-2xl shadow-ink/10 backdrop-blur-xl sm:p-6">
            <div className="flex flex-col items-center gap-5 text-center">
              <div className="relative aspect-square w-full max-w-[16rem] overflow-hidden rounded-[1.4rem] border border-ink/10 bg-ink/5 sm:max-w-[18rem]">
                <Image
                  src={site.founder.portrait}
                  alt={`Portrait of ${site.founder.name}, ${site.founder.role} at TecHBK`}
                  fill
                  sizes="(min-width: 1024px) 288px, 70vw"
                  className="object-cover object-top"
                  priority={false}
                />
              </div>

              <div className="min-w-0">
                <h2
                  id="founder-heading"
                  className="display-crop font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl"
                >
                  {site.founder.name}
                </h2>
                <p className="mt-2 font-sans text-xs font-semibold uppercase text-ink/60">
                  {site.founder.role}
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button asChild className="h-12 justify-center gap-3 rounded-full font-sans">
                <a href={site.emailHref}>
                  <IconMail className="size-4" aria-hidden="true" />
                  Email founder
                </a>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCopy}
                className={cn(
                  "h-12 justify-center gap-3 rounded-full border-ink/15 bg-paper/70 font-sans",
                  copied && "border-cobalt text-cobalt"
                )}
              >
                {copied ? (
                  <IconCheck className="size-4" aria-hidden="true" />
                ) : (
                  <IconCopy className="size-4" aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy email"}
              </Button>
            </div>
          </div>

          <div className="relative z-0 mx-auto flex items-center justify-center gap-3 px-4 pt-4">
            <a
              href={site.founder.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              title="GitHub"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/40 bg-paper/90 text-ink shadow-lg shadow-ink/10 transition-colors hover:bg-ink hover:text-paper"
            >
              <IconBrandGithub className="size-5" aria-hidden="true" />
            </a>
            <a
              href={site.founder.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV"
              title="CV"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/40 bg-paper/90 text-ink shadow-lg shadow-ink/10 transition-colors hover:bg-ink hover:text-paper"
            >
              <IconFileCv className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <p className="label-tech text-cobalt">06 / Founder</p>
          <h3 className="display-crop max-w-3xl font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Practical software leadership from first brief to long-term support.
          </h3>
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            Heritier Kaumbu founded TecHBK and leads its client work. He works
            across frontend and backend development, data, cloud infrastructure
            and technical consulting. His software is used by businesses,
            non-profit organisations and academic teams.
          </p>
        </div>
      </div>
    </section>
  );
}
