import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import logo from "@/assets/mde-logo.png.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="hidden md:flex items-center justify-end gap-6 border-b border-border/60 bg-primary text-primary-foreground text-xs">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-1.5">
          <span className="opacity-90">UGC • AICTE • NAAC accredited universities</span>
          <div className="flex items-center gap-5">
            <a href={SITE.telHref} className="inline-flex items-center gap-1.5 hover:text-brand transition">
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
            <a href={SITE.mailHref} className="hover:text-brand transition">{SITE.email}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="My Distance Education logo" className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <div className="text-base font-bold text-primary">My Distance Education</div>
            <div className="text-[11px] text-muted-foreground">Online Degree & Study Abroad Counselling</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-success px-3 py-2 text-sm font-semibold text-success hover:bg-success hover:text-success-foreground transition"
          >
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-soft hover:opacity-95 transition"
          >
            Get Free Counselling
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-brand px-3 py-2.5 text-center text-sm font-semibold text-brand-foreground">
              Get Free Counselling
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
