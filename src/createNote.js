import { Workspace} from "./createWorkspace";


export class Note extends Workspace{
  
  constructor(title, description,label  ){
    super(label);
    this.title = title;
    this.description = description;
    this.dateCreated = Date();
    this.dueDate= ''
    this.priority = 2;
    this.checked = false;
  }
  get userDueDate(){
    if (this.dueDate != ''){
      return this.dueDate
    }
  }

  set userDueDate(value){
    this.dueDate = new Date(value)
  }
  //Workspace.allNotes[0].userDueDate = ('2024-10-01')

  checkedBool =()=> this.checked = !this.checked



}


export const testNote =()=>{
//this will be deleted and potentially moved
//new window prompt thing that asks for user input

  const noteForm = new Note(
    prompt('Note Title'), 
    prompt('description'), 
  )
  noteForm.label = prompt('Label')  || 'default'
  //a button can be added to add to the Label itself
  //use a form for the note things perhaps

  noteForm.userDueDate = ('2024-10-1') 

  return noteForm
}
