import { Workspace} from "./createWorkspace";


export class Note extends Workspace{
  
  constructor(title, description,label, dueDate,priority,checked  ){
    super(label);
    this.title = title;
    this.description = description;
    this.dueDate= dueDate
    this.priority = priority;
    this.checked = checked;
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

  checkedBool = ()=> {
    this.checked = !this.checked
    localStorage.clear()
    Workspace.setLocal()
  }



}

