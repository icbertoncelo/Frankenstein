import { SLIDES_DATA } from "@/assets/slides";
import { createFileRoute } from "@tanstack/react-router";
import { Slides } from "./-components/Slides";

export const Route = createFileRoute("/_app/slideshow/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center py-6 gap-4">
      <h1 className="text-2xl font-bold">Slideshow</h1>
      <Slides slides={SLIDES_DATA} />
    </div>
  );
}
