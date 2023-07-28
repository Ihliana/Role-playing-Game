
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


function Character(data){
    /*CHALLENGE
        -Use what you learned in the previous scrim to
        remove the following 5 lines of code
        */

    Object.assign(this, data)

    this.getCharacterHtml = function(){
        const {elementId, name, avatar, health, diceCount} = this;
        const diceHtml = getDiceHtml(diceCount)

        document.getElementById(elementId).innerHTML = `
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
wizard.getCharacterHtml()

const orc = new Character(monster)
orc.getCharacterHtml()


