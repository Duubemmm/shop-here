import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaRedo, FaShoppingBag } from "react-icons/fa";

const Error = ({ 
  message = "Something went wrong!", 
  description = "We couldn't load the products. Please try again.",
  onRetry,
  showHomeButton = true,
  showShopButton = false
}) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Error Icon */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative bg-red-100 rounded-full p-6">
              <FaExclamationTriangle className="text-5xl text-red-500" />
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Oops! {message}
          </h2>
          
          <p className="text-gray-600 mb-8">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            {onRetry && (
              <button
                onClick={onRetry}
                className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FaRedo />
                <span>Try Again</span>
              </button>
            )}

            {showHomeButton && (
              <Link
                to="/"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaHome />
                <span>Go to Home</span>
              </Link>
            )}

            {showShopButton && (
              <Link
                to="/shop"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaShoppingBag />
                <span>Browse Shop</span>
              </Link>
            )}
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact our{" "}
              <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                support team
              </a>
            </p>
          </div>
        </div>

        {/* Error Code (Optional) */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Error Code: FETCH_ERROR_001
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;