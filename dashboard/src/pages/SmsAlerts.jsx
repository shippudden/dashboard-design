import { useState } from "react";

export default function SmsAlerts() {
  const [incomeAlerts, setIncomeAlerts] = useState(true);
  const [expenseAlerts, setExpenseAlerts] = useState(false);
  const [threshold, setThreshold] = useState(5000);

  return (
    <div className="space-y-9 mb-12">
      <h1 className="text-2xl font-bold text-gray-900">SMS Alerts Settings</h1>

      {/* Alert Preferences */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Alert Preferences</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Income Alerts</span>
            <input
              type="checkbox"
              checked={incomeAlerts}
              onChange={() => setIncomeAlerts(!incomeAlerts)}
              className="w-6 h-6 text-blue-600 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Expense Alerts</span>
            <input
              type="checkbox"
              checked={expenseAlerts}
              onChange={() => setExpenseAlerts(!expenseAlerts)}
              className="w-6 h-6 text-blue-600 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Custom Alert Threshold */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Custom Alert Threshold</h2>
        <div className="flex items-center space-x-4">
          <label htmlFor="threshold" className="text-gray-600">
            Notify me when expenses exceed:
          </label>
          <input
            type="number"
            id="threshold"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
