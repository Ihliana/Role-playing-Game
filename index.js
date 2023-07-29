
import characterData from "./data.js"
import Character from './Character.js'

/*
CHALLENGE:
1 Set up a function called attack()
2 Wire up the attack button so when pressed, the 
function logs out 'attack button working!'
3 Do this without declaring any new variables
**hint.md for help!!**
*/


/*
CHALLENGE
1. Make the attack button trigger a dice roll for both
wizard and orc (which method on the constructor does that??)
2. Make sure the new dice score shows in the app
**hint.md for help!!**
*/

function attack(){
    render()
}


const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)


function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
    
}

document.getElementById("attack-button").addEventListener('click', attack)


render()


