import { ClearCartButton } from "./Buttons";

export function CartHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Cart
      </h2>

      <div className="flex gap-2">
        <ClearCartButton />
      </div>
    </div>
  );
}
