'use strict';
const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    let count = -20;


    const popupAnimation = function() {
        const animation = requestAnimationFrame(popupAnimation);

        count++;
        if (count < 11) {
            popupContent.style.top = count + '%';

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
            count = -20;

        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
                count =  -20;
            }
        }
    });

};
export default togglePopup;
