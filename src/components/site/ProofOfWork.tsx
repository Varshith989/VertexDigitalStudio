import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/site-data";
import { Cta, Reveal, SectionHeading } from "./primitives";
import aerova from "@/assets/aerova-travels.jpg";

const projectImages: Record<Project["imageKey"], string> = { aerova };

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-premium overflow-hidden p-2 sm:p-3">
      <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr]">
        {/* Browser mockup */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-[calc(var(--radius-2xl)-0.5rem)] border border-border bg-background"
          aria-label={`Open ${project.name} live website in a new tab`}
        >
          <div className="flex items-center gap-1.5 border-b border-border bg-surface-elevated px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="ml-3 hidden flex-1 truncate rounded-md bg-background/60 px-3 py-1 text-[0.7rem] text-muted-foreground sm:block">
              {project.url.replace("https://", "")}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={projectImages[project.imageKey]}
              alt={`${project.name} website homepage`}
              width={1440}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] text-foreground backdrop-blur">
              <span className="size-1.5 animate-pulse rounded-full bg-success" aria-hidden="true" />
              {project.badge}
            </span>
          </div>
        </a>

        {/* Details */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="eyebrow">{project.category}</p>
          <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{project.name}</h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Project tags">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Cta href={project.url} target="_blank" rel="noopener noreferrer" variant="light">
              View Live Website <ExternalLink />
            </Cta>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProofOfWork() {
  return (
    <section id="work" className="section-pad scroll-mt-20 border-t border-border" aria-labelledby="work-title">
      <div className="container-site">
        <SectionHeading
          label="Proof of Work"
          title="See What We Can Build"
          text="A glimpse of the digital experiences Vertex Digital Studio can create for modern businesses and brands."
        />
        <div className="mt-14 space-y-8">
          {projects.map((p) => (
            <Reveal key={p.name}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-8">
          <p className="font-display text-lg font-semibold sm:text-xl">
            Want a website like this for your business?
          </p>
          <Cta href="#contact">
            Start a Project <ArrowRight />
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
