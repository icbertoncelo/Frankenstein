export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isFavorite: boolean;
}

export interface CartActions {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  toggleFavorite: (id: string) => void;
}

export type Product = Omit<CartItem, "quantity" | "isFavorite">;
