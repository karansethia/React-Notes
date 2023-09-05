import React from "react";
import NoteElement from "../NoteElement/NoteElement";
import notesData from "../../../data";
import classes from "./Notes.module.css";

const Notes = (props) => {
  const gridtype = props.gridtype;
  let cls = classes.containercol;
  let num = notesData.length;
  if (gridtype === "containergrid") {
    cls = classes.containergrid;
    num = notesData.length;
    console.log(num);
  } else if (gridtype === "containercol") {
    cls = classes.containercol;
    num = 4;
  }
  return (
    <div className={cls}>
      {notesData.slice(0, num).map((note) => (
        <NoteElement
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          includedtags={note.includedTags}
          ispin={note.isPin}
        />
      ))}
    </div>
  );
};

export default Notes;
