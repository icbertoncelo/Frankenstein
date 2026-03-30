import { useCartStore } from "./store";
import {
  selectItems,
  selectCartTotal,
  selectItemCount,
  selectActions,
} from "./selectors";

// state
export const useCartItems = () => useCartStore(selectItems);
export const useCartTotal = () => useCartStore(selectCartTotal);
export const useCartCount = () => useCartStore(selectItemCount);

// actions
export const useCartActions = () => useCartStore(selectActions);
