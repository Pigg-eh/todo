import { Note } from "./createNote";

export const helloNote =()=>{
  let morningRoutine = new Note(
    'Thing to do', 
    'thethingineedtodo', 
    '9/22',
    2,
    false
  )
  return morningRoutine
}





 /*
  object{
  title
  description
  dueDate 
  priority
  label 
  checked
}
  */