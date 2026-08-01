import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col justify-end bg-ink pt-14 text-paper">
      <div className="mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-10">
        <p className="label-tech text-cobalt">404</p>
        <h1 className="display-crop mt-4 font-display text-[16vw] font-bold uppercase tracking-tight sm:text-[10vw]">
          Page not found.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
          This page does not exist. Use one of the links below to keep browsing.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-paper hover:bg-white/10 hover:text-paper"
          >
            <Link href="/work">View our work</Link>
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
