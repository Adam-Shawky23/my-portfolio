import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cloudProvider, cloudTracks, type CloudProject } from "@/content/cloud";
import Reveal from "./Reveal";

function CloudCard({ p }: { p: CloudProject }) {
  const body = (
    <>
      <div className="relative aspect-[40/21] overflow-hidden border-b border-border">
        <Image
          src={p.image}
          alt={p.title}
          fill
          unoptimized
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            {p.title}
          </h4>
          {p.href && (
            <ArrowUpRight
              size={16}
              className="shrink-0 text-muted transition-colors group-hover:text-accent"
            />
          )}
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.services.map((s) => (
            <span
              key={s}
              className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/40";

  return p.href ? (
    <a href={p.href} target="_blank" rel="noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

export default function Cloud() {
  return (
    <section id="cloud" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal className="mb-10">
        <p className="font-mono text-sm text-accent">04. Cloud</p>
        <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
          Hands-on AWS projects
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Guided builds completed through {cloudProvider} -- core AWS
          infrastructure, then a multi-part conversational chatbot on Amazon
          Lex and Lambda.
        </p>
      </Reveal>

      <div className="space-y-12">
        {cloudTracks.map((track) => (
          <div key={track.title}>
            <Reveal>
              <h3 className="mb-4 font-mono text-sm text-foreground">
                {track.title}{" "}
                <span className="text-muted">({track.projects.length})</span>
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {track.projects.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.05} className="h-full">
                  <CloudCard p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
