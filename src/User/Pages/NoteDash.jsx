import React from "react";
import NoteElement from "../Components/NoteElement/NoteElement";
import classes from "./NoteDash.module.css";
import Navbar from "../Components/Navbar/Navbar";
import notesData from "../../data";
import {tags} from "../../data";
import Tagbar from "../Components/Tagbar/Tagbar";

const NoteDash = () => {
  return (
    <div className={classes.notedash}>
      <Navbar />
      <Tagbar />
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

export default NoteDash;
