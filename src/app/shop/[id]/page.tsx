import Image from "next/image";
import { MinusIcon, PlusIcon, StarIcon } from "lucide-react";

import { HomeProductRow } from "@/components/home-product-row";
import { NavBreadcrumb } from "@/components/nav-breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { sampleItems } from "@/lib/constants";

export default function ShopItem() {
  return (
    <main className="container mx-auto flex flex-col gap-16 py-8">
      <NavBreadcrumb />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-row gap-4 lg:col-span-2 lg:flex-col">
          <Button
            variant="outline"
            className="hover:border-border-secondary hover:bg-background relative aspect-square h-[180px] cursor-pointer overflow-hidden rounded-lg border-2 transition-all"
          >
            <Image
              src={sampleItems[0].image}
              alt={`${sampleItems[0].title} thumbnail ${0 + 1}`}
              fill
              className="object-contain p-2"
            />
          </Button>
          <Button
            variant="outline"
            className="hover:border-border-secondary hover:bg-background relative aspect-square h-[180px] cursor-pointer overflow-hidden rounded-lg border-2 transition-all"
          >
            <Image
              src={sampleItems[0].image}
              alt={`${sampleItems[0].title} thumbnail ${0 + 1}`}
              fill
              className="object-contain p-2"
            />
          </Button>
          <Button
            variant="outline"
            className="hover:border-border-secondary hover:bg-background relative aspect-square h-[180px] cursor-pointer overflow-hidden rounded-lg border-2 transition-all"
          >
            <Image
              src={sampleItems[0].image}
              alt={`${sampleItems[0].title} thumbnail ${0 + 1}`}
              fill
              className="object-contain p-2"
            />
          </Button>
        </div>
        <div className="border-border-primary relative aspect-square overflow-hidden rounded-lg border shadow-md lg:col-span-5">
          <Image src={sampleItems[0].image} alt={sampleItems[0].title} fill className="object-contain p-8" />
        </div>
        <div className="flex h-full flex-col justify-center gap-4 lg:col-span-5">
          <h1 className="text-heading-3 leading-heading-3 font-heading-3">{sampleItems[0].title}</h1>
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 fill-current text-yellow-400" />
            <span className="font-medium">{sampleItems[0].rating.rate}/5</span>
          </div>
          <div className="text-3xl">${sampleItems[0].price.toFixed(2)}</div>
          <p className="text-muted-foreground text-extra-small leading-relaxed">{sampleItems[0].description}</p>
          <Separator className="bg-border-primary my-4" />
          <div className="flex flex-col gap-3">
            <label className="text-extra-small">Select Size</label>
            <div className="flex gap-3">
              {["Small", "Medium", "Large"].map((size) => (
                <Button
                  key={size}
                  className="text-extra-small text-muted-foreground bg-secondary hover:text-secondary h-8 rounded-md border px-3 py-2 font-medium transition-all"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <Separator className="bg-border-primary my-4" />
          <div className="flex gap-4">
            <div className="border-border-primary flex items-center rounded-md border p-1">
              <Button
                className="hover:text-secondary hover:bg-primary/80 bg-secondary text-muted-foreground h-10 px-3 py-3 transition-colors"
                aria-label="Decrease quantity"
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="px-6 py-2 font-medium">1</span>
              <Button
                className="hover:text-secondary hover:bg-primary/80 bg-secondary text-muted-foreground h-10 px-3 py-3 transition-colors"
                aria-label="Increase quantity"
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
            <Button className="bg-primary h-auto flex-1 py-3 text-base font-medium text-white">Add to cart</Button>
          </div>
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
      {/* <HomeProductRow title="Related Products" items={sampleItems} /> */}
    </main>
  );
}
