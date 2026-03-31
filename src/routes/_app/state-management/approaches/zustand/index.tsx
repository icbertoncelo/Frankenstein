import { createFileRoute, Link } from "@tanstack/react-router";
import { ItemsList } from "./-components/ItemsList";
import { CartTotal } from "./-components/CartTotal";
import { ProductList } from "./-components/ProductList";
import { CartHeader } from "../-components/CartHeader";
import { ClearCartButton } from "./-components/Buttons";

export const Route = createFileRoute(
  "/_app/state-management/approaches/zustand/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 gap-6">
        <Link
          to="/state-management"
          className="text-sm font-medium text-blue-500 hover:text-blue-900"
        >
          Go Back
        </Link>

        <ProductList />
        <CartHeader>
          <ClearCartButton />
        </CartHeader>
        <ItemsList />
        <CartTotal />
      </div>
    </section>
  );
}
