import { uiSlice } from "./ui-slice";
import { noteSlice } from "./note-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {stateNotes : noteSlice.reducer, ui: uiSlice.reducer}
})
