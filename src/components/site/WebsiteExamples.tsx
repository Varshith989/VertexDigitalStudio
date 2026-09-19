import { websiteExamples } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";
import restaurant from "@/assets/concept-restaurant.jpg";
import travel from "@/assets/concept-travel.jpg";
import realestate from "@/assets/concept-realestate.jpg";
import startup from "@/assets/concept-startup.jpg";
import personal from "@/assets/concept-personal.jpg";
import local from "@/assets/concept-local.jpg";

const images: Record<(typeof websiteExamples)[number]["imageKey"], string> = {
  restaurant,
  travel,
  realestate,
  startup,
  personal,
  local,
};

export function WebsiteExamples() {
  return (
    <section className="section-pad" aria-labelledby="examples-title">
      <div className="container-site">
        <SectionHeading
          label="Built for Different Businesses"
          title="Your Industry. Your Brand. Your Website."
          text="Concept examples showing the kinds of websites we can build. These are illustrative, not completed client projects."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {websiteExamples.map((ex, i) => (
            <Reveal as="li" key={ex.title} delay={(i % 3) * 80}>
              <figure className="card-premium group overflow-hidden p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius-2xl)-0.5rem)]">
                  <img
                    src={images[ex.imageKey]}
                    alt={`${ex.title} website concept example`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.16em] text-foreground backdrop-blur">
                    CONCEPT
                  </span>
                </div>
                <figcaption className="flex items-center justify-between px-3 py-3.5">
                  <span className="font-display text-base font-bold">{ex.title}</span>
                  <span className="text-xs text-muted-foreground">Website example</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
