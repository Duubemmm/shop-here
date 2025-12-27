import DisplayProduct from "../components/DisplayProduct"
import { Link } from "react-router"
const Home = () => {
return (
    <>
        <DisplayProduct/>
        <Link to="/shop" className="">Shop Now</Link>
    </>
)
}

export default Home;