import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How TecHBK handles personal information on this website.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "What we collect",
    body: [
      "This website does not use analytics trackers, advertising cookies, or account systems. We do not collect personal information passively.",
      "If you contact us by email or WhatsApp, we receive the information you choose to send: typically your name, email address, organisation and project details.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use the information you send us only to respond to your enquiry and, if the conversation continues, to prepare and deliver consulting work.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "The contact form",
    body: [
      "The form on the contact page opens your own email client with a pre-filled message. Nothing you type into it is stored on this website or sent to our servers.",
    ],
  },
  {
    title: "Client confidentiality",
    body: [
      "Case studies published on this website are shared with client approval and show only publicly visible systems. We do not publish private operational data, internal dashboards, or confidential client information.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You may ask us at any time what personal information we hold about you, and you may ask us to correct or delete it.",
      `Contact us at ${site.email} with any privacy question or request.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Privacy"
        title="Privacy policy."
        description={`Last updated: July 2026. Questions: ${site.email}.`}
      />
      <div className="bg-paper text-ink">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          {sections.map((s) => (
            <section key={s.title} aria-labelledby={`p-${s.title}`} className="mb-12">
              <h2
                id={`p-${s.title}`}
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
