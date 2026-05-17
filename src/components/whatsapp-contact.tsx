"use client";

import { motion } from "framer-motion";

const message = encodeURIComponent(
  "Hello MUZIMPE Life & Growth Ltd, I would like to know more about your products and services."
);

const whatsappUrl = `https://wa.me/250781375870?text=${message}`;

export function WhatsAppContact() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#1f8f52] px-5 text-sm font-semibold text-white shadow-2xl shadow-[#1f8f52]/25 ring-1 ring-white/30 transition hover:bg-[#176f40]"
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Chat with MUZIMPE Life and Growth on WhatsApp"
    >
      <span className="grid size-7 place-items-center rounded-full bg-white text-[#1f8f52]">
        WA
      </span>
      WhatsApp
    </motion.a>
  );
}

export { whatsappUrl };
