import { Note, testNote} from './createNote';
import { Workspace} from './createWorkspace';
import {homeLoader} from './loader.js'
import { isToday, isThisWeek } from 'date-fns';

homeLoader()
export function loadUserInterface(){

  addNavListeners()
  function addNavListeners(){


    let buttons = document.querySelectorAll('nav button')
    buttons.forEach(button => {
        
      button.addEventListener('click', (e) =>{
        clearTab('div#nav-content > *')

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
    // button.classList.add(item.title)
    button.setAttribute('data-selector', item.title)
    button.classList.add('note-btn')
    selector.appendChild(button)
    
    button.addEventListener('click', (e) =>{
      clearTab('#content > *')
      getNoteInfo(e.target)
    
    })
      
    //may need to remove listener
  });
  
  return array
  
}


function getNoteInfo(pulledStr){ 
  
  const string = pulledStr.getAttribute('data-selector')
  const foundObj = Workspace.allNotes.find((item) => item.title === string)
  //delete button function probably starts here
  drawNoteUI(foundObj)
}

function drawNoteUI(node){
  const content = document.querySelector('.info>#content')
  const container= document.createElement('div')
  container.classList.add('note-container')
  const title = document.createElement('div')
  title.classList.add('note-title')
  const checkbox = document.createElement('input');
  drawCheckbox()
  checkbox.defaultChecked = node.checked
  checkbox.addEventListener('click',node.checkedBool)

  const main = document.createElement('div')
  main.classList.add('note-main')
  const dueDate = document.createElement('div')
  dueDate.classList.add('dueDate')
  const priority = document.createElement('div')
  priority.style.backgroundColor = priorityColor(node.priority)
  //probably could have made an array lol

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete')
  deleteBtn.addEventListener('click', () => {
    node.deleteNote()
    clearTab('div#nav-content > *')
    clearTab('#content > *')
    alert(`${node.title} deleted!`)
  })
  
  content.append(container)
  container.append(title, main, dueDate, priority, deleteBtn)
    //add more divs to accomodate other bits of the note
    //checkbox for the prio
    
  title.textContent = node.title
  main.textContent = node.description
  dueDate.textContent = node.dueDate
  priority.textContent = 'prio'
  deleteBtn.textContent = 'delete'

  function drawCheckbox(){
    document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = node.checked;
    checkbox.id = "id";
  
    let label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(checkedState(node.checked)));
    
    container.appendChild(checkbox);
    container.appendChild(label);
  }
}

function checkedState(state) {
      if (!state){
        return 'not finished'
      }else {
        return 'finshed'
      }
}


function priorityColor(priority){
  switch(priority) {
    case 0:
      return  'red';
      break;
    case 1:
      return 'yellow';
      break;
    case 2:
      return 'green';
  }
}

function clearTab(selector){
  let contentChildren = document.querySelectorAll(selector)
  
  contentChildren.forEach(node => node.remove())
}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class TestToolkit{


static testLOGGER() {

    const button = document.createElement('button');
    
    button.textContent = 'LOG'
    button.addEventListener("click", LOGConsole);

    const helloNote = new Note('hello', 'description', 'helloLabel')
    const helloNote2 = new Note('hello2', 'description',  'helloLabel')
    const helloNote3 = new Note('hello3', 'description', 'helloLabel2')
    const helloNote4 = new Note('hello4', 'deleted one is I', 'helloLabel2')
    helloNote2.priority = 1
    helloNote2.userDueDate = new Date()
    helloNote3.userDueDate = new Date()
    const ws1 = new Workspace('testing')
    const ws2 = new Workspace('testing2')

    function LOGConsole(){
      console.table(Workspace.allNotes)
      console.table(Workspace.allWorkspace)

      console.log('date check')
      // console.log(Workspace.allNotes[4].userDueDate)
      
      Workspace.allNotes[0].userDueDate = ('2024-10-01')
    } 
    
    return button;
  }

}

    
/*
[]load in homepage/startpoint loadHome()
    []workspace ui loadMenu()
      [X]daily/weekly/all
      []user created workspaces
    []List of notes in selected workspace loadWorkspace()
    []display single Note info loadNotes()

[X]clear element clearElement()
[X]insert element insertELement()
[]refresh? refreshAll()
[]
    
[]View all projects.
[]View all todos in each project (probably just the title and duedate… perhaps changing color indicator for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo. **
[]check functionality 
*/


