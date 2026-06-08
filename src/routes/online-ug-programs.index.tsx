import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, CTAButton, CheckList, SectionHeading, Accreditations } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { UG_COURSES } from "@/data/courses";

export const Route = createFileRoute("/online-ug-programs/")({
  head: () => ({
    meta: [
      { title: "Online UG Programs Admission Guidance | BA, BBA, BCA, B.Com" },
      { name: "description", content: "Get guidance for online UG programs including BA, BBA, BCA and B.Com. Suitable for students after 12th looking for flexible degree options." },
      { property: "og:title", content: "Online UG Programs Admission Guidance" },
      { property: "og:description", content: "BA, BBA, BCA, B.Com — flexible online undergraduate programs." },
    ],
  }),
  component: UGPage,
});

function UGPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Online UG Programs" title="Flexible undergraduate degrees for students after 12th"
        sub="Choose the right Online UG course based on your interest, academic background and future career goal.">
        <CTAButton to="/contact">Get UG Counselling</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-foreground/85 leading-relaxed">
              Online UG programs are suitable for students who have completed 12th standard and want to pursue a flexible undergraduate degree. They allow you to continue higher education while managing personal, work, or other commitments.
            </p>

            <div>
              <SectionHeading title="Who can apply for Online UG programs?" />
              <CheckList items={["Students who completed 12th standard", "Students looking for flexible degree options", "Working students", "Students preparing for competitive exams", "Students with study gaps", "Students who cannot attend regular college"]} />
            </div>

            <div>
              <SectionHeading title="Choose your Online UG program" />
              <div className="grid sm:grid-cols-2 gap-4">
                {UG_COURSES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/online-ug-programs/$slug"
                    params={{ slug: c.slug }}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:border-brand transition"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"><BookOpen className="h-5 w-5" /></div>
                    <h3 className="mt-3 text-lg font-bold text-primary">{c.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">View {c.short} Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h3 className="text-lg font-bold text-primary">Choosing the right UG course is the first step toward your future career.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our counsellors help you understand eligibility, course options, university details, fee structure and admission process.</p>
              <div className="mt-4"><CTAButton to="/contact">Get UG Counselling</CTAButton></div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Get UG Admission Guidance" />
          </aside>
        </div>
      </Section>
      <Accreditations className="bg-secondary/40" />
    </SiteLayout>
  );
}
