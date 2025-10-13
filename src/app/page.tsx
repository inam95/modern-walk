import { HeroSection } from "@/components/hero-section";
import { ShopByCategory } from "@/components/shop-by-category";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <HeroSection />
      <ShopByCategory />
      <div></div>
    </main>
  );
}
