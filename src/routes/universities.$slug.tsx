import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ListChecks,
  BookOpen,
  Users,
  Award,
  FileText,
  ShieldCheck,
  HelpCircle,
  Briefcase,
  Phone,
  MessageCircle,
  Building2,
  GraduationCap,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Section, CTAButton } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { getUniversity, type University } from "@/data/universities";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/universities/$slug")({
  head: ({ params }) => {
    const u = getUniversity(params.slug);
    if (!u) return { meta: [{ title: "University not found" }] };
    return {
      meta: [
        { title: u.metaTitle },
        { name: "description", content: u.metaDescription },
        { property: "og:title", content: u.metaTitle },
        { property: "og:description", content: u.metaDescription },
        { property: "og:url", content: `/universities/${u.slug}` },
      ],
      links: [{ rel: "canonical", href: `/universities/${u.slug}` }],
    };
  },
  loader: ({ params }) => {
    const u = getUniversity(params.slug);
    if (!u) throw notFound();
    return u;
  },
  component: () => <UniversityPage u={Route.useLoaderData()} />,
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <h1 className="text-2xl font-bold text-primary">University not found</h1>
        <p className="mt-2 text-muted-foreground">The university page you’re looking for doesn’t exist.</p>
        <div className="mt-4"><CTAButton to="/universities">Back to Universities</CTAButton></div>
      </Section>
    </SiteLayout>
  ),
});

const DOCS = [
  "10th mark sheet",
  "12th mark sheet",
  "UG mark sheets if applicable",
  "Degree certificate if applicable",
  "Aadhaar card or valid ID proof",
  "Passport size photo",
  "Email ID",
  "Mobile number",
  "Updated resume if required",
  "Work experience details if required",
];

const WHO_CAN_APPLY = [
  "Students after 12th",
  "Graduates",
  "Working professionals",
  "Business owners",
  "Career changers",
  "Students with study gaps",
  "Students looking for flexible learning",
];

const WHY_CHOOSE = [
  "Flexible learning options",
  "UG and PG program choices",
  "Career-focused learning",
  "Suitable for working professionals",
  "Multiple course options",
  "Online or distance learning support",
  "Admission support from My Distance Education",
];

const GUIDANCE_STEPS = [
  "Course selection support",
  "Eligibility checking",
  "University comparison",
  "Specialization guidance",
  "Fee structure guidance",
  "Document support",
  "Application assistance",
  "Admission process guidance",
];

const APPROVALS = [
  { label: "UGC", desc: "University Grants Commission recognition guidance." },
  { label: "AICTE", desc: "All India Council for Technical Education guidance." },
  { label: "NAAC", desc: "National Assessment & Accreditation Council guidance." },
  { label: "University Approved Programs", desc: "Verified university-listed program options." },
];

function UniversityPage({ u }: { u: University }) {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 text-primary-foreground">
          <Link to="/universities" className="inline-flex items-center gap-1 text-sm opacity-90 hover:opacity-100 hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> All Universities
          </Link>
          <div className="mt-4 text-xs font-semibold tracking-widest uppercase text-brand">Internal Counselling Page</div>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold">{u.h1}</h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold opacity-95">{u.heroHeading}</p>
          <p className="mt-3 max-w-3xl opacity-90">{u.heroSub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href={SITE.whatsapp}>
              <MessageCircle className="h-4 w-4" /> Talk to Counsellor
            </CTAButton>
            <CTAButton to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Get Free Counselling
            </CTAButton>
            <CTAButton to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Check Eligibility
            </CTAButton>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <Block icon={<Building2 className="h-5 w-5" />} title="University Overview">
              <div className="space-y-3 text-foreground/85 leading-relaxed">
                {u.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Block>

            {/* Programs Offered */}
            <Block icon={<BookOpen className="h-5 w-5" />} title="Programs Offered">
              <div className="grid sm:grid-cols-2 gap-3">
                {u.programs.map((p) => (
                  <div key={p} className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-sm">
                    <GraduationCap className="h-4 w-4 text-brand shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </Block>

            {/* MBA / BBA Specializations (DY Patil) */}
            {u.specializationsMBA && (
              <Block icon={<ListChecks className="h-5 w-5" />} title="Popular MBA Specializations">
                <Pills items={u.specializationsMBA} />
              </Block>
            )}
            {u.specializationsBBA && (
              <Block icon={<ListChecks className="h-5 w-5" />} title="Popular BBA Specializations">
                <Pills items={u.specializationsBBA} />
              </Block>
            )}

            {/* Durations (Andhra) */}
            {u.durations && (
              <Block icon={<ListChecks className="h-5 w-5" />} title="Program Duration">
                <ul className="grid sm:grid-cols-2 gap-2">
                  {u.durations.map((d) => (
                    <li key={d.label} className="rounded-xl border border-border bg-card p-3 text-sm">
                      <span className="font-semibold text-primary">{d.label}: </span>
                      <span className="text-foreground/85">{d.value}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {/* Eligibility notes (Andhra) */}
            {u.eligibilityNotes && (
              <Block icon={<CheckCircle2 className="h-5 w-5" />} title="Eligibility Guidance">
                <ul className="space-y-2">
                  {u.eligibilityNotes.map((d) => (
                    <li key={d.label} className="rounded-xl border border-border bg-card p-3 text-sm">
                      <span className="font-semibold text-primary">{d.label}: </span>
                      <span className="text-foreground/85">{d.value}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {/* Popular Program Areas */}
            <Block icon={<ListChecks className="h-5 w-5" />} title="Popular Program Areas">
              <Pills items={u.programAreas} />
            </Block>

            {/* Who can apply */}
            <Block icon={<Users className="h-5 w-5" />} title="Who Can Apply">
              <ul className="grid sm:grid-cols-2 gap-2">
                {WHO_CAN_APPLY.map((x) => (
                  <li key={x} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />{x}</li>
                ))}
              </ul>
            </Block>

            {/* Why choose */}
            <Block icon={<Award className="h-5 w-5" />} title={`Why Choose ${u.name}`}>
              <ul className="grid sm:grid-cols-2 gap-2">
                {WHY_CHOOSE.map((x) => (
                  <li key={x} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />{x}</li>
                ))}
              </ul>
            </Block>

            {/* Admission Guidance */}
            <Block icon={<ListChecks className="h-5 w-5" />} title="Admission Guidance We Provide">
              <ol className="grid gap-2">
                {GUIDANCE_STEPS.map((x, i) => (
                  <li key={x} className="flex gap-3 text-sm">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground text-xs font-bold">{i + 1}</span>
                    {x}
                  </li>
                ))}
              </ol>
            </Block>

            {/* Documents */}
            <Block icon={<FileText className="h-5 w-5" />} title="Documents Required">
              <ul className="grid sm:grid-cols-2 gap-2">
                {DOCS.map((d) => (
                  <li key={d} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />{d}</li>
                ))}
              </ul>
            </Block>

            {/* Eligibility note */}
            <Block icon={<CheckCircle2 className="h-5 w-5" />} title="Eligibility Guidance">
              <p className="text-sm text-foreground/85">
                Eligibility may vary depending on the selected university, course, specialization, and academic year. Students should verify final eligibility before admission.
              </p>
            </Block>

            {/* Career */}
            <Block icon={<Briefcase className="h-5 w-5" />} title="Career Scope">
              <ul className="grid sm:grid-cols-2 gap-2">
                {u.careers.map((x) => (
                  <li key={x} className="flex gap-2 text-sm"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />{x}</li>
                ))}
              </ul>
            </Block>

            {/* Accreditations */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand"><ShieldCheck className="h-5 w-5" /></span>
                <h2 className="text-xl font-bold text-primary">Accreditations & Approvals</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                We guide students in choosing recognised and approved online, distance, and higher education programs.
              </p>
              <div className="space-y-3 text-sm text-foreground/85">
                <p>
                  Before applying for any online degree, distance education program, or university course, students should check important approvals, accreditations, and recognitions.
                </p>
                <p>
                  My Distance Education helps students understand university recognition, course eligibility, admission process, and available program details before admission.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                {APPROVALS.map((a) => (
                  <div key={a.label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                    <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div className="mt-2 font-bold text-primary">{a.label}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground leading-snug">{a.desc}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">
                Disclaimer: Approvals, accreditations, rankings, and recognitions may vary by university, program, and academic year. Students are advised to verify the latest approval status before admission. My Distance Education provides counselling and guidance support.
              </p>
            </div>

            {/* FAQ */}
            <Block icon={<HelpCircle className="h-5 w-5" />} title="Frequently Asked Questions">
              <div className="divide-y divide-border rounded-xl border border-border bg-card">
                {u.faqs.map((f) => (
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

            {/* Final CTA */}
            <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary">Need Help Choosing the Right University?</h3>
              <p className="mt-2 text-sm text-foreground/85">
                Talk to our academic counsellor and get free guidance on course selection, eligibility, documents, fees, and admission process.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <CTAButton to="/contact">Get Free Counselling</CTAButton>
                <CTAButton href={SITE.whatsapp} variant="secondary">
                  <MessageCircle className="h-4 w-4" /> Talk to Counsellor
                </CTAButton>
                <CTAButton to="/contact" variant="outline">Apply Now</CTAButton>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground italic border-t border-border pt-4">
              Disclaimer: Program availability, eligibility, duration, fees, approvals, and admission rules may vary by university and academic year. Students are advised to verify final details before admission. My Distance Education provides counselling and guidance support.
            </p>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-4">
            <EnquiryForm title={`${u.name} — Enquiry`} defaultUniversity={u.name} />
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h4 className="font-bold text-primary">Quick Contact</h4>
              <div className="mt-3 flex flex-col gap-2">
                <a href={SITE.telHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-95">
                  <Phone className="h-4 w-4" /> Call Us
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-success text-success-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-95">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
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

function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium">{s}</span>
      ))}
    </div>
  );
}
