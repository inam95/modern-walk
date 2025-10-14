import Image from "next/image";
import Link from "next/link";
import { PlusIcon, StarIcon } from "lucide-react";

import { Item } from "@/lib/api/types";
import { Button } from "@/components/ui/button";

export function ItemCard({ item }: { item: Item }) {
  return (
    <Link
      href={`/shop/${item.id}`}
      className="group hover:border-border-secondary flex h-full w-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-10 p-4">
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="line-clamp-2 text-base leading-tight font-semibold">{item.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
            <div className="flex items-center gap-1">
              <StarIcon className="h-4 w-4 fill-current text-yellow-400" />
              <span className="text-muted-foreground text-sm">{item.rating.rate.toFixed(1)}/5</span>
            </div>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm">{item.description}</p>
        </div>
        <Button className="bg-secondary text-primary group-hover:bg-primary group-hover:text-secondary mt-auto flex h-11 w-full items-center justify-center gap-2 transition-all duration-300">
          <PlusIcon className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Link>
  );
}
