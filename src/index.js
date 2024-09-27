import './style.css';
import {UserInterface, TestToolkit} from './ui'
import Icon from './img/plus-box.svg'











  const plusIcon = new Image()
  plusIcon.src = Icon
  const element = document.querySelector('div.title')
  plusIcon.classList.add('icon')
  element.appendChild(plusIcon)


document.body.appendChild(TestToolkit.testMakeNote());
document.body.appendChild(TestToolkit.testLOGGER());

/*
[X]View all projects.
[X]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[X]Delete a todo. **

note: 
**refactor or delete components later**
**refactor how workspaces are made in logic
*/