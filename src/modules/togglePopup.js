'use strict';
const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    let count = 0;


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
        console.log(popup);
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
export default togglePopup;
