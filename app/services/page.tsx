import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/page-header";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software discovery, product design, development, infrastructure and long-term maintenance from TecHBK.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Choose the help you need."
        description="Some clients need a product built from scratch. Others need an audit, a redesign, a reliable release process or continued maintenance. We can take on a focused brief or stay with the project longer."
      />

      <div className="bg-paper text-ink">
        <ol className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          {services.map((service) => (
            <li
              key={service.slug}
              id={service.slug}
              className="scroll-mt-20 border-b border-ink/15 py-14 lg:py-20"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
                <div className="flex flex-col gap-4">
                  <p className="label-tech tabular text-cobalt">
                    {service.index}
                  </p>
                  <h2 className="display-crop font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h2>
                  <p className="max-w-md text-base leading-relaxed text-ink/70">
                    {service.summary}
                  </p>
                </div>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-base text-ink/85"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block size-1.5 shrink-0 translate-y-[-2px] bg-cobalt"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <section
          aria-labelledby="services-cta"
          className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10"
        >
          <Separator className="mb-12" />
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="services-cta"
                className="display-crop font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl"
              >
                Not sure where to start?
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                Describe what you have and what needs to change. We will help
                you choose a sensible first step.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={site.emailHref}>
                  Email us
                  <IconArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/work">View our work</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
