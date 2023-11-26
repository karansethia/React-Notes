import React, {useRef} from "react";
import classes from "./NoteEditor.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Editor = ({
  currentNote,
  onAdd,
  onSideAction,
  onEditTitle,
  onEditContent,
}) => {
  const titleRef = useRef();
  const contentRef = useRef();
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
          onSave={onSideAction.save}
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
