import React from "react";
import classes from "./Newnote.module.css";
import Navbar from "../Components/Navbar/Navbar";
import NoteEditor from "../Components/NoteEditor/NoteEditor";
import Notelist from "../Components/NoteList/Notelist";

const Newnote = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.wrapper}>
        <NoteEditor />
        <Notelist />
      </div>
    </div>
  );
};

export default Newnote;
