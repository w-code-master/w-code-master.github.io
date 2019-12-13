$(function() {

	// menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-icon").toggleClass("active");
	});
	$(".mobile-nav a").click(function() {
	  $(".mobile-nav").fadeOut(600);
	  $(".sandwich-icon").toggleClass("active");
	});
	$(".sandwich-box").click(function() {
	  if($(".mobile-nav").is(":visible")) {
	    $(".mobile-nav").fadeOut(600);
	  } else {
	    $(".mobile-nav").fadeIn(600);
	  };
	});

	$('.information__tabs').tabulous();

	$('.beefup').beefup({
	  openSingle: true
	});

	$('.link-popup-call').magnificPopup({
		removalDelay: 900,
		mainClass: 'mfp-fade'
	});

});
