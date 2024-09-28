import './style.css';
import {loadUserInterface, TestToolkit} from './ui'
import {homeLoader} from './loader.js'

// homeLoader()
loadUserInterface()






document.body.appendChild(TestToolkit.testMakeNote());
document.body.appendChild(TestToolkit.testLOGGER());

/*


note: 
**refactor or delete components later**
**make sure workspaces run the filter function to renew them after every change
*/