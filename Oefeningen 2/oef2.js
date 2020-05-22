const timeText = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const clearBtn = document.getElementById("clear")
let time = new Date(0, 0, 0, 0, 0, 0);
let intervalId;

setDOM();

clearBtn.addEventListener("click", function () {
    time = new Date(0, 0, 0, 0, 0, 0);
    setDOM();
});

startBtn.addEventListener("click", function () {
    intervalId = setInterval(setTime, 1000);
})

stopBtn.addEventListener("click" , function(){
    clearInterval(intervalId);
})

function setTime(){
    time.setTime(time.getTime() + 1000); 
    setDOM();
}

function setDOM(){
    timeText.innerText = time.toLocaleTimeString("nl-be");
}