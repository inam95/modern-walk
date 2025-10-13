import Image from "next/image";

export function AutumnSaleBanner() {
  return (
    <section className="bg-muted container mx-auto min-h-[280px] overflow-hidden rounded-xl md:min-h-[320px]">
      <div className="relative flex items-center justify-between">
        <div className="flex flex-col gap-4 p-8 md:p-16">
          <div className="flex items-center gap-2">
            <h2 className="text-heading-3 leading-heading-3 font-heading-3">Autumn Sale</h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">Limited time only. Don't miss out!</p>
          <h3 className="text-heading-4 leading-heading-4 font-heading-4">40% Off</h3>
        </div>

        <div className="relative h-[280px] w-[300px] md:h-[320px] md:w-[400px]">
          <Image src="/images/shoes.png" alt="Autumn Sale Shoes" fill className="object-contain object-right p-16" />
        </div>
      </div>
    </section>
  );
}
