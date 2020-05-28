import { errors } from './validation.js'

export let letterInput = document.getElementById("letter");
export let hangmanImg = document.getElementById("hangman");
export let wordElement = document.getElementById("word");
export let submitbtn = document.getElementById("btn");

export function SetUi(word ) {
    hangmanImg.setAttribute("src", `img/${errors}.gif`)
    wordElement.innerText = "";
    word.forEach(x => {
        let span = document.createElement("span")
        span.innerText = x
        wordElement.appendChild(span);
    })
    letterInput.value = "";
}

export function addElement(type , text, className  ,clickFunc ){
    let element = document.createElement(type);
    element.innerText = text;
    if(className){
        element.classList.add(className);
    }
    if(clickFunc){
        element.addEventListener("click", clickFunc)
    }
    document.body.appendChild(element);
}