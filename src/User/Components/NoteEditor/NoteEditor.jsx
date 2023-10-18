import React, {useState} from "react";
import {useParams} from "react-router-dom";
import AddTag from "../AddTag/AddTag";
import {useSelector, useDispatch} from "react-redux";
import {noteActions} from "../../store/note-slice";
import Editor from "./Editor";
const NoteEditor = () => {
  const params = useParams();
  const data = useSelector((state) => state.stateNotes.notes);
  let currentNote = null;
  if (params.noteId) {
    const currentNoteId = data.findIndex((note) => note.id == params.noteId);
    currentNote = data[currentNoteId];
    console.log(currentNote);
  }

  const dispatch = useDispatch;

  //*sidebtn logic and dispatch actions
  const saveHandler = () => {
    console.log("sidebtn clicked : save");
    dispatch(noteActions.saveNote({}));
  };
  const copyHandler = () => {
    console.log("sidebtn clicked : copy");
    dispatch(noteActions.copyNote);
  };
  const exportHandler = () => {
    console.log("sidebtn clicked : export");
    dispatch(noteActions.shareNote);
  };
  const deleteHandler = () => {
    console.log("sidebtn clicked : delete");
    dispatch(noteActions.deleteNote);
  };
  const pinHandler = () => {
    console.log("sidebtn clicked : pin");
    dispatch(noteActions.pinStatus);
  };
  const removeTagHandler = () => {};

  //* sidebtn object for functions

  const sideFunctions = {
    save: saveHandler,
    copy: copyHandler,
    export: exportHandler,
    delete: deleteHandler,
    pin: pinHandler,
    removeTag: removeTagHandler,
  };

  //* Logic for toggling tag modal
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
      <Editor
        currentNote={currentNote}
        onAdd={addTagHandler}
        onSideAction={sideFunctions}
      />
    </>
  );
};

export default NoteEditor;
