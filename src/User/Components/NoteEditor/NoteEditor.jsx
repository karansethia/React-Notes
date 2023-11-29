import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import AddTag from "../AddTag/AddTag";
import {useSelector, useDispatch} from "react-redux";
import {noteActions} from "../../store/note-slice";
import Editor from "./Editor";
const NoteEditor = () => {
  const params = useParams();
  const data = useSelector((state) => state.stateNotes.notes);
  const existingTags = useSelector((state) => state.stateNotes.tags);
  const [note, setNote] = useState({
    id: null,
    title: "",
    content: "",
    includedTags: [],
    isPin: false,
    addedDate: null,
  });

  useEffect(() => {
    if (params.noteId) {
      const currentNoteId = data.findIndex((note) => note.id == params.noteId);
      setNote(data[currentNoteId]);
    }
  }, [params.noteId, data]);
  const dispatch = useDispatch();

  //*sidebtn logic and dispatch actions
  const saveHandler = (newnote) => {
    console.log("sidebtn clicked : save");
    console.log(newnote);
    dispatch(noteActions.saveNote(newnote));
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
  const onAddTagHandler = (tag, isCustom) => {
    if (isCustom) {
      const existingTag = existingTags.filter((t) => t.tagName == tag.tagName);
      console.log(existingTag);
      if (existingTag.length == 0) {
        setNote((prevNote) => {
          const updatedNote = {
            ...prevNote,
            includedTags: [...prevNote.includedTags, tag],
          };
          return updatedNote;
        });
      } else {
        console.log(`${tag.tagName} already exists`);
      }
      dispatch(noteActions.addTag(tag));
    }
    if (!isCustom) {
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
      console.log(note);
      //todo adding tag in tag (note slice)
      dispatch(noteActions.addTag(tag));
    }
  };

  //* logic for changing the note in local state
  const onEditTitleHandler = (title) => {
    setNote((prevNote) => {
      const updatedNote = {
        ...prevNote,
        title: title,
      };
      return updatedNote;
    });
  };
  const onEditContentHandler = (content) => {
    setNote((prevNote) => {
      const updatedNote = {
        ...prevNote,
        content: content,
      };
      return updatedNote;
    });
  };

  return (
    <>
      {showTagModal && (
        <AddTag onclose={closeTagHandler} onAddTag={onAddTagHandler} />
      )}
      <Editor
        currentNoteId={params.noteId}
        currentNote={note}
        onAdd={showTagHandler}
        onSideAction={sideFunctions}
        onEditTitle={onEditTitleHandler}
        onEditContent={onEditContentHandler}
      />
    </>
  );
};

export default NoteEditor;
