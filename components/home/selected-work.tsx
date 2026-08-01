import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { caseStudies } from "@/lib/work";

const featured = caseStudies.slice(0, 4);

/**
 * 04 — SELECTED WORK. Navy. Editorial case-study entries, not cards.
 */
export function SelectedWork() {
  return (
    <section
      aria-labelledby="work-heading"
      className="bg-navy py-24 text-paper lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-4">
            <p className="label-tech text-structure">04 / Selected work</p>
            <h2
              id="work-heading"
              className="display-crop font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl"
            >
              Work our clients use.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-paper/70 md:justify-self-end">
            Client-approved work for organisations in energy, recruitment,
            architecture, construction, security, the non-profit sector,
            retail and higher education.
          </p>
        </div>

        <ol className="mt-16 flex flex-col gap-20 lg:gap-28">
          {featured.map((study, i) => (
            <li
              key={study.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <Link
                href={`/work/${study.slug}`}
                className="group block outline-offset-4"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="overflow-hidden border border-white/15">
                  <Image
                    src={study.image}
                    alt=""
                    width={1440}
                    height={900}
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </Link>
              <div className={i % 2 === 1 ? "lg:order-first" : undefined}>
                <p className="label-tech tabular text-structure">
                  Case study 0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                  <Link
                    href={`/work/${study.slug}`}
                    className="outline-offset-4 transition-colors hover:text-cobalt"
                  >
                    {study.name}
                  </Link>
                </h3>
                <p className="label-tech mt-2 text-paper/60">
                  {study.industry}
                </p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/80">
                  {study.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="TecHBK scope">
                  {study.scope.map((s) => (
                    <li
                      key={s}
                      className="label-tech border border-white/20 px-2.5 py-1.5 text-paper/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${study.slug}`}
                  className="label-tech mt-7 inline-flex min-h-11 items-center gap-2 text-cobalt outline-offset-4 hover:underline"
                >
                  Read the case study
                  <IconArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <Link
          href="/work"
          className="label-tech mt-16 inline-flex min-h-11 items-center gap-2 text-cobalt outline-offset-4 hover:underline"
        >
          All {caseStudies.length} case studies
          <IconArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
