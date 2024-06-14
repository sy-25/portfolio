const modalTrigger = document.querySelectorAll('.js-clinic__btn');
const modalRoot = document.querySelector('.js-modal');
const modalOverlay = modalRoot.querySelector('.js-modal__overlay');
const modalItem = modalRoot.querySelectorAll('.js-modalItem');
const isShow = 'is-show'
const isHide = 'is-hide'

const addEventListener = (element, eventType, callback) => {
    element.addEventListener(eventType, callback);
}

modalTrigger.forEach(trigger => {
    addEventListener(trigger, 'click', () => {
        const targetId = trigger.dataset.target;
        const modalTarget = document.querySelector(`#${targetId}`);
        modalOverlay.classList.add(isShow);
        const imgBox = modalTarget.querySelector('.js-imgBox');
        const imgBoxTxt = modalTarget.querySelector('.js-imgBox__txt');
        const img = modalTarget.querySelector('.js-modal__img');
        setTimeout(() => {imgBox.classList.add(isShow); }, 300);
        setTimeout(() => {
            imgBoxTxt.classList.add(isHide);
            img.classList.add(isShow);
        }, 2000);
    });
});

modalOverlay.addEventListener('click' , () => {
    modalOverlay.classList.remove(isShow);
    modalItem.forEach(e => {
        const imgBox = e.querySelector('.js-imgBox');
        const imgBoxTxt = e.querySelector('.js-imgBox__txt');
        const img = e.querySelector('.js-modal__img');
        imgBox.classList.remove(isShow);
        imgBoxTxt.classList.remove(isHide);
        img.classList.remove(isShow);
    });
});
