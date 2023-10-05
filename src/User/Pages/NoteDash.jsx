import React from "react";

import classes from "./NoteDash.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Notelist from "../Components/NoteList/Notelist";
import Tagbar from "../Components/Tagbar/Tagbar";
import {useSelector} from "react-redux";

const NoteDash = () => {
  const data = useSelector((state) => state.stateNotes.notes);
  console.log(data);

  return (
    <div className={classes.container}>
      <div className={classes.notedash}>
        <Tagbar />
        <Notelist notes={data} />
      </div>
    </div>
  );
};

export default NoteDash;
