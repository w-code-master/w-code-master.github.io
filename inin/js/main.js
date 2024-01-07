$('#person-area-tabs').easytabs();

const swiper = new Swiper('.swiper-company', {
   loop: true,
   slidesPerView: "auto",
   autoplay: {
      delay: 2000,
   },
   spaceBetween: 15
 });

 $('input[type="tel"]').mask('+7 (999) 999-99-99');