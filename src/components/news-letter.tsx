import { MailIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsLetter() {
  return (
    <section className="bg-primary container mx-auto flex items-center justify-between gap-8 rounded-xl p-8">
      <h2 className="text-heading-3 leading-heading-3 font-heading-3 text-secondary max-w-[230px]">
        Subscribe to Our Newsletter
      </h2>
      <div className="flex w-1/4 flex-col items-center gap-2">
        <div className="relative w-full">
          <MailIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            className="bg-input border-border-primary h-10 w-full pl-10 text-sm font-medium shadow-sm"
            placeholder="Enter your email address"
          />
        </div>
        <Button className="bg-secondary text-primary hover:bg-secondary/80 h-10 w-full cursor-pointer p-0 text-sm font-medium">
          Subscribe
        </Button>
      </div>
    </section>
  );
}
