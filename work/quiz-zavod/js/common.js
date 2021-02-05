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

	// responsive navigation
	$(window).on('resize load', function() {
	  if(document.documentElement.clientWidth > 992) {
	    $('.header__top').animated('bounceInDown');
	    $('.header .h1').animated('zoomIn');
	    $('.special-price .price-box__old, .special-price .price-box__new, .special-price .mark-el').animated('zoomIn');
	    $('.header__content-product img').animated('zoomIn');
	    $('.header__content-product .btn-position').animated('fadeInUp');
	    $('.header .gost').animated('fadeInLeft');
	    $('.header .list-text').animated('fadeInUp');
	    $('.header__btn').animated('zoomIn');
	  }
	});

	

});
