const body = document.querySelector('body');
const modalOpen = body.querySelectorAll('.js-modal__link');
const modal = body.querySelectorAll('.js-modal');
const isActive = 'isActive';

modalOpen.forEach((element, index) => {
    element.addEventListener('click' , () => {
        modal[index].classList.add(isActive);
        if(modal[index].classList.contains('js-modalCm') == true) {
            body.style.overflowY = 'hidden';
        };
    });
});

modal.forEach((element) => {
    element.addEventListener('click' , (event) => {
        if(event.target.closest('.js-modalInner') === null) {
            element.classList.remove(isActive);
            body.style.overflowY = 'visible';
        };
    });
});

const modalClose = body.querySelectorAll('.js-modalClose');

modalClose.forEach((element, index) => {
    element.addEventListener('click' , () => {
        modal[index].classList.remove(isActive)
        body.style.overflowY = 'visible';
    })
})

const btnTop = body.querySelector('.js-btnTop');
const isShow = 'isShow'
const isStop = 'isStop';

function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
    }

btnTop.addEventListener("click", scroll_top);

let footer = body.querySelector('.js-footer')
let footerPosition;

window.addEventListener('scroll' ,() => {
    const scrollPosition = window.scrollY;
    footerPosition = footer.getBoundingClientRect().top;
    if (scrollPosition > 200) {
        btnTop.classList.add(isShow);
    } else {
        btnTop.classList.remove(isShow);
    }
    if (footerPosition < window.innerHeight) {
        btnTop.classList.add(isStop);
    }
    else {
        btnTop.classList.remove(isStop);
    };
});

$('.slider').slick({
    autoplay: true,
    dots: false,
});