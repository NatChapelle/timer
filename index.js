
const form = document.querySelector("form");
const choice = document.getElementById("choice");
const countDownDisplay = document.getElementById("countdownDisplay");





form.addEventListener('submit', (e)=> {
    //on empêche le submit auto
e.preventDefault();

countDownDisplay.innerText = choice.value;
 
 
totalSeconds = choice.value * 60 ;
let minutes = Math.floor(totalSeconds / 60);

let seconds = totalSeconds % 60;

countDownDisplay.innerText = `${minutes}:${seconds}`;

setInterval(countDown, 1000);



function countDown () {
    totalSeconds--;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    countDownDisplay.innerText = `${minutes}:${seconds}`;
}

});









