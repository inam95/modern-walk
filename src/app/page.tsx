import { HeroSection } from "@/components/hero-section";
import { HomeProductRow } from "@/components/home-product-row";
import { ShopByCategory } from "@/components/shop-by-category";
import { AutumnSaleBanner } from "@/components/autumn-sale-banner";
import { sampleItems } from "@/lib/constants";
import { NewsLetter } from "@/components/news-letter";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <HeroSection />
      <ShopByCategory />
      <HomeProductRow title="Flash Sale" items={sampleItems} />
      <HomeProductRow title="Most Popular" items={sampleItems} />
      <AutumnSaleBanner />
      <HomeProductRow title="Latest Products" items={sampleItems} />
      <NewsLetter />
      <div />
    </main>
  );
}
