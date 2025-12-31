import { FaShoppingBag, FaSpinner } from "react-icons/fa";

const Loading = ({ message = "Loading products..." }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated Shopping Bag */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping"></div>
          <div className="relative bg-white rounded-full p-8 shadow-2xl">
            <FaShoppingBag className="text-6xl text-green-500 animate-bounce" />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaSpinner className="text-3xl text-green-500 animate-spin" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {message}
          </h2>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
          <div className="h-full bg-linear-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
        </div>

        <p className="text-gray-600 animate-pulse">
          Please wait a moment...
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;