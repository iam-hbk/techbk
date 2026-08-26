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
  const [isExpanded, setIsExpanded] = React.useState(true);
  const lastScrollY = React.useRef(0);
  const collapseScrollY = React.useRef(0);

  React.useEffect(() => {
    let frame = 0;
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const latest = window.scrollY;
        const previous = lastScrollY.current;

        if (window.innerWidth >= 768) {
          if (isExpanded && latest > previous && latest > 150) {
            setIsExpanded(false);
            collapseScrollY.current = latest;
          } else if (
            !isExpanded &&
            latest < previous &&
            collapseScrollY.current - latest > 80
          ) {
            setIsExpanded(true);
          }
        }

        lastScrollY.current = latest;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [isExpanded]);

  return (
    <header
      className={cn(
        "fixed top-3 left-1/2 z-50 h-14 -translate-x-1/2 overflow-hidden rounded-full border font-sans shadow-[0_18px_50px_-24px_rgba(8,11,18,0.65)] backdrop-blur-xl will-change-[width] transition-[width,box-shadow,background-color,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        isExpanded
          ? "w-[calc(100%_-_1rem)] md:w-[min(1000px,calc(100%_-_3rem))] md:delay-0"
          : "w-[calc(100%_-_1rem)] md:w-14 md:delay-100",
        onDark
          ? "border-white/10 bg-ink/75 text-paper"
          : "border-border bg-background/80 text-foreground"
      )}
    >
      <div className="relative mx-auto flex h-full items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
        <Link
          href="/"
          aria-label="TecHBK home"
          tabIndex={isExpanded ? undefined : -1}
          className={cn(
            "shrink-0 outline-offset-4 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
            isExpanded
              ? "md:delay-300"
              : "md:pointer-events-none md:-translate-x-4 md:opacity-0 md:delay-0"
          )}
        >
          <TechBKLogo />
        </Link>

        <nav
          aria-label="Primary"
          aria-hidden={!isExpanded}
          className={cn(
            "hidden items-center gap-7 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none md:flex",
            isExpanded
              ? "md:delay-300"
              : "md:pointer-events-none md:translate-x-4 md:opacity-0 md:delay-0"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={isExpanded ? undefined : -1}
              className={cn(
                "font-sans text-xs font-semibold uppercase outline-offset-4 transition-colors hover:text-cobalt",
                pathname === item.href && "text-cobalt"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2 rounded-full px-5">
            <a href={site.emailHref} tabIndex={isExpanded ? undefined : -1}>
              Email us
              <IconArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Expand navigation"
          aria-hidden={isExpanded}
          tabIndex={isExpanded ? -1 : 0}
          onClick={() => setIsExpanded(true)}
          className={cn(
            "absolute inset-0 hidden items-center justify-center outline-offset-[-4px] transition-[opacity,transform,color] duration-300 ease-out motion-reduce:transition-none md:flex",
            isExpanded
              ? "pointer-events-none -rotate-6 scale-75 opacity-0 delay-0"
              : "cursor-pointer rotate-0 scale-100 opacity-100 delay-500 hover:text-cobalt"
          )}
        >
          <IconMenu2 className="size-5" aria-hidden="true" />
        </button>

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
                <p className="pt-2 font-sans text-xs font-semibold uppercase text-muted-foreground">
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
