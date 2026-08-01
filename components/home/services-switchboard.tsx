"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

function ServiceOutputs({
  service,
  inverted = false,
}: {
  service: Service;
  inverted?: boolean;
}) {
  return (
    <div>
      <p className={cn("label-tech", inverted ? "text-paper/65" : "text-ink/50")}>
        Typical outputs
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.highlights.map((highlight) => (
          <li
            key={highlight}
            className={cn(
              "label-tech border px-3 py-2",
              inverted
                ? "border-white/20 text-paper/80"
                : "border-ink/20 text-ink/75"
            )}
          >
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceLink({
  service,
  inverted = false,
}: {
  service: Service;
  inverted?: boolean;
}) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className={cn(
        "label-tech mt-8 inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline",
        inverted
          ? "text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
          : "text-cobalt outline-offset-4"
      )}
    >
      Explore this service
      <IconArrowUpRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

/**
 * Interactive service selector. Desktop uses one focused cobalt panel;
 * mobile uses a single-open accordion to keep the section compact.
 */
export function ServicesSwitchboard() {
  const [selected, setSelected] = useState(services[0].slug);

  return (
    <>
      <Tabs
        value={selected}
        onValueChange={setSelected}
        orientation="vertical"
        className="mt-12 hidden w-full gap-0 border border-ink/15 md:grid md:grid-cols-[minmax(18rem,0.85fr)_1.35fr]"
      >
        <TabsList
          aria-label="Services"
          className="h-full w-full items-stretch justify-start gap-0 bg-transparent p-0 text-ink"
        >
          {services.map((service) => (
            <TabsTrigger
              key={service.slug}
              value={service.slug}
              aria-label={service.title}
              className="group h-auto min-h-20 flex-none items-center justify-start border-0 border-b border-ink/15 px-5 py-5 text-left normal-case tracking-normal whitespace-normal text-ink outline-offset-0 transition-colors after:hidden hover:bg-ink/[0.04] hover:text-ink focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/30 focus-visible:outline-none data-active:bg-cobalt data-active:text-paper data-active:focus-visible:border-paper data-active:focus-visible:ring-paper/40 lg:px-6"
            >
              <span className="flex w-full items-center gap-5">
                <span className="label-tech tabular shrink-0 text-cobalt transition-colors group-data-[state=active]:text-paper/65">
                  {service.index}
                </span>
                <span className="display-crop font-display text-xl font-bold uppercase tracking-tight lg:text-2xl">
                  {service.compactTitle}
                </span>
                <IconArrowRight
                  aria-hidden="true"
                  className="ml-auto size-5 shrink-0 -translate-x-1 text-cobalt opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 group-data-[state=active]:translate-x-0 group-data-[state=active]:text-paper group-data-[state=active]:opacity-100 motion-reduce:translate-x-0 motion-reduce:transition-none"
                />
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="relative min-h-[32rem] border-l border-ink/15">
          {services.map((service) => (
            <TabsContent
              key={service.slug}
              value={service.slug}
              tabIndex={-1}
              className="absolute inset-0 flex flex-col justify-between bg-cobalt p-6 text-paper outline-none motion-safe:data-active:animate-in motion-safe:data-active:fade-in-0 motion-safe:data-active:slide-in-from-top-2 motion-safe:data-active:duration-300 lg:p-10"
            >
              <div>
                <p className="label-tech tabular text-paper/65">
                  Service {service.index}
                </p>
                <h3 className="display-crop mt-4 font-display text-4xl font-bold uppercase tracking-tight lg:text-5xl xl:text-6xl">
                  {service.title}
                </h3>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
                  {service.preview}
                </p>
              </div>
              <div className="mt-12">
                <ServiceOutputs service={service} inverted />
                <ServiceLink service={service} inverted />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>

      <div className="mt-10 md:hidden">
        <Accordion
          type="single"
          value={selected}
          onValueChange={setSelected}
          className="border-y border-ink/15"
        >
          {services.map((service) => (
            <AccordionItem
              key={service.slug}
              value={service.slug}
              className="border-ink/15"
            >
              <AccordionTrigger
                aria-label={service.title}
                className="group min-h-16 items-center gap-4 py-5 text-left hover:no-underline aria-expanded:text-cobalt [&_svg]:text-cobalt"
              >
                <span className="flex min-w-0 flex-1 items-baseline gap-4">
                  <span className="label-tech tabular shrink-0 text-cobalt">
                    {service.index}
                  </span>
                  <span className="display-crop font-display text-2xl font-bold uppercase tracking-tight">
                    {service.compactTitle}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="max-w-xl text-base leading-relaxed text-ink/70">
                  {service.preview}
                </p>
                <div className="mt-6">
                  <ServiceOutputs service={service} />
                </div>
                <ServiceLink service={service} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
