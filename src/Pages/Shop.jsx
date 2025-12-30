import { useShop } from "../hooks/useShop";
import { FaShoppingCart, FaCheck } from "react-icons/fa";

const Shop = () => {
  const { product, loading, error, addToCart, isInCart } = useShop();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Shop All Products
          </h1>
          {/* <p className="text-gray-600">{product.length} products available</p> */}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {product.map((item) => {
            const inCart = isInCart(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Image Container */}
                <div className="bg-gray-50 p-6 flex items-center justify-center h-64 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  {inCart && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                      <FaCheck className="text-sm" />
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-3 uppercase">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-green-600">
                      ${item.price}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className={`${
                        inCart
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      } text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2`}
                      disabled={inCart}
                    >
                      <FaShoppingCart />
                      {inCart ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;