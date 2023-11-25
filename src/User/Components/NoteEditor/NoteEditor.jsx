import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import AddTag from "../AddTag/AddTag";
import {useSelector, useDispatch} from "react-redux";
import {noteActions} from "../../store/note-slice";
import Editor from "./Editor";
const NoteEditor = () => {
  const params = useParams();
  const data = useSelector((state) => state.stateNotes.notes);
  const [note, setNote] = useState();

  useEffect(() => {
    if (params.noteId) {
      const currentNoteId = data.findIndex((note) => note.id == params.noteId);
      setNote(data[currentNoteId]);
    }
  }, [params.noteId, data]);
  // console.log(note.id);
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

  const showTagHandler = () => {
    setShowTagModal(true);
  };
  const closeTagHandler = () => {
    setShowTagModal(false);
  };

  //* logic for creating adding tags
  const onAddTagHandler = (tag) => {
    console.log(tag);
    const exists = note.includedTags.filter(
      (note) => note.tagName == tag.tagName
    );
    if (exists.length == 0) {
      setNote((prevNote) => {
        const updatedNote = {
          ...prevNote,
          includedTags: [...prevNote.includedTags, tag],
        };
        return updatedNote;
      });
    }
  };

  console.log(note?.includedTags);

  return (
    <>
      {showTagModal && (
        <AddTag onclose={closeTagHandler} onAddTag={onAddTagHandler} />
      )}
      <Editor
        currentNote={note}
        onAdd={showTagHandler}
        onSideAction={sideFunctions}
      />
    </>
  );
};

export default NoteEditor;
