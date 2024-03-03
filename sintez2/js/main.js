$(function() {

   // menu
	$(".sandwich-box").click(function() {
      $(".sandwich-box").toggleClass("active");
    });
    $(".wrapper-nav .menu__link").click(function() {
		$(".wrapper-nav").fadeOut(600);
		$(".sandwich-box").toggleClass("active");
	});
    $(".sandwich-box").click(function() {
       if($(".wrapper-nav").is(":visible")) {
          $(".wrapper-nav").fadeOut(300);
       } else {
          $(".wrapper-nav").fadeIn(300);
       };
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
      spaceBetween: 10,
      breakpoints: {
         992: {
            slidesPerView: 2,
            spaceBetween: 44
         }
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

   // var panelFix = $('.header-top');

	// $(window).scroll(function() {
	// 	if( $(this).scrollTop() > 85) {
	// 		panelFix.addClass("nav-scrolled")
	// 	}
	// 	else {
	// 		panelFix.removeClass("nav-scrolled")
	// 	}
	// });

});