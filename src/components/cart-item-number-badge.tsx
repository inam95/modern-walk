"use client";

import { useCartStore } from "@/lib/store";

export function CartItemNumberBadge() {
  const cartItems = useCartStore((state) => state.cart);

  return (
    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
      {cartItems.length}
    </span>
  );
}
