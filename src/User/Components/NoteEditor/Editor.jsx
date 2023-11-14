import React, {useState} from "react";
import classes from "./NoteEditor.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Editor = ({currentNote, onAdd, onSideAction}) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    includedTags: [],
    isPin: false,
  });
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={currentNote ? currentNote.title : ""}
          onChange={() => {}}
        />
        <hr />
      </div>
      <div className={classes.cwrapper}>
        <div className={classes.content}>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Enter Notes here"
            value={currentNote ? currentNote.content : ""}
            onChange={() => {}}
          ></textarea>
        </div>
        <Sidebar
          onSave={onSideAction.save}
          onCopy={onSideAction.copy}
          onExport={onSideAction.export}
          onDelete={onSideAction.delete}
          onPin={onSideAction.pin}
          isPinned={currentNote?.isPin}
        />
      </div>
      <div className={classes.tagbar}>
        {currentNote?.includedTags.map((note) => (
          <div className={classes.tag} key={note.tagName}>
            <h4>{note.tagName}</h4>
          </div>
        ))}
        <button className={classes.tagBtn} onClick={onAdd}>
          Add Tag +{" "}
        </button>
      </div>
    </div>
  );
};

export default Editor;
