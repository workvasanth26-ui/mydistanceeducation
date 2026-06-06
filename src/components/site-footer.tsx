import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import logo from "@/assets/mde-logo.png.asset.json";
import ugc from "@/assets/ugc.png.asset.json";
import aicte from "@/assets/aicte.png.asset.json";
import naac from "@/assets/naac.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="My Distance Education" className="h-12 w-12 object-contain bg-white rounded-md p-1" />
            <div>
              <div className="font-bold">My Distance Education</div>
              <div className="text-xs opacity-80">Online Degree & Study Abroad Counselling</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-85">
            Expert guidance for online UG, online PG, distance education and study abroad programs. Free counselling for students and working professionals across Chennai.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <img src={ugc.url} alt="UGC" className="h-12 w-12 bg-white rounded-md p-1" />
            <img src={aicte.url} alt="AICTE" className="h-12 w-12 bg-white rounded-md p-1" />
            <img src={naac.url} alt="NAAC A+" className="h-12 w-12 bg-white rounded-md p-1" />
          </div>
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
          <h4 className="text-sm font-semibold mb-3 text-brand">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand" /><a href={SITE.telHref} className="opacity-90 hover:opacity-100">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand" /><a href={SITE.mailHref} className="opacity-90 hover:opacity-100 break-all">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" /><span className="opacity-90">{SITE.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 text-xs flex flex-col md:flex-row justify-between gap-2 opacity-80">
          <p>© {new Date().getFullYear()} My Distance Education. All rights reserved.</p>
          <p>Online degree counselling Chennai • Distance education admission guidance</p>
        </div>
      </div>
    </footer>
  );
}
