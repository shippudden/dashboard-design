export default function CryptoInvestments() {
  const cryptos = [
    { name: "Bitcoin", value: "$30,000", growth: "+8%" },
    { name: "Ethereum", value: "$2,000", growth: "+12%" },
    { name: "Solana", value: "$150", growth: "-5%" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-700">Cryptocurrency Investments</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {cryptos.map((crypto, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-4 last:border-none"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{crypto.name}</p>
              <p className="text-gray-500">{crypto.value}</p>
            </div>
            <p
              className={`font-semibold ${
                crypto.growth.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {crypto.growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
