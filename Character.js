import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

/*
CHALLENGE:
1. Create a new function called getDicePlaceholderHtml.
2. Make getDicePlaceholderHtml return a new array of diceCount 
length.
3. Each element of the array should include this
line of HTML: `<div class="placeholder-dice"></div>`
4. Remember to deal with the commas!
5. Think: Where should this function live??
*hint.md for help!!*
*/

/*
CHALLENGE
1. In the Character constructor, create a new 
property called "diceArray".
2. Set diceArray equal to whatever is returned
by the getDicePlaceholderHtml function (think 
what two things you need to do to make this work!!).
3. Instead of rendering diceHtml in the getCharacterHtml 
method, render diceArray.
4. Delete any unnecessary code.
*/


function Character(data){


    Object.assign(this, data)

    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map((num) => `<div class="dice">${num}</div>`).join("")
    }

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    

    this.getCharacterHtml = function(){
        const {name, avatar, health, diceCount} = this;
        const diceHtml = this.getDiceHtml(diceCount)


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