import { technologies } from "@/lib/site-data";
import { Reveal } from "./primitives";

export function TechnologySection() {
  return (
    <section className="border-t border-border py-14" aria-labelledby="tech-title">
      <div className="container-site flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <Reveal className="text-center lg:text-left">
          <p className="eyebrow">Modern Technology</p>
          <h2 id="tech-title" className="mt-2 font-display text-xl font-bold">
            Built with a modern, reliable stack
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap justify-center gap-2 lg:justify-end" aria-label="Technologies">
            {technologies.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
