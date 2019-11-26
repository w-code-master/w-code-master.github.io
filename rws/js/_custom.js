document.addEventListener("DOMContentLoaded", function() {

$('select').niceSelect();

$('.main-slider').owlCarousel({
	items: 1,
	nav: true,
	navText: ['<i class="i-left"></i>', '<i class="i-right"></i>'],
	loop: true
});

// menu
$(".sandwich-box").click(function() {
  $(".sandwich-icon").toggleClass("active");
});
$(".nav li a").click(function() {
	$(".wrapper-nav").fadeOut(600);
	$(".sandwich-icon").toggleClass("active");
});
$(".sandwich-box").click(function() {
	if($(".wrapper-nav").is(":visible")) {
		$(".wrapper-nav").fadeOut(600);
	} else {
		$(".wrapper-nav").fadeIn(600);
	};
});

});
