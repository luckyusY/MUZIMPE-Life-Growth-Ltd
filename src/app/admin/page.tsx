import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";

export const metadata: Metadata = {
  title: "Admin | MUZIMPE Life & Growth Ltd",
  description: "Admin dashboard for MUZIMPE Life & Growth Ltd website content.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
