const buttons = document.querySelectorAll('.button-show-more');

const headerBurgerBtn = document.querySelectorAll('.header-burger-button');

const headerList = document.querySelectorAll('.header-list');

const keywordInput = document.querySelector("input[name='keyword']");

const optionInputs = document.querySelectorAll("input[name='opt[]']");

let swiper = new Swiper('.main-block-description-wrapper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    },
});

let swiper1 = new Swiper('.main-block-slider-wrapper', {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: false,
    navigation: {
        nextEl: '.main-block-button-next',
        prevEl: '.main-block-button-prev',
    },
});


buttons.forEach(item => {
    item.addEventListener('click', () => {
        const currentDiv = item.closest('.main-block-description-slide');
        const currentParagraph = currentDiv.querySelector('.paragraph-show-more')
        currentParagraph.classList.toggle('paragraph-show-more--active')
    })
})

headerBurgerBtn.forEach(item1 => {
    item1.addEventListener('click', (event) => {
        headerList.forEach(item2 => {
            item2.classList.toggle('active');
        })
        headerBurgerBtn.forEach(item2 => {
            item2.classList.toggle('active');
        })
    });
})


let markInstance = new Mark(document.querySelector(".main-block-text"));

function performMark() {

    let keyword = keywordInput.value;

    let options = {};
    [].forEach.call(optionInputs, function (opt) {
        options[opt.value] = opt.checked;
    });

    markInstance.unmark({
        done: function () {
            markInstance.mark(keyword, options);
        }
    });
};

keywordInput.addEventListener("input", performMark);
for (let i = 0; i < optionInputs.length; i++) {
    optionInputs[i].addEventListener("change", performMark);
}

// scroll smooth

(function () {
    const scrollLinks = document.querySelectorAll('a.scroll-link');

    console.log(scrollLinks);

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', (event) => {
            event.preventDefault();
            const id = scrollLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }
})();