import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavMenu = [
    { name: "Home", path: "/", id: 1 },
    { name: "Shop", path: "/shop", id: 2 },
    { name: "Cart", path: "/cart", id: 3 },
  ];

  return (
    <header className="bg-white shadow-md py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ShopHere</div>

        <nav className="hidden md:flex space-x-6">
          {NavMenu.map((menu) => (
            <Link
              key={menu.id}
              to={menu.path}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50">
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl animate-slideIn">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-lg font-bold">Menu</h3>
                  <button
                    onClick={toggleMenu}
                    className="text-2xl text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {NavMenu.map((menu) => (
                    <Link
                      key={menu.id}
                      to={menu.path}
                      className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                      onClick={toggleMenu}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;