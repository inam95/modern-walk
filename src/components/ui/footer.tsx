import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Careers"],
  },
  {
    title: "Quick Links",
    links: ["Account", "Cart", "Orders", "Payments"],
  },
  {
    title: "Help",
    links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  },
];

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-16 md:px-0">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12">
          <div className="flex flex-col items-start gap-8 md:col-span-3">
            <Link href="/">
              <h1 className="text-heading-3 leading-heading-3 font-heading-3">MW.</h1>
            </Link>
            <p className="text-extra-small leading-extra-small font-extra-small text-muted-foreground max-w-[250px]">
              Modern Walk brings you timeless fashion with a modern edge. From everyday essentials to statement pieces.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  icon: "/images/facebook.svg",
                  alt: "Facebook",
                },
                {
                  icon: "/images/instagram.svg",
                  alt: "Instagram",
                },
                {
                  icon: "/images/x.svg",
                  alt: "X",
                },
              ].map((item) => (
                <div className="bg-background flex size-10 items-center justify-center rounded-md p-2" key={item.alt}>
                  <Image src={item.icon} alt={item.alt} width={16} height={16} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-8 md:col-span-5 md:col-start-8">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-8 md:flex-1">
                <div>
                  <h2 className="leading-base font-semibold">{column.title}</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li
                      key={link}
                      className="text-extra-small leading-extra-small font-extra-small text-muted-foreground"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-border-primary col-span-full border-t md:col-span-12" />
          <div className="text-extra-small leading-extra-small font-extra-small text-muted-foreground col-span-full md:col-span-3">
            <p>© 2025 Modern Walk. All rights reserved.</p>
          </div>
          <ul className="flex gap-4 md:col-span-3 md:col-start-10">
            {[
              {
                icon: "/images/visa.svg",
                alt: "Visa",
              },
              {
                icon: "/images/mastercard.svg",
                alt: "Mastercard",
              },
              {
                icon: "/images/applepay.svg",
                alt: "Apple Pay",
              },
            ].map((item) => (
              <li key={item.alt} className="bg-background flex h-8 w-12 items-center justify-center rounded-md p-2">
                <Image src={item.icon} alt={item.alt} width={30} height={16} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
