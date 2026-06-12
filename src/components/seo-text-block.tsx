export type SeoSection = { heading: string; body: string };

export function SeoTextBlock({
  intro,
  sections,
  relatedTitle,
  related,
}: {
  intro?: string;
  sections: SeoSection[];
  relatedTitle?: string;
  related?: { label: string; href: string }[];
}) {
  return (
    <section className="border-t border-[#e7ddc7] bg-white">
      <div className="mx-auto max-w-7xl space-y-5 px-4 py-8 text-[13px] leading-6 text-[#4b5563]">
        {intro && <p className="max-w-5xl">{intro}</p>}
        {sections.map((section) => (
          <div key={section.heading} className="max-w-5xl">
            <h2 className="text-[15px] font-bold text-black">
              {section.heading}
            </h2>
            <p className="mt-1.5">{section.body}</p>
          </div>
        ))}
        {related && related.length > 0 && (
          <div className="border-t border-[#e7ddc7] pt-5">
            <h2 className="text-[15px] font-bold text-black">
              {relatedTitle ?? "Related Pages"}
            </h2>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
              {related.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#8b641e] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
