import { AdminPageShell } from "@/components/admin-page-shell";
import { categories } from "@/lib/site-data";

export default function AdminCategoriesPage() {
  return (
    <AdminPageShell
      title="Categories"
      text="Manage category names and descriptions."
    >
      <div className="grid gap-3">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="grid gap-3 rounded-lg border border-[#e7ddc7] bg-white p-4 md:grid-cols-[0.5fr_1fr]"
          >
            <input defaultValue={category.name} className="rounded-md border border-[#e7ddc7] px-3 py-2" />
            <input defaultValue={category.description} className="rounded-md border border-[#e7ddc7] px-3 py-2" />
          </div>
        ))}
      </div>
    </AdminPageShell>
  );
}
