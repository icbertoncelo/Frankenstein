import type { CartActions, CartItem } from "@/dtos/cart";

export interface CartStore {
  items: CartItem[];
  actions: CartActions;
}
