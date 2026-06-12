export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-5">
        <div className="skeleton h-10 w-56 rounded-full" />
        <div className="skeleton h-24 max-w-3xl rounded-lg" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="rounded-lg bg-white p-4">
              <div className="skeleton aspect-[4/5] rounded-md" />
              <div className="skeleton mt-4 h-5 rounded" />
              <div className="skeleton mt-2 h-4 w-2/3 rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
