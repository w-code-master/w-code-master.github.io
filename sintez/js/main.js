$(function() {

   // menu
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

   const swiperClients = new Swiper('.swiper-clients', {
      slidesPerView: "auto",
      loop: true,
      autoHeight: false,
      spaceBetween: 20
      // autoplay: {
      //    delay: 3000,
      // }
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

   $('.menu__link').mPageScroll2id({
		offset: 100
	});

   $('.job-beefup__item').beefup({
      openSingle: true
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