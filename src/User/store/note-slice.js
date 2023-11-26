/* Note Structure
  note: [
    {id: 'note1',
    title: 'This is note title',
    content: 'This is note content',
    includedtags: [{tagName: 'work', color: 'red'},{},{}],
    isPin: true}
  ]

  Actions : 
  - Pin/Unpin
  - SaveNote
  - ShareNote
  - AddTag
  - CopyFromClipboard
  - DeleteNote
  - DeleteAll 
*/
import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "Notes",
  initialState: {notes : [
  {
    id: 1,
    title: "Meeting Agenda along with clients from Italy",
    content: "Prepare for the upcoming meeting by outlining project updates, discussing timeline adjustments, and addressing any potential roadblocks. Ensure all team members are informed and ready to contribute.",
    includedTags: [{tagName: "Work", color: "red"}, {tagName:"Development", color:"green"}],
    isPin: true,
    addedDate: new Date('2022-12-12')
  },
  {
    id: 2,
    title: "Grocery List",
    content: "Don't forget to pick up essential items from the store: a gallon of milk, a dozen eggs, a loaf of whole-grain bread, and a variety of fresh vegetables for the week's meals.",
    includedTags: [ {tagName:"Home", color:"blue"}],
    isPin: false,
    addedDate: new Date('2012-11-12')
  },
  {
    id: 3,
    title: "Travel Plans to Argentina",
    content: "Tomorrow's travel schedule: Catch a flight at 2 PM to your destination. Arrive at the hotel by 4 PM for check-in. Remember to pack your passport, charger, and comfortable clothing.",
    includedTags: [ {tagName:"Development", color:"green"}],
    isPin: false,
    addedDate: new Date('2017-10-24')
  },
  {
    id: 4,
    title: "Book Recommendations",
    content: "Two captivating books to read: 'The Alchemist' by Paulo Coelho, a story of self-discovery, and '1984' by George Orwell, a dystopian classic that explores the power of government control.",
    includedTags: [{tagName: "Work", color: "red"}, {tagName:"Development", color:"green"}],
    isPin: false,
    addedDate: new Date('2021-12-25')
  },
  {
    id: 5,
    title: "Ideas for Project",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "red"}, {tagName:"Development", color:"green"}],
    isPin: true,
    addedDate: new Date('2020-04-31')
  },
  {
    id: 6,
    title: "Ideas for Project",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "red"}, {tagName:"Development", color:"green"}],
    isPin: true,
    addedDate: new Date('2019-02-16')
  },
  {
    id: 7,
    title: "Ideas for Project",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "red"}, {tagName:"Development", color:"green"}],
    isPin: true,
    addedDate: new Date('2022-12-11')
  },
  {
    id: 8,
    title: "Ideas for React API Application",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "red"}, {tagName:"Development", color:"green"}],
    isPin: true,
    addedDate: new Date('2022-10-12')
  }
  ],tags:[{tagName:"Work", color:"red"},{tagName:"Development",color:"green"},{tagName:"Home",color:"blue"}]},
  reducers: {
    pinStatus(state, action){
      //!get an id and match the note from the initial state and update the pin => !pin
      const current_id = action.payload;
      const noteItem = state.notes.find((note) => note.id === current_id);
      noteItem.isPin = !noteItem.isPin
    },
    saveNote(state, action){
      //! if id not existing in state add note or update note
      const {id, title, content, includedTags,isPin, addedDate} = action.payload;
      const noteItem = state.notes.find((note) => note.id === id);
      if(!noteItem){
        state.notes.push({
          id: id,
          title: title,
          content: content,
          includedTags: includedTags,
          isPin: isPin,
          addedDate: addedDate
        })
      }else{
        noteItem.content = content;
        noteItem.title = title;
        noteItem.includedTags = includedTags
      }
    },
    shareNote(state, action){
      //!get the id from payload and send that note to somewhere => we'll figure that part later
    },
    addTag(state, action){
      //todo - we'll add custom tag functionality later

    },
    deleteNote(state, action){
      //! take the id and delete the note from the state
      const current_id = action.payload;
      state.notes = state.notes.filter((note) => note.id === current_id);
    },
    deleteAllNotes(state, action){
      //! empty the state
      state.notes = state.notes.splice(0,state.notes.length)
    },
    copyNote(state, action){
      //! copy the note content to clipboard
    }
  }
})

export const noteActions = noteSlice.actions;