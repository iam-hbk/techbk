import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { PageHeader } from "@/components/page-header";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client-approved case studies covering websites, operational dashboards and software platforms built and maintained by TecHBK.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title="Selected client work."
        description="These case studies are published with client approval. They cover websites, operational tools and software platforms used across several industries."
      />

      <div className="bg-paper text-ink">
        <ol className="mx-auto flex max-w-[1600px] flex-col gap-20 px-4 py-16 sm:px-6 lg:gap-28 lg:px-10 lg:py-24">
          {caseStudies.map((study, i) => (
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
                <div className="overflow-hidden border border-ink/15">
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
                <p className="label-tech tabular text-cobalt">
                  Case study {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                  <Link
                    href={`/work/${study.slug}`}
                    className="outline-offset-4 transition-colors hover:text-cobalt"
                  >
                    {study.name}
                  </Link>
                </h2>
                <p className="label-tech mt-2 text-ink/60">{study.industry}</p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/75">
                  {study.summary}
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="TecHBK scope"
                >
                  {study.scope.map((s) => (
                    <li
                      key={s}
                      className="label-tech border border-ink/20 px-2.5 py-1.5 text-ink/75"
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
      </div>
    </>
  );
}
