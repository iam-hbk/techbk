import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/page-header";
import { FounderSection } from "@/components/home/founder-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TecHBK is a software development consulting business led by founder Heritier Kaumbu, working remotely and on-site from South Africa and the DRC to the world.",
  alternates: { canonical: "/about" },
};

const workingPrinciples = [
  {
    title: "We work where you work",
    body: "Remote by default, on-site when the work calls for it. Our clients are in South Africa, the Democratic Republic of Congo, and beyond.",
  },
  {
    title: "We build in reviewable increments",
    body: "You see working software early and often, not a reveal at the end. Decisions stay reversible for as long as possible.",
  },
  {
    title: "We communicate in plain language",
    body: "Technical decisions are explained in terms of what they mean for your organization, your users, and your budget.",
  },
  {
    title: "We stay after launch",
    body: "Most of our client relationships are ongoing. We maintain, support, and improve the systems we build.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="A consulting business, not an agency of buzzwords."
        description="TecHBK is a registered software development consulting business. We help organizations plan, build, improve, and maintain dependable software — from South Africa and the DRC to the world."
      />

      <section
        aria-labelledby="what-we-do"
        className="bg-paper text-ink"
      >
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-10 lg:py-24">
          <h2
            id="what-we-do"
            className="display-crop font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl"
          >
            How we work with clients
          </h2>
          <ul className="flex flex-col gap-10">
            {workingPrinciples.map((p, i) => (
              <li key={p.title} className="grid gap-2 sm:grid-cols-[3rem_1fr]">
                <span className="label-tech tabular text-cobalt">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-ink/75">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FounderSection />

      <section aria-labelledby="about-cta" className="bg-paper text-ink">
        <div className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-6 lg:px-10">
          <Separator className="mb-12" />
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2
              id="about-cta"
              className="display-crop max-w-2xl font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl"
            >
              Talk to us about your system.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={site.emailHref}>
                  Email us
                  <IconArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
