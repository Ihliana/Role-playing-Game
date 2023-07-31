
import characterData from "./data.js"
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"];

/*
Challenge
1. Create a function called getNewMonster.
2. Write logic inside the function that takes the first 
monster from monstersArray and extracts that monster's 
data from characterData.
3. Save that data to a new const called nextMonsterData.
**hint.md for help!!**
*/

/*
Challenge
1. Make it so getNewMonster returns a new instance of Character. Think
what argument you should be passing. If there are no more monsters in the 
array, getNewMonster should return an empty object {}.
2. Down near the bottom of the file, set a new variable "monster" equal 
to our new function getNewMonster.
3. Delete any code we no longer need.
- The app will still be broken - don't worry for now!
**hint.md for help!!**
*/


/*
Challenge
1. See if you can get the app to work with just 
one monster again.
**hint.md for help!!**
*/


/*
Challenge
1. Change the attack function so that when a monster dies, 
the next monster replaces it. If there are no more monsters,
call endGame(). 
2. Make sure that endGame() still gets called if the wizard
is killed.
*/

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}



function attack(){
    wizard.getDiceHtml()
    monster.getDiceHtml()

    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()

    /*change the code below this line*/
    if(wizard.dead){
        endGame()
    }
     else if(monster.dead){
        if(monstersArray.length > 0){
            monster = getNewMonster()
            render()
        } else {
            endGame()
        }
     }


}


function endGame(){
    const endMessage = wizard.health === 0 && monster.health === 0 ? "No victors - all creatures are dead" 
                    : wizard.health > 0 ? "The Wizard Wins" 
                    : "The Orc is Victorious"

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️" 
    document.body.innerHTML = ` 
        <div class="end-game">
             <h2>Game Over</h2> 
             <h3>${endMessage}</h3>
             <p class="end-emoji">${endEmoji}</p>
        </div>`


}


document.getElementById("attack-button").addEventListener('click', attack)

function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
    
}


const wizard = new Character(characterData.hero)

let monster = getNewMonster()


render()


