import Icon from './img/plus-box.svg'
import { testNote } from './createNote'

export function homeLoader(){
    const plusIcon = new Image()
    plusIcon.src = Icon
    const elementAddNote = document.querySelector('div.username')
    plusIcon.classList.add('icon')
    elementAddNote.appendChild(plusIcon)

    const plusIconWs = new Image()
    plusIconWs.src = Icon
    const elementAddWs = document.querySelector('div.ws-title')
    plusIconWs.classList.add('icon')
    elementAddWs.appendChild(plusIconWs)

    plusIcon.addEventListener("click", toggleForm   ); 
    plusIconWs.addEventListener("click", testNote);

    //User WorkSpaces
    const userWsSelector = document.querySelector('user-ws-content')
    //add workspace buttons
    //display button labels in middle nav
    //Workspace.getWorkspace(label)

    function pullString(node){

    }

    function navLoader(){
        
    }
  
    function WorkspaceInfoLoader(){
  
    }
  
    function NoteInfoLoader(){
  
    }
  

    function toggleForm() {
        let form = document.querySelector('.form-container')
        
        const formVisibility = window.getComputedStyle(form).visibility; 
    
          if (formVisibility === 'hidden') { 
            form.style.visibility = 'visible'; 
            form.style.height = 'auto'
        } else { 
            form.style.visibility = 'hidden'; 
            form.style.height = 0
        } 
      } 
    
    //   document.querySelector("#userNote").addEventListener("submit", () => )

    // function getUserInput(event){ 
    //     let titleValue= document.getElementById('title').value;
    //     let authorValue= document.getElementById('author').value;
    //     let pagesValue= document.getElementById('pages').value;
    //     let statusValue= document.getElementById('status').value;
    //     event.preventDefault()
    
    //     let rowIndex = myLibrary.length
        
    
    //     addBookToLibrary(titleValue, authorValue, pagesValue, statusValue)
    //     insertValues(myLibrary[rowIndex], rowIndex)
        
    //   }
}
