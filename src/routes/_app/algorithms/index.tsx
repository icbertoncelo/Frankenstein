import { ALGORITHMS, type ActionKey } from "@/assets/algorithms";
import { Button } from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_app/algorithms/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | number | null>(null);
  const [selectedActionKey, setSelectedActionKey] = useState<ActionKey>(
    ALGORITHMS[0].key
  );

  const selectedAction =
    ALGORITHMS.find((a) => a.key === selectedActionKey) || ALGORITHMS[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setResult(null);
  };

  const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedActionKey(event.target.value as ActionKey);
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-full py-6 gap-6">
      <h1 className="text-2xl font-bold">Algorithms</h1>
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="action-select" className="font-semibold">
          Select an Algorithm:
        </label>
        <select
          id="action-select"
          className="border border-gray-300 p-2 rounded"
          value={selectedActionKey}
          onChange={handleActionChange}
          data-testid="action-select"
        >
          {ALGORITHMS.map((action) => (
            <option key={action.key} value={action.key}>
              {action.name}
            </option>
          ))}
        </select>
      </div>
      <input
        className="w-1/2 border border-gray-300 p-2 rounded"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder={selectedAction.placeholder}
        data-testid="input-field"
      />
      <Button
        onClick={() => setResult(selectedAction.action(input))}
        data-testid="run-action-button"
      >
        Run
      </Button>
      <h2>RESULT: {result}</h2>
    </div>
  );
}
