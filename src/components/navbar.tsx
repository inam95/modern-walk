"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SearchInput } from "@/components";

const NAV_ITEMS = [
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/brands",
    label: "Brands",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-9">
        <Link href="/">
          <h1 className="text-heading-3 leading-heading-3 font-heading-3">MW.</h1>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex flex-col p-3 sm:flex-row sm:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn("hover:text-muted-foreground text-primary transition-colors", {
                    "text-foreground/70": isActive(item.href),
                  })}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden w-full max-w-[350px] sm:block">
          <SearchInput />
        </div>
        <div>
          <p>CART</p>
        </div>
      </div>
    </header>
  );
}
