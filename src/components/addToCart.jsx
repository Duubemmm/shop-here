import { useShop } from "../context/ShopContext";
import { FaShoppingCart, FaCheck, FaPlus, FaMinus } from "react-icons/fa";

const AddToCart = ({ product, variant = "default" }) => {
  const { addToCart, removeFromCart, isInCart, cart } = useShop();

  const inCart = isInCart(product.id);
  const cartItem = cart.find(item => item.id === product.id);

  const handleAdd = () => {
    addToCart(product);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  // Default variant - Simple add/remove toggle
  if (variant === "default") {
    return (
      <button
        onClick={inCart ? handleRemove : handleAdd}
        className={`${
          inCart
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2`}
      >
        {inCart ? (
          <>
            <FaCheck className="text-sm" />
            <span>In Cart</span>
          </>
        ) : (
          <>
            <FaShoppingCart className="text-sm" />
            <span>Add to Cart</span>
          </>
        )}
      </button>
    );
  }

  // Icon variant - Just an icon button
  if (variant === "icon") {
    return (
      <button
        onClick={inCart ? handleRemove : handleAdd}
        className={`${
          inCart
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl`}
        title={inCart ? "Remove from cart" : "Add to cart"}
      >
        {inCart ? <FaCheck /> : <FaShoppingCart />}
      </button>
    );
  }

  // Quantity variant - Shows quantity controls if in cart
  if (variant === "quantity") {
    if (!inCart) {
      return (
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
        >
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>
      );
    }

    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Qty: {cartItem?.quantity}</span>
        <button
          onClick={handleRemove}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
        >
          Remove
        </button>
      </div>
    );
  }

  return null;
};

export default AddToCart;