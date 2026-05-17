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
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 0.06}
              className="group rounded-lg border border-[#d8ddce] bg-[#fbfaf7] p-6 transition hover:-translate-y-1 hover:border-[#9cae76] hover:bg-white"
            >
              <div className="mb-8 h-1 w-12 rounded-full bg-[#f2c14e] transition group-hover:w-20" />
              <h2 className="text-2xl font-semibold text-[#1e2f26]">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5b6658]">{service.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#182a22] py-16 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c14e]">
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
                <span className="font-semibold text-[#f2c14e]">0{index + 1}</span>
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
