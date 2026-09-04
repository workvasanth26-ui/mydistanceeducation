import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { NAV, SITE } from "@/data/site";
const logo = { url: "/logo.png" };

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="My Distance Education" width={48} height={48} className="h-12 w-12 object-contain bg-white rounded-md p-1" />
            <div>
              <div className="font-bold">My Distance Education</div>
              <div className="text-xs opacity-80">Online Degree & Study Abroad Counselling</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-85">
            Expert guidance for online UG, online PG, distance education and study abroad programs. Free counselling for students and working professionals across Chennai.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-brand">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-85 hover:opacity-100 hover:text-brand">{n.label}</Link></li>
            ))}
            <li><Link to="/privacy-policy" className="opacity-85 hover:opacity-100 hover:text-brand">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-brand">Popular Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/online-pg-programs/$slug" params={{ slug: "online-mba" }} className="opacity-85 hover:opacity-100">Online MBA</Link></li>
            <li><Link to="/online-pg-programs/$slug" params={{ slug: "online-mca" }} className="opacity-85 hover:opacity-100">Online MCA</Link></li>
            <li><Link to="/online-ug-programs/$slug" params={{ slug: "online-bba" }} className="opacity-85 hover:opacity-100">Online BBA</Link></li>
            <li><Link to="/online-ug-programs/$slug" params={{ slug: "online-bca" }} className="opacity-85 hover:opacity-100">Online BCA</Link></li>
            <li><Link to="/online-ug-programs/$slug" params={{ slug: "online-bcom" }} className="opacity-85 hover:opacity-100">Online B.Com</Link></li>
            <li><Link to="/study-abroad" className="opacity-85 hover:opacity-100">Study Abroad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-brand">Get in Touch</h4>
          <div className="flex flex-col gap-2">
            <a href={SITE.telHref} aria-label="Call Us" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 transition px-3 py-2 text-sm font-semibold">
              <Phone className="h-4 w-4 text-brand" /> Call Us
            </a>
            <a href={SITE.mailHref} aria-label="Email Us" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 transition px-3 py-2 text-sm font-semibold">
              <Mail className="h-4 w-4 text-brand" /> Email Us
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex items-center gap-2 rounded-md bg-success text-success-foreground hover:opacity-95 transition px-3 py-2 text-sm font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs opacity-90">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
            <span>{SITE.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 text-xs flex flex-col md:flex-row justify-between items-center gap-2 opacity-80 text-center md:text-left">
          <p>© {new Date().getFullYear()} My Distance Education. All rights reserved.</p>
          <p>
            Online degree counselling Chennai • Distance education admission guidance
            <span className="hidden md:inline"> • </span>
            <span className="block md:inline mt-1 md:mt-0">
              Designed & Developed by{" "}
              <a
                href="https://wearealro.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-brand transition-colors"
              >
                ALRO
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
