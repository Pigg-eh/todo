import { Note } from "./createNote";
import { isToday, isThisWeek, isExists, isTomorrow} from "date-fns";

export class Workspace{
  static allNotes = []
  static allWorkspace = []
  static distinctWS = []
  
  constructor(label, color= 'black'){
    this.label = label || 'Default';
    this.color = color;


    if(this instanceof Note){
      Workspace.allNotes.push(this);
      // Workspace.setLocal()
    }

 
    if(this instanceof Workspace){
      Workspace.allWorkspace.push(this);
      // Workspace.setLocal()
    }
  }

  static setLocal(){

   if(Workspace.allNotes != []){
      Workspace.allNotes.forEach(item => {
        localStorage.setItem(item.title, JSON.stringify(item));
      });
    }
  }


  static getLocal(){ //running as intended so far. problems in calling checkedbool and deleenote WIP
      
      if (localStorage.length===0){
        Workspace.testNotes()
      }else {

      const array = []
      
      for (let i = 0; i < localStorage.length; i++){
        array.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }

      Workspace.allNotes = []
      let i = 0
      array.forEach(item => {
        
        Workspace.allNotes[i] = (new Note(item.title, item.description, item.label, item.dueDate, item.priority, item.checked ))
        // Workspace.allNotes.push(item)
        i++
        //Problem was that the note didn't extend to the Workspace object, so the function didn't exist
      });
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
    localStorage.clear()
    Workspace.setLocal()
    console.log('runs at delete note')
  }

  static testNotes() {
      const helloNote = new Note('hello', 'This is a description', 'Default', new Date(), 2, true)
      const helloNote2 = new Note('hello2', 'This is another description',  'Default', new Date(), 2, true)
      const helloNote3 = new Note('hello3', 'This is the last default description', 'helloLabel3', new Date(isTomorrow()), 0, false)
  }
}


