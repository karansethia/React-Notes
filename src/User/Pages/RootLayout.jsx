import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {store} from "../store/index";
import {Provider} from "react-redux";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  );
};

export default RootLayout;
