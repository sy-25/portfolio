const openModalButton = document.querySelectorAll('.js-info__modalOpen');
const modal = document.querySelector('.js-modal');
const modalItem = modal.querySelectorAll('.js-modal__item');
const isShow = 'is-show'


for (let i = 0 ; i <= 3 ; i++) {
    openModalButton[i].addEventListener('click' , () => {
        modal.classList.add(isShow)
        modalItem[i].classList.add(isShow);
    });
};

modal.addEventListener('click', (event) => {
  if(event.target.closest('.js-modalInner') === null) {
    modal.classList.remove(isShow);
    modalItem.forEach((element) => {
        element.classList.remove(isShow);
    });
  }
});

const closeModalButton = modal.querySelector('.js-modal__close');

closeModalButton.addEventListener('click' , () => {
    modal.classList.remove(isShow);
    modalItem.forEach((element) => {
        element.classList.remove(isShow);
    });
});

const introImg = document.querySelector('.js-intro__img');
const footerButton = document.querySelector('.js-footerButton');
const footer = document.querySelector('.js-footer')
let introImgPosition;
let footerPosition;

window.addEventListener('scroll' ,() => {
    introImgPosition = introImg.getBoundingClientRect().top;
    footerPosition = footer.getBoundingClientRect().top;
    if (introImgPosition < 0) {
        footerButton.classList.add(isShow);
    } else {
        footerButton.classList.remove(isShow);
    }
    if (footerPosition < window.innerHeight) {
        footerButton.classList.remove(isShow);
    };
});

footerButton.addEventListener('click' ,() => {
    // e.preventDefault();
    window.scroll({top: 0 , behavior: "smooth" ,});
});


// slideUp
const slideUp = (el, duration = 300) => {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  };

  // slideDown
  const slideDown = (el, duration = 300) => {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  };

  // slideToggle
  const slideToggle = (el, duration = 300) => {
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, duration);
    } else {
      return slideUp(el, duration);
    }
  };

    // スライドさせたい要素を取得
    const accordionContent = document.querySelectorAll('.js-acContent');
    // ボタン
    const slideToggleBtn = document.querySelectorAll(".js-acButton");

    // slideToggle

    for(let i = 0 ; i <= 2 ; i++) {
        slideToggleBtn[i].addEventListener('click' , () => {
            slideToggle(accordionContent[i], 500)
        })
    }