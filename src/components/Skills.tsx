import { profile } from "@/content/profile";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">05. Skills</p>
        <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
          What I work with
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Object.entries(profile.skills).map(([group, items], i) => (
          <Reveal key={group} delay={(i % 2) * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
              <h3 className="font-mono text-sm text-accent">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
