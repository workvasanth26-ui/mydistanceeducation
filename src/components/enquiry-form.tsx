import { useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";

type Props = {
  title?: string;
  defaultCourse?: string;
  defaultUniversity?: string;
  compact?: boolean;
};

export function EnquiryForm({ title = "Get Free Counselling", defaultCourse = "", defaultUniversity = "", compact }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    const f = new FormData(form);

    const fullName = String(f.get("name") || "");
    const mobile = String(f.get("mobile") || "");
    const email = String(f.get("email") || "");
    const qualification = String(f.get("qualification") || "");
    const course = String(f.get("course") || "");
    const preferredUniversity = String(f.get("preferred") || "");
    const city = String(f.get("city") || "");
    const message = String(f.get("message") || "");
    const submittedDateTime = new Date().toLocaleString();

    const payload = {
      access_key: "77a03d0b-b65c-46ca-badc-ec8d06eedfba",
      subject: "New Enquiry from My Distance Education Website",
      from_name: "My Distance Education Website",
      to: "onlinelearning1323@gmail.com",
      "Full Name": fullName,
      "Mobile Number": mobile,
      "Email ID": email,
      "Highest Qualification": qualification,
      "Course Interested": course,
      "Preferred University / Country": preferredUniversity,
      "City": city,
      "Message": message,
      "Submitted Date & Time": submittedDateTime,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data?.message || "Submission failed");
      }

      toast.success("Thank you for your enquiry. Redirecting to WhatsApp...");
      form.reset();
      formRef.current?.reset();

      const waText =
        `Hello, I would like to enquire about admission.\n\n` +
        `Full Name: ${fullName}\n` +
        `Mobile Number: ${mobile}\n` +
        `Email ID: ${email}\n` +
        `Highest Qualification: ${qualification}\n` +
        `Course Interested: ${course}\n` +
        `Preferred University / Country: ${preferredUniversity}\n` +
        `City: ${city}\n` +
        `Message: ${message}`;
      const waUrl = `https://wa.me/917305075766?text=${encodeURIComponent(waText)}`;

      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 2000);
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      toast.error("Sorry, we couldn't send your enquiry. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className={`rounded-2xl border border-border bg-card p-5 md:p-6 shadow-card ${compact ? "" : ""}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-xs text-muted-foreground">Talk to our counsellor — no fees, no spam.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Field name="name" placeholder="Full Name *" aria-label="Full Name" required />
        <Field name="mobile" type="tel" placeholder="Mobile Number *" aria-label="Mobile Number" required pattern="[0-9+\\-\\s]{7,15}" />
        <Field name="email" type="email" placeholder="Email ID *" aria-label="Email ID" required />
        <Field name="qualification" placeholder="Highest Qualification *" aria-label="Highest Qualification" required />
        <Field name="course" placeholder="Course Interested *" aria-label="Course Interested" required defaultValue={defaultCourse} />
        <Field name="preferred" placeholder="Preferred University / Country" aria-label="Preferred University or Country" defaultValue={defaultUniversity} />
        <Field name="city" placeholder="City *" aria-label="City" required />
        <Field name="message" placeholder="Message (optional)" aria-label="Message" className="md:col-span-2" textarea />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground shadow-soft hover:opacity-95 transition disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="mt-2 text-[11px] text-muted-foreground text-center">
        Your enquiry will be reviewed by our counsellor and we will contact you shortly.
      </p>
    </form>
  );
}

function Field({
  textarea,
  className = "",
  ...p
}: React.InputHTMLAttributes<HTMLInputElement> & { textarea?: boolean; className?: string }) {
  const cls =
    "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition placeholder:text-muted-foreground";
  if (textarea) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { type: _t, ...rest } = p as any;
    return <textarea {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} rows={3} className={`${cls} ${className}`} />;
  }
  return <input {...p} className={`${cls} ${className}`} />;
}
