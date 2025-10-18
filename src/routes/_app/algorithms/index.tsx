import { Button } from "@/components/Button";
import { checkIsPalindrome } from "@/utils/checkIsPalindrome";
import { generateFibonacciSequence } from "@/utils/generateFibonacciSequence";
import { reverseString } from "@/utils/reverseString";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_app/algorithms/")({
  component: RouteComponent,
});

type ActionKey = "fibonacci" | "palindrome" | "reverseString";

interface Action {
  name: string;
  key: ActionKey;
  placeholder: string;
  action: (input: string) => string | number;
}

function RouteComponent() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | number | null>(null);
  const [selectedActionKey, setSelectedActionKey] =
    useState<ActionKey>("fibonacci");

  const ACTIONS: Action[] = [
    {
      name: "Generate Fibonacci Sequence",
      key: "fibonacci",
      placeholder: "Enter a non-negative number",
      action: (input) => {
        if (!input || isNaN(Number(input)) || Number(input) < 0) {
          return "Please enter a valid number";
        }
        const fibSequence = generateFibonacciSequence(Number(input) || 0);
        return fibSequence.join(", ");
      },
    },
    {
      name: "Check Palindrome",
      key: "palindrome",
      placeholder: "Enter a string",
      action: (input) => {
        if (!input) {
          return "Please enter a valid string";
        }
        const isPalindrome = checkIsPalindrome(input);
        return isPalindrome ? "Yes" : "No";
      },
    },
    {
      name: "Reverse String",
      key: "reverseString",
      placeholder: "Enter a string",
      action: (input) => {
        if (!input) {
          return "Please enter a valid string";
        }
        return reverseString(input);
      },
    },
  ];

  const selectedAction =
    ACTIONS.find((a) => a.key === selectedActionKey) || ACTIONS[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setResult(null);
  };

  const handleActionChange = (key: ActionKey) => {
    setSelectedActionKey(key);
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl py-6 gap-6">
      <h1 className="text-2xl font-bold">Algorithms</h1>
      <div className="flex gap-4 mb-2">
        {ACTIONS.map((action) => (
          <Button
            key={action.key}
            onClick={() => handleActionChange(action.key)}
            data-testid={`select-action-button-${action.key}`}
            className={
              selectedActionKey === action.key
                ? "bg-blue-500 text-white border-blue-700"
                : "bg-gray-500 text-black border-gray-300"
            }
          >
            {action.name}
          </Button>
        ))}
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
