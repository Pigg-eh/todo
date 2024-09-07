import { Note } from "./createNote";

export class Workspace{
  static allNotes = []
  
  constructor(label, color= 'black'){
    this.label = label;
    this.color = color;

    if(this instanceof Note){
      Workspace.allNotes.push(this);
    }
  }
  
//Select all workspace
  static getWorkspace(selectedLabel){
    return Workspace.allNotes.filter((note) => note.label === selectedLabel);
  }

// []View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).

//delete note
  deleteNote(){
    const referenceNote = Workspace.allNOtes.indexOf(this)
    Workspace.allNotes.splice(referenceNote, 0);
    console.log(allNotes)
  }
//not sure how to indexOf the currently selected note(maybe match by title)



  

 
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