import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the TecHBK website.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "About this website",
    body: [
      "This website is operated by TecHBK, a registered software development consulting business. It describes our services, shows client-approved work, and provides ways to contact us.",
    ],
  },
  {
    title: "Content",
    body: [
      "Case studies are published with client approval and describe publicly visible systems only. Descriptions of scope reflect the work TecHBK was engaged to deliver and maintain.",
      "Nothing on this website constitutes a binding offer, a quote, or professional advice. Engagements are agreed individually in writing.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The TecHBK name, logo, and the design and content of this website belong to TecHBK unless stated otherwise. Client names, websites, and screenshots remain the property of their respective owners and are shown with approval.",
    ],
  },
  {
    title: "External links",
    body: [
      "This website links to client websites and third-party platforms. We are not responsible for the content or availability of external sites.",
    ],
  },
  {
    title: "Contact",
    body: [
      `Questions about these terms: ${site.email}, or WhatsApp ${site.phone}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Terms"
        title="Terms of use."
        description="Last updated: July 2026."
      />
      <div className="bg-paper text-ink">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          {sections.map((s) => (
            <section key={s.title} aria-labelledby={`t-${s.title}`} className="mb-12">
              <h2
                id={`t-${s.title}`}
                className="font-display text-2xl font-bold tracking-tight"
              >
                {s.title}
              </h2>
              {s.body.map((p) => (
                <p
                  key={p}
                  className="mt-4 text-base leading-relaxed text-ink/80"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
