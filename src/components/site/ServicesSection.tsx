import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { IconTile, Reveal, SectionHeading } from "./primitives";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-premium group flex h-full flex-col p-7">
      <div className="flex items-start justify-between">
        <IconTile name={service.icon} />
        <span className="font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground">
          {service.index}
        </span>
      </div>
      <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-7 flex items-center justify-between gap-4 border-t border-border pt-5">
        <a
          href="#pricing"
          className="text-xs font-medium text-muted-foreground transition-colors hover:text-brand"
        >
          View Pricing
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-foreground"
        >
          {service.cta}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-pad scroll-mt-20" aria-labelledby="services-title">
      <div className="container-site">
        <SectionHeading
          label="What We Build"
          title="Websites Built Around Your Needs"
          text="From simple landing pages to complete business websites, we create digital experiences tailored to what you actually need."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
