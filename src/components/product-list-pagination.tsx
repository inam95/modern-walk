import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function ProductListPagination() {
  return (
    <Pagination className="my-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/shop" className="opacity-50" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/shop" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/shop">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/shop">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/shop" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
