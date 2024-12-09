import React from "react";
import { FaFilter, FaDownload, FaChevronDown, FaPaperPlane } from "react-icons/fa";

export default function FiatIncome() {
    const incomeData = [
        { amount: "$100,000", date: "19 March, 2024" },
        { amount: "$20,000", date: "08 March, 2024" },
        { amount: "$27,000", date: "08 March, 2024" },
    ];

    const currencies = ["USD", "EUR", "GBP"];
    const [selectedCurrency, setSelectedCurrency] = React.useState("USD");
    const [showDropdown, setShowDropdown] = React.useState(false);

    return (
        <div className="space-y-12 mb-28">
            {/* Filter Button */}
            <button className="flex items-center space-x-4 ml-auto text-gray-700 hover:bg-gray-300 duration-500 bg-slate-200 px-7 py-5 rounded-lg">
                <span>Filter Applied: 2</span>
                <FaFilter className="text-lg" />
            </button>

            {/* Filter and Total Income Section */}
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                {/* Total Fiat Income */}
                <div className="flex flex-wrap justify-between items-center">
                    {/* Left: Total Fiat Income Text */}
                    <p className="text-black font-bold text-2xl">Total Fiat Income</p>

                    {/* Right: Total Price and Dropdown */}
                    <div className="flex items-center space-x-4">
                        <h2 className="text-4xl font-semibold text-green-500">147,000</h2>

                        {/* Dropdown for Currency */}
                        <div className="relative">
                            <button
                                className="flex items-center px-3 py-1 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                {selectedCurrency} <FaChevronDown className="ml-2 text-sm" />
                            </button>

                            {showDropdown && (
                                <ul className="absolute z-10 bg-white shadow-md rounded-lg mt-2 w-full">
                                    {currencies.map((currency) => (
                                        <li
                                            key={currency}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setSelectedCurrency(currency);
                                                setShowDropdown(false);
                                            }}
                                        >
                                            {currency}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* List and Download Button */}
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                {/* Income List */}
                <ul className="space-y-4">
                    {incomeData.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between border-b pb-4 last:border-none"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{item.amount}</h3>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                            <button className="text-gray-500 hover:text-gray-900">
                                See Detail
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Download Button */}
                <button className="flex items-center justify-center space-x-2 px-7 py-5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 duration-500 ml-auto">
                    <FaDownload className="text-lg" />
                    <span>Download Report</span>
                </button>
            </div>

            {/* AI Finance Expert */}
            <div className="fixed bottom-6 right-4 bg-gray-100 p-4 rounded-lg shadow-lg flex items-center space-x-4 w-full sm:w-96 max-w-xs sm:max-w-xs">
                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Talk to our AI finance expert"
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

                {/* Send Button */}
                <button
                    className="flex items-center justify-center bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-700"
                    aria-label="Send Message"
                >
                    <FaPaperPlane className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
