import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "404 -- Not Found",
  description: `The page you're looking for doesn't exist on ${profile.name}'s portfolio.`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[85vh] max-w-5xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-muted">visitor@portfolio: ~</span>
        </div>
        <div className="px-5 py-8 text-left font-mono text-sm sm:px-8">
          <p className="text-muted">
            <span className="text-accent">visitor@portfolio</span>
            <span className="text-muted">:~$</span>{" "}
            <span className="text-foreground">cd /page-not-found</span>
          </p>
          <p className="mt-3 text-foreground">
            <span className="text-accent">404</span>: no such file or directory
          </p>
          <p className="mt-1 text-muted cursor-blink" />
        </div>
      </div>

      <p className="mt-8 max-w-md text-sm text-muted">
        That path doesn&rsquo;t resolve to anything -- it was moved, renamed, or never existed.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-sm">
        <Link
          href="/"
          className="rounded-md bg-accent px-4 py-2 font-medium text-background transition-opacity hover:opacity-90"
        >
          cd ~
        </Link>
        <Link
          href="/#projects"
          className="rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          view projects
        </Link>
        <Link
          href="/#contact"
          className="rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          contact
        </Link>
      </div>
    </main>
  );
}
