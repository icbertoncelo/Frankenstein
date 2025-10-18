import { CRYPTO_CURRENCY_DATA } from "@/assets/cryptocurrency-list";
import { AVAILABLE_BALANCE } from "..";

export function Table({ amount }: { amount: number | null }) {
  const isAmountValid =
    amount === null || (amount > 0 && amount <= AVAILABLE_BALANCE);

  function renderTableBody() {
    return CRYPTO_CURRENCY_DATA.map((crypto) => {
      const numberOfCoins = amount ? amount * crypto.rate : 0;
      const fixedNumberOfCoins = numberOfCoins.toFixed(8);
      const numberOfCoinsLabel = isAmountValid ? fixedNumberOfCoins : "n/a";

      return (
        <tr
          key={crypto.code}
          className="border-b last:border-0 hover:bg-gray-50 transition-colors"
        >
          <td className="py-3 px-4 font-medium text-gray-800">{crypto.name}</td>
          <td className="py-3 px-4 text-gray-700">
            1 USD = {crypto.rate}
            {crypto.code}
          </td>
          <td className="py-3 px-4 text-gray-700">{numberOfCoinsLabel}</td>
        </tr>
      );
    });
  }

  return (
    <div className="mt-10 mx-4 bg-white rounded-2xl shadow-md overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-3 px-4 text-gray-900 font-semibold">
              Cryptocurrency
            </th>
            <th className="py-3 px-4 text-gray-900 font-semibold">
              Exchange Rate
            </th>
            <th className="py-3 px-4 text-gray-900 font-semibold">
              Number of Coins
            </th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">{renderTableBody()}</tbody>
      </table>
    </div>
  );
}
