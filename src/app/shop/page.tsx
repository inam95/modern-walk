import { Suspense } from "react";

import { Filters } from "@/components/filters";
import { ItemCard } from "@/components/item-card";
import { NavBreadcrumb } from "@/components/nav-breadcrumb";
import { ProductListPagination } from "@/components/product-list-pagination";
import { Sort } from "@/components/sort";
import { Separator } from "@/components/ui/separator";
import { Category } from "@/lib/api/types";
import { CATEGORY_MAP } from "@/lib/constants";
import { getItems } from "@/lib/dal";
import { shopSearchParamsLoader } from "@/lib/search-params";

type PageProps = {
  searchParams: Promise<{ category: string }>;
};

export default async function Shop({ searchParams }: PageProps) {
  const { category } = await shopSearchParamsLoader(searchParams);
  const categoryName = CATEGORY_MAP[category as keyof typeof CATEGORY_MAP] as Category;

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
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList categoryName={categoryName} />
        </Suspense>
      </div>
      <ProductListPagination />
      <div />
    </main>
  );
}

async function ProductList({ categoryName }: { categoryName: Category }) {
  const items = await getItems(categoryName);
  return (
    <section className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
}

function ProductListSkeleton() {
  return (
    <section className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="border-border-primary flex h-full w-full flex-col overflow-hidden rounded-xl border"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="bg-muted aspect-square w-full animate-pulse" />
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="bg-muted h-5 w-3/4 animate-pulse rounded" />
            <div className="flex items-center justify-between">
              <div className="bg-muted h-6 w-16 animate-pulse rounded" />
              <div className="bg-muted h-4 w-12 animate-pulse rounded" />
            </div>
            <div className="space-y-2">
              <div className="bg-muted h-3 w-full animate-pulse rounded" />
              <div className="bg-muted h-3 w-full animate-pulse rounded" />
              <div className="bg-muted h-3 w-2/3 animate-pulse rounded" />
            </div>
            <div className="bg-muted mt-auto h-11 w-full animate-pulse rounded-md" />
          </div>
        </div>
      ))}
    </section>
  );
}
