import { Note } from "./createNote";

// export class Workspace{
//   constructor(label, notepile, color){
//     this.label = label='default';
//     this.notepile = notepile=[]; 
//     this.color = color='black';
//   }
  
// }

export class Workspace{
  constructor(label, notepile, color){
    this.label = label;
    this.notepile = notepile; 
    this.color = color;
  }
  
}

export function defaultWorkspace(){
  let origin = new Workspace(
    'default', 
    [], 
    'black'
  )
  return origin
}



  /*
-has to extend from the workspace itself
-

  object{
  title
  description
  dueDate 
  priority
  label 
  checked
}
  */