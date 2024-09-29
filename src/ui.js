import { Note, testNote} from './createNote';
import { Workspace} from './createWorkspace';
import {homeLoader} from './loader.js'
import { isToday, isThisWeek } from 'date-fns';
// import Icon from './img/plus.svg'

homeLoader()
export function loadUserInterface(){

  addListeners()
  function addListeners(){
     
    function clearTab(){
        let contentChildren = document.querySelectorAll('div#nav-content > *')
        
        contentChildren.forEach((node) => {
            node.remove()
            
        })
    }

    let buttons = document.querySelectorAll('nav button')
    buttons.forEach(button => {
        
        button.addEventListener('click', (e) =>{
          clearTab()

            let pulledStr = e.target.getAttribute('data-selector')
            
            switch(pulledStr) {
                case 'all-notes':
                    insertNoteTitle(Workspace.allNotes)
                    // console.log(Workspace.allNotes)
                    break;
                case 'daily':
                    insertNoteTitle(Workspace.checkDay(isToday))
                    break;
                case 'weekly':
                    insertNoteTitle(Workspace.checkWeek(isThisWeek))
                    break;
            }
           
        }) 
    });
}
  
function insertNoteTitle(array){
  const selector = document.querySelector('div#nav-content');
  
  array.forEach((item) => {
    const button = document.createElement('button')
    button.textContent = item.title
    button.classList.add(item.title)
    selector.appendChild(button)
  });
  return array
  
}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class TestToolkit{
  static testMakeNote() {
  
    const button = document.createElement('button');
 
    button.textContent = `New Note`
    button.classList.add('hello');
    button.addEventListener("click", testNote);
    

    return button;
  }

static testLOGGER() {

    const button = document.createElement('button');
    
    button.textContent = 'LOG'
    button.addEventListener("click", LOGConsole);

    const helloNote = new Note('hello', 'description', 'helloLabel')
    const helloNote2 = new Note('hello2', 'description',  'helloLabel')
    const helloNote3 = new Note('hello3', 'description', 'helloLabel2')
    const helloNote4 = new Note('hello4', 'deleted one is I', 'helloLabel2')
    helloNote2.userDueDate = new Date()
    helloNote3.userDueDate = new Date()
    const ws1 = new Workspace('testing')
    const ws2 = new Workspace('testing2')

    function LOGConsole(){
      console.table(Workspace.allNotes)
      console.table(Workspace.allWorkspace)

      console.log('date check')
      // console.log(Workspace.allNotes[4].userDueDate)

    } 
    
    return button;
  }

}

    
    // []workspace ui loadMenu()
    //     -daily/weekly/all
    //     -user created workspaces
    
    
/*
[]load in homepage/startpoint loadHome()
    []workspace ui loadMenu()
        -daily/weekly/all
        -user created workspaces

    []List of notes in selected workspace loadWorkspace()

    []display single Note info loadNotes()

[]clear element clearElement()
[]insert element insertELement()
[]refresh? refreshAll()
[]
    
[]View all projects.
[]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo. **
*/


