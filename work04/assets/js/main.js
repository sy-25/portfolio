const body = document.querySelector('.js-body');
const hamburger = document.querySelector('.js-hamburger');
const hamburgerTrigger = hamburger.querySelector('.js-hamburgerTrigger');
const hamburgerNavCloseTrigger = hamburger.querySelectorAll('.js-hamburgerCloseTrigger');

const worksRoot = document.querySelector('#works')
const worksItem = worksRoot.querySelectorAll('.js-works__listItem');
const worksItemLength = worksItem.length;
const worksBtn = worksRoot.querySelector('.js-works__btn');

const accordionTrigger = document.querySelectorAll('.js-accordionTrigger');

const modalRoot = document.querySelector('.js-modal');
const modalOverlay = modalRoot.querySelector('.js-modal__overlay');
const modalContents = modalRoot.querySelectorAll('.js-modal__contents');

const flowRoot = document.querySelector('#flow');
const flowModalTrigger = flowRoot.querySelectorAll('.js-modalTrigger');

const flowMovieArray = [
    'https://www.youtube.com/embed/-MPoPC5Ip0I?si=dJHsgOjegax0oNrW',
    'https://www.youtube.com/embed/LxdrnYGIGnE?si=525cBDdwgX1FVclo'
];

const worksModalTrigger = worksRoot.querySelectorAll('.js-modalTrigger');
const worksMovieArray = [
    'https://www.youtube.com/embed/uuvvO5p4J00?si=Ybdiewml-4Gay619',
    'https://www.youtube.com/embed/7LnWjp-rml8?si=qVurkHxC-kW--JaV',
    'https://www.youtube.com/embed/ZSy57LOnc9I?si=HeaV6TW-jbMMHRBO',
    'https://www.youtube.com/embed/wyBlEn8qVQo?si=xEYJ0Anfmjk-wu5Z',
    'https://www.youtube.com/embed/2HXYFYapyCQ?si=IgjbOm8UA8gn0IiL',
    'https://www.youtube.com/embed/2HXYFYapyCQ?si=IgjbOm8UA8gn0IiL',
    'https://www.youtube.com/embed/xJi10yfNGog?si=pupjWr2iwDUx7ufe',
    'https://www.youtube.com/embed/w8wKDBA60cY?si=FsD8vIYgFE3g6c1k',
    'https://www.youtube.com/embed/xVTpANyHlLc?si=ngGlJD4zoTmmRLUR',
    'https://www.youtube.com/embed/7opgJrRtvzM?si=THKrFXWBpcwIZ0IL',
    'https://www.youtube.com/embed/Om4A7Eh8KKI?si=801ZxWIJu4aq8ItA',
    'https://www.youtube.com/embed/vVbEK312O0o?si=TBnbd-Xzu0nARwsl',
    'https://www.youtube.com/embed/pVpxixqX51g?si=Jr5BdAPYJtz4-erl',
    'https://www.youtube.com/embed/IS1XagiG1Qc?si=-dkrt2IbOlG2kOUy',
    'https://www.youtube.com/embed/glRKR9R5CqQ?si=veAZ8muM5CEEFzO7',
    'https://www.youtube.com/embed/K7P62fpCPn4?si=blSZzwY-u8aEYcEC',
    'https://www.youtube.com/embed/nzXyewnRNaI?si=6FHVCK_RasOqV1pI',
    'https://www.youtube.com/embed/lufAcD0H8Rw?si=sTwcPNK8RqFlLn9G',
    'https://www.youtube.com/embed/Dy-ayMv8UOs?si=AtHx9pfSX7hhiswF',
    'https://www.youtube.com/embed/5RcB0atVcD4?si=5eQBf1fh8U8n_VIX',
    'https://www.youtube.com/embed/XirRpBnhiqc?si=YPHRj-XpFh03ST0T',
    'https://www.youtube.com/embed/Yc6LscLImDE?si=4iKv0XKqC4OkhFlP',
    'https://www.youtube.com/embed/QCrNuAVijiI?si=2lqojKlZ_qWHBLMi',
    'https://www.youtube.com/embed/jctx8rpPkwE?si=y88YrdRY97wjd7ae',
    'https://www.youtube.com/embed/6YNRJWl48cM?si=cw58nrtLKYsoprPK'
];

const form = document.querySelector('.js-form');
const requiredElements = form.querySelectorAll('.js-formInput');
const requiredAddress = form.querySelector('.js-formInputAddress');
const errorMessages = form.querySelectorAll('.js-formError');
const errorMessageAddress = form.querySelector('.js-formError--mail')
const submitBtn = form.querySelector('.js-formBtn');
const errorMessage = document.querySelector('.js-formError');
const mailAddressChecker = '[a-zA-Z0-9]+[a-zA-Z0-9\._-]*@[a-zA-Z0-9_-]+[a-zA-Z0-9\._-]+';

const isOpen = 'is-open';
const isLock = 'is-lock';
const isShow = 'is-show';
const isError = 'is-error';

hamburgerTrigger.addEventListener('click', () => {
    hamburger.classList.toggle(isOpen);
    body.classList.toggle(isLock);
});

hamburgerNavCloseTrigger.forEach((e) => {
    e.addEventListener('click', () => {
        hamburger.classList.remove(isOpen);
        body.classList.remove(isLock);
    });
});

worksBtn.addEventListener('click', () => {
    if (worksItem[(worksItemLength - 6)].classList.contains(isShow)) {
        worksBtn.classList.remove(isShow);
    };
    for (let i = 0; i < worksItemLength ; i++) {
        if (!worksItem[i].classList.contains(isShow)) {
            for (let j = i; j < (i + 6); j++) {
                worksItem[j].classList.add(isShow);
            };
            return;
        };
    };
});

accordionTrigger.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains(isOpen)) {
            e.classList.remove(isOpen);
        }
        else {
            accordionTrigger.forEach((e) => {
                e.classList.remove(isOpen);
            });
            e.classList.toggle(isOpen);
        }
    });
});

flowModalTrigger.forEach((e, i) => {
    e.addEventListener('click', () => {
        modalRoot.classList.add(isOpen);
        modalRoot.querySelector('iframe').src = flowMovieArray[i];
    });
});

worksModalTrigger.forEach((e, i) => {
    e.addEventListener('click', () => {
        modalRoot.classList.add(isOpen);
        modalRoot.querySelector('iframe').src = worksMovieArray[i];
    });
});

modalOverlay.addEventListener('click', () => {
    modalRoot.classList.remove(isOpen);
    setTimeout(() => {
        modalRoot.querySelector('iframe').src = '';
    }, 500);
});

submitBtn.addEventListener('click', () => {
    requiredElements.forEach((e) => {
        e.classList.remove(isError);
    });
    errorMessages.forEach((e) => {
        e.classList.remove(isError);
    });
    requiredAddress.classList.remove(isError);
    errorMessageAddress.classList.remove(isError);
    requiredAddress.innerHTML = '';
    errorMessage.classList.remove(isError);

    if (requiredAddress.value.trim().length === 0) {
        requiredAddress.classList.add(isError);
        errorMessageAddress.classList.add(isError);
        errorMessageAddress.innerHTML = '必須項目に入力してください。';
        errorMessage.classList.add(isError);
    } else if (!requiredAddress.value.match(mailAddressChecker)) {
        requiredAddress.classList.add(isError);
        errorMessageAddress.classList.add(isError);
        errorMessageAddress.innerHTML = 'メールアドレスを入力してください。';
        errorMessage.classList.add(isError);
    }

    requiredElements.forEach((e, i) => {
        const eValue = e.value.trim();
        if (eValue.length === 0) {
            e.classList.add(isError);
            errorMessages[i].classList.add(isError);
            errorMessage.classList.add(isError);
        }
    });
});
