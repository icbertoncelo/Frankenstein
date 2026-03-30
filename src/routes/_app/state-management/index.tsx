import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '../../../components/Button'

export const Route = createFileRoute('/_app/state-management/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <h1 className="text-3xl font-bold">State Management Approaches</h1>
      <div className="flex gap-4">
        <Link to="/state-management/approaches/zustand">
          <Button>Zustand</Button>
        </Link>
        <Link to="/state-management/approaches/context-api">
          <Button>Context API</Button>
        </Link>
      </div>
    </div>
  )
}
