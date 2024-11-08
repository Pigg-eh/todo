import { Note } from "./createNote";
import { compareAsc, isToday, isThisWeek} from "date-fns";

export class Workspace{
  static allNotes = []
  static allWorkspace = []
  static distinctWS = []
  
  constructor(label, color= 'black'){
    this.label = label || 'Default';
    this.color = color;


    if(this instanceof Note){
      Workspace.allNotes.push(this);
    }

 
    if(this instanceof Workspace){
      Workspace.allWorkspace.push(this);
    }
  }


  static getWorkspace(selectedLabel){
    return Workspace.allNotes.filter((note) => note.label === selectedLabel);
    //Workspace.getWorkspace(label)
  }

  static checkDay(dateInput){
    return Workspace.allNotes.filter((note)=>isToday(note.dueDate, dateInput));
    // Workspace.getTimeline('datestring')
  }

  static checkWeek(dateInput){
    return Workspace.allNotes.filter((note)=>isThisWeek(note.dueDate, dateInput));
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


