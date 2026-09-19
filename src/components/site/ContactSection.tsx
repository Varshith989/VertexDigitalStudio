import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";
import { ContactForm } from "./ContactForm";
import { Reveal, SectionHeading } from "./primitives";

export const contactChannels = [
  {
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: site.whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  {
    label: "LinkedIn",
    value: site.founder,
    href: site.linkedinUrl,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: site.githubHandle,
    href: site.githubUrl,
    icon: Github,
    external: true,
  },
];

export function ContactDetails() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {contactChannels.map((c) => (
        <li key={c.label}>
          <a
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="card-premium group flex items-center gap-4 px-5 py-4"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <c.icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {c.label}
              </span>
              <span className="block truncate text-sm font-semibold text-foreground group-hover:text-brand">
                {c.value}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-pad relative scroll-mt-20 border-t border-border" aria-labelledby="contact-title">
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="container-site relative">
        <SectionHeading
          label="Let's Build Something"
          title="Have a Project in Mind?"
          text="Tell us what you're looking to build and we'll get back to you with the next steps."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Or reach out directly
            </p>
            <ContactDetails />
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Prefer a quick chat? WhatsApp is usually the fastest way to reach us.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
