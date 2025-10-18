import { Button } from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_app/item-list-manager/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (!input) return;

    setItems((prevState) => [...prevState, input]);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center py-6 gap-4">
      <input
        className="w-1/2 border border-gray-300 p-2 rounded"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
        data-testid="input-field"
      />
      <Button onClick={handleAddItem} data-testid="add-button">
        Add Item
      </Button>
      <ul data-testid="item-list">
        {items.map((item, index) => (
          <li className="list-disc" key={index} data-testid="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
