import {SimpleAdaptiveSlider} from '/public/js/slider.js';
import {PositionMarkup, createNodeElement, renderNodeElement} from '/public/js/util.js';



const mainElement = document.querySelector('main');


// Адаптивный скролл -----------------------------------------

const coordination = mainElement.getBoundingClientRect();
console.log(coordination);
mainElement.addEventListener('scroll', (evt) => {
    evt.preventDefault();
    const currentValueHeightElement = mainElement.offsetHeight;
    const currentCoordinate = mainElement.getBoundingClientRect();
    console.log(currentCoordinate);
});


//  Главный слайдер ------------------------------------------------
const PHOTOS_COUNT = 14;

const sliderPhotoList = document.querySelector('.slider__items');

function createMainPhotoElementTemplate (currentPhotoNumber) {
    return `
  <div class="slider__item">
    <img class="item-photo" src="img/jpg/compressed/${currentPhotoNumber}-min.jpg" width="" height="" alt="">
  </div>
`
};

for (let index = 1; index <= PHOTOS_COUNT; index++) {
    const currentNodePhotoElement = createNodeElement(createMainPhotoElementTemplate(index));
    console.log(currentNodePhotoElement);
    renderNodeElement(sliderPhotoList, PositionMarkup.BEFORE_END, currentNodePhotoElement);
}

const mainSlider = new SimpleAdaptiveSlider('.main-slider', {
    autoplay: false,
    interval: 5000,
    swipe: true,
});

//----------------------------------------------------






