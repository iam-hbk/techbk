import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { caseStudies, getAdjacentCaseStudy, getCaseStudy } from "@/lib/work";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.name} | Case Study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.name} | TecHBK case study`,
      description: study.summary,
      images: [study.image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const next = getAdjacentCaseStudy(study.slug, 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Work", item: `${site.url}/work` },
      {
        "@type": "ListItem",
        position: 2,
        name: study.name,
        item: `${site.url}/work/${study.slug}`,
      },
    ],
  };

  return (
    <article className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-ink/15 pt-14">
        <div className="mx-auto max-w-[1600px] px-4 pt-16 pb-12 sm:px-6 lg:px-10 lg:pt-24 lg:pb-16">
          <nav aria-label="Breadcrumb">
            <Link
              href="/work"
              className="label-tech text-ink/60 outline-offset-4 transition-colors hover:text-cobalt"
            >
              ← All work
            </Link>
          </nav>
          <p className="label-tech mt-8 text-cobalt">{study.industry}</p>
          <h1 className="display-crop mt-4 max-w-5xl font-display text-5xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">
            {study.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            {study.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={study.url} target="_blank" rel="noopener noreferrer">
                Visit {study.urlLabel}
                <IconArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.emailHref}>
                Email us
                <IconArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="mx-auto max-w-[1600px] px-4 pt-12 sm:px-6 lg:px-10">
        <div className="overflow-hidden border border-ink/15">
          <Image
            src={study.image}
            alt={study.imageAlt}
            width={1440}
            height={900}
            priority
            className="aspect-[16/9] w-full object-cover object-top"
            sizes="(min-width: 1600px) 1520px, 100vw"
          />
        </div>
        <p className="label-tech mt-3 text-ink/50">
          Project link: {study.urlLabel}
        </p>
      </div>

      {/* Body */}
      <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20 lg:px-10 lg:py-24">
        <aside className="flex flex-col gap-10 lg:sticky lg:top-24 lg:self-start">
          <div>
            <h2 className="label-tech text-cobalt">TecHBK scope</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {study.scope.map((s) => (
                <li key={s} className="text-base text-ink/85">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {study.technology ? (
            <div>
              <h2 className="label-tech text-cobalt">Technology</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.technology.map((t) => (
                  <li
                    key={t}
                    className="label-tech border border-ink/20 px-2.5 py-1.5 text-ink/75"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <h2 className="label-tech text-cobalt">Relationship</h2>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-ink/75">
              {study.maintenance}
            </p>
          </div>
        </aside>

        <div className="flex max-w-3xl flex-col gap-14">
          <section aria-labelledby="cs-context">
            <h2
              id="cs-context"
              className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl"
            >
              The organisation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              {study.context}
            </p>
          </section>

          <section aria-labelledby="cs-features">
            <h2
              id="cs-features"
              className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl"
            >
              What it does
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {study.features.map((f) => (
                <li
                  key={f}
                  className="flex items-baseline gap-3 text-base text-ink/85"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block size-1.5 shrink-0 translate-y-[-2px] bg-cobalt"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Separator />

      {/* Next project */}
      {next ? (
        <section
          aria-labelledby="next-project"
          className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
        >
          <p className="label-tech text-cobalt">Next project</p>
          <h2
            id="next-project"
            className="display-crop mt-4 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl"
          >
            <Link
              href={`/work/${next.slug}`}
              className="outline-offset-4 transition-colors hover:text-cobalt"
            >
              {next.name}
            </Link>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75">
            {next.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={`/work/${next.slug}`}>Read the case study</Link>
            </Button>
            <Button asChild>
              <a href={site.emailHref}>
                Email TecHBK
                <IconArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </section>
      ) : null}
    </article>
  );
}
