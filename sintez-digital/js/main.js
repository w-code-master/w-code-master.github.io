$(function() {

   var counter = 0;
   var c = 0;
   var i = setInterval(function(){
      // $(".loading-page__h").html(c + "%");
      // $(".loading-page__hr").css("width", c + "%");
      counter++;
      c++;
         
      if(counter == 400) {
         clearInterval(i);
         $(".loading-page").fadeOut(700);
      }
   }, 10);

   // menu
	$(".sandwich-box").click(function() {
      $(".sandwich-box").toggleClass("active");
      $("html").toggleClass("phone-panel-active");
    });
    $(".phone-panel .menu__link").click(function() {
		$(".phone-panel").fadeOut(600);
		$(".sandwich-box").toggleClass("active");
      $("html").toggleClass("phone-panel-active");
      $(".call-modal").fadeOut(600);
	});
   $(".sandwich-box").click(function() {
       if($(".phone-panel").is(":visible")) {
          $(".phone-panel").fadeOut(600);
       } else {
          $(".phone-panel").fadeIn(600);
       };
    });

   $(".entry--call-modal").click(function() {
      if($(".call-modal").is(":visible")) {
         $(".call-modal").fadeOut(600);
      } else {
         $(".call-modal").fadeIn(600);
      };
   });
   $(".call-modal__close").click(function() {
		$(".call-modal").fadeOut(300);
	});

   const swiperClients = new Swiper('.swiper-clients', {
      slidesPerView: "auto",
      loop: true,
      autoHeight: false,
      spaceBetween: 20,
      autoplay: {
         delay: 2000
      }
   });
   const swiperReview = new Swiper('.swiper-work', {
      loop: true,
      autoHeight: false,
      navigation: {
         nextEl: '.swiper-work-next'
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
         992: {
            slidesPerView: 2,
            spaceBetween: 44
         }
      },
      pagination: {
         el: ".swiper-work-nav",
         dynamicBullets: true,
         dynamicBullets: 3
      }
   });
   const swiperServices = new Swiper('.swiper-services', {
      loop: true,
      autoHeight: false,
      spaceBetween: 20,
      slidesPerView: 1.15,
      autoplay: {
         delay: 5000
      },
      pagination: {
         el: ".swiper-services-nav",
         dynamicBullets: true,
         dynamicBullets: 3
      }
   });
   const swiperArticle = new Swiper('.swiper-article', {
      loop: true,
      autoHeight: false,
      spaceBetween: 20,
      slidesPerView: 1.15,
      // autoplay: {
      //    delay: 5000
      // },
      pagination: {
         el: ".swiper-article-nav",
         dynamicBullets: true,
         dynamicBullets: 3
      }
   });
   var swiperLoader = new Swiper(".swiper-loader", {
      loop: true,
      autoHeight: false,
      direction: 'vertical',
      autoplay: {
         delay: 500
      },
      slidesPerView: 4
   });

   $('.menu__link').mPageScroll2id({
		offset: 100
	});

   $('.job-beefup__item').beefup({
      openSingle: true
   });

   $('.marquee-text').marquee({
      duration: 15000,
      startVisible: true,
      duplicated: true
    });

    $('.tel-masked').mask('+7 (999) 999 - 99 - 99');

   $('.anim-zoomIn').animated('zoomIn');

	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-bounceInLeft').animated('bounceInLeft');
	$('.anim-bounceInRight').animated('bounceInRight');
	$('.anim-bounceInDown').animated('bounceInDown');
	$('.anim-bounceInUp').animated('bounceInUp');
   
	$('.anim-fadeIn').animated('fadeIn');
	$('.anim-fadeInLeft').animated('fadeInLeft');
	$('.anim-fadeInRight').animated('fadeInRight');
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInUp').animated('fadeInUp');
	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$('.anim-fadeInDownBig').animated('fadeInDownBig');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	
	$('.anim-slideInLeft').animated('slideInLeft');
	$('.anim-slideInRight').animated('slideInRight');
	$('.anim-slideInDown').animated('slideInDown');
	$('.anim-slideInUp').animated('slideInUp');
   
	$('.anim-bounceInLeft').animated('bounceInLeft');

	$('.anim-rotateInDownLeft').animated('rotateInDownLeft');

	$('.anim-rubberBand').animated('rubberBand');

});