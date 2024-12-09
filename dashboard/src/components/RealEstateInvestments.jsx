export default function RealEstateInvestments() {
  const properties = [
    { name: "Apartment in NYC", value: "$500,000", growth: "+4%" },
    { name: "Villa in LA", value: "$1,200,000", growth: "+6%" },
    { name: "Office in SF", value: "$750,000", growth: "-1%" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-700">Real Estate Investments</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {properties.map((property, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-4 last:border-none"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{property.name}</p>
              <p className="text-gray-500">{property.value}</p>
            </div>
            <p
              className={`font-semibold ${
                property.growth.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {property.growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
