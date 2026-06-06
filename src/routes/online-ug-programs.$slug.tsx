import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2, BookOpen, Briefcase, Award, Clock, ListChecks, HelpCircle, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Section, CTAButton } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { getCourse, type Course } from "@/data/courses";

function makeRoute(path: "/online-ug-programs/$slug" | "/online-pg-programs/$slug") {
  return path;
}
export const Route = createFileRoute("/online-ug-programs/$slug")({
  head: ({ params }) => {
    const c = getCourse(params.slug);
    if (!c) return { meta: [{ title: "Course not found" }] };
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
      ],
    };
  },
  loader: ({ params }) => {
    const c = getCourse(params.slug);
    if (!c || c.level !== "ug") throw notFound();
    return c;
  },
  component: () => <CourseDetail course={Route.useLoaderData()} backTo="/online-ug-programs" backLabel="All UG Programs" />,
  notFoundComponent: () => <SiteLayout><Section><p>Course not found.</p></Section></SiteLayout>,
});

export { makeRoute };

export function CourseDetail({ course: c, backTo, backLabel }: { course: Course; backTo: string; backLabel: string }) {
  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 text-primary-foreground">
          <Link to={backTo} className="inline-flex items-center gap-1 text-sm opacity-90 hover:opacity-100 hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> {backLabel}
          </Link>
          <div className="mt-4 text-xs font-semibold tracking-widest uppercase text-brand">{c.level === "ug" ? "Online UG Program" : "Online PG Program"}</div>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold">{c.name} Admission Guidance</h1>
          <p className="mt-3 max-w-3xl opacity-90">{c.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton to="/contact">Get Free Counselling</CTAButton>
            <CTAButton to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Check Eligibility</CTAButton>
            <CTAButton to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Apply Now</CTAButton>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary">Course Overview</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">{c.overview}</p>
            </div>

            <Stat
              items={[
                { i: <Clock className="h-5 w-5" />, t: "Duration", d: c.duration },
                { i: <Award className="h-5 w-5" />, t: "Eligibility", d: c.eligibility },
                { i: <BookOpen className="h-5 w-5" />, t: "Level", d: c.level === "ug" ? "Undergraduate" : "Postgraduate" },
              ]}
            />

            <Block icon={<ListChecks className="h-5 w-5" />} title="Who can apply">
              <ul className="grid sm:grid-cols-2 gap-2">
                {c.whoCanApply.map((x) => (
                  <li key={x} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />{x}</li>
                ))}
              </ul>
            </Block>

            <Block icon={<BookOpen className="h-5 w-5" />} title="Popular subjects / specializations">
              <div className="flex flex-wrap gap-2">
                {c.subjects.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium">{s}</span>
                ))}
              </div>
            </Block>

            <Block icon={<Briefcase className="h-5 w-5" />} title="Career opportunities">
              <ul className="grid sm:grid-cols-2 gap-2">
                {c.careers.map((x) => (
                  <li key={x} className="flex gap-2 text-sm"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />{x}</li>
                ))}
              </ul>
            </Block>

            <Block icon={<Award className="h-5 w-5" />} title={`Why choose ${c.name}`}>
              <ul className="grid sm:grid-cols-2 gap-2">
                {c.whyChoose.map((x) => (
                  <li key={x} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />{x}</li>
                ))}
              </ul>
            </Block>

            <Block icon={<ListChecks className="h-5 w-5" />} title="Admission guidance process">
              <ol className="grid gap-2">
                {["Free counselling", "Eligibility checking", "University comparison", "Fee structure guidance", "Document support", "Application and admission assistance"].map((x, i) => (
                  <li key={x} className="flex gap-3 text-sm"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground text-xs font-bold">{i + 1}</span>{x}</li>
                ))}
              </ol>
            </Block>

            <Block icon={<HelpCircle className="h-5 w-5" />} title="Frequently asked questions">
              <div className="divide-y divide-border rounded-xl border border-border bg-card">
                {c.faqs.map((f) => (
                  <details key={f.q} className="group p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-primary list-none flex justify-between items-center">
                      {f.q}
                      <span className="text-brand text-xl group-open:rotate-45 transition">+</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </Block>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h3 className="text-lg font-bold text-primary">{c.ctaLine}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <CTAButton to="/contact">Talk to Counsellor</CTAButton>
                <CTAButton to="/contact" variant="outline">Apply Now</CTAButton>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title={`${c.name} — Enquiry`} defaultCourse={c.name} />
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Block({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">{icon}</span>
        <h2 className="text-xl font-bold text-primary">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Stat({ items }: { items: { i: React.ReactNode; t: string; d: string }[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {items.map((x) => (
        <div key={x.t} className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-brand">{x.i}<span className="text-xs uppercase tracking-wider font-semibold">{x.t}</span></div>
          <div className="mt-1 text-sm font-medium text-foreground/90">{x.d}</div>
        </div>
      ))}
    </div>
  );
}
