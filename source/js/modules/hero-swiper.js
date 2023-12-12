import Swiper from '../vendor/swiper';

const swiperHero = document.querySelector('[data-hero-swiper="swiper"]');
const swiperHeroPagination = document.querySelector('[data-hero-swiper="pagination"]');

const  initHeroSwiper = () => {
  new Swiper(swiperHero, {
    pagination: {
      el: swiperHeroPagination,
      type: 'bullets',
      clickable: true,
    },

    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
};

export { initHeroSwiper };

