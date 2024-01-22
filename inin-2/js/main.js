// header scrolled
var panelFix = $('.header-top');
$(window).scroll(function() {
   if( $(this).scrollTop() > 30) {
      panelFix.addClass("header-scrolled")
   }
   else {
      panelFix.removeClass("header-scrolled")
   }
});

// sandwich menu
$(".sandwich-box").click(function() {
   $(".sandwich-box").toggleClass("active");
 });
 $(".nav li a").click(function() {
    $(".wrapper-nav").fadeOut(300);
 });
 $(".sandwich-box").click(function() {
    if($(".wrapper-nav").is(":visible")) {
       $(".wrapper-nav").fadeOut(300);
    } else {
       $(".wrapper-nav").fadeIn(300);
    };
 });

$('#person-area-tabs').easytabs({
   updateHash: false
});

$('input[type="tel"]').mask('+7 (999) 999-99-99');

const swiperCompany = new Swiper('.swiper-company', {
   loop: true,
   slidesPerView: "auto",
   autoplay: {
      delay: 2000,
   }
});

const swiperReview = new Swiper('.review-swiper', {
   slidesPerView: 2,
   loop: true,
   autoHeight: false,
   navigation: {
      nextEl: '.review-swiper-next',
      prevEl: '.review-swiper-prev',
   },
   breakpoints: {
      320: {
         spaceBetween: 10
      },
      992: {
         spaceBetween: 20
      }
    }
});

const swiperSteps = new Swiper('.swiper-steps', {
   slidesPerView: 2.08,
   breakpoints: {
      768: {
         slidesPerView: 2.3
      }
   }
});