import { Note } from './createNote';



export const makeNote =()=>{
    

    const testNote = new Note(
      prompt('Note Title'), 
      prompt('description'), 
      prompt('date'),
      2,
      false
    )
    return testNote
  }
  