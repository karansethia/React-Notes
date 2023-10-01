import React, {Fragment, useState} from "react";
import {createPortal} from "react-dom";
import classes from "./AddTag.module.css";
import Circle from "../../UI/Circle";
import Cross from "../../../assets/cross.png";

const AddTagModal = (props) => {
  const [color, setColor] = useState();
  const [createNewTag, setCreateNewTag] = useState(false);
  const [tags, setTags] = useState([]);
  console.log(tags);
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
            <div className={classes.tag}>
              <Circle color="red" /> tagname
            </div>
            <div className={classes.tag}>
              <Circle color="red" /> tagname
            </div>
            <div className={classes.tag}>
              <Circle color="red" /> tagname
            </div>
            <div className={classes.tag}>
              <Circle color="red" /> tagname
            </div>
            <div className={classes.tag}>
              <Circle color="red" /> tagname
            </div>
            <div className={classes.tag}>
              <Circle color="red" /> tagname
            </div>
          </div>
          <button onClick={(e) => setCreateNewTag(true)}>Add New Tag</button>
        </div>
      )}
      {createNewTag && (
        <div className={classes.modalContent}>
          <div>
            <input type="text" placeholder="Enter tag name" />
            <br />
            <label htmlFor="color">Pick a Color</label>
            <div className={classes.colorPicker}>
              <Circle
                color="yellow"
                onClick={() => {
                  console.log("hello");
                }}
              />
              <Circle
                color="yellow"
                onClick={() => {
                  console.log("hello");
                }}
              />
              <Circle
                color="yellow"
                onClick={() => {
                  console.log("hello");
                }}
              />
              <Circle
                color="yellow"
                onClick={() => {
                  console.log("hello");
                }}
              />
              <Circle
                color="yellow"
                onClick={() => {
                  console.log("hello");
                }}
              />
            </div>
          </div>
          <button
            onClick={() => {
              setCreateNewTag(false);
            }}
          >
            Choose from existing
          </button>
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
        <AddTagModal onclose={props.onclose} />,
        document.getElementById("addtag")
      )}
    </Fragment>
  );
};

export default AddTag;
