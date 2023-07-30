
import characterData from "./data.js"
import Character from './Character.js'

/*CHALLENGE
1. Think what data we need to pass to our new
takeDamage method.
2. Add that data as an argument each time we call
takeDamage below.
3. In the takeDamage method, take in the data as a 
parameter called 'attackScoreArray' and log it out.
**hint.md for help!** 
*/

function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()

    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
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


