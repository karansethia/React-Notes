import React, {useState} from "react";
import {useParams} from "react-router-dom";
import classes from "./NoteEditor.module.css";
import AddTag from "../AddTag/AddTag";
import {useSelector} from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import {
  saveHandler,
  copyHandler,
  exportHandler,
  pinHandler,
  deleteHandler,
} from "./Sidebtnfunctions";
const NoteEditor = () => {
  const params = useParams();
  const data = useSelector((state) => state.stateNotes.notes);
  let currentNote = null;
  if (params.noteId) {
    const currentNoteId = data.findIndex((note) => note.id == params.noteId);
    currentNote = data[currentNoteId];
    console.log(currentNote);
  }

  const [showTagModal, setShowTagModal] = useState(false);

  const addTagHandler = () => {
    setShowTagModal(true);
  };
  const closeTagHandler = () => {
    setShowTagModal(false);
  };

  return (
    <>
      {showTagModal && <AddTag onclose={closeTagHandler} />}
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
            onSave={saveHandler}
            onCopy={copyHandler}
            onExport={exportHandler}
            onDelete={deleteHandler}
            onPin={pinHandler}
            isPinned={currentNote.isPin}
          />
        </div>
        <div className={classes.tagbar}>
          {currentNote.includedTags.map((note) => (
            <div className={classes.tag} key={note.tagName}>
              <h4>{note.tagName}</h4>
            </div>
          ))}
          <button className={classes.tagBtn} onClick={addTagHandler}>
            Add Tag +{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteEditor;
