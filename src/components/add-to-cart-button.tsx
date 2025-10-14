"use client";

import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { Item } from "@/lib/api/types";

export function AddToCartButton({ item }: { item: Item }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      className="bg-secondary text-primary group-hover:bg-primary group-hover:text-secondary mt-auto flex h-11 w-full items-center justify-center gap-2 transition-all duration-300"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart(item);
      }}
    >
      <PlusIcon className="h-4 w-4" />
      Add to Cart
    </Button>
  );
}
