import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-success text-success-foreground shadow-lg hover:scale-105 active:scale-95 transition"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
