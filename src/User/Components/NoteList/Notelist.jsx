import React, {useState} from "react";
import classes from "./Notelist.module.css";
import {Link} from "react-router-dom";
import Notes from "../Notes/Notes";

const Notelist = () => {
  const [sort, setSort] = useState("recent");

  const selectHandler = (event) => {
    setSort(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.sort}>
        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
          <p>Sort by</p>
          <select onChange={selectHandler} value={sort}>
            <option value="recent">Recent</option>
            <option value="old">Old</option>
          </select>
        </div>
        <Link to="new">New Note</Link>
      </div>
      <Notes gridtype="containergrid" />
    </div>
  );
};

export default Notelist;
