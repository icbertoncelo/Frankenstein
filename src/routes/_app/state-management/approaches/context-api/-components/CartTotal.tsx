import { useCart } from "@/contexts/CartProvider";

export function CartTotal() {
  const { items } = useCart();
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex items-center justify-between border-t border-slate-200 pt-4">
      <span className="text-sm font-medium text-slate-600">Total</span>
      <span className="text-lg font-semibold text-slate-900">
        ${total.toFixed(2)}
      </span>
    </div>
  );
}
