import { Note, testNote} from './createNote';
import { Workspace} from './createWorkspace';
import { isToday, isThisWeek, isExists } from 'date-fns';
import Icon from './img/plus-box.svg'

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
                clearTab('div#content > *')
                insertNoteTitle(Workspace.allNotes, 'div#nav-content', '#content > *')
                break;
            case 'daily':
                clearTab('div#content > *')
                insertNoteTitle(Workspace.checkDay(isToday), 'div#nav-content', '#content > *')
                break;
            case 'weekly':
                clearTab('div#content > *')
                insertNoteTitle(Workspace.checkWeek(isThisWeek), 'div#nav-content', '#content > *') 
                break;
            //add new case for workspaces
            
          }
          
        }) 
    });
}

  
function insertNoteTitle(array, node, container){
  const selector = document.querySelector(node);
  
  array.forEach((item) => {
    
    const button = document.createElement('button')
    button.textContent = item.title
    button.setAttribute('data-selector', item.title)
    button.classList.add('note-btn')
    selector.appendChild(button)
    
    button.addEventListener('click', (e) =>{
      clearTab(container)
      getNoteInfo(e.target)
    
    })
      
  });
  
  return array
  
}


function getNoteInfo(pulledStr){ 
  
  const string = pulledStr.getAttribute('data-selector')
  const foundObj = Workspace.allNotes.find((item) => item.title === string)
  drawNoteUI(foundObj)
}

function insertWSTitle(array,node, container){
  const selector = document.querySelector(node);
  
  let uniqueArray = array.filter(function({label}) {
    return !this.has(label) && this.add(label);
  }, new Set(array))
  

  uniqueArray.forEach((item) => {
    const button = document.createElement('button')
    button.textContent = item.label
    button.setAttribute('data-selector', item.label)
    button.classList.add('ws-btn')
    selector.appendChild(button)
    
    button.addEventListener('click', (e) =>{
      clearTab('#nav-content > *')
      clearTab(container)
      getWSInfo(e.target)
     
    })
  });

  //use uniqueArray to call the menu
//////////////////////////////////////////////////
  
  
  return uniqueArray
}


function getWSInfo(pulledStr){ 
  
  const string = pulledStr.getAttribute('data-selector')
  let array = Workspace.getWorkspace(string)
  //CLEAR HERE
  insertNoteTitle(array, 'div#nav-content', '#content > *')
 //Workspace.getWorkspace(item.label)
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
  checkbox.addEventListener('click', () =>  {
    node.checkedBool()
    clearTab('#content > *')
    drawNoteUI(node)
  })

  const main = document.createElement('div')
  main.classList.add('note-main')

  const dueDate = document.createElement('div')
  

  const workspace = document.createElement('div')
  workspace.classList.add('workspace')

  //probably needs to be changed into a radio button
  const priority = document.createElement('div')
  priority.style.backgroundColor = priorityColor(node.priority) 

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete')
  deleteBtn.addEventListener('click', () => {
    node.deleteNote()
    clearTab('div#nav-content > *')
    clearTab('div#content > *')
    alert(`${node.title} deleted!`)
  })
  
  content.append(container)
  container.append(title, workspace, main, dueDate, priority, deleteBtn)
    //radio for the prio
    
  title.textContent = node.title
  main.textContent = node.description
  dueDate.textContent = node.dueDate
  priority.textContent = 'Priority'
  deleteBtn.textContent = 'delete'
  workspace.textContent = node.label

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


  function priorityColor(value){
    switch(value) {
      case 0:
        return 'red';
      case 1:
        return 'yellow';
      case 2:
        return 'green';
    }
  }

  function clearTab(selector){
    
    let contentChildren = document.querySelectorAll(selector)
    
    contentChildren.forEach(node => node.remove())
  }

  //FORM RELATED LOGIC

  formLoader()
  function formLoader(){
    const plusIcon = new Image()
    plusIcon.src = Icon
    const elementAddNote = document.querySelector('div.username')
    plusIcon.classList.add('icon')
    plusIcon.setAttribute('title','Add a new note')
    elementAddNote.appendChild(plusIcon)

    const plusIconWs = new Image()
    plusIconWs.src = Icon
    const elementAddWs = document.querySelector('div.ws-title')
    plusIconWs.classList.add('icon')
    plusIconWs.setAttribute('title','Add a new Workspace')
    elementAddWs.appendChild(plusIconWs)

    plusIcon.addEventListener("click", () => toggleForm('.form-container')); 
    plusIconWs.addEventListener("click", () => toggleForm('.ws-form-container'));


    addSubmitListener('userNote', Workspace.allNotes)
    addWSListener('userWorkspace', Workspace.allWorkspace)
    function addSubmitListener(node, array){
      document.getElementById(node).addEventListener("submit", (e) => {
        getUserInput(e)
        let currentForm = document.getElementById(node)
        currentForm.reset()
        clearTab('div#nav-content > *') 
        insertNoteTitle(array, 'div#nav-content','#content > *')
       
        //PAGE KEEPS RELOADING
        //////LEARNINGS: Fixed by targetting the fucking form rather than the button//////
      }, true)
    }

    function addWSListener(node, array){
      document.getElementById(node).addEventListener("submit", (e) => {
        getWSInput(e)
        let currentForm = document.getElementById(node)
        currentForm.reset()
        clearTab('#user-ws-content > *')
        insertWSTitle(array, '#user-ws-content','#content > *') 
      }, true)
    }

    function toggleForm(node) {
        let form = document.querySelector(node)
        
        const formVisibility = window.getComputedStyle(form).visibility; 
    
          if (formVisibility === 'hidden') { 
            form.style.visibility = 'visible'; 
            form.style.height = 'auto'
        } else { 
            form.style.visibility = 'hidden'; 
            form.style.height = 0
        } 
      } 


      function getUserInput(event){ 
        event.preventDefault()
        let titleValue= document.getElementById('title').value;
        let descriptionValue= document.getElementById('description').value;
        let workspaceValue= document.getElementById('workspace').value;
        let dateValue= document.getElementById('date').value;
        let priorityValue= +(document.getElementById('priority').value);

        callNote(titleValue, descriptionValue, workspaceValue, dateValue, priorityValue)

        // event.preventDefault()
        //add to DOM
        
      }

      function getWSInput (event){
        event.preventDefault()
        let workspaceValue = document.getElementById('add-ws').value

        callWS(workspaceValue)
      }

      function callNote(title, description, workspace, date = Date(), priority, currentNote){
        currentNote = new Note(title, description)
        currentNote.label = workspace
        currentNote.userDueDate = date
        currentNote.priority=priority

        return currentNote  
      }

      function callWS(title, currentWS){
        currentWS = new Workspace(title)
        return currentWS
      }

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
    const helloNote3 = new Note('hello3', 'description', 'helloLabel3')
    helloNote2.priority = 0
    helloNote2.userDueDate = new Date()
    helloNote3.userDueDate = new Date()
    

    function LOGConsole(){
      console.log('notes')
      console.table(Workspace.allNotes)
      console.log('workspaces')
      console.table(Workspace.allWorkspace)
      console.log(Workspace.getWorkspace("helloLabel"))
      
      Workspace.allNotes[0].userDueDate = ('2024-10-11')
    } 
    
    return button;
  }

}

    
/*
[X]load in homepage/startpoint loadHome()
    [X]workspace ui loadMenu()
      [X]daily/weekly/all
      []user created workspaces
    []List of notes in selected workspace loadWorkspace()
    [X]display single Note info loadNotes()

[X]clear element clearElement()
[X]insert element insertELement()
[X]refresh? refreshAll() //maybe refactor but might be unneccessarry 
    
[]View all workspaces.
[]View all todos in each workspace (probably just the title and duedate… perhaps changing color indicator for different priorities).
[]Expand a single todo to edit its details.
[X]Delete a todo. **
[X]check functionality 
*/


