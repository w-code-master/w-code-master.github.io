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

	// maskedinput
	$(".masked-input").mask("+7 (999) 999-99-99");


	// popup
	$('.btn-call-popup').magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		overflowY: 'scroll'
	});

	$(".header__top").animated("fadeInDown");
	$(".header__content-info .h1").animated("zoomIn");
	$(".header .special-price .price-box__old, .header .special-price .price-box__new, .header .special-price .mark-el").animated("zoomIn");
	$(".header__content-product").animated("fadeInRight");
	$(".header .gost").animated("fadeInLeft");
	$(".header .list-text").animated("fadeInUp");
	$(".header .btn").animated("zoomIn");

});
