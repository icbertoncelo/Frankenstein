import { useCartActions } from "@/store/cart";
import type { CartItem } from "@/store/cart/types";

export function AddItemButton({ item }: { item: CartItem }) {
  const { addItem } = useCartActions();

  return (
    <button
      onClick={() => addItem(item)}
      className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
    >
      Add to Cart
    </button>
  );
}

export function ClearCartButton() {
  const { clearCart } = useCartActions();

  return (
    <button
      onClick={clearCart}
      className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
    >
      Clear Cart
    </button>
  );
}

export function RemoveItemButton({ itemId }: { itemId: string }) {
  const { removeItem } = useCartActions();

  return (
    <button
      onClick={() => removeItem(itemId)}
      className="rounded-md border border-rose-200 bg-rose-50 px-3 py-1.5 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
    >
      Remove
    </button>
  );
}

export function ToggleFavoriteButton({
  itemId,
  isFavorite,
}: {
  itemId: string;
  isFavorite: boolean;
}) {
  const { toggleFavorite } = useCartActions();

  return (
    <button
      onClick={() => toggleFavorite(itemId)}
      className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
        isFavorite
          ? "border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
          : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
      }`}
    >
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
}
