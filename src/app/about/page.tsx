import Image from "next/image";
import { PageHero, SiteFooter } from "@/components/site-chrome";
import { MotionMain, Reveal } from "@/components/site-motion";
import { trustPoints } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <MotionMain>
      <PageHero
        eyebrow="About us"
        title="A Kigali company for wellness, family support and growth."
        text="MUZIMPE Life & Growth Ltd brings together natural living through EBGS, practical family guidance and entrepreneurship support."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative min-h-[460px] overflow-hidden rounded-lg bg-[#e8eadf]">
            <Image
              src="/products/714dff22-af27-4294-b78c-1f29121f45f0.jpg"
              alt="Natural product from EBGS"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73805d]">
              Our direction
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#1e2f26] sm:text-5xl">
              We believe growth starts with healthier daily choices.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b6658]">
              EBGS - Episerie Bio Gloriette Sante is the natural product side
              of the company. Around it, MUZIMPE Life & Growth Ltd supports
              families and entrepreneurs with practical guidance that respects
              real life, local context and steady progress.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#182a22] py-16 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          {trustPoints.map(([title, text], index) => (
            <Reveal
              key={title}
              delay={index * 0.06}
              className="rounded-lg border border-white/12 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
            >
              <p className="text-2xl font-semibold text-[#f2c14e]">{title}</p>
              <p className="mt-3 leading-7 text-white/76">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </MotionMain>
  );
}
