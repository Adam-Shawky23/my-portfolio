"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, type ProjectCategory } from "@/content/projects";
import Reveal from "./Reveal";

const filters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "all" },
  { id: "ai", label: "ai / agents" },
  { id: "research", label: "research" },
  { id: "fullstack", label: "fullstack" },
  { id: "systems", label: "systems" },
];

function handleGlowMove(e: React.MouseEvent<HTMLElement>) {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const glow = target.querySelector<HTMLElement>("[data-glow]");
  if (glow) {
    glow.style.background = `radial-gradient(220px circle at ${x}px ${y}px, rgba(52,226,201,0.15), transparent 70%)`;
  }
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-accent">03. Projects</p>
          <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`cursor-pointer rounded-full border px-3 py-1.5 transition-colors ${
                filter === f.id
                  ? "border-accent text-accent bg-accent/10"
                  : "border-border text-muted hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              onMouseMove={handleGlowMove}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div
                data-glow
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between gap-3">
                <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-1 font-mono text-xs text-accent/80 break-words">{p.tagline}</p>
              <p className="mt-3 break-words text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.demoHref && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(p.demoHref, "_blank");
                  }}
                  className="mt-4 inline-flex w-fit items-center gap-1 font-mono text-xs text-accent hover:underline"
                >
                  <ExternalLink size={12} /> live demo
                </span>
              )}
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
