import { Workspace, defaultWorkspace} from "./createWorkspace";

export class Note extends defaultWorkspace{
  
  constructor(title, description, dueDate, priority, checked){
  super();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
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