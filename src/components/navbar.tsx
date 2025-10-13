"use client";

import Image from "next/image";
import Link from "next/link";

import { SearchInput } from "@/components/search-input";
import { NavItems } from "@/components/nav-items";
import { UserDropdown } from "@/components/user-dropdown";

export function Navbar() {
  return (
    <header className="bg-background border-border-primary sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between py-9">
        <Link href="/">
          <h1 className="text-heading-3 leading-heading-3 font-heading-3">MW.</h1>
        </Link>
        <nav className="hidden md:block">
          <NavItems />
        </nav>
        <div className="hidden max-w-[350px] md:block md:w-1/4">
          <SearchInput />
        </div>
        <div className="flex items-center gap-8">
          <Link href="/cart">
            <Image src="/images/cart.svg" alt="Cart" width={24} height={24} />
          </Link>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
