import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

export function FAQ() {
  return (
    <section id="faq" className="section-pad scroll-mt-20 border-t border-border" aria-labelledby="faq-title">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          label="FAQ"
          title="Questions, Answered"
          text="Everything you might want to know before starting a project."
        />
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="divide-y divide-border rounded-2xl border border-border bg-surface px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-b-0">
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline [&>svg]:text-brand">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
