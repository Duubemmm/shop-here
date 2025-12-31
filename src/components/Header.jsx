import { Link } from "react-router";
import { useState } from "react";
import CartCount from "../utils/CartCount";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-green-900"
            onClick={closeMenu}
          >
            <span>ShopHere</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Shop
            </Link>
            
            <Link 
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2"
            >
              <span className="text-green-700 hover:text-green-900 font-medium">Cart</span>
              <CartCount />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-4">
            <Link 
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={closeMenu}
            >
              <CartCount />
            </Link>

            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-green-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
                onClick={closeMenu}
              >
                Shop
              </Link>
              <Link 
                to="/cart"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg flex items-center justify-between"
                onClick={closeMenu}
              >
                <span>Cart</span>
                <CartCount />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;