import type { Metadata } from "next";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with TecHBK. Email info@techbk.dev or WhatsApp +27 64 244 8112. Currently available — remote and on-site.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="What are you trying to build?"
        description="Tell us what you are planning, what is not working, or where your current software needs help. We reply by email."
      />

      <div className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24 lg:px-10 lg:py-24">
          <aside className="flex flex-col gap-10">
            <div>
              <h2 className="label-tech text-cobalt">Direct</h2>
              <ul className="mt-4 flex flex-col gap-4">
                <li>
                  <a
                    href={site.emailHref}
                    className="inline-flex min-h-11 items-center gap-3 font-display text-xl font-bold tracking-tight outline-offset-4 transition-colors hover:text-cobalt sm:text-2xl"
                  >
                    <IconMail className="size-6 shrink-0" aria-hidden="true" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-3 font-display text-xl font-bold tracking-tight outline-offset-4 transition-colors hover:text-cobalt sm:text-2xl"
                  >
                    <IconBrandWhatsapp
                      className="size-6 shrink-0"
                      aria-hidden="true"
                    />
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <Separator />
            <div>
              <h2 className="label-tech text-cobalt">Status</h2>
              <ul className="mt-4 flex flex-col gap-2 text-base text-ink/80">
                <li>{site.availability}</li>
                <li>Remote + on-site</li>
                <li>{site.footprint}</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h2 className="label-tech text-cobalt">What happens next</h2>
              <ol className="mt-4 flex flex-col gap-3 text-base text-ink/80">
                <li className="flex gap-3">
                  <span className="label-tech tabular text-cobalt">01</span>
                  We read your message and reply by email.
                </li>
                <li className="flex gap-3">
                  <span className="label-tech tabular text-cobalt">02</span>
                  We ask a few questions about the situation.
                </li>
                <li className="flex gap-3">
                  <span className="label-tech tabular text-cobalt">03</span>
                  We propose where the work should start.
                </li>
              </ol>
            </div>
          </aside>

          <div>
            <h2 className="label-tech text-cobalt">Or write it down here</h2>
            <p className="mt-4 mb-8 max-w-md text-base leading-relaxed text-ink/75">
              This form opens your email client with the message pre-filled —
              nothing is stored on this website.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
