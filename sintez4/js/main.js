$(function() {

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

   // $(".entry--call-modal").click(function() {
   //    if($(".call-modal").is(":visible")) {
   //       $(".call-modal").fadeOut(600);
   //    } else {
   //       $(".call-modal").fadeIn(600);
   //    };
   // });
   // $(".call-modal__close").click(function() {
	// 	$(".call-modal").fadeOut(300);
	// });

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

    $('input[type="tel"]').mask('+7 (999) 999 - 99 - 99');

   // var panelFix = $('.header-top');

	// $(window).scroll(function() {
	// 	if( $(this).scrollTop() > 85) {
	// 		panelFix.addClass("nav-scrolled")
	// 	}
	// 	else {
	// 		panelFix.removeClass("nav-scrolled")
	// 	}
	// });

   $('.anim-zoomIn').animated('zoomIn');

	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-bounceInLeft').animated('bounceInLeft');
	$('.anim-bounceInRight').animated('bounceInRight');
	$('.anim-bounceInDown').animated('bounceInDown');
	$('.anim-bounceInUp').animated('bounceInUp');
   
	$('.anim-fadeIn').animated('fadeIn');
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInUp').animated('fadeInUp');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$('.anim-fadeInDownBig').animated('fadeInDownBig');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInLeft').animated('fadeInLeft');
	$('.anim-fadeInRight').animated('fadeInRight');
	
	$('.anim-slideInLeft').animated('slideInLeft');
	$('.anim-slideInRight').animated('slideInRight');
	$('.anim-slideInDown').animated('slideInDown');
	$('.anim-slideInUp').animated('slideInUp');
   
	$('.anim-bounceInLeft').animated('bounceInLeft');

	$('.anim-rotateInDownLeft').animated('rotateInDownLeft');

	$('.anim-rubberBand').animated('rubberBand');

});