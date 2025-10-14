import { NavBreadcrumb } from "@/components/nav-breadcrumb";
import { ShoppingCart } from "@/components/shopping-cart";
import { Separator } from "@/components/ui/separator";

export default function ShopItem() {
  return (
    <main className="container mx-auto flex flex-col gap-16">
      <NavBreadcrumb />
      <div className="flex items-center justify-between">
        <h1 className="text-heading-3 leading-heading-3 font-heading-3">Shopping Cart</h1>
      </div>
      <Separator className="bg-border-primary" />
      <div className="flex gap-8">
        <ShoppingCart />
      </div>
      <div />
    </main>
  );
}
