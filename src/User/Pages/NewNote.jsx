import React from "react";
import classes from "./Newnote.module.css";
import Navbar from "../Components/Navbar/Navbar";
import NoteEditor from "../Components/NoteEditor/NoteEditor";
import Notes from "../Components/Notes/Notes";

const Newnote = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.wrapper}>
        <NoteEditor />
        <Notes gridtype="containercol" />
      </div>
    </div>
  );
};

export default Newnote;
