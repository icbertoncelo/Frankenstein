import { create, type StateCreator } from "zustand";
import type { CartStore } from "./types";

export const cartStore: StateCreator<CartStore> = (set) => ({
  items: [],
  actions: {
    addItem: (item) =>
      set((state) => {
        const existing = state.items.find((i) => i.id === item.id);

        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i,
            ),
          };
        }

        return { items: [...state.items, item] };
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
