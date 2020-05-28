import { SetUi, addElement } from './userInterface.js'

export function gameOver(wordToGuess ) {
    SetUi(wordToGuess, 6);
    addElement("h1" , "GAME OVER!")
    restartMessage();
}

export function won() {
    addElement("h1" , "YOU WON!")
    restartMessage();
}

function restartMessage(){
    addElement("h1" , "Click here to play again !" , "restart", function(){location.reload();})
}