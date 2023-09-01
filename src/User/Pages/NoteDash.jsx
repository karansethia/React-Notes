import React from "react";
import NoteElement from "../Components/NoteElement/NoteElement";
import classes from "./NoteDash.module.css";
import NoteEditor from "../Components/NoteEditor/NoteEditor";

const NoteDash = () => {
  return (
    <div className={classes.notedash}>
      <NoteEditor />
    </div>
  );
};

export default NoteDash;
