import React from "react";
import classes from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <div className={classes.container}>
      <div className={classes.notefunctions}>
        <div className={classes.function}>Change Theme</div>
        <div className={classes.function}>Export All</div>
        <div className={classes.function}>Delete All</div>
      </div>
      <div className={classes.notefunctions}>
        <div className={classes.function}>Logout</div>
      </div>
    </div>
  );
};

export default SideMenu;
