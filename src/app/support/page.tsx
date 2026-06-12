import {
  BadgeCheck,
  CreditCard,
  Mail,
  MessageCircle,
  Phone,
  Truck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Support & Contact",
  description:
    "Contact MUZIMPE Life & Growth Ltd for EBGS wellness products, delivery, pickup, and guidance in Kigali.",
};

const faqs = [
  {
    q: "Where is MUZIMPE located?",
    a: "We are at BH Plaza, 3rd floor, Matheus near Yussa Plaza in Kigali.",
  },
  {
    q: "How do I order or ask product questions?",
    a: "Call 0781375870 / 0784794936, send WhatsApp, or email muzimpelifemuzimpegrowth@gmail.com for guidance.",
  },
  {
    q: "Do you provide delivery?",
    a: "Kigali pickup and delivery can be arranged with the team after confirming the products and payment method.",
  },
  {
    q: "What does MUZIMPE support?",
    a: "MUZIMPE promotes health, wellness, natural living, entrepreneurship support, family guidance, and life growth through EBGS.",
  },
];

export default function SupportPage() {
  return (
    <main className="bg-[#f6f2ea]">
      <section className="bg-[#050505] px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffcf57]">
            Support
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            Contact MUZIMPE for products, guidance, and pickup.
          </h1>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="bg-white/10 p-5">
              <Phone className="text-[#ffcf57]" />
              <p className="mt-3 text-lg font-black">{CONTACT_PHONE_DISPLAY}</p>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-5">
              <MessageCircle className="text-[#ffcf57]" />
              <p className="mt-3 text-lg font-black">WhatsApp MUZIMPE</p>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="bg-white/10 p-5">
              <Mail className="text-[#ffcf57]" />
              <p className="mt-3 break-words text-lg font-black">{CONTACT_EMAIL}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 md:grid-cols-3">
        {[
          { icon: Truck, title: "Pickup & delivery", body: "Arrange Kigali pickup or delivery directly with the team." },
          { icon: CreditCard, title: "Flexible payment", body: "Mobile Money, Airtel Money, card, and cash options can be confirmed at checkout." },
          { icon: BadgeCheck, title: "Guided products", body: "Ask before buying so the product fits your wellness routine." },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="bg-white p-6 shadow-sm">
              <Icon className="text-[#8b641e]" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5f5648]">{item.body}</p>
            </article>
          );
        })}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="text-3xl font-black">Questions</h2>
        <div className="mt-5 divide-y divide-[#e7ddc7] bg-white">
          {faqs.map((faq) => (
            <details key={faq.q} className="p-5">
              <summary className="cursor-pointer text-lg font-black">{faq.q}</summary>
              <p className="mt-3 text-sm leading-6 text-[#5f5648]">{faq.a}</p>
            </details>
          ))}
        </div>
        <Link
          href="/stores"
          className="mt-8 inline-flex rounded bg-[#15110a] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#ffcf57]"
        >
          View Store
        </Link>
      </section>
    </main>
  );
}
