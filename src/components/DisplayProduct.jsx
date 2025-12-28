import { useState, useEffect } from "react"
import { getProduct } from "../api/fetchapi";
import { FaChevronLeft, FaChevronRight, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router"

const DisplayProduct = () => {
  const [currentProduct, setCurrentProduct] = useState(null); 

  // Function to fetch and display a new product
  const fetchAndDisplayProduct = async () => {
    const data = await getProduct();
    setCurrentProduct(data);
  };

  // Auto-swipe every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchAndDisplayProduct();
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Manual swipe button handler
  const handleSwipe = () => {
    fetchAndDisplayProduct();
  };

  return (
    <section className="py-16 px-4 from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Shop amazing and quality products
          </h2>
          <p className="text-gray-600">Discover amazing deals on quality items</p>
        </div>

        {/* Product Display Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-400 via-emerald-500 to-green-600"></div>
          
          <div className="flex items-center justify-between p-8 md:p-12">
            {/* Left Arrow */}
            <button
              onClick={handleSwipe}
              className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
              aria-label="Previous product"
            >
              <FaChevronLeft className="text-green-600 group-hover:text-white text-xl transition-colors" />
            </button>

            {/* Product Content */}
            {currentProduct && (
              <div className="flex-1 mx-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Product Image */}
                  <div className="shrink-0 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
                    <img 
                      src={currentProduct.image} 
                      alt={currentProduct.title}
                      className="w-48 h-48 md:w-64 md:h-64 object-contain transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
                      {currentProduct.category}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                      {currentProduct.title}
                    </h3>
                    
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                      <span className="text-4xl font-bold text-green-600">
                        ${currentProduct.price}
                      </span>
                      <span className="text-gray-400 line-through text-lg">
                        ${(currentProduct.price * 1.3).toFixed(2)}
                      </span>
                    </div>

                    {/* Shop Button */}
                    <Link
                      to="/shop"
                      className="group inline-flex items-center gap-3 bg-linear-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
                    >
                      <FaShoppingBag className="text-xl group-hover:animate-bounce" />
                      <span>Shop Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Right Arrow */}
            <button
              onClick={handleSwipe}
              className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
              aria-label="Next product"
            >
              <FaChevronRight className="text-green-600 group-hover:text-white text-xl transition-colors" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 pb-8">
            {[1, 2, 3, 4].map((dot, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === 0 ? 'bg-green-500 w-8' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <span className="font-medium">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <span className="font-medium">30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <span className="font-medium">Secure Checkout</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayProduct;