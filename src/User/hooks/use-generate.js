import { useSelector } from "react-redux";

export const useGenerate = () => {
  const notes = useSelector((state) => state.stateNotes.notes);
const characters ='abcdefghijklmnopqrstuvwxyz0123456789'
  let generatedId = ' ';
    const charactersLength = 5;
    const generate = () => {
      for ( let i = 0; i < 5; i++ ) {
          generatedId += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    }
    generate()
    const existing = notes.find((note) => note.id === generatedId);

      return generatedId;
   
}