import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { services } from "@/lib/services";

/**
 * 03 — SERVICES. Lifecycle stages as connected editorial rows.
 * Full detail lives on /services.
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
              Help at every stage.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/70 md:justify-self-end">
            Bring us in for one piece of work or keep the same team from early
            discovery through maintenance.
          </p>
        </div>

        <ol className="mt-14">
          {services.map((service) => (
            <li key={service.slug} className="group border-t border-ink/15 last:border-b">
              <Link
                href={`/services#${service.slug}`}
                className="grid gap-3 py-6 outline-offset-4 transition-colors md:grid-cols-[4rem_1fr_1.2fr_2rem] md:items-baseline md:gap-6 md:py-8"
              >
                <span className="label-tech tabular text-cobalt">
                  {service.index}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight transition-colors group-hover:text-cobalt sm:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-ink/70">
                  {service.summary}
                </p>
                <IconArrowRight
                  aria-hidden="true"
                  className="hidden size-5 -translate-x-1 text-cobalt opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 md:block"
                />
              </Link>
            </li>
          ))}
        </ol>

        <Link
          href="/services"
          className="label-tech mt-8 inline-flex items-center gap-2 text-cobalt outline-offset-4 hover:underline"
        >
          See all services
          <IconArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
