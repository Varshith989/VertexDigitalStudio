import { whyVertex } from "@/lib/site-data";
import { IconTile, Reveal, SectionHeading } from "./primitives";

export function WhyVertex() {
  return (
    <section className="section-pad border-t border-border" aria-labelledby="why-title">
      <div className="container-site">
        <SectionHeading label="Why Vertex" title="A Better Way to Build Your Website" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyVertex.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 3) * 90}>
              <article className="card-premium h-full p-7">
                <IconTile name={w.icon} />
                <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-[0.12em]">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
