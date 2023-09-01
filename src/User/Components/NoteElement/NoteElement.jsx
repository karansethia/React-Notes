import React from "react";
import classes from "./NoteElement.module.css";
import notesData from "../../../data";

const NoteElement = (props) => {
  console.log(notesData);
  const title = notesData[0].title.split(" ");
  const noteTitle =
    title[0] + " " + title[1] + " " + title[2] + " " + title[3] + "...";
  console.log(noteTitle);
  console.log(props.ispin);

  return (
    <div
      className={
        props.ispin ? `${classes.pinned} ${classes.wrapper}` : classes.wrapper
      }
    >
      <div className={classes.header}>
        <h3>{noteTitle}</h3>
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
