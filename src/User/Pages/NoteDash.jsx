import React from "react";
import NoteElement from "../Components/NoteElement/NoteElement";
import classes from "./NoteDash.module.css";
import Navbar from "../Components/Navbar/Navbar";
import notesData from "../../data";

const NoteDash = () => {
  return (
    <div className={classes.notedash}>
      <Navbar />
      <NoteElement />
    </div>
  );
};

export default NoteDash;
