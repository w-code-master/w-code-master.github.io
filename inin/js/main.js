$('#person-area-tabs').easytabs({
   updateHash: false
});

 $('input[type="tel"]').mask('+7 (999) 999-99-99');

const swiperCompany = new Swiper('.swiper-company', {
   loop: true,
   slidesPerView: "auto",
   autoplay: {
      delay: 2000,
   },
   spaceBetween: 15
});

const swiperReview = new Swiper('.review-swiper', {
   slidesPerView: 2,
   loop: true,
   spaceBetween: 20,
   navigation: {
      nextEl: '.review-swiper-next',
      prevEl: '.review-swiper-prev',
   }
});