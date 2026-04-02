import type { Product } from "@/dtos/product";
import { useCartActions } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartActions();

  return (
    <button
      onClick={() => addItem({ ...product, quantity: 1, isFavorite: false })}
      className="flex min-w-[140px] flex-col items-start gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-slate-400 hover:bg-slate-100 active:scale-95"
    >
      <span className="text-sm font-semibold text-slate-800">
        {product.name}
      </span>
      <span className="text-xs text-slate-500">
        ${product.price.toFixed(2)}
      </span>
    </button>
  );
}
