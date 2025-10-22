import { Button } from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_app/contact-form/")({
  component: RouteComponent,
});

interface SubmittedData {
  name: string;
  email: string;
  message: string;
}

function RouteComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(
    null
  );
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setSubmittedData({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center text-center p-6 gap-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Contact Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          data-testid="name-input"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          data-testid="email-input"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          data-testid="message-input"
          className="border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button type="submit" data-testid="submit-button">
          Submit
        </Button>
      </form>
      {error && (
        <p data-testid="error-message" className="text-red-500 font-medium">
          {error}
        </p>
      )}
      {submittedData && (
        <div
          data-testid="submitted-data"
          className="bg-green-50 border border-green-300 rounded p-4 mt-4 w-full max-w-md"
        >
          <h2 className="text-lg font-bold text-green-700 mb-2">
            Submitted Information
          </h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
}
