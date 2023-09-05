import React from "react";
import "./App.css";
import NoteDash from "./User/Pages/NoteDash";
import Navbar from "./User/Components/Navbar/Navbar";
import Newnote from "./User/Pages/NewNote";
import NoteEditor from "./User/Components/NoteEditor/NoteEditor";

const App = () => {
  return (
    <div className="App">
      <Newnote />
    </div>
  );
};

export default App;
