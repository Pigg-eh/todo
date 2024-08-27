  import './style.css';
import { Note } from './createNote';
import { Workspace, defaultWorkspace} from './createWorkspace';
import { helloNote } from './helloConsole';
import { makeNote } from './newNote';

const testNote = helloNote()
const noteArray = []
const workspaceArray = [defaultWorkspace]

function component() {
  

    const button = document.createElement('button');
 
    button.textContent = `New Note`
    button.classList.add('hello');

    button.onclick= noteArray.push('e')
    

    // ${i}
    return button;
  }

  function component2() {
  

    const button = document.createElement('div');
 
    button.textContent = noteArray



    // ${i}
    return button;
  }
 
  document.body.appendChild(component());
  
  console.log(testNote)


 /*
-

 object{
  title
  description
  dueDate 
  priority
  label 
  checked
} 

(i.e. creating new todos, 
setting todos as complete, 
changing todo priority etc.

[]]View all projects.
[]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo.

note: need to make breakpoints and refresh (for now) 
  */