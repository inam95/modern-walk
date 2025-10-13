import { HeroSection } from "@/components/hero-section";
import { HomeProductRow } from "@/components/home-product-row";
import { ShopByCategory } from "@/components/shop-by-category";
import { sampleItems } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <HeroSection />
      <ShopByCategory />
      <HomeProductRow title="Flash Sale" items={sampleItems} />
      <HomeProductRow title="Most Popular" items={sampleItems} />
      <HomeProductRow title="Latest Products" items={sampleItems} />
      <div></div>
    </main>
  );
}
