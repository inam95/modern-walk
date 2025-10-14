import { Suspense } from "react";
import { AutumnSaleBanner } from "@/components/autumn-sale-banner";
import { HeroSection } from "@/components/hero-section";
import { HomeProductRow } from "@/components/home-product-row";
import { NewsLetter } from "@/components/news-letter";
import { ShopByCategory } from "@/components/shop-by-category";
import { ProductRowSkeleton } from "@/components/product-row-skeleton";

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
