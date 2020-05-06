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
                    return;

                }

            });

        });

        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
                count = 0;
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                    count = 0;
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

    //outTeam
    const ourTeam = () => {
        const photo = document.querySelectorAll('.command__photo');
        photo.forEach(item => {
            const src = item.src;
            item.addEventListener('mouseenter', event => {
                const target = event.target;
                if (target.className === 'command__photo') {
                    target.src = target.dataset.img;
                } else {
                    return;
                }
            });
            item.addEventListener('mouseleave', event => {
                const target = event.target;
                if (target.className === 'command__photo') {
                    target.src = src;
                }
            });
        });
    };
    ourTeam();

    //calculator

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.querySelector('#total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;
            if (target === calcType || target === calcSquare ||
            target === calcDay || target === calcCount) {
                countSum();
            }
        });
    };
    calc(100);

    //send-ajax-form
    const phone = document.querySelector('.phone');
    const showLog = function() {
        this.value = this.value.replace(/\D/g, '');
    };
    phone.addEventListener('keyup', showLog);

    const sendForm = () => {
        const valid = document.querySelectorAll('.form-phone');
        valid.forEach(item => {
            if (valid.value) {
                console.log(valid.value);
                valid.value.replace('1', '');
            }
        });
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = `Спасибо! Мы скоро с вами свяжемся`;

        const form = document.querySelectorAll('form'),
            form2 = document.querySelector('#form2'),
            form3 = document.querySelector('#form3');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: white';

        const clearInput = target => {
            const input = target.querySelectorAll('input');
            input.forEach(item => {
                item.value = '';
            });
        };
        function validator() {
            function phoneValidator() {
                const phone = document.querySelectorAll('.form-phone');
                phone.forEach(item => {
                    maskPhone(item);
                });
            }
            phoneValidator();
            function nameValidator() {
                const formName = document.querySelectorAll('.form-name'),
                    mess = document.querySelector('.mess'),
                    topForm = document.querySelector('.top-form');
                const inputs = [];

                formName.forEach(item => {
                    inputs.push(item);
                });
                inputs.push(mess);
                inputs.push(topForm);

                inputs.forEach(item => {
                    item.addEventListener('input', () => {
                        const reg = /[^а-яА-ЯЁ]/g;
                        item.value = item.value.replace(reg, '');
                    });
                });
            }


            nameValidator();
        }
        validator();
        form.forEach(item => {

            item.addEventListener('submit', event => {
                event.preventDefault();
                const target = event.target;
                clearInput(target);
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);
                const body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
                postData(body, () => {

                }, error => {
                    console.error(error);
                    statusMessage.textContent = errorMessage;
                });

            });
        });
        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {

                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    statusMessage.textContent = successMessage;
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));

        };
    };

    sendForm();
});
