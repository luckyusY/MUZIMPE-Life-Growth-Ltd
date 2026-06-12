import { AdminPageShell } from "@/components/admin-page-shell";

export default function AdminLoginPage() {
  return (
    <AdminPageShell
      title="Admin Login"
      text="Login route matching the Photo Factory admin structure. Authentication can be connected here."
    >
      <form className="max-w-xl rounded-lg border border-[#e7ddc7] bg-white p-6">
        {["Email", "Password"].map((field) => (
          <label key={field} className="mt-4 block first:mt-0">
            <span className="text-sm font-black uppercase tracking-wide text-[#8b641e]">
              {field}
            </span>
            <input className="mt-2 min-h-11 w-full rounded-md border border-[#e7ddc7] bg-[#f6f2ea] px-3" />
          </label>
        ))}
        <button className="press mt-5 min-h-11 rounded-full bg-[#15110a] px-6 text-sm font-black uppercase tracking-wide text-white">
          Sign in
        </button>
      </form>
    </AdminPageShell>
  );
}
