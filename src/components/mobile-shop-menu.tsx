"use client";

import {
  HeartPulse,
  Home,
  Menu,
  MessageCircle,
  Package,
  Search,
  ShoppingCart,
  Sparkles,
  Sprout,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/store-context";
import { WHATSAPP_URL } from "@/lib/contact";

type MenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  image: string;
};

const items: MenuItem[] = [
  {
    label: "Natural Oils",
    href: "/c/natural-oils",
    icon: Sprout,
    image: "/products/black-seeds-flax-seeds-oil/1.jpg",
  },
  {
    label: "Wellness",
    href: "/c/wellness",
    icon: HeartPulse,
    image: "/products/ebgs-wellness-kit/1.jpg",
  },
  {
    label: "Herbal Care",
    href: "/c/herbal-care",
    icon: Sparkles,
    image: "/products/herbal-wellness-blend/1.jpg",
  },
  {
    label: "Family Guidance",
    href: "/c/family-guidance",
    icon: User,
    image: "/products/family-health-support/1.jpg",
  },
  {
    label: "Entrepreneurship",
    href: "/c/entrepreneurship",
    icon: Package,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=240&q=80",
  },
  {
    label: "Life Growth",
    href: "/c/life-growth",
    icon: Sparkles,
    image: "/products/life-growth-pack/1.jpg",
  },
];

export function MobileShopMenu() {
  const [open, setOpen] = useState(false);
  const { cart, wishlist } = useStore();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-[#d9a441]/30 bg-[#050505] text-white shadow-2xl md:hidden">
        <div className="grid grid-cols-5 text-[10px] font-bold uppercase tracking-wide">
          <Link href="/" className="grid place-items-center gap-1 py-2">
            <Home size={19} />
            Home
          </Link>
          <Link href="/search" className="grid place-items-center gap-1 py-2">
            <Search size={19} />
            Search
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid place-items-center gap-1 bg-[#d9a441] py-2 text-black"
          >
            <Menu size={20} />
            Shop
          </button>
          <Link href="/wishlist" className="relative grid place-items-center gap-1 py-2">
            <Sparkles size={19} />
            Wishlist
            {wishlist.length > 0 && (
              <span className="absolute right-4 top-1 rounded-full bg-[#ffcf57] px-1.5 text-[10px] text-black">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative grid place-items-center gap-1 py-2">
            <ShoppingCart size={19} />
            Cart
            {cartCount > 0 && (
              <span className="absolute right-4 top-1 rounded-full bg-[#ffcf57] px-1.5 text-[10px] text-black">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/50 md:hidden">
          <div className="absolute inset-x-0 bottom-0 max-h-[82vh] overflow-y-auto rounded-t-2xl bg-[#f6f2ea] pb-6 text-[#15110a] shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#d9a441]/30 bg-[#f6f2ea] px-4 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8b641e]">
                  MUZIMPE
                </p>
                <h2 className="text-xl font-black">Shop Wellness</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close shop menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-white shadow"
              >
                <X size={21} />
              </button>
            </div>

            <div className="grid gap-3 p-4">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="grid grid-cols-[72px_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-[#e7ddc7] bg-white p-2 shadow-sm"
                  >
                    <div className="relative h-16 overflow-hidden rounded-md bg-[#15110a]">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-black">{item.label}</p>
                      <p className="mt-1 text-xs font-semibold text-[#6b5b3e]">
                        EBGS products and guidance
                      </p>
                    </div>
                    <Icon className="text-[#8b641e]" size={20} />
                  </Link>
                );
              })}
            </div>

            <div className="px-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#15110a] px-4 py-3 text-sm font-black uppercase tracking-wide text-[#ffcf57]"
              >
                <MessageCircle size={19} />
                WhatsApp MUZIMPE
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
