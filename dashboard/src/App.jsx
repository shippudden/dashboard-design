import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider
   } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Expenses from "./pages/Expenses";
import SmsAlerts from "./pages/SmsAlerts";
import Investments from "./pages/Investments";
import Settings from "./pages/Settings";
import IncomeLayout from "./layouts/IncomeLayout";
import FiatIncome from "./tabs/FiatIncome";
import CryptoIncome from "./tabs/CryptoIncome";
import TotalIncome from "./tabs/TotalIncome";
import FiatExpenses from "./tab2/FiatExpenses";
import CryptoExpenses from "./tab2/CryptoExpenses";
import TotalExpenses from "./tab2/TotalExpenses";
import StocksInvestments from "./components/StocksInvestments";
import RealEstateInvestments from "./components/RealEstateInvestments";
import CryptoInvestments from "./components/CryptoInvestments";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    // Dashboard Layout - container for both the sidebar and the main content
    <Route path="/" element={<DashboardLayout />} >

      {/* Income Page */}
      <Route path="/" element={<IncomeLayout />} >
        <Route index element={<FiatIncome />} />
        <Route path="fiatincome" element={<FiatIncome />} />
        <Route path="cryptoincome" element={<CryptoIncome />} />
        <Route path="totalincome" element={<TotalIncome />} />
      </Route>

      {/* Expenses Page */}
      <Route path="expenses" element={<Expenses />} >
        <Route index element={<FiatExpenses />} />
        <Route path="fiatexpenses" element={<FiatExpenses />} />
        <Route path="cryptoexpenses" element={<CryptoExpenses />} />
        <Route path="totalexpenses" element={<TotalExpenses />} />
      </Route>

      {/* SMS Alerts Page */}
      <Route path="sms-alerts" element={<SmsAlerts />} />

      {/* Investments Page */}
      <Route path="investments" element={<Investments />} >
        <Route index element={<StocksInvestments />} />
        <Route path="stocks" element={<StocksInvestments />} />
        <Route path="real-estate" element={<RealEstateInvestments />} />
        <Route path="crypto" element={<CryptoInvestments />} />
      </Route>

      <Route path="settings" element={<Settings />} />

    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
