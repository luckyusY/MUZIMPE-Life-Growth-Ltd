import { BadgeCheck, HeartPulse, Sprout, Truck, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MUZIMPE Life & Growth Ltd promotes health, wellness, natural living, entrepreneurship, family guidance, and life growth through EBGS in Kigali.",
};

const pillars = [
  {
    icon: HeartPulse,
    title: "Health and wellness",
    body: "We help customers choose natural products and build practical routines that fit real family life.",
  },
  {
    icon: Sprout,
    title: "EBGS natural living",
    body: "Through EBGS - Episerie Bio Gloriette Sante, we focus on natural oils, herbal care, and everyday wellness support.",
  },
  {
    icon: Users,
    title: "Family and life growth",
    body: "MUZIMPE supports families with grounded guidance around healthier habits, confidence, and direction.",
  },
  {
    icon: BadgeCheck,
    title: "Entrepreneurship support",
    body: "We encourage customers and partners who want to grow in business while staying rooted in wellness and service.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f6f2ea]">
      <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <Image
          src="/products/ebgs-wellness-kit/1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffcf57]">
            Welcome to MUZIMPE Life & Growth Ltd
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Natural wellness, family guidance, and entrepreneurship support in Kigali.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
            We promote health, wellness, and natural living through EBGS while
            supporting people who want to grow their family life, confidence,
            and business path.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/c/wellness"
              className="rounded bg-[#d9a441] px-6 py-3 text-sm font-black uppercase tracking-wide text-black"
            >
              Shop EBGS
            </Link>
            <Link
              href="/support"
              className="rounded border border-white/30 px-6 py-3 text-sm font-black uppercase tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 md:grid-cols-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article key={pillar.title} className="bg-white p-6 shadow-sm">
              <Icon className="text-[#8b641e]" size={30} />
              <h2 className="mt-4 text-xl font-black">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5f5648]">{pillar.body}</p>
            </article>
          );
        })}
      </section>

      <section className="bg-[#15110a] px-4 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative min-h-[360px] overflow-hidden">
            <Image
              src="/products/black-seeds-flax-seeds-oil/1.jpg"
              alt="MUZIMPE natural wellness product"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Truck className="text-[#ffcf57]" size={34} />
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Visit us at BH Plaza, 3rd floor.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              Find MUZIMPE near Matheus and Yussa Plaza in Kigali. Come for
              products, guidance, pickup, and direct conversation with the team.
            </p>
            <Link
              href="/stores"
              className="mt-7 inline-flex rounded bg-[#d9a441] px-6 py-3 text-sm font-black uppercase tracking-wide text-black"
            >
              Store Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
