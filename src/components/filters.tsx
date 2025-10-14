"use client";

import { Checkbox } from "@/components/ui/checkbox";

const FILTERS = [
  {
    label: "New Arrivals",
    value: "new-arrivals",
  },
  {
    label: "Men",
    value: "mens-clothing",
  },
  {
    label: "Women",
    value: "womens-clothing",
  },
  {
    label: "Unisex",
    value: "unisex",
  },
  {
    label: "Accessories",
    value: "accessories",
  },
];

export function Filters() {
  return (
    <aside className="sticky top-30 hidden h-fit min-w-60 md:block">
      <div className="mb-6">
        <h3 className="font-semibold">Category</h3>
      </div>

      <ul className="space-y-2">
        {FILTERS.map((filter) => {
          return (
            <li key={filter.value}>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <Checkbox className="accent-dark-900 h-4 w-4" checked />
                <label htmlFor={filter.value} className="text-body text-dark-900">
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
