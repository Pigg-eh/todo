import { Note, testNote} from './createNote';
import { Workspace} from './createWorkspace';
import { isToday } from 'date-fns';

export class UserInterface{


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
        const ws1 = new Workspace('testing')
        const ws2 = new Workspace('testing2')
    
        function LOGConsole(){
          console.table(Workspace.allNotes)
          console.table(Workspace.allWorkspace)

          console.log('date check')
          // console.log(Workspace.allNotes[4].userDueDate)
          console.log(Workspace.getTimeline('1992-3-3'))

        } 
        
        return button;
      }

    //   document.body.appendChild(testMakeNote());
    //   document.body.appendChild(testLOGGER());
      
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
    
*/


