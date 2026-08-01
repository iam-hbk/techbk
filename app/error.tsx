"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-svh flex-col justify-end bg-ink pt-14 text-paper">
      <div className="mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-10">
        <p className="label-tech text-cobalt">Error</p>
        <h1 className="display-crop mt-4 font-display text-[13vw] font-bold uppercase tracking-tight sm:text-[8vw]">
          Something broke.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
          An unexpected error occurred while loading this page. You can try
          again, or reach us directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button size="lg" onClick={reset}>
            Try again
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-paper hover:bg-white/10 hover:text-paper"
          >
            <a href={site.emailHref}>Email us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
