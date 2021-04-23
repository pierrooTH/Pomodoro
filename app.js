let minutes = 25;
let seconds = "00";
let btn = document.querySelector('.timer__btn');
let stopBtn = document.querySelector('.stop__btn');
let minutesInterval;
let secondsInterval;

let link = document.querySelector('.link');
let description = document.querySelector('.pomodoro__description');

function getMinutesSeconds() {
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
}

function stop() {
    clearInterval(minutesInterval);
    clearInterval(secondsInterval);
}

const start = () => {

    minutes = 24;
    seconds = 59;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    minutesInterval = setInterval(timerMinutes, 60000);
    secondsInterval = setInterval(timerSeconds, 1000);
    btn.classList.add('btn__invisible');
    stopBtn.classList.add('btn__visible');
    function timerMinutes () {
        minutes--;
        document.querySelector('.minutes').innerHTML = minutes;
    }
    function timerSeconds () {
        seconds--;
        document.querySelector('.seconds').innerHTML = seconds;
        if (seconds <= 0) {
            if (minutes <= 0) {
                stop();
            }
            seconds = 60; 
        }
    }   
}
getMinutesSeconds();
btn.addEventListener('click', start);

stopBtn.addEventListener('click', () => {
    stop();
    btn.classList.remove('btn__invisible');
    stopBtn.classList.remove('btn__visible');
})

link.addEventListener("click", () => {
    if(getComputedStyle(description).display != "none"){
      description.style.display = "none";
    } else {
      description.style.display = "flex";
    }
  })