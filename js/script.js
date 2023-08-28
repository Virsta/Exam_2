const swiper = new Swiper('.swiper-container', {
  
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination', // CSS-селектор елемента, де будуть розташовані точки навігації
  },

  autoplay: {
    delay: 4000, // Затримка в мілісекундах (4 секунди)
  },
});