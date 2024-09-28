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
  }

  static getTimeline(dateInput){
    return Workspace.allNotes.filter((note)=>isEqual(note.dueDate, new Date(dateInput)));
    // Workspace.getTimeline('datestring')
  }



  deleteNote(){
    const referenceNote = Workspace.allNotes.indexOf(this) //select note
    Workspace.allNotes.splice(referenceNote, 1);
    console.log(Workspace.allNotes)
    //noteVar.deleteNote()
    //Workspace.allNotes
  }
}


