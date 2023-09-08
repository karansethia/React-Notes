import React from "react";

import classes from "./NoteDash.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Notelist from "../Components/NoteList/Notelist";
import Tagbar from "../Components/Tagbar/Tagbar";

const NoteDash = () => {
  return (
    <div className={classes.container}>
      <div className={classes.notedash}>
        <Tagbar />
        <Notelist />
      </div>
    </div>
  );
};

export default NoteDash;
