import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function Investments() {
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
          onClick={() => navigate("stocks")}
          className={getTabClassName("stocks")}
        >
          Stocks
        </button>

        <button
          onClick={() => navigate("real-estate")}
          className={getTabClassName("real-estate")}
        >
          Real Estate
        </button>

        <button
          onClick={() => navigate("crypto")}
          className={getTabClassName("crypto")}
        >
          Cryptocurrency
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

      {/* Render Child Components */}
      <Outlet />
    </div>
  );
}
