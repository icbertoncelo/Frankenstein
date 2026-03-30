import { create, type StateCreator } from "zustand";
import type { CartItem, CartItemInput, CartStore } from "./types";

function normalizeCartItem(item: CartItemInput): CartItem {
  return {
    ...item,
    isFavorite: item.isFavorite ?? false,
  };
}

export const cartStore: StateCreator<CartStore> = (set) => ({
  items: [],
  actions: {
    addItem: (item) =>
      set((state) => {
        const normalizedItem = normalizeCartItem(item);
        const existing = state.items.find((i) => i.id === item.id);

        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + normalizedItem.quantity }
                : i,
            ),
          };
        }

        return { items: [...state.items, normalizedItem] };
      }),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
    toggleFavorite: (id) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id
            ? { ...item, isFavorite: !item.isFavorite }
            : item,
        ),
      })),
    clearCart: () => set({ items: [] }),
  },
});

export const useCartStore = create<CartStore>()(cartStore);
