import Swiper from '../vendor/swiper';

const sliderHero = document.querySelector('[data-hero-swiper="swiper"]');
const sliderHeroPagination = document.querySelector('[data-hero-swiper="pagination"]');

const  initHeroSwiper = () => {
  new window.Swiper(sliderHero, {
    pagination: {
      el: sliderHeroPagination,
      clickable: true,
    },
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
  });
};


// const  = () => {
//   new Swiper('[data-hero-swiper="swiper"]', {
//     navigation: {
//       el:'[data-hero-swiper="pagination"]',
//       type: 'bullets',
//       clickable: true,
//     },

//     slidesPerView: 1,
//     loop: true,
//     allowTouchMove: false,
//     centeredSlides: true,
//     centeredSlidesBounds: true,
//     spaceBetween: 0,
//     // swipeHandler: '[data-hero-swiper="pagination"]',

//     breakpoints: {
//       768: {
//         allowTouchMove: true,
//       },
//     },
//   });
// };

export { initHeroSwiper };

