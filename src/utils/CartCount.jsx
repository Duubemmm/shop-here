import { useShop } from "../hooks/useShop";
import { FaShoppingCart } from "react-icons/fa";

const CartCount = () => {
  const { getCartCount } = useShop();
  const count = getCartCount();

  return (
    <div className="relative inline-block">
      <FaShoppingCart className="text-2xl text-gray-700" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </div>
  );
};
export default CartCount;