import { randomInteger } from "./util.js"

export function getWord(){
    return fetch("https://api.datamuse.com/words?topics=temperature")
    .then(data => data.json())
    .then(x => {
        return x[randomInteger(1 , 99)].word.split("");
    })
}