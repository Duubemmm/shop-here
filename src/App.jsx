import Shop from "./Pages/Shop.jsx"
import Home from "./Pages/Home.jsx"
import Cart from "./Pages/Cart.jsx"
import { Routes, Route }  from "react-router"
const App = () => {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/> 
      </Routes>
      </>
  )
}
export default App;