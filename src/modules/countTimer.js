'use strict';
function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        return {
            timeRemaining,
            hours,
            seconds,
            minutes
        };
    }
    const addZero = (num) => {
        if(num <= 9 && num > 0){
            num = '0' + num;
        }
        if(num === 0 || num < 0){
            num = '00';
        }
        return(num);

    };



    function updateClock() {
        const timer = getTimeRemaining();
        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);

        setTimeout(updateClock, 1000);



    }


    updateClock();

}
export default countTimer;

