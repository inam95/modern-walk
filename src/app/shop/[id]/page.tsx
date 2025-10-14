import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

import { NavBreadcrumb } from "@/components/nav-breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getItem } from "@/lib/dal";
import { ItemSelection } from "@/components/items-details";
import { HomeProductRow } from "@/components/home-product-row";
import { ProductRowSkeleton } from "@/components/product-row-skeleton";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ShopItem({ params }: PageProps) {
  const { id } = await params;
  const item = await getItem(Number(id));

  return (
    <main className="container mx-auto flex flex-col gap-16 py-8">
      <NavBreadcrumb
        breadcrumbItems={[
          { label: "Home", href: "/", isActive: false },
          { label: "Shop", href: "/shop", isActive: false },
          { label: item.title, href: `/shop/${id}`, isActive: true },
        ]}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-row gap-4 lg:col-span-2 lg:flex-col">
          {[1, 2, 3].map((_, index) => (
            <Button
              key={index}
              variant="outline"
              className="hover:border-border-secondary hover:bg-background relative aspect-square h-[180px] cursor-pointer overflow-hidden rounded-lg border-2 transition-all"
            >
              <Image
                src={item.image}
                alt={`${item.title} thumbnail ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </Button>
          ))}
        </div>
        <div className="border-border-primary relative aspect-square overflow-hidden rounded-lg border shadow-md lg:col-span-5">
          <Image src={item.image} alt={item.title} fill className="object-contain p-8" />
        </div>
        <div className="flex h-full flex-col justify-center gap-4 lg:col-span-5">
          <h1 className="text-heading-3 leading-heading-3 font-heading-3">{item.title}</h1>
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 fill-current text-yellow-400" />
            <span className="font-medium">{item.rating.rate}/5</span>
          </div>
          <div className="text-3xl">${item.price.toFixed(2)}</div>
          <p className="text-muted-foreground text-extra-small leading-relaxed">{item.description}</p>
          <Separator className="bg-border-primary my-4" />
          <ItemSelection item={item} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-6">
          <h1 className="text-heading-3 leading-heading-3 font-heading-3">Description</h1>
          <p className="text-muted-foreground font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <div />
      <Suspense fallback={<ProductRowSkeleton />}>
        <HomeProductRow title="Related Products" type="related-products" />
      </Suspense>
    </main>
  );
}
