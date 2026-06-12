import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  MAPS_URL,
  WHATSAPP_URL,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Store Location",
  description:
    "Visit MUZIMPE Life & Growth Ltd at BH Plaza 3rd floor, Matheus near Yussa Plaza in Kigali.",
};

export default function StoresPage() {
  return (
    <main className="bg-[#f6f2ea] px-4 py-14">
      <section className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-[#15110a] p-8 text-white">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffcf57]">
            Kigali Store
          </p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            MUZIMPE Life & Growth Ltd
          </h1>
          <div className="mt-8 space-y-5 text-sm leading-6 text-white/80">
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#ffcf57]" size={20} />
              BH Plaza 3rd floor, Matheus near Yussa Plaza, Kigali
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 shrink-0 text-[#ffcf57]" size={20} />
              <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 shrink-0 text-[#ffcf57]" size={20} />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p className="flex gap-3">
              <Clock3 className="mt-1 shrink-0 text-[#ffcf57]" size={20} />
              Monday - Saturday: 8:00 AM - 7:00 PM
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-[#d9a441] px-5 py-3 text-sm font-black uppercase tracking-wide text-black"
            >
              WhatsApp
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-white/25 px-5 py-3 text-sm font-black uppercase tracking-wide"
            >
              Directions
            </a>
          </div>
        </div>
        <div className="min-h-[440px] bg-white p-5 shadow-sm">
          <iframe
            title="MUZIMPE Life & Growth Ltd map"
            src="https://www.google.com/maps?q=BH%20Plaza%20Matheus%20Kigali&output=embed"
            className="h-full min-h-[400px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
        {[
          ["Products", "Natural oils, herbal care, EBGS wellness kits, and home natural living sets."],
          ["Guidance", "Family guidance, product advice, and practical support for healthier routines."],
          ["Growth", "Entrepreneurship and life growth support for customers and partners."],
        ].map(([title, body]) => (
          <article key={title} className="bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f5648]">{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
