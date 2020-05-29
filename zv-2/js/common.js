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

});
