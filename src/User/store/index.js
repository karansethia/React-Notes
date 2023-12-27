import { uiSlice } from "./ui-slice";
import { noteSlice } from "./note-slice";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";

export const store = configureStore({
  reducer: {stateNotes : noteSlice.reducer, ui: uiSlice.reducer, auth: authSlice.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
