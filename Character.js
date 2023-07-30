import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'


/*Challenge
1. Create a property called maxHealth INSIDE Character that 
stores the maximum health a character can have.
2. Create an arrow function called getPercentage OUTSIDE 
Character which takes two parameters, remainingHealth and 
maximumHealth. getPercentage should return the % of 
maximumHealth that is remaining.
3. To test, call getPercentage from within the takeDamage method
and log out the result. 
**hint.md for help!!**
*/




/*   
CHALLENGE
1. Set up a new method called getHealthBarHtml
2. Create a const called "percent" and set it equals to the 
returned value from our getPercentage function (think what 
arguments you want to pass in).
3. For now, just log out the value of the new const "percent". 
4. Down in the getCharacterHtml method, set up a const
called healthBar and set it equal to the returned value
of the getHealthBarHtml method.
*/


function Character(data){


    Object.assign(this, data)

    /*
    CHALLENGE
    1. In the getDiceHtml method, there is an anonymous function 
    being used as an inline callback function. Replace it with an 
    arrow function.
    2. Do the same for the anonymous function in the takeDamage 
    method.
    3. Try to end up with the least amount of code possible!
    */

    this.getDiceHtml = function(diceCount){

        this.currentDiceScore = getDiceRollArray(this.diceCount)

        this.diceArray = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`).join("")
    }


    this.maxHealth = this.health

    /*
    CHALLENGE
    1. Instead of just logging the percent, getHealthBarHtml 
    needs to return this string of html:
    `<div class="health-bar-outer">
        <div class="health-bar-inner *YOUR CODE HERE* " 
            style="width: *YOUR CODE HERE* %;">
        </div>
    </div>`
    2. You need to make some changes to that string of HTML.
    2a. If the amount of health left is 25% or lower, add the class 
    "danger" to the div with the class "health-bar-inner".
    2b. The width of that div should be the % health remaining. 
    3. Be sure to add the healthBar variable to the string of HTML
    rendered by getCharacterHtml.
    **hint.md for help!!**       
    */

    this.getHealthBarHtml = function(){
        const percent = getPercentage(this.health, this.maxHealth)
        return  `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                    style="width: ${percent}%;">
                </div>
            </div>`
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

        const healthBar = this.getHealthBarHtml()

        return  `
                    <div class="character-card">
                        <h4 class="name"> ${name} </h4>
                        <img class="avatar" src=${avatar} />
                        <p class="health">health: <b> ${health} </b></p>
                        ${healthBar}
                        <div class="dice-container">
                            ${this.diceArray} 
                        </div>
    
                    </div>  
                `
    }
    
}


export default Character