"use client";

import { useState } from "react";

import { QuantitySelector } from "@/components/quantity-selector";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Size, useCartStore } from "@/lib/store";
import { Item } from "@/lib/api/types";
import { cn } from "@/lib/utils";

export function ItemSelection({ item }: { item: Item }) {
  const [size, setSize] = useState<Size>("S");
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      <div className="flex flex-col gap-3">
        <label className="text-extra-small">Select Size</label>
        <div className="flex gap-3">
          {(["S", "M", "L"] as const).map((s) => (
            <Button
              key={s}
              onClick={() => setSize(s)}
              className={cn(
                "text-extra-small text-muted-foreground bg-secondary hover:text-secondary h-8 rounded-md border px-3 py-2 font-medium transition-all",
                s === size ? "bg-primary text-white" : "",
              )}
            >
              {s}
            </Button>
          ))}
        </div>
      </div>
      <Separator className="bg-border-primary my-4" />
      <div className="flex gap-4">
        <QuantitySelector
          id={item.id}
          size={size}
          component="item-details"
          setQuantity={setQuantity}
          quantity={quantity}
        />
        <Button
          className="bg-primary h-auto flex-1 py-3 text-base font-medium text-white"
          onClick={() => addToCart(item, size, quantity)}
        >
          Add to cart
        </Button>
      </div>
    </>
  );
}
