import { ArrowRight, Check } from "lucide-react";
import { Cta } from "./primitives";
import { site } from "@/lib/site-data";

const indicators = ["Modern Design", "Responsive Development", "Up to 5 Revisions"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28"
      aria-labelledby="hero-title"
    >
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow mb-6">Web Design • Development • Digital Experiences</p>
          <h1
            id="hero-title"
            className="text-gradient text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.4rem]"
          >
            We Build Websites That Make Businesses Stand Out.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Modern, responsive and conversion-focused websites for businesses, startups and
            personal brands.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 text-sm">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            <span className="text-muted-foreground">Websites starting from</span>
            <span className="font-display text-base font-bold text-foreground">
              {site.startingPrice}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact" size="lg">
              Start a Project <ArrowRight />
            </Cta>
            <Cta href="#services" size="lg" variant="outline">
              Explore Services
            </Cta>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {indicators.map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

/* Abstract browser-mockup composition built purely with CSS */
function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:200ms] lg:max-w-none"
      aria-hidden="true"
    >
      <div className="relative aspect-[5/4] w-full">
        {/* Back window */}
        <div className="absolute right-0 top-0 h-[68%] w-[78%] rounded-2xl border border-border bg-surface/80 shadow-mockup">
          <WindowBar />
          <div className="grid grid-cols-3 gap-3 p-5">
            <div className="col-span-2 h-24 rounded-xl bg-gradient-to-br from-brand/30 to-brand/5" />
            <div className="h-24 rounded-xl bg-surface-elevated" />
            <div className="h-3 w-3/4 rounded bg-foreground/15" />
            <div className="col-span-2 h-3 w-1/2 rounded bg-foreground/10" />
            <div className="h-16 rounded-xl bg-surface-elevated" />
            <div className="h-16 rounded-xl bg-surface-elevated" />
            <div className="h-16 rounded-xl bg-surface-elevated" />
          </div>
        </div>

        {/* Front window */}
        <div className="animate-float absolute bottom-0 left-0 h-[70%] w-[72%] rounded-2xl border border-border bg-surface shadow-mockup">
          <WindowBar />
          <div className="p-6">
            <div className="mb-3 h-2 w-16 rounded bg-brand/70" />
            <div className="h-5 w-4/5 rounded bg-foreground/80" />
            <div className="mt-2 h-5 w-3/5 rounded bg-foreground/60" />
            <div className="mt-4 h-2.5 w-11/12 rounded bg-foreground/15" />
            <div className="mt-2 h-2.5 w-2/3 rounded bg-foreground/15" />
            <div className="mt-6 flex gap-3">
              <div className="h-9 w-28 rounded-full bg-brand" />
              <div className="h-9 w-28 rounded-full border border-input" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-14 rounded-lg bg-surface-elevated" />
              <div className="h-14 rounded-lg bg-surface-elevated" />
              <div className="h-14 rounded-lg bg-surface-elevated" />
            </div>
          </div>
        </div>

        {/* Mobile card */}
        <div className="absolute -bottom-4 right-6 hidden h-[52%] w-[26%] rounded-[1.4rem] border border-border bg-surface-elevated p-3 shadow-mockup sm:block">
          <div className="mx-auto mb-3 h-1 w-8 rounded bg-foreground/20" />
          <div className="h-16 rounded-xl bg-gradient-to-br from-brand/40 to-brand/10" />
          <div className="mt-3 h-2 w-4/5 rounded bg-foreground/60" />
          <div className="mt-2 h-2 w-3/5 rounded bg-foreground/20" />
          <div className="mt-4 h-7 rounded-full bg-brand" />
        </div>

        {/* Floating chip */}
        <div className="absolute -left-2 top-[18%] hidden items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-card backdrop-blur sm:flex">
          <span className="size-2 rounded-full bg-success" />
          Responsive · Fast · Live
        </div>
      </div>
    </div>
  );
}

function WindowBar() {
  return (
    <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
      <span className="size-2.5 rounded-full bg-foreground/15" />
      <span className="size-2.5 rounded-full bg-foreground/15" />
      <span className="size-2.5 rounded-full bg-foreground/15" />
      <span className="ml-3 h-2 w-24 rounded bg-foreground/10" />
    </div>
  );
}
