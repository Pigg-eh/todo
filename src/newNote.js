import { Note } from './createNote';



export const makeNote =()=>{
    

    const noteForm = new Note(
      prompt('Note Title'), 
      prompt('description'), 
      prompt('date'),
      2,
      false
    )

    noteForm.label = prompt('Label')
    //a button can be added to add to the Label itself
    return noteForm
  }
  