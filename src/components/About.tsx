import { profile } from "@/content/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">06. About</p>
        <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
          A bit more context
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
        <Reveal delay={0.1} className="md:col-span-2 space-y-4 text-base leading-relaxed text-muted">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="space-y-5">
          <div className="rounded-xl border border-border bg-surface p-6 font-mono text-sm transition-colors hover:border-accent/30">
            <p className="text-accent">{"// quick facts"}</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <span className="text-foreground">role:</span> {profile.role}
              </li>
              <li>
                <span className="text-foreground">degree:</span> {profile.degree}
              </li>
              <li>
                <span className="text-foreground">gpa:</span> {profile.gpa}
              </li>
              <li>
                <span className="text-foreground">grad:</span> {profile.graduation}
              </li>
              <li>
                <span className="text-foreground">based:</span> {profile.location}
              </li>
              <li>
                <span className="text-foreground">languages:</span>{" "}
                {profile.languages.map((l) => l.name).join(", ")}
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 font-mono text-sm transition-colors hover:border-accent/30">
            <p className="text-accent">{"// certifications"}</p>
            <div className="mt-3 space-y-3">
              {profile.certifications.map((group) => (
                <div key={group.issuer}>
                  <p className="text-foreground">{group.issuer}</p>
                  <ul className="mt-1 space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs leading-relaxed text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
