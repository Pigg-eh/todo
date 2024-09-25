import { Note } from "./createNote";
import { compareAsc, isEqual} from "date-fns";

export class Workspace{
  static allNotes = []
  static allWorkspace = []
  
  constructor(label, color= 'black'){
    this.label = label || 'default';
    this.color = color;



    if(this instanceof Note){
      Workspace.allNotes.push(this);
    }

    if(this instanceof Note === false){
      Workspace.allWorkspace.push(this);
    }

  }
  
  static getWorkspace(selectedLabel){
    return Workspace.allNotes.filter((note) => note.label === selectedLabel);
    //Workspace.getWorkspace(label)
    // []View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
  }

  static getTimeline(dateInput){
    return Workspace.allNotes.filter((note)=>isEqual(note.dueDate, new Date(dateInput)));
    // /Workspace.getTimeline(date)
  }


 //sort notes in ascending date
 //get today/tomorrow



  deleteNote(){
    const referenceNote = Workspace.allNotes.indexOf(this) //select note
    Workspace.allNotes.splice(referenceNote, 1);
    console.log(Workspace.allNotes)
    //noteVar.deleteNote()
    //Workspace.allNotes
  }
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