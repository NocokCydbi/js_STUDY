'use strict';
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
export default ourTeam;
