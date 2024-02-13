import React, {useEffect} from "react";
import {noteActions} from "../store/note-slice";
import classes from "./NoteDash.module.css";
import {useQuery} from "@tanstack/react-query";
import Notelist from "../Components/NoteList/Notelist";
import Tagbar from "../Components/Tagbar/Tagbar";
import {useDispatch, useSelector} from "react-redux";
import {postLogin} from "../../utils/http";

const NoteDash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const {data, isError, error, isLoading} = useQuery({
      queryKey: ["notes"],
      queryFn: postLogin,
    });
    console.log(data);
    if (!isLoading && !isError) {
      dispatch(noteActions.addNotes(data));
    }
    if (isError || error) {
      //todo dispatch notification
    }
  });

  const notes = useSelector((state) => state.stateNotes.notes);
  // console.log(data);

  return (
    <div className={classes.container}>
      <div className={classes.notedash}>
        <Tagbar />
        {!isLoading && <Notelist notes={notes} />}
      </div>
    </div>
  );
};

export default NoteDash;
