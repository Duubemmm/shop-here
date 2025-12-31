import { useShop } from "../hooks/useShop";
import { Link } from "react-router";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartCount 
  } = useShop();

  const cartTotal = getCartTotal();
  const cartCount = getCartCount();

  // Handle quantity increment
  const handleIncrement = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  // Handle quantity decrement
  const handleDecrement = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  // Handle direct quantity input
  const handleQuantityChange = (productId, value) => {
    const quantity = parseInt(value);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items yet.</p>
            <Link 
              to="/shop"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <FaShoppingBag />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
          </div>
          <Link 
            to="/shop"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
          >
            <FaArrowLeft />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="shrink-0 bg-gray-50 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold uppercase">
                          {item.category}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove from cart"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleDecrement(item.id, item.quantity)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus className="text-sm" />
                        </button>
                        
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          className="w-16 text-center border border-gray-300 rounded-lg py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                          min="1"
                        />
                        
                        <button
                          onClick={() => handleIncrement(item.id, item.quantity)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <FaPlus className="text-sm" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm text-gray-500">${item.price} each</p>
                        <p className="text-xl font-bold text-green-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <FaTrash />
              <span>Clear Cart</span>
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-green-600">${(cartTotal * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;