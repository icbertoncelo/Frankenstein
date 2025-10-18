import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl py-6 gap-6">
      <h1 className="text-2xl font-bold">Frankenstein</h1>
      <p className="text-lg text-gray-700 text-center">
        Frankenstein is a project developed to explore and practice software
        development challenges, apply best practices, implement design patterns,
        explore scalable architectures, and integrate modern testing libraries
        within the React.js ecosystem.
      </p>
      <div className="flex justify-center">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzNqcWU3ODFqZTAxZzJsbnhzZWMxNGZ6MXBrZ3RhYjkxZmVwMGw3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AcV4rg2MO7YpUdOcPp/giphy.gif"
          alt="Frankenstein Giphy"
          className="rounded shadow-md max-h-64"
        />
      </div>
    </div>
  );
}
