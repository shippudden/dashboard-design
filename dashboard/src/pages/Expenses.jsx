import { useNavigate, useLocation, Outlet } from "react-router-dom";

export default function Expenses() {
  const navigate = useNavigate();
  const location = useLocation();

  const getTabClassName = (path) => {
    return location.pathname.endsWith(path)
      ? "flex-1 py-2 text-center border-b-2 border-gray-900 text-gray-900 font-semibold"
      : "flex-1 py-2 text-center text-gray-500 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 duration-500";
  };

  return (
    <div className="space-y-9 mb-12">
      {/* Tabs */}
      <div className="flex flex-wrap space-x-5 justify-between w-full">
        <button
          onClick={() => navigate("fiatexpenses")}
          className={getTabClassName("fiatexpenses")}
        >
          Fiat Expenses
        </button>

        <button
          onClick={() => navigate("cryptoexpenses")}
          className={getTabClassName("cryptoexpenses")}
        >
          Crypto Expenses
        </button>

        <button
          onClick={() => navigate("totalexpenses")}
          className={getTabClassName("totalexpenses")}
        >
          Total Expenses
        </button>
      </div>

      <Outlet />
    </div>
  );
}
