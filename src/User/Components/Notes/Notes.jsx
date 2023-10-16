import React from "react";
import NoteElement from "../NoteElement/NoteElement";
import classes from "./Notes.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Notes = ({gridtype, notes}) => {
  const sortbytag = useSelector((state) => state.ui.user.sortTag);
  let sortedNotes = [];
  if (sortbytag !== "") {
    for (const note of notes) {
      for (const tag of note.includedTags) {
        if (tag.tagName === sortbytag) {
          sortedNotes.push(note);
        }
      }
    }
  } else {
    sortedNotes = notes;
  }

  console.log(sortedNotes);
  let cls = classes.containercol;
  let num = notes.length;
  if (gridtype === "containergrid") {
    cls = classes.containergrid;
    num = notes.length;
  } else if (gridtype === "containercol") {
    cls = classes.containercol;
    num = 4;
  }
  return (
    <div className={cls}>
      {sortedNotes?.slice(0, num).map((note) => (
        <Link to={`/user/${note.id}`} key={note.id}>
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
