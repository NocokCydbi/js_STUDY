'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //Timer
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
        const timer = getTimeRemaining();

        function updateClock() {


            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;


        }
        if (timer.timeRemaining === 0 || timer.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        } else {
            setInterval(updateClock, 1000);
        }
    }
    countTimer('21 april 2019');
    //Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');



        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };


        btnMenu.addEventListener('click', () => {
            handlerMenu();
        });

        closeBtn.addEventListener('click', () => {
            handlerMenu();
        });
        menuItems.forEach(item => item.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');

        let count = 0;
        const popupAnimation = function() {
            requestAnimationFrame(popupAnimation);
            count++;
            if (count < 38) {
                popupContent.style.left = count + '%';

            } else {
                cancelAnimationFrame(popupAnimation);

            }



        };

        popupBtn.forEach(elem  => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (document.documentElement.scrollWidth > 756) {
                    popupAnimation();

                }

            });

        });
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';

        });
    };
    togglePopup();
});
