
function getDiceRollArray(diceCount){ 
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
    
}

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map((num) => `<div class="dice">${num}</div>`).join("")
}


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

/*
Challenge 1a
1. Create a new constructor function called Character which
   takes our data as a paramenter.
2. Set up "this" for each of the 5 properties in our objects
   (eg: this.health = data.health).
*/

/*
Challenge 1b
1. Create a method called getCharacterHtml that performs the 
   same tasks as our current renderCharacter function.
2. Create two new instances of Character. One for a hero, 
   called "wizard", and one for a monster, called "orc". 
   Render both of them on the page.
3. Delete both the old renderCharacter function and the two 
   lines of code at the bottom of the page which invoke that 
   function.
*/

function Character(data){
    this.elementId = data.elementId
    this.name = data.name 
    this.avatar = data.avatar
    this.health = data.health
    this.diceCount = data.diceCount
    this.renderCharacter = function(){
        const {elementId, name, avatar, health, diceCount} = this;
        const diceHtml = getDiceHtml(diceCount)

        document.getElementById(this.elementId).innerHTML = `
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


const wizard = new Character(hero)
const orc = new Character(monster)


wizard.renderCharacter()
orc.renderCharacter()


