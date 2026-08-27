"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { designProjects } from "@/content/design";
import { scrollToSection } from "@/lib/scrollTo";

const BOOT_COMMAND = "whoami";

type Line = { id: number; kind: "input" | "output"; text: string };

const HELP_TEXT = `available commands:

  help                 show this list
  whoami                who am I
  about                 short bio
  experience            work history
  projects              list projects
  design                list design work
  skills                list skills
  contact               how to reach me
  resume                open my resume
  github | linkedin | behance   open a profile
  open <name>           open a project or design piece by name
  sudo hire-me           :)
  clear                 clear the terminal
  ls                     list sections on this site`;

function findProject(query: string) {
  const q = query.toLowerCase();
  const proj = projects.find(
    (p) => p.slug.includes(q) || p.title.toLowerCase().includes(q)
  );
  if (proj) return proj;
  const design = designProjects.find((d) => d.title.toLowerCase().includes(q));
  if (design) return { title: design.title, href: design.href };
  return null;
}

function runCommand(raw: string): { output: string; action?: () => void } {
  const trimmed = raw.trim();
  if (!trimmed) return { output: "" };
  const [cmd, ...rest] = trimmed.split(/\s+/);
  const arg = rest.join(" ");
  const lower = cmd.toLowerCase();

  switch (lower) {
    case "help":
      return { output: HELP_TEXT };
    case "whoami":
      return {
        output: `${profile.name}\n${profile.role}\n${profile.tagline}`,
      };
    case "about":
      return {
        output: profile.about.join("\n\n"),
        action: () => scrollToSection("about"),
      };
    case "experience":
      return {
        output: profile.experience
          .map((e) => `${e.role} @ ${e.org}  (${e.period})`)
          .join("\n"),
        action: () => scrollToSection("experience"),
      };
    case "projects":
      return {
        output:
          projects.map((p) => `- ${p.title} -- ${p.tagline}`).join("\n") +
          "\n\ntype 'open <name>' to view one",
        action: () => scrollToSection("projects"),
      };
    case "design":
      return {
        output:
          designProjects.map((d) => `- ${d.title}`).join("\n") +
          "\n\ntype 'open <name>' to view one",
        action: () => scrollToSection("design"),
      };
    case "skills":
      return {
        output: Object.entries(profile.skills)
          .map(([group, items]) => `${group}: ${items.join(", ")}`)
          .join("\n"),
        action: () => scrollToSection("skills"),
      };
    case "contact":
      return {
        output: `email: ${profile.email}\ngithub: ${profile.links.github}\nlinkedin: ${profile.links.linkedin}\nbehance: ${profile.links.behance}`,
        action: () => scrollToSection("contact"),
      };
    case "resume":
      if (!profile.links.resume) return { output: "no resume link set yet." };
      return {
        output: `opening resume...`,
        action: () => window.open(profile.links.resume, "_blank"),
      };
    case "github":
    case "linkedin":
    case "behance": {
      const href = profile.links[lower as "github" | "linkedin" | "behance"];
      return {
        output: `opening ${href}`,
        action: () => window.open(href, "_blank"),
      };
    }
    case "socials":
    case "links":
      return {
        output: `github: ${profile.links.github}\nlinkedin: ${profile.links.linkedin}\nbehance: ${profile.links.behance}`,
      };
    case "open": {
      if (!arg) return { output: "usage: open <project name>" };
      const match = findProject(arg);
      if (!match) return { output: `no project matches '${arg}'. try 'projects' or 'design'.` };
      return {
        output: `opening ${match.title}...`,
        action: () => window.open(match.href, "_blank"),
      };
    }
    case "sudo":
      if (rest.join(" ").toLowerCase() === "hire-me") {
        return {
          output: "permission granted.\nredirecting to contact...",
          action: () => scrollToSection("contact"),
        };
      }
      return { output: `sudo: ${arg || "a command is required"}: not found` };
    case "ls":
      return {
        output: "experience/  projects/  design/  skills/  about/  contact/",
      };
    case "clear":
      return { output: "__CLEAR__" };
    case "echo":
      return { output: arg };
    case "date":
      return { output: new Date().toString() };
    default:
      return { output: `command not found: ${cmd}. type 'help' for a list of commands.` };
  }
}

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(BOOT_COMMAND.slice(0, i));
      if (i >= BOOT_COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (lines.length === 0) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function pushLine(kind: Line["kind"], text: string) {
    idRef.current += 1;
    setLines((prev) => [...prev, { id: idRef.current, kind, text }]);
  }

  function submit() {
    const raw = value;
    if (!raw.trim()) {
      setValue("");
      return;
    }
    pushLine("input", raw);
    const { output, action } = runCommand(raw);
    if (output === "__CLEAR__") {
      setLines([]);
    } else if (output) {
      pushLine("output", output);
    }
    action?.();
    setHistory((prev) => [...prev, raw]);
    setHistoryIndex(null);
    setValue("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex =
        historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    }
  }

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-6 py-24"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-muted">
            visitor@portfolio: ~
          </span>
        </div>

        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="max-h-[55vh] overflow-y-auto px-5 py-8 font-mono sm:px-8 sm:py-12"
        >
          <p className="text-sm text-muted">
            <span className="text-accent">visitor@portfolio</span>
            <span className="text-muted">:~$</span>{" "}
            <span className="text-foreground">
              {typed}
              {!done && <span className="cursor-blink" />}
            </span>
          </p>

          {done && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <h1 className="text-glow font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {profile.name}
                </h1>
                <p className="mt-2 font-sans text-lg text-accent sm:text-xl">
                  {profile.role}
                </p>
                <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted">
                  {profile.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                    className="rounded-md bg-accent px-4 py-2 font-medium text-background transition-opacity hover:opacity-90"
                  >
                    View projects
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    Get in touch
                  </a>
                </div>

                <p className="mt-8 text-xs text-muted">
                  This terminal is real -- try typing{" "}
                  <span className="text-accent">help</span>.
                </p>
              </motion.div>

              <div className="mt-4 space-y-1.5 text-base sm:text-sm">
                {lines.map((line) =>
                  line.kind === "input" ? (
                    <p key={line.id} className="text-foreground">
                      <span className="text-accent">visitor@portfolio</span>
                      <span className="text-muted">:~$</span> {line.text}
                    </p>
                  ) : (
                    <p
                      key={line.id}
                      className="whitespace-pre-wrap text-muted"
                    >
                      {line.text}
                    </p>
                  )
                )}

                <div className="flex items-center gap-2 pt-1">
                  <span className="shrink-0 text-accent">visitor@portfolio</span>
                  <span className="shrink-0 text-muted">:~$</span>
                  <input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={onKeyDown}
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="off"
                    className="min-w-0 flex-1 bg-transparent text-foreground outline-none"
                    aria-label="Portfolio terminal input"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
