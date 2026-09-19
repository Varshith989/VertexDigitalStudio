import { Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site-data";
import { Reveal } from "./primitives";

export function FounderSection() {
  return (
    <section className="section-pad border-t border-border" aria-labelledby="founder-title">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="card-premium relative mx-auto max-w-sm overflow-hidden p-8 sm:p-10">
            <div className="bg-glow pointer-events-none absolute inset-0" />
            <div className="relative">
              <div className="flex size-24 items-center justify-center rounded-2xl border border-brand/30 bg-brand-soft font-display text-3xl font-extrabold text-brand">
                VR
              </div>
              <p className="mt-8 font-display text-2xl font-bold">{site.founder}</p>
              <p className="mt-1 text-sm text-muted-foreground">{site.founderTitle}</p>
              <div className="mt-6 flex gap-3">
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Varshith Reddy on LinkedIn"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Varshith Reddy on GitHub"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <Github className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow mb-4">The Founder</p>
          <h2 id="founder-title" className="text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
            Meet Varshith Reddy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vertex Digital Studio was founded by Varshith Reddy, a web developer focused on
            creating modern, responsive and professional websites for businesses, startups,
            professionals and personal brands.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The studio focuses on understanding what each client needs, turning their ideas into
            a clear website structure and building a polished online presence that represents
            their business professionally.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
