import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { caseStudies } from "@/lib/work";

const featured = caseStudies.slice(0, 4);

/**
 * 04 — SELECTED WORK. Navy. Case studies in subtle structure-grey glass.
 */
export function SelectedWork() {
  return (
    <section
      aria-labelledby="work-heading"
      className="relative bg-navy py-24 text-paper lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-[linear-gradient(to_bottom,rgba(242,243,246,0)_0%,rgba(40,85,245,0.1)_35%,rgba(2,22,93,0.55)_72%,#02165d_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-[-5%] h-24 w-[110%] bg-cobalt/12 blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
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
              className="grid items-center gap-8 rounded-[2rem] border border-white/20 bg-[linear-gradient(135deg,rgba(174,180,191,0.2),rgba(174,180,191,0.06))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_28px_70px_-36px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-7 lg:grid-cols-2 lg:gap-14 lg:p-9"
            >
              <Link
                href={`/work/${study.slug}`}
                className="group block outline-offset-4"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="overflow-hidden rounded-[1.4rem] border border-white/15">
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
                      className="rounded-full border border-white/20 px-4 py-2 font-sans text-xs font-bold uppercase text-paper/90"
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
          className="mt-16 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-[linear-gradient(135deg,rgba(174,180,191,0.24),rgba(174,180,191,0.1))] px-5 py-3 font-sans text-sm font-bold uppercase text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_18px_40px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl outline-offset-4 transition-colors hover:bg-white/15"
        >
          All {caseStudies.length} case studies
          <IconArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
