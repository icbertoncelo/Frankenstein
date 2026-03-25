import { useCartActions, useCartItems, useCartTotal } from '@/store/cart';
import type { CartItem } from '@/store/cart/types';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/zustand/')({
  component: RouteComponent,
})

const SAMPLE_PRODUCTS: Omit<CartItem, 'quantity'>[] = [
  { id: '1', name: 'Mechanical Keyboard', price: 129.99 },
  { id: '2', name: 'Wireless Mouse', price: 49.99 },
  { id: '3', name: 'Monitor Stand', price: 34.99 },
  { id: '4', name: 'USB-C Hub', price: 59.99 },
  { id: '5', name: 'Desk Mat', price: 24.99 },
];

function getRandomItem(): CartItem {
  const product = SAMPLE_PRODUCTS[Math.floor(Math.random() * SAMPLE_PRODUCTS.length)];
  return { ...product, quantity: 1 };
}

function RouteComponent() {
  const items = useCartItems();
  const total = useCartTotal();
  const { addItem, removeItem, clearCart } = useCartActions();

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Cart</h2>

          <div className="flex gap-2">
            <button
              onClick={() => addItem(getRandomItem())}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Add Random Item
            </button>
            <button
              onClick={clearCart}
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
            Your cart is empty. Add a random item to get started.
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <p className="text-sm text-slate-700 sm:text-base">
                  <span className="font-medium text-slate-900">{item.name}</span> · {item.quantity} x ${item.price.toFixed(2)}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-md border border-rose-200 bg-rose-50 px-3 py-1.5 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <span className="text-sm font-medium text-slate-600">Total</span>
          <span className="text-xl font-semibold text-slate-900">${total.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}
