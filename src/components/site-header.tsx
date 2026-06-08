import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import logo from "@/assets/mde-logo.png.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur">
      {/* Top accreditation bar */}
      <div className="hidden md:block border-b border-border/60 bg-primary text-primary-foreground text-xs">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-1.5">
          <span className="opacity-90 tracking-wide">UGC • AICTE • NAAC accredited universities</span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="My Distance Education logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
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
            href={SITE.telHref}
            aria-label="Call Us"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-semibold text-primary hover:bg-accent transition"
          >
            <Phone className="h-4 w-4" /> Call Us
          </a>
          <a
            href={SITE.mailHref}
            aria-label="Email Us"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-semibold text-primary hover:bg-accent transition"
          >
            <Mail className="h-4 w-4" /> Email Us
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center gap-1.5 rounded-md border border-success px-3 py-2 text-sm font-semibold text-success hover:bg-success hover:text-success-foreground transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
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

      {/* Mobile compact contact buttons */}
      <div className="lg:hidden border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-3 py-2">
          <a href={SITE.telHref} aria-label="Call Us" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-2 py-2 text-xs font-semibold text-primary">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a href={SITE.mailHref} aria-label="Email Us" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-2 py-2 text-xs font-semibold text-primary">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-success px-2 py-2 text-xs font-semibold text-success">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
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
