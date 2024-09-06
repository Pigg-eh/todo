import './style.css';
import { Note, testNote} from './createNote';
import { Workspace} from './createWorkspace';

const workspaceArray = () => [Workspace]

function componentMAKENOTE() {
  

    const button = document.createElement('button');
 
    button.textContent = `New Note`
    button.classList.add('hello');

    button.addEventListener("click", doThing);

    function doThing(){
      testNote()
    }
    

    return button;
  }

  function componentLOGGER() {

    const button = document.createElement('button');
    
    button.textContent = 'LOG'
    button.addEventListener("click", LOGConsole);

    const helloNote = new Note('hello', 'helloLabel', 9/1)
    const helloNote2 = new Note('hello2', 'helloLabel', 9/12)
    

    function LOGConsole(){
      console.log(workspaceArray())
      console.log(Workspace.allNotes)
    } 
  

    return button;
  }




  document.body.appendChild(componentMAKENOTE());
  document.body.appendChild(componentLOGGER());

 /*
-




#if a new label is made a new workspace should be made
array should probably be in workspace

[X]View all projects.
[]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo.

note: 
**refactor or delete components later**

  */