import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section } from "@/components/ui-bits";
import { EnquiryForm } from "@/components/enquiry-form";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact My Distance Education | Online Degree Counselling Chennai" },
      { name: "description", content: "Contact My Distance Education for online degree, distance education and study abroad counselling. Call, email or WhatsApp our academic counsellor today." },
      { property: "og:title", content: "Contact My Distance Education" },
      { property: "og:description", content: "Free counselling for online UG, PG, distance education and study abroad." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        sub="Have questions about online degrees, distance education, university selection, or study abroad counselling? Contact our academic counsellor today."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <ActionCard icon={<Phone className="h-5 w-5" />} title="Call Us" sub="Tap to speak with our counsellor" href={SITE.telHref} />
              <ActionCard icon={<Mail className="h-5 w-5" />} title="Email Us" sub="Send us your enquiry by email" href={SITE.mailHref} />
              <ActionCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" sub="Chat instantly with our team" href={SITE.whatsapp} external accent />
              <ActionCard icon={<MapPin className="h-5 w-5" />} title="Visit Us" sub={SITE.address} />
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 flex gap-3">
              <Clock className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-primary">Counselling Hours</div>
                <div className="text-sm text-muted-foreground">Mon – Sat • 10:00 AM – 7:00 PM</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border h-64">
              <iframe
                title="My Distance Education location"
                src="https://www.google.com/maps?q=Sam+Noah+Tower+Anna+Nagar+East+Chennai&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
          <EnquiryForm title="Send Your Enquiry" />
        </div>
      </Section>
    </SiteLayout>
  );
}

function ActionCard({
  icon,
  title,
  sub,
  href,
  external,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  href?: string;
  external?: boolean;
  accent?: boolean;
}) {
  const body = (
    <div
      className={`h-full rounded-2xl border bg-card p-5 flex flex-col gap-3 transition ${
        href ? "hover:border-brand hover:-translate-y-0.5 cursor-pointer" : ""
      } ${accent ? "border-success/40" : "border-border"}`}
    >
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl shrink-0 ${
          accent ? "bg-success/10 text-success" : "bg-brand/10 text-brand"
        }`}
      >
        {icon}
      </span>
      <div>
        <div className="font-semibold text-primary">{title}</div>
        <div className="text-xs text-muted-foreground mt-1">{sub}</div>
      </div>
    </div>
  );
  if (href)
    return (
      <a
        href={href}
        aria-label={title}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block h-full"
      >
        {body}
      </a>
    );
  return body;
}
