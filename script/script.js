'use strict';
let count = 0;
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
            menu = document.querySelector('menu');


        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', () => {
            handlerMenu();
        });
        menu.addEventListener('click', event => {
            const target = event.target;
            if (target.tagName === 'A') {
                handlerMenu();
            } else {
                return;
            }
        });
    };
    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

        const popupAnimation = function() {
            const animation = requestAnimationFrame(popupAnimation);
            count++;
            if (count < 39) {
                popupContent.style.left = count + '%';

            } else {
                cancelAnimationFrame(animation);

            }



        };

        popupBtn.forEach(elem  => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (document.documentElement.scrollWidth > 756) {
                    popupAnimation();
                    count = 0;
                    return;

                }

            });

        });

        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                console.log(target);
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopup();

    //tabs

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }

                });

            }
        });

    };
    tabs();

    //slider

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            addUl = document.createElement('ul');


        addUl.classList.add('portfolio-dots');
        for (let i = 0; i < 6; i++) {
            const dot = document.createElement('li');
            if (i === 0) {
                dot.classList.add('dot-active');
            }
            dot.classList.add('dot');
            addUl.append(dot);
        }

        slider.insertAdjacentElement('beforeend', addUl);
        const dot = document.querySelectorAll('.dot');


        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);

        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);

        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('#arrow-right, #arrow-left, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');



            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });
        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(2500);

    };

    slider();
});
