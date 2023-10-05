import React from "react";
import NoteElement from "../NoteElement/NoteElement";
import classes from "./Notes.module.css";
import {Link} from "react-router-dom";

const Notes = ({gridtype, notes}) => {
  console.log(notes);
  let cls = classes.containercol;
  let num = notes.length;
  if (gridtype === "containergrid") {
    cls = classes.containergrid;
    num = notes.length;
    console.log(num);
  } else if (gridtype === "containercol") {
    cls = classes.containercol;
    num = 4;
  }
  return (
    <div className={cls}>
      {notes?.slice(0, num).map((note) => (
        <Link to={`${note.id}`} key={note.id}>
          <NoteElement
            id={note.id}
            title={note.title}
            content={note.content}
            includedtags={note.includedTags}
            ispin={note.isPin}
          />
        </Link>
      ))}
    </div>
  );
};

export default Notes;
