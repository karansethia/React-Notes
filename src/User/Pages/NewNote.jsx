import React from "react";
import classes from "./Newnote.module.css";
import NoteEditor from "../Components/NoteEditor/NoteEditor";
import Notes from "../Components/Notes/Notes";
import {useSelector} from "react-redux";

const Newnote = () => {
  const data = useSelector((state) => state.stateNotes.notes);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <NoteEditor />
        <Notes notes={data} gridtype="containercol" />
      </div>
    </div>
  );
};

export default Newnote;
