import { useNavigate, useLocation } from "react-router-dom";

export default function Income() {
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
          onClick={() => navigate("fiatincome")}
          className={getTabClassName("fiatincome")}
        >
          Fiat Income
        </button>

        <button
          onClick={() => navigate("cryptoincome")}
          className={getTabClassName("cryptoincome")}
        >
          Crypto Income
        </button>

        <button
          onClick={() => navigate("totalincome")}
          className={getTabClassName("totalincome")}
        >
          Total Income
        </button>
      </div>
    </div>
  );
}
