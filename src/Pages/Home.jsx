import Header from "../components/Header"
import DisplayProduct from "../components/DisplayProduct"
import { Outlet } from "react-router"
import { Link } from "react-router"
const Home = () => {
return (
    <>
    <Header/>
        <DisplayProduct/>
                <Link to="/shop" className="">Shop Now</Link>
<Outlet/>
        <Link to="/shop" className="">Shop Now</Link>
    </>
)
}

export default Home;