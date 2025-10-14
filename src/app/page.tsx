import { Suspense } from "react";
import { AutumnSaleBanner } from "@/components/autumn-sale-banner";
import { HeroSection } from "@/components/hero-section";
import { HomeProductRow } from "@/components/home-product-row";
import { NewsLetter } from "@/components/news-letter";
import { ShopByCategory } from "@/components/shop-by-category";

function ProductRowSkeleton() {
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

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <HeroSection />
      <ShopByCategory />
      <Suspense fallback={<ProductRowSkeleton />}>
        <HomeProductRow title="Flash Sale" type="flash-sale" />
      </Suspense>
      <Suspense fallback={<ProductRowSkeleton />}>
        <HomeProductRow title="Most Popular" type="most-popular" />
      </Suspense>
      <AutumnSaleBanner />
      <Suspense fallback={<ProductRowSkeleton />}>
        <HomeProductRow title="Latest Products" type="latest-products" />
      </Suspense>
      <NewsLetter />
      <div />
    </main>
  );
}
