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
  initialState: {user : {darkTheme:true,isLoggedIn:true,sortRecent: 'recent', sortTag:[]},noteColor : ['yellow',"#f75590","#5ef38c","#e6aa68","#a5be00"]},
  reducers: {
    changeTheme(state){
      //!set the theme to !darkTheme
      state.user.darkTheme = !state.darkTheme
    },
    logout(state, action){
      //! set isLoggedIn to false
      state.user.isLoggedIn(action.payload);
    },
    sortByRecent(state, action){
      //! set sortRecent to !sortRecent
      state.user.sortRecent = action.payload;
    },
    sortTag(state, action){
      if(state.user.sortTag.indexOf(action.payload) == -1){
        state.user.sortTag.push(action.payload);
      }
    },
    removeTag(state, action){
    state.user.sortTag = state.user.sortTag.filter(function (tag) {
    return tag !== action.payload;
      });
    },
    resetTag(state){
      state.user.sortTag = [];
    }
  }
});
export const uiActions = uiSlice.actions;