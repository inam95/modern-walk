import { getFlashSaleItems, getItems } from "@/lib/dal";
import { ItemCard } from "@/components/item-card";

type TProductRow = "flash-sale" | "most-popular" | "latest-products" | "related-products";

type HomeProductRowProps = {
  title: string;
  type: TProductRow;
};

export async function HomeProductRow({ title, type }: HomeProductRowProps) {
  const products = type === "flash-sale" ? await getFlashSaleItems(2) : await getItems(undefined, 4);

  return (
    <section className="container mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-3 leading-heading-3 font-heading-3">{title}</h1>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-4">
        {products.map((item) => (
          <ItemCard key={`${item.id}-${type}-${title}`} item={item} />
        ))}
      </div>
    </section>
  );
}
