'use strict';
import maskPhone from './maskPhone';
const sendForm = () => {
    const valid = document.querySelectorAll('.form-phone');
    valid.forEach(item => {
        if (valid.value) {
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
            const deleteStatus = (status) => {
                setTimeout(() => {
                    status.textContent = '';
                }, 5000);
            };

            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                statusMessage.textContent = successMessage;
                outputData();
                deleteStatus(statusMessage);
            } else {
                errorData(request.status);
                deleteStatus(statusMessage);
            }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));

    };
};

export default sendForm;
