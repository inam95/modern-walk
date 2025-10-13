import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "New Arrivals",
    image: "/images/new-arrivals.png",
    href: "/category/new-arrivals",
  },
  {
    title: "Women's Clothing",
    image: "/images/women-clothing.png",
    href: "/category/womens",
  },
  {
    title: "Men's Clothing",
    image: "/images/men-clothing.png",
    href: "/category/mens",
  },
];

export function ShopByCategory() {
  return (
    <section className="container mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-heading-3 leading-heading-3 font-heading-3">Shop by Category</h2>
        <Button variant="ghost">
          Browse All Categories
          <ArrowRightIcon className="size-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link href={categories[0].href} className="group relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src={categories[0].image}
            alt={categories[0].title}
            fill
            className="z-10 object-cover object-left transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-4">
            <h3 className="text-heading-3 leading-heading-3 font-heading-3 text-white">{categories[0].title}</h3>
            <Button variant="ghost" className="w-fit text-white hover:bg-white/20 hover:text-white">
              Shop Now
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#cacac3] via-[#ebeae6] to-transparent" />
        </Link>
        <div className="flex flex-col gap-4">
          <Link href={categories[1].href} className="group relative h-[242px] overflow-hidden rounded-lg">
            <Image
              src={categories[1].image}
              alt={categories[1].title}
              fill
              className="z-10 object-cover object-[10%_40%] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-4">
              <h3 className="text-heading-3 leading-heading-3 font-heading-3 text-white">{categories[1].title}</h3>
              <Button variant="ghost" className="w-fit text-white hover:bg-white/20 hover:text-white">
                Shop Now
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#c1c0c6] via-[#c2c0c3] to-[#707076]" />
          </Link>
          <Link href={categories[2].href} className="group relative h-[242px] overflow-hidden rounded-lg">
            <Image
              src={categories[2].image}
              alt={categories[2].title}
              fill
              className="z-10 object-cover object-[65%_center] transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-4">
              <h3 className="text-heading-3 leading-heading-3 font-heading-3 text-white">{categories[2].title}</h3>
              <Button variant="ghost" className="w-fit text-white hover:bg-white/20 hover:text-white">
                Shop Now
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#8ea6bf] via-[#8ca3bc] to-[#6c8297]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
