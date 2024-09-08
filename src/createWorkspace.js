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
  
  static getWorkspace(selectedLabel){
    return Workspace.allNotes.filter((note) => note.label === selectedLabel);
    //Workspace.getWorkspace('label')
  }

// []View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).

  deleteNote(){
    const referenceNote = Workspace.allNotes.indexOf(this) //select note
    Workspace.allNotes.splice(referenceNote, 1);
    console.log(Workspace.allNotes)
    //noteVar.deleteNote()
    //Workspace.allNotes
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