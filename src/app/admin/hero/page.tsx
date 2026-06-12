import { AdminPageShell } from "@/components/admin-page-shell";

export default function AdminHeroPage() {
  return (
    <AdminPageShell
      title="Hero Editor"
      text="Edit the homepage hero, promotional bars and spotlight messaging."
    >
      <div className="grid gap-4 rounded-lg border border-[#e7ddc7] bg-white p-6">
        {["Promo bar", "Hero headline", "Hero text", "Primary CTA"].map((field) => (
          <label key={field}>
            <span className="text-sm font-black uppercase tracking-wide text-[#8b641e]">
              {field}
            </span>
            <textarea className="mt-2 min-h-24 w-full rounded-md border border-[#e7ddc7] bg-[#f6f2ea] p-3" />
          </label>
        ))}
      </div>
    </AdminPageShell>
  );
}
