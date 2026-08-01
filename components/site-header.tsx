"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconArrowUpRight, IconMenu2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { TechBKLogo } from "@/components/techbk-wordmark";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const onDark = pathname === "/";
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b",
        onDark
          ? "border-white/10 bg-ink text-paper"
          : "border-border bg-background text-foreground"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          aria-label="TecHBK — home"
          className="outline-offset-4"
        >
          <TechBKLogo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "label-tech outline-offset-4 transition-colors hover:text-cobalt",
                pathname === item.href && "text-cobalt"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href={site.emailHref}>
              Email us
              <IconArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <IconMenu2 />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <TechBKLogo />
                </SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 px-4 pt-4"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center font-display text-2xl font-semibold tracking-tight outline-offset-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Separator className="my-4" />
              <div className="flex flex-col gap-3 px-4 pb-6">
                <Button asChild>
                  <a href={site.emailHref}>
                    Email us
                    <IconArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp us
                    <IconArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <p className="label-tech pt-2 text-muted-foreground">
                  {site.availability}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
