import Image from "next/image";

import { Button } from "@/components/ui/button";

const metrics = [
  {
    number: "200+",
    label: "International Brands",
  },
  {
    number: "2,000+",
    label: "High-Quality Products",
  },
  {
    number: "30,000+",
    label: "Happy Customers",
  },
];

export function HeroSection() {
  return (
    <section className="bg-muted relative">
      <div className="container mx-auto flex min-h-[640px] px-4 md:px-0">
        <div className="my-auto flex flex-1 flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-heading-4 leading-heading-4 font-heading-4 max-w-[400px]">
              Redefining Fashion with Modern Walk
            </h1>
            <p className="text-muted-foreground">Step into timeless fashion made for today’s lifestyle.</p>
            <Button className="h-10 w-fit">Shop Now</Button>
          </div>
          <div className="flex items-center gap-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1">
                <h3 className="text-heading-3 leading-heading-3 font-heading-3">{metric.number}</h3>
                <p className="text-extra-small leading-extra-small font-extra-small text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/2">
          <Image src="/images/hero-banner.jpg" alt="Hero Section" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
