import React from "react";
import classes from "./NoteElement.module.css";
import notesData from "../../../data";

const NoteElement = (props) => {
  // console.log(notesData);
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
        <svg width="14" height="14">
          <circle
            cx="6"
            cy="6"
            r="6"
            fill={notesData[0].includedTags[0].color}
          />
        </svg>
        <svg width="14" height="14">
          <circle
            cx="6"
            cy="6"
            r="6"
            fill={notesData[0].includedTags[1].color}
          />
        </svg>
      </div>
    </div>
  );
};

export default NoteElement;
