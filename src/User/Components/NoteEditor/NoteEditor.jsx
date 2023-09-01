import React from "react";
import classes from "./NoteEditor.module.css";

const NoteEditor = () => {
  return (
    <div className={classes.wrapper}>
      <input type="text" name="title" placeholder="Enter title" />
      <hr />
      <div className="content">
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
      </div>
      <div className="sidebar"></div>
      <div className="tagbar"></div>
    </div>
  );
};

export default NoteEditor;
