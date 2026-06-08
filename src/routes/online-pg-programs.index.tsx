import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, CTAButton, CheckList, SectionHeading, Accreditations } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { PG_COURSES } from "@/data/courses";

export const Route = createFileRoute("/online-pg-programs/")({
  head: () => ({
    meta: [
      { title: "Online PG Programs Admission Guidance | MBA, MCA, MA, M.Com" },
      { name: "description", content: "Get guidance for online PG programs including MBA, MCA, MA and M.Com. Suitable for graduates and working professionals." },
      { property: "og:title", content: "Online PG Programs Admission Guidance" },
      { property: "og:description", content: "MBA, MCA, MA, M.Com — flexible online postgraduate programs." },
    ],
  }),
  component: PGPage,
});

function PGPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Online PG Programs" title="Grow your career with a flexible postgraduate degree"
        sub="Online PG programs are designed for graduates and working professionals who want career growth without leaving their job.">
        <CTAButton to="/contact">Get PG Counselling</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-foreground/85 leading-relaxed">
              At My Distance Education, we help you choose the right Online PG program based on qualification, experience, career goal, specialization preference, and budget.
            </p>

            <div>
              <SectionHeading title="Who can apply for Online PG programs?" />
              <CheckList items={["Graduates from recognised institutions", "Working professionals", "Business owners", "Career changers", "People looking for promotion", "Students preparing for better job opportunities", "Graduates with study gaps"]} />
            </div>

            <div>
              <SectionHeading title="Choose your Online PG program" />
              <div className="grid sm:grid-cols-2 gap-4">
                {PG_COURSES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/online-pg-programs/$slug"
                    params={{ slug: c.slug }}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:border-brand transition"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"><GraduationCap className="h-5 w-5" /></div>
                    <h3 className="mt-3 text-lg font-bold text-primary">{c.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">View {c.short} Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h3 className="text-lg font-bold text-primary">Take the next step in your career.</h3>
              <p className="mt-2 text-sm text-muted-foreground">We help you compare programs, specializations, universities, eligibility, fees and admission process.</p>
              <div className="mt-4"><CTAButton to="/contact">Get PG Counselling</CTAButton></div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Get PG Admission Guidance" />
          </aside>
        </div>
      </Section>
      <Accreditations className="bg-secondary/40" />
    </SiteLayout>
  );
}
