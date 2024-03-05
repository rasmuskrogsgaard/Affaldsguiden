import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Nav/Nav";
import { Hero } from "../components/Hero/Hero"; 
import { Footer } from "../components/Footer/Footer";
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
