import { Workspace} from "./createWorkspace";

export class Note extends Workspace{
  
  constructor(title, description, dueDate){
    super();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = 2;
    this.checked = false;
  }


  checkedBool =()=> this.checked = !this.checked
  //flip the checked boolean

}



export const testNote =()=>{
    

  const noteForm = new Note(
    prompt('Note Title'), 
    prompt('description'), 
    prompt('date')
  )

  noteForm.label = prompt('Label') || 'default'
  //a button can be added to add to the Label itself
  //use a form for the note things perhaps


  return noteForm
}

// []Expand a single todo to see/edit its details.
 // []Delete a todo.
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