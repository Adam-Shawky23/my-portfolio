"use client";

import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import CommandPalette from "./CommandPalette";
import { BehanceIcon, GithubIcon, LinkedinIcon } from "./icons";
import { scrollToSection } from "@/lib/scrollTo";

const links = [
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "design", label: "design" },
  { id: "skills", label: "skills" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(id: string) {
    setOpen(false);
    scrollToSection(id);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => go("hero")}
          className="shrink-0 whitespace-nowrap font-mono text-sm text-foreground cursor-pointer"
        >
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase().replace(/\s+/g, "-")}
        </button>

        <nav className="hidden items-center gap-6 font-mono text-sm text-muted lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="cursor-pointer transition-colors hover:text-accent"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          {profile.links.resume && (
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:flex"
            >
              <FileText size={14} /> resume
            </a>
          )}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden p-1 text-muted transition-colors hover:text-accent sm:inline-flex"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden p-1 text-muted transition-colors hover:text-accent sm:inline-flex"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.links.behance}
            target="_blank"
            rel="noreferrer"
            className="hidden p-1 text-muted transition-colors hover:text-accent sm:inline-flex"
            aria-label="Behance"
          >
            <BehanceIcon size={18} />
          </a>
          <CommandPalette />
          <button
            onClick={() => setOpen((o) => !o)}
            className="-mr-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:text-accent lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background/95 px-4 py-4 font-mono text-sm lg:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="cursor-pointer rounded-md px-2 py-2.5 text-left text-muted transition-colors hover:bg-surface hover:text-accent"
              >
                {l.label}
              </button>
            ))}
          </nav>
          {profile.links.resume && (
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mx-auto mt-3 flex max-w-5xl items-center gap-2 rounded-md border border-border px-2 py-2.5 text-muted transition-colors hover:border-accent/50 hover:text-accent sm:hidden"
            >
              <FileText size={16} /> resume
            </a>
          )}
          <div className="mx-auto mt-3 flex max-w-5xl items-center gap-5 border-t border-border/70 px-2 pt-4 sm:hidden">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.links.behance}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="Behance"
            >
              <BehanceIcon size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
