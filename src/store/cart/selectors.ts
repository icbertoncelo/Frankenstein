import type { CartStore } from './types';

export const selectItems = (state: CartStore) => state.items;
export const selectActions = (state: CartStore) => state.actions;
export const selectCartTotal = (state: CartStore) =>
  state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export const selectItemCount = (state: CartStore) =>
  state.items.reduce((count, item) => count + item.quantity, 0);
