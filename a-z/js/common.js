$(function() {

	// menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-box").toggleClass("active");
	});
	$(".nav li a").click(function() {
		$(".wrapper-nav").fadeOut(300);
		$(".sandwich-box").toggleClass("active");
	});
	$(".sandwich-box").click(function() {
		if($(".wrapper-nav").is(":visible")) {
			$(".wrapper-nav").fadeOut(300);
		} else {
			$(".wrapper-nav").fadeIn(300);
		};
	});

});
