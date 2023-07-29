
import characterData from "./data.js"
import getDiceRollArray from './utils.js'

import Character from './Character.js'

/*
Challenge
1. Create a file called 'utils.js'.
2. Cut and paste the getDiceRollArray() function into it.
3. Decide if this should be a default or named export. Think
   about this!!
4. Import back it into index.js
*/

/*
Challenge
1. Create a file called 'Character.js'
2. Cut and paste the constructor function into it.
3. Decide if this should be a default or named export. Think
   about this!!
4. Import it into index.js
5. You will hit a problem! Solve the problem!
*/






const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)


function render(){
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()

}

render()


