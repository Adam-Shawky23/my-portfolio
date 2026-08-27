import { profile } from "@/content/profile";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">02. Experience</p>
        <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="mt-10 space-y-6">
        {profile.experience.map((job, i) => (
          <Reveal key={`${job.org}-${job.period}`} delay={i * 0.08}>
            <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-medium text-foreground">
                  {job.role} <span className="text-muted">@ {job.org}</span>
                </h3>
                <span className="font-mono text-xs text-accent">{job.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted">{job.meta}</p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
