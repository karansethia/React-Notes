import React from "react";
import NoteElement from "../NoteElement/NoteElement";
import classes from "./Notes.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Notes = ({gridtype, notes}) => {
  const sortbytag = useSelector((state) => state.ui.user.sortTag);
  console.log("sort by tag array", sortbytag);
  const sortby = useSelector((state) => state.ui.user.sortRecent);
  console.log(sortby);
  //todo create a custom hook that filter this data
  let filteredNotes = [];
  if (sortbytag.length != 0) {
    for (const note of notes) {
      for (const tag of note.includedTags) {
        if (
          sortbytag.indexOf(tag.tagName) != -1 &&
          filteredNotes.indexOf(note) == -1
        ) {
          filteredNotes.push(note);
        }
      }
    }
  } else {
    filteredNotes = notes;
  }
  let sortedNotes = [];
  if (sortby === "recent") {
    sortedNotes = filteredNotes
      .slice()
      .sort((a, b) => a.addedDate - b.addedDate);
  } else if (sortby === "old") {
    sortedNotes = filteredNotes
      .slice()
      .sort((a, b) => b.addedDate - a.addedDate);
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
