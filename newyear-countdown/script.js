const dayDisplay = document.querySelector('.days');
const hourDisplay = document.querySelector('.hours');
const minuteDisplay = document.querySelector('.minutes');
const secondDisplay = document.querySelector('.seconds');
const overlayText = document.querySelector('#overlay-text');
let year = new Date();
const newYear = new Date(year.getFullYear()+1,0,1)
overlayText.innerText = year.getFullYear()+1;

const calcDays = ()=>{
    let currentTime = Date.now();
    let dayDiff = Math.floor((newYear.getTime()-currentTime)/86400000);
    return dayDiff;
}

const calcHours = ()=>{
    let currentDayEnd = 24;
    let today = new Date();
    let hours = today.getHours() == 0 ? 1 : today.getHours()+1;
    let hourDiff = currentDayEnd - hours;
    
    return hourDiff;
}

const calcMin = ()=>{
    let currentHourEnd = 60;
    let today = new Date();
    let minutes = today.getMinutes() == 0 ? 1 : today.getMinutes()+1;
    let minuteDiff = currentHourEnd - minutes;
    return minuteDiff;
}
const calcSeconds = ()=>{
    let currentMinuteEnd = 60;
    let today = new Date();
    let seconds = today.getSeconds() == 0 ? 1 : today.getSeconds()+1;
    let secondDiff = currentMinuteEnd - seconds;
    return secondDiff;
}

function countDown(){
    let days = calcDays();
    let hours = calcHours();
    let minutes = calcMin();
    let seconds = calcSeconds();
    days = hours == 0 ? days-- : days;
    hours = minutes == 0 ? hours -- : hours;
    minutes = seconds == 0 ? minutes -- : minutes;
    dayDisplay.innerText = days;
    hourDisplay.innerText = hours;
    minuteDisplay.innerText = minutes;
    secondDisplay.innerText = seconds;
}

setInterval(countDown,1000);