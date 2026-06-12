import { PageHero, SiteFooter } from "@/components/site-chrome";
import { MotionMain, Reveal } from "@/components/site-motion";
import { contactLinks } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <MotionMain>
      <PageHero
        eyebrow="Contact"
        title="Visit, call or message MUZIMPE Life & Growth Ltd."
        text="Find EBGS at BH Plaza, 3rd floor Matheus near Yussa Plaza in Kigali, or contact the team directly."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-lg bg-[#15110a] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a441]">
              Location
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              BH Plaza, 3rd floor Matheus, near Yussa Plaza - Kigali
            </h2>
            <p className="mt-5 leading-8 text-white/76">
              Visit for natural products, wellness guidance, family support
              and entrepreneurship conversations.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((item, index) => (
              <Reveal
                key={item.href}
                delay={index * 0.05}
                className="rounded-lg border border-[#e7ddc7] bg-[#f6f2ea] p-6 transition hover:-translate-y-1 hover:border-[#d9a441] hover:bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b641e]">
                  {item.type}
                </p>
                <a
                  href={item.href}
                  target={item.type === "WhatsApp" ? "_blank" : undefined}
                  rel={item.type === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="mt-3 block break-words text-xl font-semibold leading-7 text-[#15110a]"
                >
                  {item.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </MotionMain>
  );
}
