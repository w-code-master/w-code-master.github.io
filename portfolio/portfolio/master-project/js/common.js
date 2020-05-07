$(function() {

	// menu
	$(".panel-top .sandwich-box").click(function() {
	  $(".panel-top .sandwich-icon").toggleClass("active");
	});
	$(".mobile-nav a").click(function() {
	  $(".panel-top .mobile-nav").fadeOut(600);
	  $(".panel-top .sandwich-icon").toggleClass("active");
	});
	$(".panel-top .sandwich-box").click(function() {
	  if($(".mobile-nav").is(":visible")) {
	    $(".mobile-nav").fadeOut(600);
	  } else {
	    $(".mobile-nav").fadeIn(600);
	  };
	});


	$('.aside-nav .sandwich-box').click(function() {
	  $(".aside-nav .sandwich-icon").toggleClass("active");
	  $('.aside-nav nav').slideToggle();
	});

	$('.information__tabs').tabulous();

	$('.beefup').beefup({
	  openSingle: true
	});

	$('.link-popup-call').magnificPopup({
		removalDelay: 900,
		mainClass: 'mfp-fade'
	});

	$('.aside-btn-offer-form').magnificPopup({
		removalDelay: 900,
		mainClass: 'mfp-fade'
	});

});
