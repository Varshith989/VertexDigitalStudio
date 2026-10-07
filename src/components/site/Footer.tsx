import { navLinks, site } from "@/lib/site-data";
import { contactChannels } from "./ContactSection";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-site grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-icon.png"
              alt="Vertex Digital Studio Logo"
              className="size-8 sm:size-9 object-contain drop-shadow-[0_0_12px_rgba(124,58,237,0.35)]"
            />
            <p className="font-display text-base font-extrabold tracking-[0.16em] sm:text-lg">
              VERTEX<span className="text-brand"> DIGITAL</span> STUDIO
            </p>
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">{site.tagline}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Modern websites and digital experiences for businesses, startups and personal brands.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Navigate
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/80 transition-colors hover:text-brand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5">
            {contactChannels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-brand"
                >
                  <c.icon className="size-3.5" aria-hidden="true" />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>Founded by {site.founder}</p>
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
