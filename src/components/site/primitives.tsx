import { useEffect, useRef, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  label,
  title,
  text,
  align = "center",
  className,
}: {
  label?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {label && <p className="eyebrow mb-4">{label}</p>}
      <h2 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>}
    </Reveal>
  );
}

/* ---------- CTA buttons ---------- */
const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        brand:
          "bg-brand text-brand-foreground shadow-[0_10px_30px_-12px_var(--brand)] hover:brightness-110 hover:-translate-y-0.5",
        light:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5",
        outline:
          "border border-input bg-transparent text-foreground hover:bg-accent hover:border-foreground/30 hover:-translate-y-0.5",
        ghost: "text-foreground hover:bg-accent",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "brand", size: "md" },
  },
);

type CtaProps = VariantProps<typeof ctaVariants> &
  (
    | ({ href: string } & ComponentPropsWithoutRef<"a">)
    | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
  );

export function Cta({ variant, size, className, ...props }: CtaProps) {
  const classes = cn(ctaVariants({ variant, size }), className);
  if ("href" in props && props.href) {
    return <a className={classes} {...(props as ComponentPropsWithoutRef<"a">)} />;
  }
  return <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)} />;
}

/* ---------- Icon by name ---------- */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Cmp className={className} aria-hidden="true" />;
}

/* ---------- Icon tile ---------- */
export function IconTile({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-brand",
        className,
      )}
    >
      <Icon name={name} className="size-5" />
    </span>
  );
}
