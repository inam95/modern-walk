"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/shop",
    label: "Brands",
  },
  {
    href: "/shop",
    label: "About",
  },
  {
    href: "/shop",
    label: "Contact",
  },
];

export function NavItems() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  return (
    <ul className="flex flex-col p-2 md:flex-row md:gap-8 md:p-3">
      {NAV_ITEMS.map((item) => (
        <li key={item.label}>
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
  );
}
