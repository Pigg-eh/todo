import { Note } from "./createNote";

export function hello(){
  let morningRoutine = new Note(
    'Thing to do', 
    'thethingineedtodo', 
    '9/22',
    2,
    'Insert Label here',
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