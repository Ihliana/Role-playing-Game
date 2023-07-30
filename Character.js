import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'


/*CHALLENGE
1. Ceate a new method inside Character called "takeDamage".
2. For now, have the method log out the name of the damaged character
and phrase "is damaged".
3. In index.js, find the attack() function and call takeDamage
for each character inside that function. 
*/

/*
CHALLENGE
1. In the takeDamage method, use what you have just learned
to reduce attackScoreArray to a single number.
2. Store that number in a const called totalAttackScore
3. Decrement the health score by totalAttackScore
*/

/*
CHALLENGE
1. Add code to takeDamage so that when he character reaches 
zero heath, they stay at zero health and don't drop below 
zero.
** hint.md for help!!**
*/

function Character(data){


    Object.assign(this, data)

    this.getDiceHtml = function(diceCount){

        this.currentDiceScore = getDiceRollArray(this.diceCount)

        this.diceArray = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`).join("")
    }


    this.diceArray = getDicePlaceholderHtml(this.diceCount)



    this.takeDamage = function(currentDiceScore){
        const totalAttackScore = currentDiceScore.reduce((acc, nmb) => acc + nmb, 0)
        this.health -= totalAttackScore
        
        if (this.health <= 0){
            this.health = 0
        }
    }
    

    this.getCharacterHtml = function(){
        const {name, avatar, health} = this;

        return  `
                    <div class="character-card">
                        <h4 class="name"> ${name} </h4>
                        <img class="avatar" src=${avatar} />
                        <p class="health">health: <b> ${health} </b></p>
                        <div class="dice-container">
                            ${this.diceArray} 
                        </div>
    
                    </div>  
                `
    }
    
}


export default Character