import React, {Fragment, useState} from "react";

const AddTagModal = (props) => {
  const [color, setColor] = useState();
  return (
    <div className={classes.container}>
      <input type="text" placeholder="Enter tag name" />
      <select
        name="color"
        id="color"
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="Color1"> </option>
        <option value="Color1"> </option>
        <option value="Color1"> </option>
        <option value="Color1"> </option>
      </select>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclose} />;
};

const AddTag = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onclose={props.onclose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <AddTagModal onclose={props.onclose} />,
        document.getElementById("addtag")
      )}
    </Fragment>
  );
};

export default AddTag;
