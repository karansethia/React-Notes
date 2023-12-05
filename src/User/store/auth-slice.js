import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {user: null, token: null},
  reducers: {
    setCredentials(state, action){
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logout(state, action){
      state.user = null;
      state.token = null;
    },
  }
});

export const authActions = authSlice.actions;

//helper variables for tokens and users in the current state

export const currentUser = state => state.auth.user;
export const currentToken = state => state.auth.token;