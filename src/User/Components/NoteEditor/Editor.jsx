import React, {useEffect, useRef} from "react";
import classes from "./NoteEditor.module.css";
import Sidebar from "../Sidebar/Sidebar";
import {useGenerate} from "../../hooks/use-generate";
import {useParams} from "react-router-dom";

const Editor = ({
  currentNote,
  onAdd,
  onSideAction,
  onEditTitle,
  onEditContent,
}) => {
  const titleRef = useRef();
  const contentRef = useRef();
  console.log("this note: ", currentNote);
  const params = useParams;
  const id = !params.id ? useGenerate() : currentNote.id;

  const onSaveHandler = () => {
    onSideAction.save({
      ...currentNote,
      id: id,
      addedDate: new Date(),
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          defaultValue={currentNote ? currentNote.title : ""}
          ref={titleRef}
          onBlur={() => onEditTitle(titleRef.current.value)}
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
            defaultValue={currentNote ? currentNote.content : ""}
            ref={contentRef}
            onBlur={() => onEditContent(contentRef.current.value)}
          ></textarea>
        </div>
        <Sidebar
          onSave={() => onSaveHandler()}
          onCopy={onSideAction.copy}
          onExport={onSideAction.export}
          onDelete={onSideAction.delete}
          onPin={onSideAction.pin}
          isPinned={currentNote?.isPin}
        />
      </div>
      <div className={classes.tagbar}>
        {currentNote?.includedTags &&
          currentNote?.includedTags.map((note) => (
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
