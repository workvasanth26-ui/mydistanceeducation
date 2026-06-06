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
      { name: "description", content: "Contact My Distance Education for online degree, distance education and study abroad counselling. Call 7305075766 or email onlinelearning1323@gmail.com." },
      { property: "og:title", content: "Contact My Distance Education" },
      { property: "og:description", content: "Free counselling for online UG, PG, distance education and study abroad." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Talk to our academic counsellor today" sub="Send us your enquiry or reach out via call, email or WhatsApp — we usually respond within a few hours." />

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <ContactCard icon={<Phone className="h-5 w-5" />} title="Call Us" link={SITE.telHref} text={SITE.phone} />
            <ContactCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" link={SITE.whatsapp} text={`Chat with ${SITE.phone}`} external />
            <ContactCard icon={<Mail className="h-5 w-5" />} title="Email" link={SITE.mailHref} text={SITE.email} />
            <ContactCard icon={<MapPin className="h-5 w-5" />} title="Visit Us" text={SITE.address} />
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

function ContactCard({ icon, title, text, link, external }: { icon: React.ReactNode; title: string; text: string; link?: string; external?: boolean }) {
  const body = (
    <div className="rounded-2xl border border-border bg-card p-5 flex gap-3 hover:border-brand transition">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand shrink-0">{icon}</span>
      <div>
        <div className="font-semibold text-primary">{title}</div>
        <div className="text-sm text-muted-foreground break-words">{text}</div>
      </div>
    </div>
  );
  if (link) return <a href={link} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{body}</a>;
  return body;
}
