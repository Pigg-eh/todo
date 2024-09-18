import { Workspace} from "./createWorkspace";
import { format, compareAsc, setDate, startOfTomorrow } from "date-fns";


export class Note extends Workspace{
  
  constructor(title, description,label  ){
    super(label);
    this.title = title;
    this.description = description;
    this.dateCreated = Date();
    this.dueDate= ''
    this.priority = 2;
    // this.dueDate = startOfTomorrow
    this.checked = false;
  }
  // get userDueDate(){
  //   return setDate || startOfTomorrow
  // }

  set userDueDate(value){
    this.dueDate = new Date(value)
  }

  checkedBool =()=> this.checked = !this.checked
  //flip the checked boolean is what i think this does


}



export const testNote =()=>{
//this will be deleted and potentially moved

  const noteForm = new Note(
    prompt('Note Title'), 
    prompt('description'), 
  )
  noteForm.label = prompt('Label') || 'default'
  //a button can be added to add to the Label itself
  //use a form for the note things perhaps

  noteForm.dueDate = '1992-3-3'


  return noteForm
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