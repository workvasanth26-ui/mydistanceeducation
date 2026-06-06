import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, Section } from "@/components/ui-bits";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | My Distance Education" },
      { name: "description", content: "Privacy policy for My Distance Education — how we collect, use and protect your information when you use our education counselling services." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" sub="Your privacy matters. Here's how we handle the information you share with us." />
      <Section>
        <div className="prose prose-sm md:prose-base max-w-3xl text-foreground/85 space-y-5 leading-relaxed">
          <p>My Distance Education ("we", "our", "us") respects your privacy and is committed to protecting the personal information you share through our website and counselling services.</p>

          <h2 className="text-xl font-bold text-primary">Information We Collect</h2>
          <p>When you submit an enquiry form, contact us, or request counselling, we may collect your name, mobile number, email ID, qualification, course interest, preferred university/country, city and message.</p>

          <h2 className="text-xl font-bold text-primary">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your enquiries and provide academic counselling.</li>
            <li>To share course, university and admission information relevant to you.</li>
            <li>To follow up on your application or query.</li>
            <li>To improve our services and student experience.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary">Information Sharing</h2>
          <p>We do not sell or rent your personal information. We may share your details only with university partners or representatives strictly for the purpose of processing your admission enquiry, with your consent.</p>

          <h2 className="text-xl font-bold text-primary">Data Security</h2>
          <p>We take reasonable measures to protect your information from unauthorised access, alteration or disclosure. However, no online transmission is 100% secure.</p>

          <h2 className="text-xl font-bold text-primary">Cookies</h2>
          <p>Our website may use cookies to improve browsing experience and measure site usage. You can disable cookies in your browser settings.</p>

          <h2 className="text-xl font-bold text-primary">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of the personal data we hold about you by emailing us at <a className="text-brand underline" href="mailto:onlinelearning1323@gmail.com">onlinelearning1323@gmail.com</a>.</p>

          <h2 className="text-xl font-bold text-primary">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.</p>

          <h2 className="text-xl font-bold text-primary">Contact</h2>
          <p>Questions about this policy? Call <a className="text-brand underline" href="tel:+917305075766">7305075766</a> or email <a className="text-brand underline" href="mailto:onlinelearning1323@gmail.com">onlinelearning1323@gmail.com</a>.</p>
        </div>
      </Section>
    </SiteLayout>
  );
}
