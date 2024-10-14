let charactersList = [];

const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];

const charactersNumbers = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const charactersSymbols = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const charactersFull = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

let generateButton = document.querySelector("#generate-btn");
let copyButton1 = document.querySelector("#copy-btn1");
let copyButton2 = document.querySelector("#copy-btn2");
let firstPassword = document.querySelector("#first-password");
let lastPassword = document.querySelector("#last-password");
let inputLength = document.querySelector("#passwordsLength");

generateButton.addEventListener("click", function () {
    firstPassword.textContent = ""
    lastPassword.textContent = ""
    let addNumbers = document.querySelector("#add-numbers");
    let addSymbols = document.querySelector("#add-symbols");

    if (addNumbers.checked && addSymbols.checked) {
        charactersList = charactersFull
    }else if (addNumbers.checked ) {
        charactersList = charactersNumbers
    }else if (addSymbols.checked ) {
        charactersList = charactersSymbols
    }else{
        charactersList = characters
    }

    for (let i=0; i < inputLength.value; i++){
        firstPassword.textContent += charactersList[Math.floor(Math.random()*charactersList.length)];
        lastPassword.textContent += charactersList[Math.floor(Math.random()*charactersList.length)];
    }
})

copyButton1.addEventListener("click", function () {
    navigator.clipboard.writeText(firstPassword.textContent)
})

copyButton2.addEventListener("click", function () {
    navigator.clipboard.writeText(lastPassword.textContent)
})
