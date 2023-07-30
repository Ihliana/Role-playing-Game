
import characterData from "./data.js"
import Character from './Character.js'

/*
CHALLENGE
1. Inside attack(), check if either character is dead.
If they are, call a new function called endGame().
2. Set up the new function endGame() and have it 
log out "the game is over".
*/

function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()

    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)

    if(wizard.dead || orc.dead){
        endGame()
    } 

    render()
}


function endGame(){
    let endMessage = wizard.health === 0 && orc.health === 0 ? "No victors - all creatures are dead" 
                    : wizard.health > 0 ? "The Wizard Wins" 
                    : "The Orc is Victorious"


}


const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)


function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
    
}

document.getElementById("attack-button").addEventListener('click', attack)


render()


