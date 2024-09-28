import Icon from './img/plus-box.svg'
import { testNote } from './createNote'

export function homeLoader(){
    const plusIcon = new Image()
    plusIcon.src = Icon
    const element = document.querySelector('div.ws-title')
    plusIcon.classList.add('icon')
    element.appendChild(plusIcon)

    plusIcon.addEventListener("click", testNote);



    function navLoader(){
    
    }
  
    function WorkspaceInfoLoader(){
  
    }
  
    function NoteInfoLoader(){
  
    }
  
}
