const hamburgerBtn = document.querySelector('.js-hamburgerBtn');
const hamburgerMenu = document.querySelector('.js-header__menu');
const isOpen = 'is-open';

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle(isOpen);
    hamburgerBtn.classList.toggle(isOpen);
});