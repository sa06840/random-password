const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstEl = document.getElementById("first-el")
let secondEl = document.getElementById("second-el")

function getRandom() {
    let index = Math.floor((Math.random()*characters.length))
    return index
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++){
        password = password + characters[getRandom()]
    }
    return password
}

function display() {
    firstEl.textContent = generatePassword()
    secondEl.textContent = generatePassword()
}