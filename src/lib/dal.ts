import { Category, Item } from "@/lib/api/types";

export async function getItems(category?: Category, limit?: number): Promise<Item[]> {
  let url = "https://fakestoreapi.com/products";
  if (category) {
    url += `/category/${category}`;
  }
  if (limit) {
    url += `?limit=${limit}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getFlashSaleItems(limitForEachCategory: number): Promise<Item[]> {
  const items: Item[] = [];
  const menItems = await getItems("men's clothing", limitForEachCategory);
  const womenItems = await getItems("women's clothing", limitForEachCategory);
  items.push(menItems[0], womenItems[0], menItems[1], womenItems[1]);

  return items;
}

export async function getItem(id: number): Promise<Item> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
