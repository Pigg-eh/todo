import { Note } from "./createNote";

export class Workspace{
  static allNotes = []
//still adds workspaces as well
  constructor(label, color= 'black'){
    this.label = label;
    this.color = color;
    Workspace.allNotes.push(this);
  }
  
  // displayWorkspace(){
  //   console.log(allNotes)
  // }  

  static getWorkspace(selectedLabel){
    return Workspace.allNotes.filter((note) => note.label === selectedLabel);
  }

  // []View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).

  //get all notes with the same label
  
  // / a method that returns an array of all notes with the same label

 
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