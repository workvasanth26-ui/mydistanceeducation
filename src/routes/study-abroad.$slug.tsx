import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Sparkles, BookOpen, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Section, CTAButton, Flag } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { getCountry } from "@/data/countries";

export const Route = createFileRoute("/study-abroad/$slug")({
  head: ({ params }) => {
    const c = getCountry(params.slug);
    if (!c) return { meta: [{ title: "Country not found" }] };
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
    const c = getCountry(params.slug);
    if (!c) throw notFound();
    return c;
  },
  component: CountryPage,
  notFoundComponent: () => <SiteLayout><Section><p>Country not found.</p></Section></SiteLayout>,
});

function CountryPage() {
  const c = Route.useLoaderData() as NonNullable<ReturnType<typeof getCountry>>;
  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 text-primary-foreground">
          <Link to="/study-abroad" className="inline-flex items-center gap-1 text-sm opacity-90 hover:opacity-100 hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> All Destinations
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <Flag code={c.code} name={c.name} className="h-16 w-24 shrink-0 shadow-lg" />
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-brand">Study Abroad</div>
              <h1 className="text-3xl md:text-5xl font-bold">Study in {c.name}</h1>
            </div>
          </div>
          <p className="mt-4 max-w-2xl opacity-90">{c.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton to="/contact">Get Free Counselling</CTAButton>
            <CTAButton to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Check Eligibility</CTAButton>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><Sparkles className="h-5 w-5 text-brand" /> Highlights</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {c.highlights.map((h: string) => (
                  <li key={h} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />{h}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><BookOpen className="h-5 w-5 text-brand" /> Popular courses in {c.name}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.popularCourses.map((p: string) => (
                  <span key={p} className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium">{p}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><MapPin className="h-5 w-5 text-brand" /> Why study in {c.name}?</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {c.whyStudy.map((p: string) => (
                  <li key={p} className="flex gap-2 text-sm"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />{p}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h3 className="text-lg font-bold text-primary">Ready to start your {c.name} application?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Get guidance on university selection, application, SOP, scholarship and visa process.</p>
              <div className="mt-4"><CTAButton to="/contact">Talk to Counsellor</CTAButton></div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title={`Study in ${c.name} — Enquiry`} defaultUniversity={c.name} />
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
