import React from "react";
import classes from "./SideMenu.module.css";
import {useDispatch} from "react-redux";
import {uiActions} from "../../store/ui-slice";
import {noteActions} from "../../store/note-slice";
import {setLogOut} from "../../store/custom-actions";

const SideMenu = () => {
  const dispatch = useDispatch();
  const changeThemeHandler = () => {
    dispatch(uiActions.changeTheme());
    console.log("theme changed");
  };
  const deleteAllHandler = () => {
    dispatch(noteActions.deleteAllNotes());
    console.log("theme changed");
  };
  const logoutHandler = () => {
    dispatch(setLogOut());
  };
  return (
    <div className={classes.container}>
      <div className={classes.notefunctions}>
        <div className={classes.function} onClick={changeThemeHandler}>
          Change Theme
        </div>
        <div className={classes.function}>Export All</div>
        <div className={classes.function} onClick={deleteAllHandler}>
          Delete All
        </div>
      </div>
      <div className={classes.notefunctions}>
        <div className={classes.function} onClick={logoutHandler}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
