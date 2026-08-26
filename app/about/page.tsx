import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { FounderSection } from "@/components/home/founder-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "TecHBK is a founder-led software development consultancy working with organisations in South Africa, the DRC and elsewhere.",
  alternates: { canonical: "/about" },
};

const workingPrinciples = [
  {
    title: "Remote or on-site",
    body: "We usually work remotely and join clients on-site when the project benefits from it. Our clients are in South Africa, the Democratic Republic of the Congo and elsewhere.",
  },
  {
    title: "Working software you can review",
    body: "You see working software early and often, not a reveal at the end. Decisions stay reversible for as long as possible.",
  },
  {
    title: "Decisions explained plainly",
    body: "Technical choices are explained in terms of what they mean for your organisation, your users and your budget.",
  },
  {
    title: "Support after launch",
    body: "Most of our client relationships continue after launch. We maintain, support and improve the software we build.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Founder-led and close to the work."
        description="TecHBK is a software development consultancy led by Heritier Kaumbu. We work with organisations in South Africa, the DRC and elsewhere on new and existing software."
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
    </>
  );
}
