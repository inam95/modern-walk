"use client";

import Image from "next/image";
import { ShoppingBagIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/quantity-selector";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store";
import Link from "next/link";

export function ShoppingCart() {
  const cartItems = useCartStore((state) => state.cart);
  const subtotal = useCartStore((state) => state.subtotal());
  const shipping = useCartStore((state) => state.shipping());
  const tax = useCartStore((state) => state.tax());
  const grandTotal = useCartStore((state) => state.grandTotal());

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16">
        <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
          {/* Empty Cart Icon */}
          <div className="bg-muted flex h-32 w-32 items-center justify-center rounded-full">
            <ShoppingBagIcon className="text-muted-foreground h-16 w-16" />
          </div>

          {/* Empty State Text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="text-muted-foreground">
              Looks like you haven&apos;t added any items to your cart yet. Start shopping to fill it up!
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="bg-primary text-white">
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex flex-col gap-4 lg:col-span-7">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="group border-border-primary hover:border-border-secondary relative flex items-center gap-9 rounded-lg border p-6 transition-all duration-300 hover:shadow-lg"
          >
            <Button
              variant="ghost"
              className="bg-primary hover:bg-primary/90 group-hover:bg-primary/90 group-hover:text-secondary absolute -top-2 -left-2 hidden h-6 w-6 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:flex"
              aria-label="Remove item"
            >
              <XIcon className="text-secondary h-4 w-4" strokeWidth={3} fill="currentColor" />
            </Button>

            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
              <Image src={item.image} alt={item.title} fill className="object-contain p-2" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-3">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">Size: {item.size}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <QuantitySelector quantity={item.quantity} id={item.id} size={item.size} component="shopping-cart" />
            </div>
          </div>
        ))}
      </div>
      <div className="lg:col-span-5">
        <div className="border-border-primary bg-muted rounded-lg border p-6">
          <h2 className="text-heading-2 mb-10 font-bold">Order summary</h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Subtotal</p>
              <p className="text-muted-foreground">${subtotal.toFixed(2)}</p>
            </div>

            <Separator className="bg-border-primary" />

            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Shipping</p>
              <p className="text-muted-foreground">${shipping.toFixed(2)}</p>
            </div>

            <Separator className="bg-border-primary" />

            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Tax (10%)</p>
              <p className="text-muted-foreground">${tax.toFixed(2)}</p>
            </div>

            <Separator className="bg-border-primary my-2" />

            <div className="flex items-center justify-between">
              <p className="font-semibold">Grand Total</p>
              <p className="font-semibold">${grandTotal.toFixed(2)}</p>
            </div>

            <Button className="bg-primary mt-10 h-12 w-full text-white">Go to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
