import { Note } from "./createNote";

export class Workspace{
  static allNotes = []

  constructor(label='default', color= 'black'){
    this.label = label;
    this.color = color;
    Workspace.allNotes.push(this);
  }
  
  displayNotes(){
    console.log(this.allNotes)
  }
 
  // []View all projects.
  // addToAllNotes(array){
  //   array.forEach(element => {
  //     array.push(element)
  //   });
  // }

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