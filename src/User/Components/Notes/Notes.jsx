import React from "react";
import NoteElement from "../NoteElement/NoteElement";
import notesData from "../../../data";
import classes from "./Notes.module.css";

const Notes = () => {
  return (
    <div className={classes.notecontainer}>
      {notesData.map((note) => (
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
