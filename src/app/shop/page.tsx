import { NavBreadcrumb } from "@/components/nav-breadcrumb";
import { Sort } from "@/components/sort";
import { Filters } from "@/components/filters";
import { Separator } from "@/components/ui/separator";
import { sampleItems } from "@/lib/constants";
import { ItemCard } from "@/components/item-card";
import { ProductListPagination } from "@/components/product-list-pagination";

export default function Shop() {
  return (
    <main className="container mx-auto flex flex-col gap-16">
      <NavBreadcrumb />
      <div className="flex items-center justify-between">
        <h1 className="text-heading-3 leading-heading-3 font-heading-3">Shop</h1>
        <Sort />
      </div>
      <Separator className="bg-border-primary" />
      <div className="flex gap-8">
        <Filters />
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sampleItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </section>
      </div>
      <ProductListPagination />
      <div />
    </main>
  );
}
