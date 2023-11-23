import {Outlet} from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
