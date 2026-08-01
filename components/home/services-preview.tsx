import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { ServicesSwitchboard } from "@/components/home/services-switchboard";

/**
 * 03 — SERVICES. Interactive service selector; full detail lives on /services.
 */
export function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-paper pb-28 text-ink"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 border-t border-ink/15 pt-10 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-4">
            <p className="label-tech text-cobalt">03 / Services</p>
            <h2
              id="services-heading"
              className="display-crop font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl"
            >
              What do you need next?
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/70 md:justify-self-end">
            Pick the closest service to see how we can help, or keep the same
            team from discovery through maintenance.
          </p>
        </div>

        <ServicesSwitchboard />

        <Link
          href="/services"
          className="label-tech mt-8 inline-flex min-h-11 items-center gap-2 text-cobalt outline-offset-4 hover:underline"
        >
          Explore all service details
          <IconArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
