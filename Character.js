import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

/*
CHALLENGE
1. Add a line of code inside the body of the if statement
in the takeDamage method which will give the character a 
new boolean "dead" when health reaches zero. It can be initialised with "true".
2. For now, log out that boolean when the character's 
health reaches zero.
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
            this.dead = true
         
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