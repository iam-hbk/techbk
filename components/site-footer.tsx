import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { TechBKMark } from "@/components/techbk-logo";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper" aria-label="Site footer">
      <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          <div className="flex max-w-xl flex-col gap-6">
            <TechBKMark className="size-10 text-cobalt" />
            <p className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {site.footerTagline}
            </p>
            <p className="label-tech text-structure">
              Remote + on-site / {site.footprint}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer" className="flex flex-col gap-3">
              <p className="label-tech text-structure">Site</p>
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="min-h-6 text-sm text-paper/80 outline-offset-4 transition-colors hover:text-cobalt"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="label-tech text-structure">Contact</p>
              <a
                href={site.emailHref}
                className="inline-flex min-h-6 items-center gap-2.5 text-sm text-paper/80 outline-offset-4 transition-colors hover:text-cobalt"
              >
                <IconMail className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 items-center gap-2.5 text-sm text-paper/80 outline-offset-4 transition-colors hover:text-cobalt"
              >
                <IconBrandWhatsapp
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
                {site.phone}
              </a>
              <a
                href={site.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 items-center gap-2.5 text-sm text-paper/80 outline-offset-4 transition-colors hover:text-cobalt"
              >
                <IconBrandGithub
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="label-tech text-structure">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="label-tech text-structure">{site.availability}</p>
        </div>
      </div>
    </footer>
  );
}
