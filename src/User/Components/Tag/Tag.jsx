import React, {useState} from "react";
import classes from "./Tag.module.css";
import {uiActions} from "../../store/ui-slice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Tag = ({tag}) => {
  const [isTagActive, setIsTagActive] = useState(false);
  const sorttag = useSelector((state) => state.ui.user.sortTag);
  const dispatch = useDispatch();
  const setTagHandler = (title) => {
    if (sorttag.indexOf(title) != -1) {
      dispatch(uiActions.removeTag(title));
      console.log(sorttag);
      setIsTagActive(false);
    } else {
      dispatch(uiActions.sortTag(title));
      setIsTagActive(true);
    }
  };
  return (
    <div
      className={classes.tag}
      key={tag.title}
      onClick={() => {
        setTagHandler(tag.title);
      }}
    >
      {isTagActive && sorttag.includes(tag.title) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="18"
          viewBox="0 0 27 18"
          fill="none"
        >
          <path
            d="M5.93178 0.314476L4.31448 1.93178C3.89517 2.35108 3.89517 3.06988 4.31448 3.54908L9.82529 9.0599L4.31448 14.5707C3.89517 14.99 3.89517 15.7088 4.31448 16.188L5.87188 17.7454C6.29118 18.1647 7.00998 18.1647 7.48919 17.7454L13 12.2346L18.5108 17.7454C18.9301 18.1647 19.6489 18.1647 20.1281 17.7454L21.6855 16.188C22.1048 15.7687 22.1048 15.0499 21.6855 14.5707L16.1747 9L21.6855 3.48919C22.1048 3.06988 22.1048 2.35108 21.6855 1.87188L20.1281 0.314476C19.7088 -0.104825 18.99 -0.104825 18.5108 0.314476L13 5.82529L7.48919 0.314476C7.06988 -0.104825 6.35108 -0.104825 5.93178 0.314476Z"
            fill={tag.color}
          />
        </svg>
      )}
      {(!isTagActive || sorttag.includes(tag.title) === false) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <circle cx="9" cy="9" r="9" fill={tag.color} />
        </svg>
      )}
      <h4>{tag.title}</h4>
    </div>
  );
};

export default Tag;
