const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Ruimte tussen slides in pixels
  spaceBetween: 10, // Pas dit aan voor meer of minder ruimte

  // Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1, // 1 slide zichtbaar bij schermen onder 540px
    },
    720: {
      slidesPerView: 2, // 2 slides zichtbaar bij schermen onder 720px
    },
    992: { // Dit is de standaard Bootstrap MD breakpoint
      slidesPerView: 3, // 3 slides zichtbaar voor schermen groter dan 720px
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});