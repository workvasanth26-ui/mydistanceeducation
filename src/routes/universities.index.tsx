import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, BadgeCheck, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, CTAButton, Accreditations } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { UNIVERSITIES } from "@/data/universities";

export const Route = createFileRoute("/universities/")({
  head: () => ({
    meta: [
      { title: "Top Online Universities | My Distance Education" },
      { name: "description", content: "Compare top online and distance learning universities for MBA, MCA, BBA, BCA, B.Com, MA, M.Com and international degrees. Get free admission counselling." },
      { property: "og:title", content: "Top Online Universities | My Distance Education" },
      { property: "og:description", content: "Online and distance learning universities — admission guidance from My Distance Education." },
      { property: "og:url", content: "/universities" },
    ],
    links: [{ rel: "canonical", href: "/universities" }],
  }),
  component: UniversitiesPage,
});

function UniversitiesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Universities"
        title="Top online & distance learning universities"
        sub="Compare leading online universities and choose the right one based on your goal, budget and learning preference. All links open internal counselling pages — not external sites."
      >
        <CTAButton to="/contact">Get University Recommendation</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {UNIVERSITIES.map((u) => (
              <Link
                key={u.slug}
                to="/universities/$slug"
                params={{ slug: u.slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:border-brand hover:-translate-y-0.5 transition will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary leading-tight">{u.name}</h3>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5 flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3 text-success" /> Counselling page
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{u.short}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {u.programs.slice(0, 6).map((p) => (
                    <span key={p} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-medium">{p}</span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  View university page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="University Recommendation" />
          </aside>
        </div>
      </Section>
      <Accreditations className="bg-secondary/40" />
    </SiteLayout>
  );
}
