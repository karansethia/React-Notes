import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {user: null, token: null, image: null},
  reducers: {
    setCredentials(state, action){
      const { user, accessToken, image } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.image = image;
    },
    logout(state){
      state.user = null;
      state.token = null;
    },
  }
});

export const authActions = authSlice.actions;
