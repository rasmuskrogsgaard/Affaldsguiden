import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Nav/Nav";
import { Hero } from "../components/Hero/Hero";
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
    </>
  );
};
