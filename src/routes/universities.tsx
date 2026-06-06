import { createFileRoute } from "@tanstack/react-router";
import { Building2, BadgeCheck } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, CTAButton } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { UNIVERSITIES } from "@/data/universities";

export const Route = createFileRoute("/universities")({
  head: () => ({
    meta: [
      { title: "Top Online Universities in India | UGC-Entitled Online Degrees" },
      { name: "description", content: "Compare top UGC-entitled online universities in India for MBA, MCA, BBA, BCA, B.Com, MA and M.Com. Get admission guidance from My Distance Education." },
      { property: "og:title", content: "Top Online Universities in India" },
      { property: "og:description", content: "UGC-entitled online universities for UG and PG programs." },
    ],
  }),
  component: UniversitiesPage,
});

function UniversitiesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Universities" title="Top UGC-entitled online universities" sub="Compare India's leading online universities and choose the right one based on your goal, budget and learning preference.">
        <CTAButton to="/contact">Get University Recommendation</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {UNIVERSITIES.map((u) => (
              <div key={u.name} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-brand transition">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand"><Building2 className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-bold text-primary leading-tight">{u.name}</h3>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5 flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3 text-success" /> {u.accreditation}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{u.about}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {u.programs.map((p) => (
                    <span key={p} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-medium">{p}</span>
                  ))}
                </div>
                <div className="mt-5">
                  <CTAButton to="/contact" variant="outline" className="w-full">Get Admission Guidance</CTAButton>
                </div>
              </div>
            ))}
          </div>
          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="University Recommendation" />
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
