import React from "react";
import classes from "./Tagbar.module.css";
import {uiActions} from "../../store/ui-slice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Tagbar = () => {
  const tags = useSelector((state) => state.stateNotes.tags);
  const sorttag = useSelector((state) => state.ui.user.sortTag);
  console.log(sorttag);
  const dispatch = useDispatch();
  const sortTagHandler = (title) => {
    dispatch(uiActions.sortTag(title));
    console.log(sorttag);
  };

  return (
    <div className={classes.tagbar}>
      {tags.map((tag) => (
        <div
          className={classes.tag}
          onClick={() => {
            dispatch(uiActions.sortTag(tag.title));
          }}
          key={tag.title}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="9" cy="9" r="9" fill={tag.color} />
          </svg>
          <h4>{tag.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Tagbar;
