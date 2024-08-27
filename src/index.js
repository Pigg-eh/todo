  import './style.css';
import { Note } from './createNote';
import { Workspace, defaultWorkspace} from './createWorkspace';
import { helloNote } from './helloConsole';
import { makeNote } from './newNote';

const testNote = helloNote()
export const noteArray = []
const workspaceArray = [defaultWorkspace]

function component() {
  

    const button = document.createElement('button');
 
    button.textContent = `New Note`
    button.classList.add('hello');

    noteArray.push(makeNote)
    button.addEventListener("click", doThing);

    function doThing(){
      workspaceArray.push(makeNote())

    }
    

    // ${i}
    return button;
  }

  function LOGGER() {
  

    const button = document.createElement('button');
    
    button.textContent = 'LOG'
    button.addEventListener("click", LOGConsole);

    function LOGConsole(){
      console.log(workspaceArray)
      console.log(noteArray)
    } 
  

    return button;
  }



  document.body.appendChild(component());
  document.body.appendChild(LOGGER());


 /*
-

**refactor or delete components later**

(i.e. creating new todos, 
setting todos as complete, 
changing todo priority etc.

[]]View all projects.
[]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo.

note: need to make breakpoints and refresh (for now) 
  */