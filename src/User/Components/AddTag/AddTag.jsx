import React, {Fragment, useState} from "react";
import {createPortal} from "react-dom";
import {useSelector} from "react-redux";
import classes from "./AddTag.module.css";
import Circle from "../../UI/Circle";
import Cross from "../../../assets/cross.png";

const AddTagModal = (props) => {
  const [color, setColor] = useState();
  const [createNewTag, setCreateNewTag] = useState(false);
  const [tags, setTags] = useState([]);
  const data = useSelector((state) => state.stateNotes.tags);
  console.log(tags);
  const onAddColorHandler = () => {};
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
              <div className={classes.tag} key={tag.title}>
                <Circle color={tag.color} />
                <p>{tag.title}</p>
              </div>
            ))}
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
              <Circle color="yellow" onClick={onAddColorHandler} />
              <Circle color="#f75590" onClick={onAddColorHandler} />
              <Circle color="#5ef38c" onClick={onAddColorHandler} />
              <Circle color="#e6aa68" onClick={onAddColorHandler} />
              <Circle color="#a5be00" onClick={onAddColorHandler} />
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
