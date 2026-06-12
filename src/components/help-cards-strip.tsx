import { Building2, HelpCircle, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    icon: Phone,
    title: "Give Us A Call",
    body: "Questions? We're happy to help! Call us at +250 788 000 000.",
    href: "tel:+250788000000",
  },
  {
    icon: MessageCircle,
    title: "Chat Now",
    body: "Need help or have product questions? Chat with an expert.",
    href: "/support",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    body: "For info on shipping, returns, orders and more, find answers here.",
    href: "/support",
  },
  {
    icon: Building2,
    title: "Visit Our Stores",
    body: "Visit our Kigali stores for shopping, services, repairs, and more.",
    href: "/stores",
  },
];

export function HelpCardsStrip() {
  return (
    <section className="border-t border-[#e7ddc7] bg-[#f6f2ea]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          const inner = (
            <>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#e7ddc7] text-[#8b641e]">
                <Icon size={22} />
              </span>
              <h3 className="mt-3 text-base font-bold text-[#8b641e]">
                {card.title}
              </h3>
              <p className="mt-1 max-w-[230px] text-[13px] leading-5 text-[#4b5563]">
                {card.body}
              </p>
            </>
          );
          return card.href.startsWith("/") ? (
            <Link
              key={card.title}
              href={card.href}
              className="flex flex-col items-center text-center"
            >
              {inner}
            </Link>
          ) : (
            <a
              key={card.title}
              href={card.href}
              className="flex flex-col items-center text-center"
            >
              {inner}
            </a>
          );
        })}
      </div>
    </section>
  );
}
