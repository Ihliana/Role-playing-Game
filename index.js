
function getDiceRollArray(diceCount){ 
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
    
}

// CHALLENGE 
// 1. Add this function as a method of our character constructor
// 2. Make a small change to getCharacterHtml to make the app work again

const hero = {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: 60,
 
    diceCount: 3

}

const monster = {
    elementId: "monster", 
    name: "Orc", 
    avatar: 'images/orc.png', 
    health: 10,

    diceCount: 1
}


function Character(data){


    Object.assign(this, data)

    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map((num) => `<div class="dice">${num}</div>`).join("")
    }
    

    this.getCharacterHtml = function(){
        const {elementId, name, avatar, health, diceCount} = this;
        const diceHtml = this.getDiceHtml(diceCount)
    
    /*
    CHALLENGE
    - instead of setting the innerHTML from right here in the contructor,
    make it so that we just return that literal string of HTML
    - This will break the app. Don't worry!
    */

        return  `
                    <div class="character-card">
                        <h4 class="name"> ${name} </h4>
                        <img class="avatar" src=${avatar} />
                        <p class="health">health: <b> ${health} </b></p>
                        <div class="dice-container">
                            ${diceHtml} 
                        </div>
    
                    </div>  
                `
    }
    
}


//CHALLENGE
// - Make the wizard and orc render
// - check hint.md if you need a hand 


/* MINI CHALLENGE */
// 1 Create one render() function that calls both wizard and orc 
//  so we can control when they render. 
// 2 call the function.


const wizard = new Character(hero)
const orc = new Character(monster)

function render(){
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()

}

render()


