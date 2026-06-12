import { AdminPageShell } from "@/components/admin-page-shell";

export default function NewProductPage() {
  return (
    <AdminPageShell
      title="New Product"
      text="Create product route matching the reference admin structure."
    >
      <form className="grid gap-4 rounded-lg border border-[#e7ddc7] bg-white p-6">
        {["Product name", "Brand", "Category", "Price", "Image URL", "Description"].map((field) => (
          <label key={field}>
            <span className="text-sm font-black uppercase tracking-wide text-[#8b641e]">
              {field}
            </span>
            <input className="mt-2 min-h-11 w-full rounded-md border border-[#e7ddc7] bg-[#f6f2ea] px-3" />
          </label>
        ))}
      </form>
    </AdminPageShell>
  );
}
