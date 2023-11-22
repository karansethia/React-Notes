import {Outlet} from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
