import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";
import { Cta } from "./primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass" : "bg-transparent",
      )}
    >
      <nav className="container-site flex h-[4.5rem] items-center justify-between" aria-label="Main">
        <a
          href="#top"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src="/logo-icon.png"
            alt="Vertex Digital Studio Logo"
            className="size-8 sm:size-9 object-contain drop-shadow-[0_0_12px_rgba(124,58,237,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-base font-extrabold tracking-[0.16em] text-foreground sm:text-lg lg:text-xl">
            VERTEX<span className="text-brand"> DIGITAL</span> STUDIO
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active === l.href && "text-foreground",
                )}
                aria-current={active === l.href ? "location" : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Cta href="#contact" size="sm" className="hidden sm:inline-flex">
            Start a Project
          </Cta>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "glass overflow-hidden transition-[max-height,opacity] duration-400 ease-out lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!open}
      >
        <ul className="container-site flex flex-col gap-1 py-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                tabIndex={open ? 0 : -1}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-3 px-2 pb-2">
            <Cta href="#contact" className="w-full" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              Start a Project
            </Cta>
          </li>
          <li className="px-4 pb-2 text-xs text-muted-foreground">{site.tagline}</li>
        </ul>
      </div>
    </header>
  );
}
