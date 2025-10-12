import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import { NavItems } from "./nav-items";

export function UserDropdown() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };
  const handleSignout = () => {
    console.log("Signout");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="cursor-pointer p-0 hover:bg-transparent focus-visible:ring-0">
          <Image src="/images/user.svg" alt="User" width={24} height={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400" side="bottom" align="end">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-3 py-2">
            <Avatar className="size-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-muted text-primary text-sm font-bold">{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">{user.name}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <nav className="md:hidden">
          <NavItems />
        </nav>
        <DropdownMenuItem onClick={handleSignout} className="cursor-pointer text-base font-medium transition-colors">
          <LogOutIcon className="mr-2 hidden size-4 md:block" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
