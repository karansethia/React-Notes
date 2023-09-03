import React from "react";
import classes from "./Tagbar.module.css";

const Tagbar = () => {
  return (
    <div className={classes.tagbar}>
      {/* {tags.map(tag => (<div></div>))} */}
      <div className={classes.tag}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <circle cx="9" cy="9" r="9" fill="#FF0000" />
        </svg>
        <h4>Work</h4>
      </div>
      <div className={classes.tag}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <circle cx="9" cy="9" r="9" fill="#05FF00" />
        </svg>
        <h4>Development</h4>
      </div>
      <div className={classes.tag}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <circle cx="9" cy="9" r="9" fill="#00D1FF" />
        </svg>
        <h4>Home</h4>
      </div>
    </div>
  );
};

export default Tagbar;
