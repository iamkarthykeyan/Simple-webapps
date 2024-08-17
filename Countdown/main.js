let days = document.getElementById("day");
let hours = document.getElementById("hour");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");

let newyear = "1 Jan 2024";

function countdown(){
    const newyearDate = new Date(newyear);
    const currentDate = new Date();
    const totalSeconds = (newyearDate-currentDate)/1000;

    const D = Math.floor(totalSeconds / 3600 / 24);
    const H = Math.floor(totalSeconds / 3600 ) % 24;
    const M = Math.floor(totalSeconds / 60) % 60;
    const S = Math.floor(totalSeconds) % 60;

    days.innerHTML = D;
    hours.innerHTML = formatTime(H);
    mins.innerHTML = formatTime(M);
    secs.innerHTML = formatTime(S);
}

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}
countdown();

setInterval(countdown,1000);
