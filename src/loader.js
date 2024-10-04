import Icon from './img/plus-box.svg'
import { testNote } from './createNote'

export function homeLoader(){
    const plusIcon = new Image()
    plusIcon.src = Icon
    const element = document.querySelector('div.ws-title')
    plusIcon.classList.add('icon')
    element.appendChild(plusIcon)

    plusIcon.addEventListener("click", testNote);

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
  
}
