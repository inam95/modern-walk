import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { Item } from "@/lib/api/types";

export type Size = "S" | "M" | "L";

export type CartItem = Item & {
  quantity: number;
  size: Size;
};

export type TCartStore = {
  cart: Array<CartItem>;

  // Actions
  addToCart: (item: Item, size?: Size, quantity?: number) => void;
  removeFromCart: (id: number, size: Size) => void;
  updateQuantity: (id: number, size: Size, quantity: number) => void;
  incrementQuantityAndAddToCart: (id: number, size: Size) => void;
  decrementQuantityAndAddToCart: (id: number, size: Size) => void;
  clearCart: () => void;

  // Computed getters
  totalCartItems: () => number;
  getCartItem: (id: number, size: Size) => CartItem | undefined;
  subtotal: () => number;
  shipping: () => number;
  tax: () => number;
  grandTotal: () => number;
  getCartItemQuantity: (id: number, size: Size) => number;
};

const SHIPPING_COST = 5.0;
const TAX_RATE = 0.1;

export const useCartStore = create<TCartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (item: Item, size: Size = "M", quantity: number = 1) =>
          set((state) => {
            const existingItem = state.cart.find((i) => i.id === item.id && i.size === size);

            if (existingItem) {
              return {
                cart: state.cart.map((i) =>
                  i.id === item.id && i.size === size ? { ...i, quantity: i.quantity + quantity } : i,
                ),
              };
            }

            return {
              cart: [...state.cart, { ...item, quantity, size }],
            };
          }),
        removeFromCart: (id: number, size: Size) =>
          set((state) => ({
            cart: state.cart.filter((item) => !(item.id === id && item.size === size)),
          })),
        updateQuantity: (id: number, size: Size, quantity: number) =>
          set((state) => {
            if (quantity <= 0) {
              return {
                cart: state.cart.filter((item) => !(item.id === id && item.size === size)),
              };
            }

            return {
              cart: state.cart.map((item) => (item.id === id && item.size === size ? { ...item, quantity } : item)),
            };
          }),
        incrementQuantityAndAddToCart: (id: number, size: Size) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          })),
        decrementQuantityAndAddToCart: (id: number, size: Size) =>
          set((state) => {
            const item = state.cart.find((i) => i.id === id && i.size === size);

            if (!item) return state;

            if (item.quantity <= 1) {
              return {
                cart: state.cart.filter((i) => !(i.id === id && i.size === size)),
              };
            }

            return {
              cart: state.cart.map((i) => (i.id === id && i.size === size ? { ...i, quantity: i.quantity - 1 } : i)),
            };
          }),
        clearCart: () => set({ cart: [] }),
        totalCartItems: () => {
          return get().cart.reduce((total, item) => total + item.quantity, 0);
        },
        getCartItemQuantity: (id: number, size: Size) => {
          return get().cart.find((item) => item.id === id && item.size === size)?.quantity ?? 0;
        },
        getCartItem: (id: number, size: Size) => {
          return get().cart.find((item) => item.id === id && item.size === size);
        },
        subtotal: () => {
          return get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        shipping: () => {
          const cartTotal = get().totalCartItems();
          return cartTotal > 0 ? SHIPPING_COST : 0;
        },
        tax: () => {
          return get().subtotal() * TAX_RATE;
        },
        grandTotal: () => {
          return get().subtotal() + get().shipping() + get().tax();
        },
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
