import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, SectionHeading, CTAButton, CheckList, Flag } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { COUNTRIES } from "@/data/countries";

export const Route = createFileRoute("/study-abroad/")({
  head: () => ({
    meta: [
      { title: "Study Abroad Counselling in Chennai | UK, USA, Canada, Australia & More" },
      { name: "description", content: "Study abroad counselling in Chennai — university selection, course guidance, SOP, scholarship and visa support for UK, USA, Canada, Australia, Germany and more." },
      { property: "og:title", content: "Study Abroad Counselling in Chennai" },
      { property: "og:description", content: "Country & university guidance for 13+ destinations." },
    ],
  }),
  component: StudyAbroadPage,
});

function StudyAbroadPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Study Abroad" title="Take your education global with expert counselling"
        sub="We help you choose the right country, university, course and admission path — based on your profile, budget and career goals.">
        <CTAButton to="/contact">Get Study Abroad Counselling</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <SectionHeading title="End-to-end study abroad support" />
              <CheckList items={["Country selection", "University selection", "Course selection", "Eligibility guidance", "Application support", "Document guidance", "SOP guidance", "Scholarship guidance", "Education loan guidance", "Visa process guidance"]} />
            </div>

            <div>
              <SectionHeading title="Popular study abroad destinations" />
              <div className="grid sm:grid-cols-2 gap-4">
                {COUNTRIES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/study-abroad/$slug"
                    params={{ slug: c.slug }}
                    className="group rounded-2xl border border-border bg-card p-5 shadow-card hover:border-brand hover:-translate-y-0.5 transition flex items-start gap-4"
                  >
                    <Flag code={c.code} name={c.name} className="h-12 w-16 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary">{c.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.tagline}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                        Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Study Abroad — Free Counselling" />
            <div className="mt-6 rounded-2xl bg-primary text-primary-foreground p-6">
              <Globe2 className="h-6 w-6 text-brand" />
              <h3 className="mt-3 text-lg font-bold">13+ countries. One trusted counsellor.</h3>
              <p className="mt-2 text-sm opacity-90">From UK to UAE — get unbiased guidance with verified universities and clear cost & eligibility breakdowns.</p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
