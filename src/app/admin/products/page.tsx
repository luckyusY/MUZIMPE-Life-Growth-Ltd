import Image from "next/image";
import Link from "next/link";
import { AdminPageShell } from "@/components/admin-page-shell";
import { products } from "@/lib/site-data";

export default function AdminProductsPage() {
  return (
    <AdminPageShell
      title="Products"
      text="Manage the EBGS catalog in a Photo Factory-style admin products route."
    >
      <div className="grid gap-4">
        {products.map((product) => (
          <Link
            href="/admin/products/edit"
            key={product.slug}
            className="grid gap-4 rounded-lg border border-[#e7ddc7] bg-white p-4 transition hover:-translate-y-1 md:grid-cols-[100px_1fr_auto]"
          >
            <div className="relative aspect-square overflow-hidden bg-[#f6f2ea]">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-black text-[#15110a]">{product.name}</p>
              <p className="mt-1 text-sm text-[#6b5f4c]">{product.detail}</p>
            </div>
            <span className="font-black text-[#8b641e]">{product.price}</span>
          </Link>
        ))}
      </div>
    </AdminPageShell>
  );
}
