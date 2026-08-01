import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/**
 * 08 — FINAL CTA. Quiet ink. The system line resolves into the email CTA.
 */
export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-ink pt-28 pb-20 text-paper lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <p className="label-tech text-structure">08 / Contact</p>
        <h2
          id="cta-heading"
          className="display-crop mt-6 font-display text-[13vw] font-bold uppercase tracking-tight sm:text-[10vw] lg:text-[7.5vw]"
        >
          Tell us what
          <br />
          needs work.
        </h2>

        <div className="mt-12 flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-paper/80">
            Tell us what you are planning or what is not working. We will reply
            by email and help you find a sensible starting point.
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
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {site.phone}
              </a>
            </Button>
          </div>
        </div>

        <ul
          className="mt-12 flex flex-wrap gap-x-8 gap-y-2"
          aria-label="Availability"
        >
          {["Currently available", "Remote + on-site", site.footprint].map(
            (item) => (
              <li key={item} className="label-tech text-structure">
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
