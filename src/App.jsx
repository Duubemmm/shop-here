import Shop from "./Pages/Shop.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import { Routes, Route } from "react-router";
import { ShopProvider } from "./context/ShopProvider.jsx";
const App = () => {
  return (
    <>
      <ShopProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopProvider>
    </>
  );
};
export default App;
