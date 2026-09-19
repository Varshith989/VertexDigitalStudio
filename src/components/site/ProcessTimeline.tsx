import { processSteps } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

export function ProcessTimeline() {
  return (
    <section id="process" className="section-pad scroll-mt-20 border-t border-border" aria-labelledby="process-title">
      <div className="container-site">
        <SectionHeading label="How It Works" title="From Idea to Live Website" />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* connector line */}
          <span
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-brand/50 via-border to-transparent lg:left-0 lg:top-5 lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden="true"
          />
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 100} className="relative pl-14 lg:pl-0 lg:pt-14">
              <span className="absolute left-0 top-0 inline-flex size-10 items-center justify-center rounded-full border border-brand/40 bg-background font-display text-xs font-bold text-brand shadow-[0_0_0_6px_var(--background)]">
                {s.step}
              </span>
              <h3 className="font-display text-base font-bold uppercase tracking-[0.1em]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              {"note" in s && s.note && (
                <p className="mt-3 rounded-lg border border-brand/20 bg-brand-soft px-3 py-2 text-xs font-medium text-foreground">
                  {s.note}
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
