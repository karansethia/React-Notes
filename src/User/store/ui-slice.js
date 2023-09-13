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
  initialState: {darkTheme:true,isLoggedIn:true,sortRecent: true, showTag: null},
  reducers: {
    changeTheme(state){
      //!set the theme to !darkTheme
    },
    logout(state){
      //! set isLoggedIn to false
    },
    sortByRecent(state){
      //! set sortRecent to !sortRecent
    },
    sortTag(state, action){

    }
  }
});
export const uiActions = uiSlice.actions;