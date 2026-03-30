import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/state-management/approaches/context-api/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Link
            to="/state-management"
            className="text-sm font-medium text-blue-500 hover:text-blue-900 mb-2"
          >
            Go Back
          </Link>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Cart
            </h2>
  
            <div className="flex gap-2">
              <button
                onClick={() => {}}
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Add Random Item
              </button>
              <button
                onClick={() => {}}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Clear Cart
              </button>
            </div>
          </div>
  
  
          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="text-sm font-medium text-slate-600">Total</span>
            <span className="text-xl font-semibold text-slate-900">
              $XYZ
            </span>
          </div>
        </div>
      </section>
    );
}
