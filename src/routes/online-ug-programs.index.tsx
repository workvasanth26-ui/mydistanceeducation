import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section, CTAButton, Accreditations } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { UG_COURSES } from "@/data/courses";

const UG_FAQS = [
  { q: "What are Online UG programs?", a: "Online UG programs are UGC-entitled undergraduate degree courses such as Online BA, BBA, BCA and B.Com delivered fully online. They carry the same value as regular degrees and are ideal for students who completed 12th." },
  { q: "Are Online UG degrees valid for jobs and higher studies?", a: "Yes. Online UG degrees from UGC-entitled universities are treated at par with regular degrees for private jobs, government jobs, higher studies (PG, MBA, MCA) and competitive exams." },
  { q: "Who is eligible for Online UG admission?", a: "Students who have passed 12th (Higher Secondary) from a recognised board are eligible. Some programs like BCA may prefer Mathematics or Computer Science at 12th." },
  { q: "What is the duration of Online UG courses?", a: "Most Online UG programs are 3 years long, divided into 6 semesters. Universities usually allow a maximum of 6 years to complete the degree." },
  { q: "Can I do an Online UG along with a job or coaching?", a: "Yes. Online UG programs use recorded lectures, weekend live classes and online exams, making them perfect for working students or those preparing for competitive exams." },
  { q: "What is the fee for Online UG programs in Chennai?", a: "Online UG fees typically range from ₹35,000 to ₹1,50,000 for the full 3-year program, depending on the university and course. We share the latest fee structure free of cost." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: UG_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/online-ug-programs/")({
  head: () => ({
    meta: [
      { title: "Online UG Programs Admission Guidance in Chennai | My Distance Education" },
      { name: "description", content: "Explore Online UG programs including Online BA, BBA, BCA and B.Com. Get expert admission guidance for UGC-entitled online undergraduate degree programs in Chennai." },
      { name: "keywords", content: "online UG programs Chennai, online BA admission, online BBA admission, online BCA, online B.Com, distance UG courses, UGC online undergraduate" },
      { property: "og:title", content: "Online UG Programs Admission Guidance in Chennai" },
      { property: "og:description", content: "UGC-entitled Online BA, BBA, BCA and B.Com admission guidance in Chennai. Free counselling, university comparison and fee details." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mydistanceeducation.lovable.app/online-ug-programs" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Online UG Programs Admission Guidance in Chennai" },
      { name: "twitter:description", content: "Online BA, BBA, BCA and B.Com admission guidance in Chennai." },
    ],
    links: [
      { rel: "canonical", href: "https://mydistanceeducation.lovable.app/online-ug-programs" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_JSONLD),
      },
    ],
  }),
  component: UGPage,
});

const UG_LINKS: Record<string, string> = {
  "online-ba": "/online-ba-admission-chennai",
  "online-bba": "/online-bba-admission-chennai",
  "online-bca": "/online-bca-admission-chennai",
  "online-bcom": "/online-bcom-admission-chennai",
};

function UGPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Online UG Programs"
        title="Online UG Programs Admission Guidance in Chennai"
        sub="UGC-entitled Online BA, BBA, BCA and B.Com degrees from top Indian universities — with free counselling, university comparison and fee details."
      >
        <CTAButton to="/contact">Get Free UG Counselling</CTAButton>
        <CTAButton href="https://wa.me/917305075766" target="_blank" rel="noopener noreferrer" variant="outline">Chat on WhatsApp</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Overview of Online UG Programs</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Online UG programs are undergraduate degree courses delivered fully online by UGC-entitled
                universities in India. Students who have completed 12th can pursue an Online BA, BBA, BCA
                or B.Com from the comfort of their home — without giving up on a job, coaching, family
                responsibilities or competitive exam preparation. At My Distance Education, Chennai, we
                offer free admission guidance for Online UG programs from leading Indian universities.
              </p>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Online UG degrees are recognised by UGC and are equivalent to regular undergraduate
                degrees for jobs, government exams, postgraduate admissions and overseas higher studies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Who Can Apply for Online UG Programs</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "Students who completed 12th from any board",
                  "Students with a study gap after 12th",
                  "Working students balancing job and studies",
                  "Students preparing for UPSC, TNPSC, banking exams",
                  "Students unable to attend regular college",
                  "Students from rural or remote locations",
                  "Sports persons and performers needing flexibility",
                  "Students looking for affordable degrees",
                ].map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Available Online UG Courses</h2>
              <p className="mt-3 text-foreground/85">
                Choose the right Online undergraduate program based on your interest, 12th stream and
                long-term career goal.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {UG_COURSES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/online-ug-programs/$slug"
                    params={{ slug: c.slug }}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:border-brand transition"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <BookOpen className="h-5 w-5" />
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online BA Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online BA is a 3-year undergraduate arts degree across English, History, Economics,
                  Political Science, Public Administration, Sociology, Psychology and Journalism.
                  It is ideal for students preparing for government exams or planning a career in
                  teaching, civil services, content or social sciences.
                </p>
                <p className="mt-2">
                  <a href={UG_LINKS["online-ba"]} className="text-brand font-semibold hover:underline">
                    Read full Online BA admission guidance in Chennai →
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online BBA Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online BBA is a 3-year undergraduate business management degree. It builds a strong
                  foundation in marketing, HR, finance, operations and entrepreneurship, making it the
                  perfect pre-MBA program for students after 12th in any stream.
                </p>
                <p className="mt-2">
                  <a href={UG_LINKS["online-bba"]} className="text-brand font-semibold hover:underline">
                    Read full Online BBA admission guidance in Chennai →
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online BCA Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online BCA is a 3-year computer applications degree covering programming, databases,
                  web development, Python, Java and software engineering. It is the ideal starting point
                  for students who want a career in IT, software, app development or data.
                </p>
                <p className="mt-2">
                  <a href={UG_LINKS["online-bca"]} className="text-brand font-semibold hover:underline">
                    Read full Online BCA admission guidance in Chennai →
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Online B.Com Admission Guidance</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Online B.Com is a 3-year undergraduate commerce degree covering accounting, taxation,
                  banking, business law and corporate accounting. It is suitable for students from any
                  12th stream aiming for finance, accounting, banking or M.Com / MBA later.
                </p>
                <p className="mt-2">
                  <a href={UG_LINKS["online-bcom"]} className="text-brand font-semibold hover:underline">
                    Read full Online B.Com admission guidance in Chennai →
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Eligibility for Online UG Programs</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                The general eligibility for Online UG admission is 10+2 (Higher Secondary) passed from
                any recognised Indian board such as CBSE, ICSE, State Board or NIOS. Stream-specific
                notes:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                <li>• <strong>Online BA:</strong> Any stream at 12th.</li>
                <li>• <strong>Online BBA:</strong> Any stream at 12th.</li>
                <li>• <strong>Online BCA:</strong> 12th with Mathematics / Computer Science preferred by most universities.</li>
                <li>• <strong>Online B.Com:</strong> Any stream at 12th; commerce background preferred.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Duration of Online UG Courses</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Online UG programs are typically 3 years (6 semesters). Universities allow a maximum
                duration of 6 years to complete the degree, giving students full flexibility to manage
                exams, jobs or coaching.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Why Choose Online UG Programs</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "UGC-entitled and equivalent to regular degrees",
                  "Study from home anywhere in India",
                  "Affordable fees compared to regular college",
                  "Recorded lectures and weekend live classes",
                  "Online proctored exams",
                  "Time for competitive exam preparation",
                  "Continue working while studying",
                  "Globally recognised digital degree",
                ].map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Career Opportunities After Online UG</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                An Online UG degree opens doors to entry-level roles across industries — Junior Software
                Developer, Web Developer, IT Support, Business Development Executive, Marketing Executive,
                HR Assistant, Accountant, Banking Officer, Tax Assistant, Content Writer, Teacher (with
                B.Ed.), Research Assistant and Government Service aspirant. Most students also use their
                Online UG as a foundation for higher studies — MBA, MCA, MA, M.Com or Ph.D.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Admission Guidance Process</h2>
              <ol className="mt-3 space-y-2 text-sm text-foreground/90 list-decimal pl-5">
                <li>Share your 12th details, stream and career interest with our counsellor.</li>
                <li>Get a shortlist of UGC-entitled universities and UG programs that suit you.</li>
                <li>Compare fees, duration, exam pattern and learning mode.</li>
                <li>Complete the online application with our step-by-step support.</li>
                <li>Upload your 10th, 12th and ID documents and pay the semester fee to the university.</li>
                <li>Receive your student ID, LMS access and begin your Online UG journey.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">FAQs — Online UG Programs</h2>
              <div className="mt-4 space-y-4">
                {UG_FAQS.map((f) => (
                  <div key={f.q} className="rounded-xl border border-border bg-card p-4">
                    <h3 className="font-semibold text-primary">{f.q}</h3>
                    <p className="mt-1 text-sm text-foreground/85">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h2 className="text-xl font-bold text-primary">Start your undergraduate journey today.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Talk to our Chennai-based counsellors for free Online UG admission guidance. We help you
                pick the right university, course and specialization.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <CTAButton to="/contact">Get UG Counselling</CTAButton>
                <CTAButton href="https://wa.me/917305075766" target="_blank" rel="noopener noreferrer" variant="outline">WhatsApp Us</CTAButton>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Get UG Admission Guidance" />
          </aside>
        </div>
      </Section>
      <Accreditations className="bg-secondary/40" />
    </SiteLayout>
  );
}
