import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

type NavBreadcrumbProps = {
  breadcrumbItems: {
    label: string;
    href: string;
    isActive: boolean;
  }[];
};

export function NavBreadcrumb({ breadcrumbItems }: NavBreadcrumbProps) {
  return (
    <Breadcrumb className="mt-32">
      <BreadcrumbList>
        {breadcrumbItems.map((item) => {
          if (!item.isActive) {
            return (
              <React.Fragment key={item.label}>
                <BreadcrumbItem key={item.label}>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          }
          return (
            <BreadcrumbItem key={item.label}>
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
