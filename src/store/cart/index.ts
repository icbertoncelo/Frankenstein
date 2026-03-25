import { useShallow } from 'zustand/react/shallow';
import { useCartStore } from './store';
import {
  selectItems,
  selectCartTotal,
  selectItemCount,
} from './selectors';

// state
export const useCartItems = () => useCartStore(selectItems);
export const useCartTotal = () => useCartStore(selectCartTotal);
export const useCartCount = () => useCartStore(selectItemCount);

// actions
export const useCartActions = () =>
  useCartStore(
    useShallow((state) => ({
      addItem: state.addItem,
      removeItem: state.removeItem,
      clearCart: state.clearCart,
    }))
  );