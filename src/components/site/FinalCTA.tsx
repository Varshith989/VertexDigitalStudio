import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-data";
import { Cta, Reveal } from "./primitives";

export function FinalCTA() {
  return (
    <section className="section-pad" aria-labelledby="final-cta-title">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="bg-glow pointer-events-none absolute inset-0" />
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="final-cta-title" className="text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
              Your Next Website Could Start Today.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you need a simple landing page, a professional business website or a custom
              web solution, let's turn your idea into something you can confidently put online.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Cta href="#contact" size="lg">
                Start a Project <ArrowRight />
              </Cta>
              <Cta href="#services" size="lg" variant="outline">
                View Services
              </Cta>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Websites starting from{" "}
              <span className="font-semibold text-foreground">{site.startingPrice}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
