import Header from "../components/Header";
import { Outlet } from "react-router";
const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;