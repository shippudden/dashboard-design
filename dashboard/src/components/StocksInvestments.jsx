export default function StocksInvestments() {
  const stocks = [
    { name: "Apple", value: "$1,200", growth: "+5%" },
    { name: "Google", value: "$1,000", growth: "+3%" },
    { name: "Amazon", value: "$800", growth: "-2%" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-700">Stock Investments</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {stocks.map((stock, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-4 last:border-none"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{stock.name}</p>
              <p className="text-gray-500">{stock.value}</p>
            </div>
            <p
              className={`font-semibold ${
                stock.growth.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {stock.growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
