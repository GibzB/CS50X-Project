// This is a simple chrome extension for a pomodoro
// timer. It is a work in progress and I am still
// learning javascript. I am using this project to
// learn javascript and chrome extensions.

// Global variables
var timer = 0;
var timerOn = false;
var timerInterval;
var timerType = "work";
var workTime = 25;
var breakTime = 5;
var workTimeLeft = workTime;
var breakTimeLeft = breakTime;
var workTimeLeftString = workTimeLeft.toString();
var breakTimeLeftString = breakTimeLeft.toString();

// Set the work time
function setWorkTime() {
    workTime = document.getElementById("workTime").value;
    workTimeLeft = workTime;
    workTimeLeftString = workTimeLeft.toString();
    document.getElementById("workTimeLeft").innerHTML = workTimeLeftString;
}

// Set the break time
function setBreakTime() {
    breakTime = document.getElementById("breakTime").value;
    breakTimeLeft = breakTime;
    breakTimeLeftString = breakTimeLeft.toString();
    document.getElementById("breakTimeLeft").innerHTML = breakTimeLeftString;
}

// Start the timer
function startTimer() {
    if (timerOn == false) {
        timerOn = true;
        if (timerType == "work") {
            timerInterval = setInterval(workTimer, 1000);
        } else {
            timerInterval = setInterval(breakTimer, 1000);
        }
    }
}

// Stop the timer
function stopTimer() {
    if (timerOn == true) {
        timerOn = false;
        clearInterval(timerInterval);
    }
}

// Reset the timer
function resetTimer() {
    stopTimer();
    timerType = "work";
    workTimeLeft = workTime;
    breakTimeLeft = breakTime;
    workTimeLeftString = workTimeLeft.toString();
    breakTimeLeftString = breakTimeLeft.toString();
    document.getElementById("workTimeLeft").innerHTML = workTimeLeftString;
    document.getElementById("breakTimeLeft").innerHTML = breakTimeLeftString;
}

// Work timer
function workTimer() {
    workTimeLeft = workTimeLeft - 1;
    workTimeLeftString = workTimeLeft.toString();
    document.getElementById("workTimeLeft").innerHTML = workTimeLeftString;
    if (workTimeLeft == 0) {
        stopTimer();
        timerType = "break";
        startTimer();
    }
}

// Break timer
function breakTimer() {
    breakTimeLeft = breakTimeLeft - 1;
    breakTimeLeftString = breakTimeLeft.toString();
    document.getElementById("breakTimeLeft").innerHTML = breakTimeLeftString;
    if (breakTimeLeft == 0) {
        stopTimer();
        timerType = "work";
        startTimer();
    }
}

// Set the work time
document.getElementById("workTime").addEventListener("change", setWorkTime);

// Set the break time
document.getElementById("breakTime").addEventListener("change", setBreakTime);

// Start the timer
document.getElementById("start").addEventListener("click", startTimer);

// Stop the timer
document.getElementById("stop").addEventListener("click", stopTimer);

// Reset the timer
document.getElementById("reset").addEventListener("click", resetTimer);

// Work timer
document.getElementById("workTimer").addEventListener("click", workTimer);

// Break timer
document.getElementById("breakTimer").addEventListener("click", breakTimer);

