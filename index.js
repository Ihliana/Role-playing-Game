
import characterData from "./data.js"


function getDiceRollArray(diceCount){ 
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
    
}
/*
CHALLENGE
-Create a new const called characterData and set it equals to an 
object which holds both our hero and monster objects. 

-Think about how we access the data from our new object
when we set up new characters down at the very bottom of the app. 
-See if you can work out what needs to change there to keep the 
app working.
*/






function Character(data){


    Object.assign(this, data)

    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map((num) => `<div class="dice">${num}</div>`).join("")
    }
    

    this.getCharacterHtml = function(){
        const {elementId, name, avatar, health, diceCount} = this;
        const diceHtml = this.getDiceHtml(diceCount)


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



const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)



/*Does something here need to change?*/
function render(){
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()

}

render()


