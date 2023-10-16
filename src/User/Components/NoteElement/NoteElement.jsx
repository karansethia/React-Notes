import React from "react";
import classes from "./NoteElement.module.css";
// import {useSelector} from "@reduxjs/toolkit";
import notesData from "../../../data";

const NoteElement = (props) => {
  const noteTitle = props.title.split(" ");
  var title = "";
  if (noteTitle.length > 3) {
    title =
      noteTitle[0] +
      " " +
      noteTitle[1] +
      " " +
      noteTitle[2] +
      " " +
      noteTitle[3] +
      "...";
  } else {
    title = noteTitle.join(" ");
  }
  // console.log(props.includedtags);

  return (
    <div
      className={
        props.ispin ? `${classes.pinned} ${classes.wrapper}` : classes.wrapper
      }
    >
      <div className={classes.header}>
        <h3>{title}</h3>
      </div>
      <div className={classes.tagContainer}>
        {props.includedtags.map((tag) => (
          <svg width="14" height="14" key={tag.color}>
            <circle cx="6" cy="6" r="6" fill={tag.color} />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default NoteElement;
