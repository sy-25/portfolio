const modalTrigger = document.querySelectorAll('.js-work__listItemLink');
const modalRoot = document.querySelector('.js-modal');
const modalOverlay = modalRoot.querySelector('.modal__overlay');
const modalItem = modalRoot.querySelectorAll('.js-modalItem');
const isShow = 'is-show'

const addEventListener = (element, eventType, callback) => {
    element.addEventListener(eventType, callback);
}

modalTrigger.forEach(trigger => {
    addEventListener(trigger, 'click' ,() => {
        const targetId = trigger.dataset.target;
        const modalTarget = document.querySelector(`#${targetId}`);
        modalRoot.classList.add(isShow);
        modalTarget.classList.add(isShow);
    });
});

modalOverlay.addEventListener('click' , () => {
    modalRoot.classList.remove(isShow);
    modalItem.forEach(e => {
        e.classList.remove(isShow);
    });
});