import './style.css';

import {UserInterface} from './ui'



  document.body.appendChild(UserInterface.testMakeNote());
  document.body.appendChild(UserInterface.testLOGGER());


  // function test() {

  //   const button = document.createElement('button');
    
  //   button.textContent = ''
  //   button.addEventListener("click", check);

  

  //   function check(){
  //     Workspace.allNotes[2].userDueDate = ('1908-3-14')
  //   } 
    
  //   return button;
  // }
 // document.body.appendChild(test());




  
 

 /*
-




[X]View all projects.
[X]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[X]Delete a todo. **

note: 
**refactor or delete components later**
**refactor how workspaces are made in logic
  */