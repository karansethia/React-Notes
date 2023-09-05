import React from "react";
import classes from "./Notelist.module.css";

import Notes from "../Notes/Notes";

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
      <Notes />
    </div>
  );
};

export default Notelist;
