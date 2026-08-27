"use client";

import { useState } from "react";
import { Check, Copy, FileText, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { BehanceIcon, GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";

function onMagneticMove(e: React.MouseEvent<HTMLButtonElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const relX = e.clientX - rect.left - rect.width / 2;
  const relY = e.clientY - rect.top - rect.height / 2;
  e.currentTarget.style.transform = `translate(${relX * 0.25}px, ${relY * 0.35}px)`;
}

function onMagneticLeave(e: React.MouseEvent<HTMLButtonElement>) {
  e.currentTarget.style.transform = "translate(0, 0)";
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">07. Contact</p>
        <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
          Let&apos;s talk
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          I&apos;m looking for internship / junior fullstack &amp; AI engineering
          opportunities. The fastest way to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={copyEmail}
          onMouseMove={onMagneticMove}
          onMouseLeave={onMagneticLeave}
          className="flex cursor-pointer items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-medium text-background transition-transform duration-150 ease-out hover:opacity-90"
        >
          <Mail size={16} />
          {profile.email}
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>

        {profile.links.resume && (
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FileText size={16} /> Resume
          </a>
        )}

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          <GithubIcon size={16} /> GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          <LinkedinIcon size={16} /> LinkedIn
        </a>
        <a
          href={profile.links.behance}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          <BehanceIcon size={16} /> Behance
        </a>
      </Reveal>
    </section>
  );
}
