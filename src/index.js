import './style.css';
import { Note, testNote} from './createNote';
import { Workspace} from './createWorkspace';
import { setDate } from 'date-fns';


function componentMAKENOTE() {
  
    const button = document.createElement('button');
 
    button.textContent = `New Note`
    button.classList.add('hello');
    button.addEventListener("click", testNote);
    

    return button;
  }

  function componentLOGGER() {

    const button = document.createElement('button');
    
    button.textContent = 'LOG'
    button.addEventListener("click", LOGConsole);

    const helloNote = new Note('hello', 'description', 'helloLabel')
    const helloNote2 = new Note('hello2', 'description',  'helloLabel')
    const helloNote3 = new Note('hello3', 'description', 'helloLabel2')
    const helloNote4 = new Note('hello4', 'deleted one is I', 'helloLabel2')
    const ws1 = new Workspace('testing')

    function LOGConsole(){
      console.table(Workspace.allNotes)
      console.log(Workspace.allNotes[3].dueDate)
    } 
    
    return button;
  }

  function test() {

    const button = document.createElement('button');
    
    button.textContent = 'date set'
    button.addEventListener("click", check);

  

    function check(){
      Workspace.allNotes[3].userDueDate = ('1908-03-14')
    } 
    
    return button;
  }




  document.body.appendChild(componentMAKENOTE());
  document.body.appendChild(componentLOGGER());
  document.body.appendChild(test());

 /*
-




#if a new label is made a new workspace should be made
array should probably be in workspace

[X]View all projects.
[X]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[X]Delete a todo. **

note: 
**refactor or delete components later**
**refactor how workspaces are made in logic
  */