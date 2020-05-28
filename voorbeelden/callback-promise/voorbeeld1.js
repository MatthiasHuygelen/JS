function rollADive(succesCallback, failureCallback) {
    let rndnumber = randomInteger(1, 5);

    if (rndnumber === 5) {
        failureCallback(rndnumber);
    } else {
        succesCallback(rndnumber);
    }
}

function succes(x) { console.log(x) }

function failed() { console.log("failed") }

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

rollADive(succes, failed);