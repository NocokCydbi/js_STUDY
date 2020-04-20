window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
           
        function getTimeRemaining(){
            let dateStop = new Date (deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60 );
            return {
                timeRemaining,
                hours,
                seconds,
                minutes
            };
        }   
        let timer = getTimeRemaining();

        function updateClock(){


            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;


        }
        if(timer.timeRemaining === 0 || timer.timeRemaining < 0){
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }else{
        setInterval(updateClock, 1000);
        }
    }
    countTimer('21 april 2019');


});
