import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Sparkles, Users } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, SectionHeading, CTAButton, CheckList } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About My Distance Education | Online Degree Guidance Chennai" },
      { name: "description", content: "My Distance Education provides guidance for online UG, online PG, distance education and study abroad programs with course selection and admission support." },
      { property: "og:title", content: "About My Distance Education" },
      { property: "og:description", content: "Online degree, distance education and study abroad counselling in Chennai." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Education guidance that's simple, transparent and student-first"
        sub="We help students, graduates, and working professionals continue their education through flexible online, distance and study abroad programs."
      >
        <CTAButton to="/contact">Talk to a Counsellor</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              My Distance Education is an education counselling platform created to help students, graduates, and working professionals continue their education through flexible learning options.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We guide learners in choosing the right online degree programs, distance education courses, university options, and study abroad opportunities — based on their academic background and career goals. Our focus is to make education guidance simple, transparent, and student-friendly.
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {[
                { i: <Eye className="h-5 w-5" />, t: "Our Vision", d: "To become a trusted education guidance platform for learners who want flexible, recognised and career-focused learning through online, distance and international education." },
                { i: <Target className="h-5 w-5" />, t: "Our Mission", d: "Guide students with clear, honest information about courses, universities, eligibility, fees, admissions and career opportunities." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">{x.i}</div>
                  <h3 className="mt-3 font-bold text-primary">{x.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <SectionHeading eyebrow="Who we help" title="Built for every kind of learner" />
              <CheckList items={["Students after 12th", "Graduates looking for PG programs", "Working professionals", "Students with education gaps", "Homemakers", "Business owners", "Career changers", "Students planning to study abroad"]} />
            </div>

            <div className="pt-4">
              <SectionHeading eyebrow="What makes us different" title="A student-first approach" />
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "We understand your profile before suggesting a course",
                  "We explain options in plain, simple language",
                  "We help you compare online UG and PG programs",
                  "We provide university and study abroad guidance",
                  "We support you during the admission process",
                  "We focus on student needs — not course promotion",
                ].map((p) => (
                  <div key={p} className="rounded-xl border border-border bg-card p-4 flex gap-3">
                    <Sparkles className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <SectionHeading eyebrow="Our services" title="Complete admission support" />
              <CheckList items={["Online UG admission guidance", "Online PG admission guidance", "Distance education counselling", "University comparison", "Study abroad counselling", "Course selection support", "Eligibility checking", "Document guidance", "Admission assistance"]} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm />
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-brand mb-2"><Users className="h-5 w-5" /><span className="font-semibold">10,000+ learners guided</span></div>
              <p className="text-sm text-muted-foreground">Trusted by students, working professionals, and parents across Chennai and Tamil Nadu.</p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
