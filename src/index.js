import './style.css';
import { Note, testNote} from './createNote';
import { Workspace} from './createWorkspace';


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

    const helloNote = new Note('hello', 'description', 9/1, 'helloLabel')
    const helloNote2 = new Note('hello2', 'description', 9/12, 'helloLabel')
    const helloNote3 = new Note('hello3', 'description', 9/132, 'helloLabel')
    const helloNote4 = new Note('hello4', 'description', 9/1342, 'helloLabel2')
    const ws1 = new Workspace('testing')

    function LOGConsole(){
        console.table(Workspace.allNotes)
        console.log(helloNote4.label)

    //     helloNote4.deleteNote()
    //     console.table(Workspace.allNotes)
    //     console.log()
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
[X]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo. **

note: 
**refactor or delete components later**
**refactor how workspaces are made in logic
  */