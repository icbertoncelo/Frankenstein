import { useCartTotal } from "@/store/cart";

export function CartTotal() {
  const total = useCartTotal();

  return (
    <div className="flex items-center justify-between border-t border-slate-200 pt-4">
      <span className="text-sm font-medium text-slate-600">Total</span>
      <span className="text-lg font-semibold text-slate-900">
        ${total.toFixed(2)}
      </span>
    </div>
  );
}
