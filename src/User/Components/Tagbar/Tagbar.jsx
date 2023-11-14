import React, {useState} from "react";
import classes from "./Tagbar.module.css";
import Tag from "../Tag/Tag";

import {useSelector} from "react-redux";

const Tagbar = () => {
  const tags = useSelector((state) => state.stateNotes.tags);

  return (
    <div className={classes.tagbar}>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.title} />
      ))}
    </div>
  );
};

export default Tagbar;
