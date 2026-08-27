"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Mail, FileText, Terminal } from "lucide-react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { BehanceIcon, GithubIcon, LinkedinIcon } from "./icons";
import { scrollToSection } from "@/lib/scrollTo";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "design", label: "Design Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function run(action: () => void) {
    action();
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground cursor-pointer"
      >
        <Terminal size={14} className="text-accent" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="ml-1 rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted group-hover:text-accent">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-[12vh] px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Command label="Command Menu" className="font-mono">
              <div className="flex items-center gap-2 border-b border-border px-4">
                <span className="text-accent">$</span>
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent py-3 text-base text-foreground outline-none placeholder:text-muted sm:text-sm"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted"
                >
                  {sections.map((s) => (
                    <Command.Item
                      key={s.id}
                      onSelect={() => run(() => scrollToSection(s.id))}
                      className="cursor-pointer rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-surface-2 data-[selected=true]:text-accent"
                    >
                      {s.label}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group
                  heading="Projects"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted"
                >
                  {projects.map((p) => (
                    <Command.Item
                      key={p.slug}
                      onSelect={() => run(() => window.open(p.href, "_blank"))}
                      className="cursor-pointer rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-surface-2 data-[selected=true]:text-accent"
                    >
                      {p.title}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group
                  heading="Links"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted"
                >
                  <Command.Item
                    onSelect={() => run(() => window.open(profile.links.github, "_blank"))}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-surface-2 data-[selected=true]:text-accent"
                  >
                    <GithubIcon size={14} /> GitHub
                  </Command.Item>
                  <Command.Item
                    onSelect={() => run(() => window.open(profile.links.linkedin, "_blank"))}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-surface-2 data-[selected=true]:text-accent"
                  >
                    <LinkedinIcon size={14} /> LinkedIn
                  </Command.Item>
                  <Command.Item
                    onSelect={() => run(() => window.open(profile.links.behance, "_blank"))}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-surface-2 data-[selected=true]:text-accent"
                  >
                    <BehanceIcon size={14} /> Behance
                  </Command.Item>
                  <Command.Item
                    onSelect={() => run(() => window.open(`mailto:${profile.email}`, "_blank"))}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-surface-2 data-[selected=true]:text-accent"
                  >
                    <Mail size={14} /> Email
                  </Command.Item>
                  {profile.links.resume && (
                    <Command.Item
                      onSelect={() => run(() => window.open(profile.links.resume, "_blank"))}
                      className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-surface-2 data-[selected=true]:text-accent"
                    >
                      <FileText size={14} /> Resume
                    </Command.Item>
                  )}
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
