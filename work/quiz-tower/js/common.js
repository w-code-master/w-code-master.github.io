$(function() {

	// menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-icon").toggleClass("active");
	});
	$(".nav li a").click(function() {
		$(".wrapper-nav").fadeOut(300);
		$(".sandwich-icon").toggleClass("active");
	});
	$(".sandwich-box").click(function() {
		if($(".wrapper-nav").is(":visible")) {
			$(".wrapper-nav").fadeOut(300);
		} else {
			$(".wrapper-nav").fadeIn(300);
		};
	});

	// popup
	$('.btn-call-popup').magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		overflowY: 'scroll'
	});

	$('.header__top').animated('bounceInDown');
	$('.header__offer .h1, .header__offer .h1 .c-accent, .header__offer .h1 .sz-52, .header__offer .h1 .sz-35, .header .btn-view').animated('fadeIn');
	$('.header .price-box').animated('fadeInUp');
	$('.header .btn, .header .helpers .helpers__item').animated('bounceIn');
});
