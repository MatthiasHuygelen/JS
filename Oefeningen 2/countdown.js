
countdown
let remainingtime;
let timerId;
let emptyDate = new Date(0, 0, 0, 0, 0, 0).getTime();

function timer(houre, minute, second) {
    remainingtime = new Date(0, 0, 0, houre, minute, second);
    timerId = setInterval(countdownUI, 1000);
}

function countdownUI() {
    if (remainingtime.getTime() > emptyDate) {
        setDom(remainingtime.toLocaleTimeString("nl-be"));
        remainingtime.setTime(remainingtime.getTime() - 1000);
    }
    else {
        setDom("klaar");
        clearInterval(timerId);
    }
}

function setDom(text) {
    document.body.innerHTML = "";
    document.write(text);
}


timer(0, 0, 20);