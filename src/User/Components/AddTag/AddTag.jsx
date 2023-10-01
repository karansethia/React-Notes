import React, {Fragment, useState} from "react";
import {createPortal} from "react-dom";
import classes from "./AddTag.module.css";

const AddTagModal = (props) => {
  const [color, setColor] = useState();
  const [createNewTag, setCreateNewTag] = useState(false);
  const [tag, setTag] = useState();
  return (
    <div className={classes.modal}>
      {!createNewTag && (
        <>
          <select name="tag" onChange={(e) => setTag(e.target.value)}>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            <option value="option4">Option4</option>
            <option value="option5">Option5</option>
          </select>
          <button onClick={(e) => setCreateNewTag(true)}>Add New Tag</button>
        </>
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
      <button onClick={props.onclose}>Cancel</button>
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
