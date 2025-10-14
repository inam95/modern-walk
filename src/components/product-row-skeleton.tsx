export function ProductRowSkeleton() {
  return (
    <section className="container mx-auto flex flex-col gap-8">
      <div className="bg-muted h-8 w-48 animate-pulse rounded" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-muted h-[400px] w-full animate-pulse rounded-xl" />
        ))}
      </div>
    </section>
  );
}
