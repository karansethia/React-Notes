import React, {Fragment, useState} from "react";
import {createPortal} from "react-dom";
import classes from "./AddTag.module.css";

const AddTagModal = (props) => {
  const [color, setColor] = useState();
  const [createNewTag, setCreateNewTag] = useState(false);
  const [tag, setTag] = useState();
  console.log(tag);
  return (
    <div className={classes.modal}>
      {!createNewTag && (
        <div className={classes.modalContent}>
          <div className={classes.tagContainer}>
            <div className={classes.tag}>tag name</div>
            <div className={classes.tag}>tag name</div>
            <div className={classes.tag}>tag name</div>
            <div className={classes.tag}>tag name</div>
          </div>
          <button onClick={(e) => setCreateNewTag(true)}>Add New Tag</button>
        </div>
      )}
      {createNewTag && (
        <>
          <input type="text" placeholder="Enter tag name" />
          <select
            name="color"
            id="color"
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="Color1">Color1 </option>
            <option value="Color1">Color2 </option>
            <option value="Color1">Color3 </option>
            <option value="Color1">Color4 </option>
          </select>
        </>
      )}
      <button onClick={props.onclose} className={classes.cancel}>
        Cancel
      </button>
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
