import './style.css';
import { Note } from './createNote';
import { hello } from './helloConsole';

function component() {
    const element = document.createElement('div');
 
    element.innerHTML = 'Hello there';
    element.classList.add('hello');

  
 
    return element;
  }
 
  document.body.appendChild(component());

  let test = hello()
  console.log(test.label)

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
[]]View all projects.
[]View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
[]Expand a single todo to see/edit its details.
[]Delete a todo.


  */