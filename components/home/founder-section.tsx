import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { site } from "@/lib/site";

/**
 * 06 — FOUNDER. Paper. Portrait, role, verified biography, links.
 */
export function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="border-t border-ink/15 bg-paper py-24 text-ink lg:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-10">
        <div className="flex flex-col gap-4">
          <p className="label-tech text-cobalt">06 / Founder</p>
          <div className="relative overflow-hidden border border-ink/15">
            <Image
              src={site.founder.portrait}
              alt={`Portrait of ${site.founder.name}, ${site.founder.role} at TecHBK`}
              width={930}
              height={644}
              className="aspect-[4/3] w-full object-cover object-top"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <h2
            id="founder-heading"
            className="display-crop font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl"
          >
            Heritier Kaumbu
          </h2>
          <p className="label-tech text-ink/60">
            Founder &amp; Lead Consultant
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            Heritier Kaumbu is the founder and lead consultant at TecHBK. His
            work spans frontend engineering, backend development, data
            systems, cloud delivery, technical consulting, and the development
            of software used in commercial, nonprofit, recruitment, energy,
            architectural, and academic environments.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
            <li>
              <a
                href={site.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="label-tech inline-flex min-h-11 items-center gap-2 text-cobalt outline-offset-4 hover:underline"
              >
                GitHub
                <IconArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={site.founder.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="label-tech inline-flex min-h-11 items-center gap-2 text-cobalt outline-offset-4 hover:underline"
              >
                Resume
                <IconArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
