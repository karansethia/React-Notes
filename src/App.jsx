import React from "react";
import "./App.css";
import NoteDash from "./User/Pages/NoteDash";
import Navbar from "./User/Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <NoteDash />
    </div>
  );
};

export default App;
