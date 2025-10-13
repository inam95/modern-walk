import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <div className="relative">
      <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
      <Input placeholder="Search" className="border-border-primary h-10 pl-10 shadow-none" />
    </div>
  );
}
