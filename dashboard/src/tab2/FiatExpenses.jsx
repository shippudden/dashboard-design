// import ExpenseLayout from "./ExpenseLayout";
import { FaPaperPlane } from "react-icons/fa";

export default function FiatExpenses() {
  const expenses = [
    { item: "Rent", amount: "$1,500", date: "01 March, 2024" },
    { item: "Utilities", amount: "$300", date: "05 March, 2024" },
    { item: "Groceries", amount: "$500", date: "10 March, 2024" },
  ];

  return (
    <div className="mb-28">
    {/* Expense List */}
    <ul className="space-y-6 bg-white p-7 rounded-lg shadow-md">
        {expenses.map((expense, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-4 last:border-none"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900">{expense.item}</h3>
              <p className="text-sm text-gray-500">{expense.date}</p>
            </div>
            <h3 className="text-lg font-semibold text-red-500">{expense.amount}</h3>
          </li>
        ))}
      </ul>

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
