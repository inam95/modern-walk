"use client";

import { useQueryState } from "nuqs";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const FILTERS = [
  {
    label: "New Arrivals",
    value: "new-arrivals",
  },
  {
    label: "Men",
    value: "men",
  },
  {
    label: "Women",
    value: "women",
  },
  {
    label: "Jewelery",
    value: "jewelery",
  },
  {
    label: "Electronics",
    value: "electronics",
  },
];

export function Filters() {
  const [category, setCategory] = useQueryState("category", {
    defaultValue: "new-arrivals",
    shallow: false,
  });
  return (
    <aside className="sticky top-30 hidden h-fit min-w-60 md:block">
      <div className="mb-6">
        <h3 className="font-semibold">Category</h3>
      </div>

      <ul className="space-y-2">
        {FILTERS.map((filter) => {
          const isChecked = filter.value === category;
          return (
            <li key={filter.value}>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <Checkbox className="accent-dark-900 h-4 w-4" checked={isChecked} />
                <label
                  htmlFor={filter.value}
                  className={cn(isChecked && "font-semibold")}
                  onClick={() => setCategory(filter.value)}
                >
                  {filter.label}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
