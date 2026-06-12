"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState, type ReactNode } from "react";
import { contactLinks, products, services } from "@/lib/site-data";

const sections = ["Overview", "Products", "Content", "Contacts"];

const contentBlocks = [
  {
    label: "Hero headline",
    value: "Natural living, family growth and business support",
  },
  {
    label: "Business focus",
    value: "Health, wellness, natural living, entrepreneurship and family guidance.",
  },
  {
    label: "Location",
    value: "BH Plaza, 3rd floor Matheus near Yussa Plaza - Kigali",
  },
];

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [featuredProduct, setFeaturedProduct] = useState(products[0].name);

  const activeProduct = useMemo(
    () => products.find((product) => product.name === featuredProduct) ?? products[0],
    [featuredProduct]
  );

  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#15110a]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-[#e7ddc7] bg-[#050505] p-5 text-white">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
              Admin
            </p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight">
              MUZIMPE Control Room
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Manage products, homepage messaging, contacts and business
              information from one clean surface.
            </p>
          </div>

          <nav className="mt-6 grid gap-2">
            {sections.map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`rounded-md px-4 py-3 text-left text-sm font-semibold transition ${
                  activeSection === section
                    ? "bg-[#d9a441] text-[#15110a]"
                    : "text-white/72 hover:bg-white/10 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <a
            href="/"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/14 text-sm font-semibold text-white/82 transition hover:border-[#d9a441] hover:text-white"
          >
            View website
          </a>
        </aside>

        <section className="p-5 sm:p-8">
          <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b641e]">
                Dashboard
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#15110a]">
                {activeSection}
              </h2>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="min-h-11 rounded-md border border-[#e7ddc7] bg-white px-4 text-sm font-semibold text-[#15110a] transition hover:-translate-y-0.5 hover:border-[#d9a441]">
                Preview changes
              </button>
              <button className="min-h-11 rounded-md bg-[#15110a] px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a2113]">
                Save draft
              </button>
            </div>
          </header>

          <div className="mt-8">
            {activeSection === "Overview" && (
              <AdminPanel>
                <div className="grid gap-4 md:grid-cols-4">
                  {[
                    [products.length, "Products"],
                    [services.length, "Services"],
                    [contactLinks.length, "Contact actions"],
                    ["Live", "Website status"],
                  ].map(([value, label]) => (
                    <motion.div
                      key={label}
                      className="rounded-lg border border-[#e7ddc7] bg-white p-5"
                      whileHover={{ y: -4 }}
                    >
                      <p className="text-3xl font-semibold text-[#15110a]">
                        {value}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#8b641e]">
                        {label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
                  <div className="rounded-lg border border-[#e7ddc7] bg-white p-5">
                    <h3 className="text-xl font-semibold text-[#15110a]">
                      Featured product
                    </h3>
                    <select
                      value={featuredProduct}
                      onChange={(event) => setFeaturedProduct(event.target.value)}
                      className="mt-4 min-h-11 w-full rounded-md border border-[#e7ddc7] bg-[#f6f2ea] px-3 text-sm outline-none focus:border-[#8b641e]"
                    >
                      {products.map((product) => (
                        <option key={product.name}>{product.name}</option>
                      ))}
                    </select>
                    <div className="mt-5 grid gap-4 sm:grid-cols-[180px_1fr]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#e7ddc7]">
                        <Image
                          src={activeProduct.image}
                          alt={activeProduct.name}
                          fill
                          className="object-cover"
                          sizes="180px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b641e]">
                          Homepage spotlight
                        </p>
                        <h4 className="mt-2 text-2xl font-semibold">
                          {activeProduct.name}
                        </h4>
                        <p className="mt-3 leading-7 text-[#6b5f4c]">
                          {activeProduct.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#e7ddc7] bg-white p-5">
                    <h3 className="text-xl font-semibold text-[#15110a]">
                      Quick notes
                    </h3>
                    <textarea
                      className="mt-4 min-h-48 w-full resize-none rounded-md border border-[#e7ddc7] bg-[#f6f2ea] p-3 text-sm leading-6 outline-none focus:border-[#8b641e]"
                      defaultValue={
                        "Next tasks:\n- Add prices when ready\n- Add product categories\n- Connect this admin to a database/CMS\n- Protect /admin with login"
                      }
                    />
                  </div>
                </div>
              </AdminPanel>
            )}

            {activeSection === "Products" && (
              <AdminPanel>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <motion.article
                      key={product.image}
                      className="overflow-hidden rounded-lg border border-[#e7ddc7] bg-white"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative aspect-[4/5] bg-[#e7ddc7]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 320px, 50vw"
                        />
                      </div>
                      <div className="p-5">
                        <input
                          className="w-full rounded-md border border-[#e7ddc7] px-3 py-2 font-semibold outline-none focus:border-[#8b641e]"
                          defaultValue={product.name}
                        />
                        <textarea
                          className="mt-3 min-h-24 w-full resize-none rounded-md border border-[#e7ddc7] px-3 py-2 text-sm leading-6 outline-none focus:border-[#8b641e]"
                          defaultValue={product.detail}
                        />
                      </div>
                    </motion.article>
                  ))}
                </div>
              </AdminPanel>
            )}

            {activeSection === "Content" && (
              <AdminPanel>
                <div className="grid gap-5 lg:grid-cols-2">
                  {contentBlocks.map((block) => (
                    <label
                      key={block.label}
                      className="rounded-lg border border-[#e7ddc7] bg-white p-5"
                    >
                      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b641e]">
                        {block.label}
                      </span>
                      <textarea
                        className="mt-3 min-h-28 w-full resize-none rounded-md border border-[#e7ddc7] bg-[#f6f2ea] p-3 text-sm leading-6 outline-none focus:border-[#8b641e]"
                        defaultValue={block.value}
                      />
                    </label>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-[#e7ddc7] bg-white p-5">
                  <h3 className="text-xl font-semibold text-[#15110a]">
                    Services
                  </h3>
                  <div className="mt-4 grid gap-3">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        className="grid gap-3 rounded-md border border-[#e7ddc7] p-4 md:grid-cols-[0.45fr_1fr]"
                      >
                        <input
                          className="rounded-md border border-[#e7ddc7] px-3 py-2 text-sm font-semibold outline-none focus:border-[#8b641e]"
                          defaultValue={service.title}
                        />
                        <input
                          className="rounded-md border border-[#e7ddc7] px-3 py-2 text-sm outline-none focus:border-[#8b641e]"
                          defaultValue={service.text}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AdminPanel>
            )}

            {activeSection === "Contacts" && (
              <AdminPanel>
                <div className="grid gap-4 md:grid-cols-2">
                  {contactLinks.map((contact) => (
                    <label
                      key={contact.href}
                      className="rounded-lg border border-[#e7ddc7] bg-white p-5"
                    >
                      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b641e]">
                        {contact.type}
                      </span>
                      <input
                        className="mt-3 min-h-11 w-full rounded-md border border-[#e7ddc7] px-3 text-sm outline-none focus:border-[#8b641e]"
                        defaultValue={contact.label}
                      />
                      <input
                        className="mt-3 min-h-11 w-full rounded-md border border-[#e7ddc7] px-3 text-sm outline-none focus:border-[#8b641e]"
                        defaultValue={contact.href}
                      />
                    </label>
                  ))}
                </div>
              </AdminPanel>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function AdminPanel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
