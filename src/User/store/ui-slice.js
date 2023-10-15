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
  initialState: {user : {darkTheme:true,isLoggedIn:true,sortRecent: true, sortTag:null},noteColor : ['yellow',"#f75590","#5ef38c","#e6aa68","#a5be00"]},
  reducers: {
    changeTheme(state){
      //!set the theme to !darkTheme
      state.user.darkTheme = !state.darkTheme
    },
    logout(state, action){
      //! set isLoggedIn to false
      state.user.isLoggedIn(action.payload);
    },
    sortByRecent(state){
      //! set sortRecent to !sortRecent
      state.user.sortRecent = !state.sortRecent;
    },
    sortTag(state, action){
      state.user.sortTag = action.payload
    }
  }
});
export const uiActions = uiSlice.actions;