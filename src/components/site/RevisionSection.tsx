import { RefreshCw } from "lucide-react";
import { Reveal } from "./primitives";

export function RevisionSection() {
  return (
    <section className="py-10" aria-labelledby="revision-title">
      <div className="container-site">
        <Reveal className="card-premium flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left sm:p-10">
          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border border-brand/30 bg-brand-soft text-brand">
            <RefreshCw className="size-6" aria-hidden="true" />
          </span>
          <div>
            <h2 id="revision-title" className="font-display text-2xl font-bold">
              Built With Your Feedback in Mind
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
              Every website package includes up to 5 revisions within the agreed project scope,
              giving us room to refine the design and details before launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
