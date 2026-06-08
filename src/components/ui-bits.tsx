import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ugc from "@/assets/ugc.png.asset.json";
import aicte from "@/assets/aicte.png.asset.json";
import naac from "@/assets/naac.png.asset.json";

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
  target,
  rel,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
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
  if (href) return <a href={href} target={target} rel={rel} className={cls}>{children}</a>;
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

export function Flag({ code, name, className = "" }: { code: string; name: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/w160/${code}.png`}
      srcSet={`https://flagcdn.com/w160/${code}.png 1x, https://flagcdn.com/w320/${code}.png 2x`}
      width={64}
      height={42}
      loading="lazy"
      alt={`${name} flag`}
      className={`inline-block rounded-md shadow-sm border border-border/60 object-cover bg-white ${className}`}
    />
  );
}

const ACCREDS = [
  { src: ugc.url, label: "UGC", full: "University Grants Commission" },
  { src: aicte.url, label: "AICTE", full: "All India Council for Technical Education" },
  { src: naac.url, label: "NAAC", full: "National Assessment & Accreditation Council" },
];

export function Accreditations({ className = "", compact }: { className?: string; compact?: boolean }) {
  return (
    <Section className={className}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand">
          <ShieldCheck className="h-4 w-4" /> Trust & Recognition
        </div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">Accreditations & Approvals</h2>
        {!compact && (
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We guide students toward universities and online programs recognised by leading Indian regulatory and accreditation bodies.
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {ACCREDS.map((a) => (
          <div
            key={a.label}
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-lg transition"
          >
            <img
              src={a.src}
              alt={`${a.full} (${a.label})`}
              loading="lazy"
              className="h-20 w-20 object-contain"
            />
            <div className="mt-3 font-bold text-primary">{a.label}</div>
            <div className="text-[11px] text-muted-foreground text-center mt-0.5">{a.full}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground italic max-w-3xl mx-auto">
        Approvals, accreditations and recognitions may vary by university, program and academic year. Students are advised to verify the latest status before admission.
      </p>
    </Section>
  );
}
