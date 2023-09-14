import {Outlet} from "react-router-dom";
import Navbar from "./Pages/Navbar";
import React from "react";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
