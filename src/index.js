import './style.css';
import { Note } from './createNote';
import { Workspace, defaultWorkspace} from './createWorkspace';
import { makeNote } from './newNote';

const noteArray = []
const workspaceArray = [defaultWorkspace]

function componentMAKENOTE() {
  

    const button = document.createElement('button');
 
    button.textContent = `New Note`
    button.classList.add('hello');

    button.addEventListener("click", doThing);

    function doThing(){
      noteArray.push(makeNote())

    }
    

    // ${i}
    return button;
  }

  function componentLOGGER() {

    const button = document.createElement('button');
    
    button.textContent = 'LOG'
    button.addEventListener("click", LOGConsole);

    function LOGConsole(){
      console.log(workspaceArray)
      console.log(noteArray)
    } 
  

    return button;
  }



  document.body.appendChild(componentMAKENOTE());
  document.body.appendChild(componentLOGGER());

 /*
-



Users should be able to create new projects and choose which project their todos go into.

if a new label is made a new workspace should be made
array should probably be in workspace


[]]View all projects.
[]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo.

note: 
**refactor or delete components later**

  */