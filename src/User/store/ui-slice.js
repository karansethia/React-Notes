/*
UI : {
  darkTheme : <boolean>
  isLoggedIn : <boolean>
  sortRecent : <boolean>
  sortTag : <string>
} 
actions : 
- changeTheme
- logout
- sortbyrecent
- sorttag
*/

import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name : "UI",
  initialState: {darkTheme:true,isLoggedIn:true,sortRecent: true, showTag: null,modalInfo:{modelMessage:null,showModal:true}},
  reducers: {
    changeTheme(state){
      //!set the theme to !darkTheme
      state.darkTheme = !state.darkTheme
    },
    logout(state){
      //! set isLoggedIn to false
      state.isLoggedIn(false);
    },
    sortByRecent(state){
      //! set sortRecent to !sortRecent
      state.sortRecent = !state.sortRecent;
    },
    sortTag(state, action){
      state.sortTag = action.payload
    },
    showModal(state){
      state.modalInfo.modelMessage = action.payload;
      state.modalInfo.showModal = true;
    }
  }
});
export const uiActions = uiSlice.actions;