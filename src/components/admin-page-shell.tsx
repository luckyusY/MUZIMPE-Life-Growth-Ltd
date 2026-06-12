import Link from "next/link";
import type { ReactNode } from "react";

const adminLinks = [
  ["/admin", "Dashboard"],
  ["/admin/products", "Products"],
  ["/admin/products/new", "New product"],
  ["/admin/products/edit", "Edit products"],
  ["/admin/hero", "Hero"],
  ["/admin/categories", "Categories"],
];

export function AdminPageShell({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#15110a]">
      <div className="border-b border-[#d9a441]/25 bg-[#050505] px-5 py-4 text-white sm:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffcf57]">
              MUZIMPE Admin
            </p>
            <h1 className="mt-1 text-2xl font-black">{title}</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-white/72 hover:text-white">
            View website
          </Link>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[240px_1fr]">
        <nav className="grid h-fit gap-2 rounded-lg bg-[#15110a] p-3 text-white">
          {adminLinks.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white/72 hover:bg-white/10 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <section>
          <p className="max-w-3xl text-lg leading-8 text-[#6b5f4c]">{text}</p>
          <div className="mt-6">{children}</div>
        </section>
      </div>
    </main>
  );
}
