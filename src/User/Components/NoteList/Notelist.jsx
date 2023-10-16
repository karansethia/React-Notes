import React, {useState} from "react";
import classes from "./Notelist.module.css";
import {Link} from "react-router-dom";
import Notes from "../Notes/Notes";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";

const Notelist = (props) => {
  const dispatch = useDispatch();
  const sortby = useSelector((state) => state.ui.user.sortRecent);

  const selectHandler = (event) => {
    dispatch(uiActions.sortByRecent(event.target.value));
  };

  console.log(props.notes);
  return (
    <div className={classes.container}>
      <div className={classes.sort}>
        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
          <p>Sort by</p>
          <select onChange={selectHandler} value={sortby}>
            <option value="recent">Recent</option>
            <option value="old">Old</option>
          </select>
        </div>
        <Link to="new">New Note</Link>
      </div>
      <Notes notes={props.notes} gridtype="containergrid" />
    </div>
  );
};

export default Notelist;
