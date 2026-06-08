import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Globe2, BookOpen, Users, ShieldCheck, Phone, Award, Compass, BadgeCheck, ArrowRight, MessageCircle, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { EnquiryForm } from "@/components/enquiry-form";
import { Section, SectionHeading, CTAButton, CardLink, CheckList, Flag, Accreditations } from "@/components/ui-bits";
import { UG_COURSES, PG_COURSES } from "@/data/courses";
import { COUNTRIES } from "@/data/countries";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Degree & Distance Education Guidance in Chennai | My Distance Education" },
      { name: "description", content: "Get expert guidance for online UG, online PG, distance education and study abroad programs. Free counselling for MBA, MCA, BBA, BCA, B.Com, BA, MA and M.Com." },
      { name: "keywords", content: "online degree admission in Chennai, distance education in Chennai, online UG programs, online PG programs, online MBA admission, study abroad counselling in Chennai" },
      { property: "og:title", content: "Online Degree & Distance Education Guidance in Chennai" },
      { property: "og:description", content: "Free counselling for online UG, PG, distance education and study abroad programs." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 25% 30%, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-24 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 text-primary-foreground animate-float-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
              <BadgeCheck className="h-3.5 w-3.5 text-brand" /> UGC • AICTE • NAAC accredited universities
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
              Complete Your Degree with <span className="text-brand">Online & Distance</span> Education Guidance
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg opacity-90">
              Choose the right online degree, distance education program, or study abroad option with expert academic counselling — tailored to your goals, profile and budget.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton to="/contact">Get Free Counselling</CTAButton>
              <CTAButton to="/online-pg-programs" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Explore Programs
              </CTAButton>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { n: "10K+", l: "Students Guided" },
                { n: "50+", l: "Universities" },
                { n: "13+", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/15 bg-white/5 p-3 text-center backdrop-blur">
                  <div className="text-2xl font-bold text-brand">{s.n}</div>
                  <div className="text-[11px] uppercase opacity-80 tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <EnquiryForm title="Talk to a Counsellor" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading eyebrow="Who we are" title="Education guidance built around your goals" />
            <p className="text-foreground/85 leading-relaxed">
              My Distance Education is a Chennai-based academic counselling platform that helps students, working professionals, and parents choose the right online degree, distance education program, university, or study abroad option.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              We guide you through course details, eligibility, university comparison, fee structure, specializations, and the full admission process — before you apply.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton to="/about" variant="outline">About Us <ArrowRight className="h-4 w-4" /></CTAButton>
              <CTAButton href={SITE.whatsapp} variant="ghost"><MessageCircle className="h-4 w-4 text-success" /> Chat on WhatsApp</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: <GraduationCap className="h-6 w-6" />, t: "UG & PG Guidance", d: "BA, BBA, BCA, B.Com, MBA, MCA, MA, M.Com" },
              { i: <Globe2 className="h-6 w-6" />, t: "Study Abroad", d: "UK, USA, Canada, Australia, Germany & more" },
              { i: <BookOpen className="h-6 w-6" />, t: "University Match", d: "Top UGC-entitled online universities" },
              { i: <ShieldCheck className="h-6 w-6" />, t: "Free Counselling", d: "Transparent, honest, no-pressure advice" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">{c.i}</div>
                <div className="mt-3 font-semibold text-primary">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Who it's for" title="Distance & online degrees — designed for flexibility" sub="Whether you're starting fresh, restarting, or growing your career, there's a flexible degree pathway for you." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Students after 12th", "UG completed students", "Working professionals",
            "People with study gaps", "Homemakers", "Business owners",
            "Job aspirants", "Promotion-seekers", "Distance learners",
          ].map((x) => (
            <div key={x} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <Users className="h-5 w-5 text-brand shrink-0" />
              <span className="text-sm font-medium">{x}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* UG */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-2">Online UG Programs</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Start your undergraduate journey</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">Suitable for students who have completed 12th standard and want a flexible undergraduate degree.</p>
          </div>
          <CTAButton to="/online-ug-programs" variant="outline">Get UG Admission Guidance</CTAButton>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UG_COURSES.map((c) => (
            <CardLink
              key={c.slug}
              to="/online-ug-programs/$slug"
              params={{ slug: c.slug }}
              title={c.name}
              desc={c.tagline}
              icon={<BookOpen className="h-5 w-5" />}
              cta="View details"
            />
          ))}
        </div>
      </Section>

      {/* PG */}
      <Section className="bg-secondary/40">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-2">Online PG Programs</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Grow your career with a PG degree</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">For graduates and working professionals seeking promotion, skill growth, or higher education.</p>
          </div>
          <CTAButton to="/online-pg-programs" variant="outline">Get PG Admission Guidance</CTAButton>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PG_COURSES.map((c) => (
            <CardLink
              key={c.slug}
              to="/online-pg-programs/$slug"
              params={{ slug: c.slug }}
              title={c.name}
              desc={c.tagline}
              icon={<GraduationCap className="h-5 w-5" />}
              cta="View details"
            />
          ))}
        </div>
      </Section>

      {/* STUDY ABROAD */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading eyebrow="Study Abroad" title="Take your education global" sub="University selection, course choice, SOP, scholarships, visa — we guide you end-to-end." />
            <CheckList items={["Country selection", "University selection", "Course & specialization", "Eligibility & document support", "SOP guidance", "Scholarship & loan support", "Visa process guidance"]} />
            <div className="mt-6">
              <CTAButton to="/study-abroad">Get Study Abroad Counselling</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {COUNTRIES.slice(0, 12).map((c) => (
              <Link
                key={c.slug}
                to="/study-abroad/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 hover:border-brand hover:-translate-y-0.5 transition"
              >
                <Flag code={c.code} name={c.name} className="h-9 w-14" />
                <span className="text-[11px] font-medium text-center leading-tight">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY US */}
      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Why choose us" title="Honest, student-first counselling" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { i: <Award />, t: "Personalized Counselling", d: "Course advice tailored to your profile and goals." },
            { i: <BookOpen />, t: "UG & PG Expertise", d: "Wide knowledge across online and distance programs." },
            { i: <Compass />, t: "University Comparison", d: "Compare fees, learning mode and specializations." },
            { i: <Globe2 />, t: "Study Abroad Support", d: "End-to-end guidance for 13+ countries." },
            { i: <ShieldCheck />, t: "Transparent Process", d: "Clear eligibility, fee and document guidance." },
            { i: <Users />, t: "Working Professional Friendly", d: "Programs that fit your job and life." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">{x.i}</div>
              <h3 className="mt-3 font-bold text-primary">{x.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeading eyebrow="Our Process" title="From confusion to admission — in 5 simple steps" center />
        <div className="grid md:grid-cols-5 gap-4">
          {[
            ["Free Counselling", "We understand your qualification, goal and budget."],
            ["Course Shortlisting", "Suitable UG, PG, distance or study abroad options."],
            ["University Guidance", "Compare universities, fees and learning mode."],
            ["Document Support", "Guidance on admission documents."],
            ["Admission Assistance", "Support through application and admission."],
          ].map(([t, d], i) => (
            <div key={t} className="relative rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="absolute -top-3 -left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground text-sm font-bold shadow-soft">{i + 1}</div>
              <h3 className="mt-2 font-bold text-primary">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ACCREDITATIONS */}
      <Accreditations className="bg-secondary/40" />

      {/* FINAL CTA */}
      <section className="border-t border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 text-primary-foreground grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-4xl font-bold">Start your education journey today</h2>
            <p className="mt-3 opacity-90 max-w-2xl">Speak with our academic counsellor and get clear guidance before admission — it's free.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CTAButton href={SITE.telHref}><Phone className="h-4 w-4" /> Call Us</CTAButton>
              <CTAButton href={SITE.mailHref} variant="outline" className="border-white text-white hover:bg-white hover:text-primary"><Mail className="h-4 w-4" /> Email Us</CTAButton>
              <CTAButton href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </CTAButton>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/15">
            <div className="text-sm opacity-80">Prefer a quick chat?</div>
            <p className="mt-1 text-lg font-semibold">Our counsellors respond within a few hours during working hours.</p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={SITE.telHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-95">
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-success text-success-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-95">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
