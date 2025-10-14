import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Size, useCartStore } from "@/lib/store";
import { Dispatch, SetStateAction, useState } from "react";

export type QuantitySelectorProps = {
  quantity?: number;
  setQuantity?: Dispatch<SetStateAction<number>>;
  id: number;
  size: Size;
  component: "item-details" | "shopping-cart";
};

export function QuantitySelector({ id, size, component, setQuantity, quantity }: QuantitySelectorProps) {
  const incrementQuantity = useCartStore((state) => state.incrementQuantityAndAddToCart);
  const decrementQuantity = useCartStore((state) => state.decrementQuantityAndAddToCart);
  const quantityStore = useCartStore((state) => state.getCartItemQuantity(id, size));

  return (
    <div className="border-border-primary flex items-center rounded-md border p-1">
      <Button
        className="hover:text-secondary hover:bg-primary/80 bg-secondary text-muted-foreground h-10 px-3 py-3 transition-colors"
        aria-label="Decrease quantity"
        onClick={() => {
          component === "shopping-cart" ? decrementQuantity(id, size) : setQuantity?.((prev) => prev - 1);
        }}
      >
        <MinusIcon className="h-4 w-4" />
      </Button>
      <span className="px-6 py-2 font-medium">{component === "shopping-cart" ? quantityStore : quantity}</span>
      <Button
        className="hover:text-secondary hover:bg-primary/80 bg-secondary text-muted-foreground h-10 px-3 py-3 transition-colors"
        aria-label="Increase quantity"
        onClick={() => {
          component === "shopping-cart" ? incrementQuantity(id, size) : setQuantity?.((prev) => prev + 1);
        }}
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
