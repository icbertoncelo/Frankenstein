import { createFileRoute } from "@tanstack/react-router";
import { Aspect } from "./-components/Aspect";

export const Route = createFileRoute("/_app/code-review-feedback/")({
  component: RouteComponent,
});

const ASPECTS = [
  "Readability",
  "Performance",
  "Security",
  "Documentation",
  "Testing",
] as const;

function RouteComponent() {
  return (
    <div className="mx-auto text-center max-w-screen-xl">
      <div className="flex flex-wrap justify-center mt-8 gap-8">
        {ASPECTS.map((aspect, index) => (
          <Aspect index={index} title={aspect} />
        ))}
      </div>
    </div>
  );
}
