import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SORT_OPTIONS = [
  {
    label: "Recent",
    value: "recent",
  },
  {
    label: "Most Popular",
    value: "most-popular",
  },
  {
    label: "Best Rating",
    value: "best-rating",
  },
  {
    label: "Price: Low to High",
    value: "price-low-to-high",
  },
  {
    label: "Price: High to Low",
    value: "price-high-to-low",
  },
];

export function Sort() {
  return (
    <Select>
      <SelectTrigger className="!h-9 w-[180px]">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        {SORT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
