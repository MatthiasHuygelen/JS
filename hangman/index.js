import { validate , errors} from './modules/validation.js'
import { SetUi, submitbtn } from './modules/userInterface.js'
import { getWord } from './modules/dataService.js';
import { gameOver , won} from './modules/gameStatus.js';

let word = [];
let wordToGuess = [];

function handleClick() {
    validate(wordToGuess, word);
    if (errors === 6) {
        submitbtn.removeEventListener('click', handleClick);
        gameOver(wordToGuess);
    } else {
        if (word.toString() === wordToGuess.toString()) {
            submitbtn.removeEventListener('click', handleClick);
            won();
        } else {
            SetUi(word);
        }
    }
}

async function init() {
    submitbtn.addEventListener("click", handleClick);
    wordToGuess = await getWord();    
    word = wordToGuess.map(() => "_");
    SetUi(word);
}

init();