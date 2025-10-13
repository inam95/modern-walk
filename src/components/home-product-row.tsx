import { Item } from "@/lib/api/types";
import { ItemCard } from "@/components/item-card";

type HomeProductRowProps = {
  title: string;
  items: Item[];
};

export function HomeProductRow({ title, items }: HomeProductRowProps) {
  return (
    <section className="container mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-3 leading-heading-3 font-heading-3">{title}</h1>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
