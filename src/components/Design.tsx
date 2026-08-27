import { ArrowUpRight } from "lucide-react";
import { designProjects } from "@/content/design";
import { profile } from "@/content/profile";
import { BehanceIcon } from "./icons";
import Reveal from "./Reveal";

export default function Design() {
  return (
    <section id="design" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm text-accent">04. Design Work</p>
            <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
              UI/UX &amp; web design
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Landing pages, branding, and product UI from client and personal
              work -- full case studies on Behance.
            </p>
          </div>
          <a
            href={profile.links.behance}
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            <BehanceIcon size={16} /> View on Behance
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {designProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 0.05}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/40"
            >
              {p.title}
              <ArrowUpRight
                size={16}
                className="shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
