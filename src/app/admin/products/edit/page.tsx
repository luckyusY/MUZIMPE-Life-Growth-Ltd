import { AdminPageShell } from "@/components/admin-page-shell";
import { products } from "@/lib/site-data";

export default function EditProductsPage() {
  return (
    <AdminPageShell
      title="Edit Products"
      text="Bulk edit route for product names, prices and descriptions."
    >
      <div className="grid gap-3">
        {products.map((product) => (
          <div
            key={product.slug}
            className="grid gap-3 rounded-lg border border-[#e7ddc7] bg-white p-4 md:grid-cols-[1fr_160px_1.2fr]"
          >
            <input defaultValue={product.name} className="rounded-md border border-[#e7ddc7] px-3 py-2" />
            <input defaultValue={product.price} className="rounded-md border border-[#e7ddc7] px-3 py-2" />
            <input defaultValue={product.detail} className="rounded-md border border-[#e7ddc7] px-3 py-2" />
          </div>
        ))}
      </div>
    </AdminPageShell>
  );
}
