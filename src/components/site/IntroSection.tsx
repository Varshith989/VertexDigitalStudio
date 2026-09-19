import { IconTile, Reveal, SectionHeading } from "./primitives";

const blocks = [
  {
    icon: "PenTool",
    title: "Modern Design",
    text: "Clean and polished interfaces designed to make your brand look professional.",
  },
  {
    icon: "MonitorSmartphone",
    title: "Responsive Experience",
    text: "Websites designed to work beautifully across phones, tablets and desktops.",
  },
  {
    icon: "Target",
    title: "Business-Focused",
    text: "Clear structure, strong calls-to-action and an experience built around your goals.",
  },
];

export function IntroSection() {
  return (
    <section className="section-pad border-t border-border" aria-labelledby="intro-title">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">Your Digital Presence Matters</p>
          <h2 id="intro-title" className="text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
            Your Website Is Often Your First Impression.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A professional website helps your business establish credibility, communicate what
            you offer and give potential customers a clear way to connect with you. At Vertex
            Digital Studio, we build modern websites around your brand, your goals and your
            audience.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <article className="card-premium flex h-full gap-5 p-6">
                <IconTile name={b.icon} className="shrink-0" />
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
