export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isFavorite: boolean;
}

export type CartItemInput = Omit<CartItem, "isFavorite"> & {
  isFavorite?: boolean;
};

export interface CartActions {
  addItem: (item: CartItemInput) => void;
  removeItem: (id: string) => void;
  toggleFavorite: (id: string) => void;
  clearCart: () => void;
}

export interface CartStore {
  items: CartItem[];
  actions: CartActions;
}

