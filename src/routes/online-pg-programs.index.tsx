import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, CTAButton, Accreditations } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { PG_COURSES } from "@/data/courses";

const PG_FAQS = [
  { q: "What are Online PG programs?", a: "Online PG (postgraduate) programs are UGC-entitled master's degrees such as Online MBA, MCA, MA and M.Com delivered fully online. They carry the same recognition as regular postgraduate degrees and are ideal for graduates and working professionals." },
  { q: "Are Online PG degrees valid in India?", a: "Yes. Online PG degrees offered by UGC-entitled universities are treated at par with regular degrees by UGC, AICTE, employers, and for higher studies and government jobs in India." },
  { q: "Who is eligible for Online PG programs?", a: "Any graduate from a recognised university can apply. For Online MCA, a mathematics or computer science background may be required by some universities." },
  { q: "What is the duration of Online PG courses?", a: "Most Online PG programs are 2 years long, split into 4 semesters. Some universities offer accelerated or extended schedules." },
  { q: "Can working professionals do an Online PG?", a: "Yes. Online PG programs are designed for working professionals with recorded lectures, weekend live sessions, and flexible online exams." },
  { q: "What is the fee for Online PG programs in Chennai?", a: "Online PG fees typically range from ₹60,000 to ₹2,50,000 for the full program, depending on the university and specialization. Our counsellors share the latest fee structure free of cost." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PG_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/online-pg-programs/")({
  head: () => ({
    meta: [
      { title: "Online PG Programs Admission Guidance in Chennai | My Distance Education" },
      { name: "description", content: "Explore Online PG programs including Online MBA, MCA, MA and M.Com. Get expert admission guidance for UGC-entitled online postgraduate degree programs in Chennai." },
      { name: "keywords", content: "online PG programs Chennai, online MBA admission, online MCA admission, online MA, online M.Com, distance PG courses, UGC online postgraduate" },
      { property: "og:title", content: "Online PG Programs Admission Guidance in Chennai" },
      { property: "og:description", content: "UGC-entitled Online MBA, MCA, MA and M.Com admission guidance in Chennai. Free counselling, university comparison and fee details." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mydistanceeducation.com/online-pg-programs" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Online PG Programs Admission Guidance in Chennai" },
      { name: "twitter:description", content: "Online MBA, MCA, MA and M.Com admission guidance in Chennai." },
    ],
    links: [
      { rel: "canonical", href: "https://mydistanceeducation.com/online-pg-programs" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_JSONLD),
      },
    ],
  }),
  component: PGPage,
});

const PG_LINKS: Record<string, string> = {
  "online-mba": "/online-mba-admission-chennai",
  "online-mca": "/online-mca-admission-chennai",
  "online-ma": "/online-ma-admission-chennai",
  "online-mcom": "/online-mcom-admission-chennai",
};

function PGPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Online PG Programs"
        title="Online PG Programs Admission Guidance in Chennai"
        sub="UGC-entitled Online MBA, MCA, MA and M.Com programs from top Indian universities — with free counselling, university comparison and fee details."
      >
        <CTAButton to="/contact">Get Free PG Counselling</CTAButton>
        <CTAButton href="https://wa.me/917305075766" target="_blank" rel="noopener noreferrer" variant="outline">Chat on WhatsApp</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Overview of Online PG Programs</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Online PG programs are postgraduate degree courses delivered fully online by UGC-entitled
                universities in India. They are designed for graduates and working professionals who want
                to upgrade their qualification, switch careers, earn a promotion or specialise in a domain
                like management, IT, finance, HR, analytics or humanities — without leaving their job.
                At My Distance Education, Chennai, we provide free admission guidance for Online MBA,
                Online MCA, Online MA and Online M.Com from leading Indian universities.
              </p>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Online PG degrees are recognised by UGC and treated at par with regular postgraduate
                degrees for jobs, government exams, promotions and higher studies including Ph.D.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Who Can Apply for Online PG Programs</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "Graduates from any recognised university",
                  "Working professionals seeking career growth",
                  "Business owners and entrepreneurs",
                  "Team leaders aiming for managerial roles",
                  "Career changers switching industries",
                  "Government job aspirants needing PG qualification",
                  "Teachers and trainers",
                  "Graduates with a study gap",
                ].map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Available Online PG Courses</h2>
              <p className="mt-3 text-foreground/85">
                Choose the right Online postgraduate program based on your graduation background, career
                goal and preferred specialization.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {PG_COURSES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/online-pg-programs/$slug"
                    params={{ slug: c.slug }}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:border-brand transition"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-primary">{c.name} Admission Guidance</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View {c.short} Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online MBA Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online MBA is the most popular postgraduate management program in India. It offers
                  specializations in Marketing, Finance, HR, Operations, Business Analytics, Digital
                  Marketing, International Business and Healthcare Management. An Online MBA is ideal
                  for working professionals targeting leadership roles and salary growth.
                </p>
                <p className="mt-2">
                  <a href={PG_LINKS["online-mba"]} className="text-brand font-semibold hover:underline">
                    Read full Online MBA admission guidance in Chennai →
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online MCA Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online MCA suits BCA, B.Sc Computer Science and IT graduates who want to grow in
                  software development, cloud, cybersecurity, data analytics or AI. The program covers
                  programming, databases, web technologies and modern tech stacks.
                </p>
                <p className="mt-2">
                  <a href={PG_LINKS["online-mca"]} className="text-brand font-semibold hover:underline">
                    Read full Online MCA admission guidance in Chennai →
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online MA Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online MA is a postgraduate arts degree across English, Tamil, History, Economics,
                  Political Science, Public Administration, Sociology, Psychology and Journalism. It is
                  ideal for teachers, government job aspirants and humanities graduates.
                </p>
                <p className="mt-2">
                  <a href={PG_LINKS["online-ma"]} className="text-brand font-semibold hover:underline">
                    Read full Online MA admission guidance in Chennai →
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online M.Com Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online M.Com is a postgraduate commerce program covering Accounting, Finance, Taxation,
                  Banking and Corporate Accounting. It suits B.Com / BBA graduates and finance
                  professionals aiming for senior accounting and banking roles.
                </p>
                <p className="mt-2">
                  <a href={PG_LINKS["online-mcom"]} className="text-brand font-semibold hover:underline">
                    Read full Online M.Com admission guidance in Chennai →
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Eligibility for Online PG Programs</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                The general eligibility for Online PG admission is a bachelor's degree (minimum 3 years)
                from a UGC-recognised university with at least 50% aggregate (45% for reserved categories).
                Specific programs may have additional requirements:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                <li>• <strong>Online MBA:</strong> Graduation in any discipline.</li>
                <li>• <strong>Online MCA:</strong> Graduation with Mathematics or Computer Science at 10+2 / graduation level.</li>
                <li>• <strong>Online MA:</strong> Graduation in any discipline (subject preference may apply).</li>
                <li>• <strong>Online M.Com:</strong> B.Com / BBA / equivalent commerce background preferred.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Duration of Online PG Courses</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Online PG programs are typically 2 years (4 semesters). Most universities allow a maximum
                duration of 4 years to complete the program, giving working professionals the flexibility
                to balance work and study.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Why Choose Online PG Programs</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "UGC-entitled and equivalent to regular PG degrees",
                  "Study from anywhere in India or abroad",
                  "No need to leave your current job",
                  "Recorded lectures and live online classes",
                  "Online proctored exams",
                  "Lower fees than regular PG",
                  "Placement support from top universities",
                  "Multiple specializations to choose from",
                ].map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Career Opportunities After Online PG</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                An Online PG degree opens up career paths across industries — Business Development Manager,
                HR Manager, Marketing Manager, Finance Manager, Software Developer, Data Analyst, Cloud
                Engineer, Accountant, Tax Consultant, Banker, Teacher, Lecturer, Content Strategist,
                Research Associate, Civil Services aspirant and Entrepreneur. Many learners also use Online
                PG as a stepping stone to Ph.D. or international higher studies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Admission Guidance Process</h2>
              <ol className="mt-3 space-y-2 text-sm text-foreground/90 list-decimal pl-5">
                <li>Share your qualification, work experience and career goal with our counsellor.</li>
                <li>Get a shortlist of UGC-entitled universities and specializations matching your profile.</li>
                <li>Compare fees, duration, learning mode, exam pattern and placement support.</li>
                <li>Complete the online application with our step-by-step support.</li>
                <li>Upload required documents and pay the semester fee directly to the university.</li>
                <li>Receive your student ID, LMS access and start your Online PG journey.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">FAQs — Online PG Programs</h2>
              <div className="mt-4 space-y-4">
                {PG_FAQS.map((f) => (
                  <div key={f.q} className="rounded-xl border border-border bg-card p-4">
                    <h3 className="font-semibold text-primary">{f.q}</h3>
                    <p className="mt-1 text-sm text-foreground/85">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h2 className="text-xl font-bold text-primary">Take the next step in your career.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Talk to our Chennai-based counsellors for free Online PG admission guidance. We help you
                compare universities, fees, specializations and admission timelines.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <CTAButton to="/contact">Get PG Counselling</CTAButton>
                <CTAButton href="https://wa.me/917305075766" target="_blank" rel="noopener noreferrer" variant="outline">WhatsApp Us</CTAButton>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Get PG Admission Guidance" />
          </aside>
        </div>
      </Section>
      <Accreditations className="bg-secondary/40" />
    </SiteLayout>
  );
}
