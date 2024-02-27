import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./User/store/index.js";
import {GoogleOAuthProvider} from "@react-oauth/google";
const clientID =
  "580111494873-p55jlh4ifr6ndhveqp6e6pdp5r715utr.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="580111494873-2tme3ghiovtqoc9rd5sbiobj06jjsun1.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
