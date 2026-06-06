import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub, center }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-10 ${center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {eyebrow && <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-2">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {sub && <p className="mt-3 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function CTAButton({
  to,
  href,
  children,
  variant = "primary",
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-md px-5 py-3 text-sm font-semibold transition shadow-soft";
  const styles = {
    primary: "bg-brand text-brand-foreground hover:opacity-95",
    secondary: "bg-primary text-primary-foreground hover:opacity-95",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-none",
    ghost: "text-primary hover:bg-accent shadow-none",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}

export function CardLink({ to, params, title, desc, icon, cta = "Learn more" }: {
  to: string;
  params?: Record<string, string>;
  title: string;
  desc: string;
  icon?: ReactNode;
  cta?: string;
}) {
  return (
    <Link
      to={to}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className="group block rounded-2xl border border-border bg-card p-6 shadow-card hover:border-brand hover:-translate-y-0.5 transition will-change-transform"
    >
      {icon && <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary group-hover:bg-brand group-hover:text-brand-foreground transition">{icon}</div>}
      <h3 className="text-lg font-bold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function PageHero({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 text-primary-foreground">
        {eyebrow && <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">{eyebrow}</div>}
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">{sub}</p>}
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 md:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2 text-sm text-foreground/90">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
