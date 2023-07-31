import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'




function Character(data){


    Object.assign(this, data)


    this.getDiceHtml = function(diceCount){

        this.currentDiceScore = getDiceRollArray(this.diceCount)

        this.diceArray = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`).join("")
    }


    this.maxHealth = this.health

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