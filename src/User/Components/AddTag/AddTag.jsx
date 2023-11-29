import React, {Fragment, useState} from "react";
import {createPortal} from "react-dom";
import {useSelector} from "react-redux";
import classes from "./AddTag.module.css";
import Circle from "../../UI/Circle";
import Cross from "../../../assets/cross.png";

const AddTagModal = (props) => {
  const [createNewTag, setCreateNewTag] = useState(false);
  const [tagTitle, setTagTitle] = useState();
  const [tagColor, setTagColor] = useState();
  const data = useSelector((state) => state.stateNotes.tags);
  const uiData = useSelector((state) => state.ui.noteColor);
  const onCreateNewTag = () => {
    if (tagTitle && tagColor) {
      const tag = {
        tagName: tagTitle,
        color: tagColor,
      };
      props.onAddTag(tag, true);
      props.onclose();
    }
  };
  return (
    <div className={classes.modal}>
      <button onClick={props.onclose} className={classes.cancel}>
        <img
          src={Cross}
          style={{
            width: "1rem",
            height: "fit-content",
            marginTop: "0.5rem",
            cursor: "pointer",
          }}
        />
      </button>
      {!createNewTag && (
        <div className={classes.modalContent}>
          <div className={classes.tagContainer}>
            {data.map((tag) => (
              <div
                className={classes.tag}
                key={tag.tagName}
                onClick={() => {
                  props.onAddTag(
                    {tagName: tag.tagName, color: tag.color},
                    false
                  );
                  props.onclose();
                }}
              >
                <Circle color={tag.color} key={tag.color} />
                <p>{tag.tagName}</p>
              </div>
            ))}
          </div>
          <button onClick={(e) => setCreateNewTag(true)}>Add New Tag</button>
        </div>
      )}
      {createNewTag && (
        <div className={classes.modalContent}>
          <div>
            <input
              type="text"
              placeholder="Enter tag name"
              onBlur={(e) => setTagTitle(e.target.value)}
            />
            <br />
            <label htmlFor="color">Pick a Color</label>
            <div className={classes.colorPicker}>
              {uiData.map((color) => (
                <Circle
                  color={color}
                  key={color}
                  onClick={() => {
                    setTagColor(color);
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setCreateNewTag(false);
              }}
            >
              Choose from existing
            </button>
            <button onClick={onCreateNewTag}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclose} />;
};

const AddTag = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onclose={props.onclose} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <AddTagModal onclose={props.onclose} onAddTag={props.onAddTag} />,
        document.getElementById("addtag")
      )}
    </Fragment>
  );
};

export default AddTag;
