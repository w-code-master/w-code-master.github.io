const swiperClients = new Swiper('.swiper-clients', {
   slidesPerView: 4,
   loop: true,
   autoHeight: false,
   spaceBetween: 20,
   autoplay: {
      delay: 3000,
   }
});
const swiperReview = new Swiper('.swiper-work', {
   slidesPerView: 2,
   loop: true,
   autoHeight: false,
   navigation: {
      nextEl: '.swiper-work-next'
   },
   spaceBetween: 44
});