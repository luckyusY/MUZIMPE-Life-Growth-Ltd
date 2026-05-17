"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Natural oils",
    title: "Daily wellness essentials",
    text: "Selected products for health, beauty routines and natural family care.",
    image: "/products/a266fc50-3451-4f22-ae7f-25bd6cd551cd.jpg",
  },
  {
    eyebrow: "Family guidance",
    title: "Support for home decisions",
    text: "Practical conversations around wellbeing, growth and healthier living.",
    image: "/products/f9762fec-8ac0-4305-a1f1-fb037b4e5612.jpg",
  },
  {
    eyebrow: "Entrepreneurship",
    title: "Build with confidence",
    text: "Guidance for people growing small businesses and creating better futures.",
    image: "/products/fbbc9e9c-35b6-4395-80dc-71c672c043c2.jpg",
  },
];

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/14 bg-white/10 p-3 shadow-2xl backdrop-blur">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#24372d] sm:aspect-[0.92/1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102019]/92 via-[#102019]/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c14e]">
                {slide.eyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-white">
                {slide.title}
              </h2>
              <p className="mt-3 leading-7 text-white/78">{slide.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            className="group h-2 overflow-hidden rounded-full bg-white/22"
            aria-label={`Show ${item.title}`}
          >
            <span
              className={`block h-full rounded-full bg-[#f2c14e] transition-all duration-500 ${
                index === active ? "w-full" : "w-0 group-hover:w-1/2"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
