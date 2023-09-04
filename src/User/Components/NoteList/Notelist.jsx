import React from "react";
import classes from "./Notelist.module.css";
import NoteElement from "../NoteElement/NoteElement";
import notesData from "../../../data";

const Notelist = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sort}>
        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
          <p>Sort by</p>
          <select>
            <option>All</option>
            <option>Recent</option>
            <option>Old</option>
          </select>
        </div>
        <button>New Note</button>
      </div>
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
    </div>
  );
};

export default Notelist;
