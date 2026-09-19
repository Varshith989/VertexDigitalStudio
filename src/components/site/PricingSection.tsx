import { Check } from "lucide-react";
import { pricing } from "@/lib/site-data";
import { Cta, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

type Plan = (typeof pricing)[number];

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        "card-premium relative flex h-full flex-col p-7",
        plan.popular && "border-brand/40 shadow-glow hover:border-brand/60",
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-brand-foreground">
          POPULAR
        </span>
      )}
      <p className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">
        {plan.name}
      </p>
      <p className="mt-4 font-display text-4xl font-extrabold tracking-tight">{plan.price}</p>
      <p className="mt-3 min-h-10 text-sm leading-relaxed text-muted-foreground">
        {plan.description}
      </p>
      <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
            <span className="text-foreground/90">{item}</span>
          </li>
        ))}
      </ul>
      <Cta href="#contact" variant={plan.popular ? "brand" : "outline"} className="mt-8 w-full">
        {plan.cta}
      </Cta>
    </article>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="section-pad scroll-mt-20 border-t border-border" aria-labelledby="pricing-title">
      <div className="container-site">
        <SectionHeading
          label="Simple, Transparent Pricing"
          title="Choose the Right Website for Your Needs"
          text="Clear starting prices for common website requirements. Custom projects are quoted based on scope and functionality."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <PricingCard plan={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-2xl border border-border bg-surface p-7 text-center sm:p-9">
          <p className="font-display text-xl font-bold">Need something different?</p>
          <p className="mt-2 text-muted-foreground">
            Tell us what you're building and we'll create a custom quote.
          </p>
          <Cta href="#contact" variant="outline" className="mt-6">
            Discuss Your Project
          </Cta>
          <div className="mt-7 space-y-1 border-t border-border pt-5 text-xs text-muted-foreground">
            <p>
              Final pricing may vary depending on pages, functionality, integrations and project
              requirements.
            </p>
            <p>Domain and hosting charges may be separate depending on the project.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
