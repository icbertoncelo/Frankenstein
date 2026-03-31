import { NoData } from "../../-components/NoData";
import { RemoveItemButton, ToggleFavoriteButton } from "./Buttons";
import { useCart } from "@/contexts/CartProvider";

export function ItemsList() {
  const { items } = useCart();

  if (items.length === 0) {
    return <NoData />
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
        >
          <div className="flex gap-2 items-center text-sm text-slate-700 sm:text-base">
            <span className="font-medium text-slate-900">{item.name}</span>
            <p>
              {item.quantity} x ${item.price.toFixed(2)}
            </p>
            {item.isFavorite && (
              <span className="inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                Favorite
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <ToggleFavoriteButton
              itemId={item.id}
              isFavorite={item.isFavorite}
            />
            <RemoveItemButton itemId={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
