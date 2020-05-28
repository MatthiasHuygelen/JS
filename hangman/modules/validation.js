import { letterInput } from './userInterface.js'
export let errors = 0;

export function validate(wordToGuess, word) {
    if (wordToGuess.some(x => x === letterInput.value)) {
        for (let index = 0; index < wordToGuess.length; index++) {
            if (wordToGuess[index] === letterInput.value)
                word[index] = wordToGuess[index];
        }
    } else { errors++ }
}