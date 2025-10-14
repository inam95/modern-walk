import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export type TCartStore = {
  cart: Array<number>;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<TCartStore>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (id: number) => set((state) => ({ cart: [...state.cart, id] })),
        removeFromCart: (id: number) =>
          set((state) => ({
            cart: state.cart.filter((item) => item !== id),
          })),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "cart-storage",
      },
    ),
    {
      name: "cart-store",
    },
  ),
);
