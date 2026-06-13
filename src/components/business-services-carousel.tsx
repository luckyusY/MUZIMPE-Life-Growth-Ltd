"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  HeartHandshake,
  MessageCircle,
  Sprout,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { WHATSAPP_URL } from "@/lib/contact";

const serviceSlides = [
  {
    eyebrow: "Business Services",
    title: "Entrepreneurship support for practical growth.",
    body: "Idea shaping, starter guidance, product sales direction, and customer-care habits for people building a small business around real community needs.",
    href: "/c/entrepreneurship",
    cta: "Explore business support",
    image: "/services/entrepreneurship-support.png",
    icon: BriefcaseBusiness,
    stats: ["Starter advice", "Sales habits", "Client care"],
  },
  {
    eyebrow: "Family Guidance",
    title: "Healthier home routines, explained simply.",
    body: "Guidance for families choosing natural wellness products, building better habits, and keeping follow-up support close through phone, WhatsApp, or store visits.",
    href: "/c/family-guidance",
    cta: "Family guidance",
    image: "/services/family-guidance.png",
    icon: Users,
    stats: ["Home wellness", "Routine planning", "Follow-up"],
  },
  {
    eyebrow: "EBGS Natural Living",
    title: "Product advice before the customer buys.",
    body: "EBGS selections are positioned with guidance, not guesswork: natural oils, herbal care, and wellness kits matched to each customer's daily routine.",
    href: "/c/wellness",
    cta: "Shop EBGS",
    image: "/services/ebgs-natural-living.png",
    icon: Sprout,
    stats: ["Natural oils", "Herbal care", "Guided choice"],
  },
  {
    eyebrow: "Life Growth",
    title: "Support for confidence, direction, and next steps.",
    body: "MUZIMPE connects wellness with personal discipline, family stability, and business confidence so customers leave with a clearer plan.",
    href: "/c/life-growth",
    cta: "Start life growth",
    image: "/services/life-growth-coaching.png",
    icon: HeartHandshake,
    stats: ["Direction", "Confidence", "Next steps"],
  },
];

export function BusinessServicesCarousel({
  compact = false,
}: {
  compact?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={compact ? "bg-[#f6f2ea] px-4 py-10" : "bg-[#f6f2ea] px-4 py-14"}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8b641e]">
              Services that grow people
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black leading-tight text-[#15110a] md:text-5xl">
              Business, family, and life-growth guidance in slide form.
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded bg-[#15110a] px-5 py-3 text-xs font-black uppercase tracking-wide text-[#ffcf57]"
          >
            <MessageCircle size={18} />
            Ask on WhatsApp
          </a>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          loop
          speed={700}
          autoplay={{
            delay: 6200,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="service-swiper overflow-hidden bg-[#050505] shadow-xl shadow-black/10"
        >
          {serviceSlides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <SwiperSlide key={slide.title}>
                <div className="grid min-h-[560px] text-white md:grid-cols-[0.96fr_1.04fr] lg:min-h-[520px]">
                  <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
                    <Image
                      src={slide.image}
                      alt=""
                      fill
                      priority={index === 0}
                      sizes="(min-width: 768px) 48vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent md:bg-gradient-to-r" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-wide backdrop-blur">
                      <Icon size={17} className="text-[#ffcf57]" />
                      {slide.eyebrow}
                    </div>
                  </div>

                  <div className="flex min-h-[300px] flex-col justify-center px-5 py-8 sm:px-8 lg:px-12">
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.55 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.21, 0.65, 0.36, 1],
                      }}
                    >
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ffcf57]">
                        Slide {index + 1} / {serviceSlides.length}
                      </p>
                      <h3 className="mt-3 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                        {slide.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76 md:text-base">
                        {slide.body}
                      </p>

                      <div className="mt-6 grid gap-2 sm:grid-cols-3">
                        {slide.stats.map((stat) => (
                          <div
                            key={stat}
                            className="border border-white/12 bg-white/[0.07] px-4 py-3"
                          >
                            <p className="text-sm font-black">{stat}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                          href={slide.href}
                          className="inline-flex items-center gap-2 rounded bg-[#d9a441] px-5 py-3 text-xs font-black uppercase tracking-wide text-black"
                        >
                          {slide.cta}
                          <ArrowRight size={16} />
                        </Link>
                        <Link
                          href="/support"
                          className="inline-flex items-center gap-2 rounded border border-white/20 px-5 py-3 text-xs font-black uppercase tracking-wide text-white"
                        >
                          <CalendarCheck size={16} />
                          Book guidance
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
