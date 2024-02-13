import React, {useEffect} from "react";
import classes from "./NoteDash.module.css";
import Notelist from "../Components/NoteList/Notelist";
import Tagbar from "../Components/Tagbar/Tagbar";
import {useSelector} from "react-redux";

const NoteDash = () => {
  const notes = useSelector((state) => state.stateNotes.notes);
  // console.log(data);

  return (
    <div className={classes.container}>
      <div className={classes.notedash}>
        <Tagbar />
        <Notelist notes={notes} />
      </div>
    </div>
  );
};

export default NoteDash;
