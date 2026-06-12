import { PageHero, SiteFooter } from "@/components/site-chrome";
import { MotionMain, Reveal } from "@/components/site-motion";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <MotionMain>
      <PageHero
        eyebrow="Services"
        title="Support for health, family life and entrepreneurship."
        text="MUZIMPE Life & Growth Ltd combines natural product guidance with practical conversations for people and families who want to grow."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-[1440px] gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 0.06}
              className="group rounded-lg border border-[#e7ddc7] bg-[#f6f2ea] p-6 transition hover:-translate-y-1 hover:border-[#d9a441] hover:bg-white"
            >
              <div className="mb-8 h-1 w-12 rounded-full bg-[#d9a441] transition group-hover:w-20" />
              <h2 className="text-2xl font-semibold text-[#15110a]">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-[#6b5f4c]">{service.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#15110a] py-16 text-white">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a441]">
              Process
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Simple guidance, clear next steps.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {[
              "Tell us what you need: product guidance, wellness support or growth advice.",
              "We recommend practical options based on what is available and useful.",
              "You visit, call or continue on WhatsApp for next steps.",
            ].map((step, index) => (
              <Reveal
                key={step}
                delay={index * 0.08}
                className="rounded-lg border border-white/12 bg-white/[0.06] p-5"
              >
                <span className="font-semibold text-[#d9a441]">0{index + 1}</span>
                <p className="mt-2 text-lg leading-8 text-white/78">{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </MotionMain>
  );
}
