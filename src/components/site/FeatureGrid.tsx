import { features } from "@/lib/site-data";
import { Icon, Reveal, SectionHeading } from "./primitives";

export function FeatureGrid() {
  return (
    <section className="section-pad border-t border-border" aria-labelledby="features-title">
      <div className="container-site">
        <SectionHeading label="Included" title="Everything You Need to Launch Online" />
        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal as="li" key={f.label} delay={(i % 4) * 60}>
              <div className="card-premium flex h-full items-center gap-4 px-5 py-4">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon name={f.icon} className="size-4" />
                </span>
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
