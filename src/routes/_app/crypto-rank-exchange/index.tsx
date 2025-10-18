import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Table } from "./-components/Table";

export const Route = createFileRoute("/_app/crypto-rank-exchange/")({
  component: CryptoRankExchange,
});

export const AVAILABLE_BALANCE = 17042.67;

function CryptoRankExchange() {
  const [amount, setAmount] = useState<string | null>(null);

  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value);
  }

  function getErrorMessage() {
    if (amount === null) return null;

    if (!amount) {
      return "Amount cannot be empty";
    }

    if (Number(amount) < 0.01) {
      return "Amount cannot be less than $0.01";
    }

    if (Number(amount) > AVAILABLE_BALANCE) {
      return "Amount cannot exceed the available balance";
    }

    return null;
  }

  function renderError() {
    const errorMessage = getErrorMessage();

    return (
      errorMessage && (
        <p data-testid="error" className="text-red-500 text-sm mt-3">
          {errorMessage}
        </p>
      )
    );
  }

  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl py-6 gap-6">
      <h1 className="text-2xl font-bold">CryptoRank Exchange</h1>

      <section className="w-full flex flex-col items-center text-center">
        <div className="flex flex-col items-center px-8 py-6 bg-white rounded-2xl shadow-md">
          <label className="text-lg font-medium">
            I want to exchange ${" "}
            <input
              className="w-24 text-center border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid="amount-input"
              required
              type="number"
              placeholder="USD"
              value={amount === null ? "" : amount}
              onChange={handleAmountChange}
              min={0}
              step={0.01}
            />{" "}
            of my $<span className="font-semibold">{AVAILABLE_BALANCE}</span>:
          </label>

          {renderError()}
        </div>
      </section>

      <div className="w-full">
        <Table amount={amount ? Number(amount) : null} />
      </div>
    </div>
  );
}
