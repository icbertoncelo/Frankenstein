import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_pathlessLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/_pathlessLayout"!</div>
}
