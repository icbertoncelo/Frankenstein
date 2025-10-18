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
    <div className="flex flex-col items-center mx-auto w-full py-6 gap-6">
      <h1 className="text-2xl font-bold">Code Review Feedback</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {ASPECTS.map((aspect, index) => (
          <Aspect key={aspect} index={index} title={aspect} />
        ))}
      </div>
    </div>
  );
}
