import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

/*
Challenge
1. Add a new property called currentDiceScore to each character's 
 data and initialise it to an empty array.
2. Rewrite the getDiceHtml method so it updates currentDiceScore 
 with the values returned by getDiceRollArray.
*/

/*
Challenge
1. In the getDiceHtml method, map over currentDiceScore 
to return this string of html template for each element:
<div class="dice">${num}</div>`. Save this new array
to diceArray.
2. Modify the attack() function in index.js to get our 
app working again.
*/

function Character(data){


    Object.assign(this, data)

    this.getDiceHtml = function(diceCount){

        this.currentDiceScore = getDiceRollArray(this.diceCount)

        this.diceArray = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`).join("")
    }

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    

    this.getCharacterHtml = function(){
        const {name, avatar, health, diceCount} = this;
 


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