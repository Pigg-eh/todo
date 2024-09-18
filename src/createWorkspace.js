import { Note } from "./createNote";
import { format, compareAsc, isToday , isTomorrow, isYesterday, isThisWeek, } from "date-fns";

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
    // []View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
  }

  static getToday=()=>allNotes.filter((note)=>isToday(note.dueDate))
  static getTomorrow=()=>allNotes.filter((note)=>isTomorrow(note.dueDate))
  static getYesterday=()=>allNotes.filter((note)=>isYesterday(note.dueDate))
  static getWeek=()=>allNotes.filter((note)=>isThisWeek(note.dueDate))
  //all the same so maybe I can make it into one 
  //static getWeek=()=>allNotes.filter((note)=>clickedValue(note.dueDate))

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