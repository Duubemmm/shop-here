import Shop from "./Pages/Shop.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import DisplayProduct from "./components/DisplayProduct.jsx";
import { Routes, Route } from "react-router";
import { ShopProvider } from "./context/ShopProvider.jsx";
const App = () => {
  return (
    <>
      <ShopProvider>
        <Routes>
          <Route element={<Home/>}>
          <Route path="/" element={<DisplayProduct />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </ShopProvider>
    </>
  );
};
export default App;
