const reviewsSwiper = new Swiper('.reviews-swiper', {
  loop: true,
  navigation: {
    nextEl: '.reviews-btn-prev',
    prevEl: '.reviews-btn-next',
  },
  speed: 1000,
});