document.addEventListener("DOMContentLoaded", function() {

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

$(".scroll-top").on("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 777);
e.preventDefault();
return false;
});

$(".home-nav .active a, .main-nav .active, .wrapper-nav .active a").on("click", function(e) {
	e.preventDefault();
});

$('.header__top').animated('fadeInDown');
$('.main-slider').animated('fadeIn');
$('.main-slider__item h1').animated('fadeInDown');
$('.main-slider__item p').animated('fadeInDown');
$('.main-slider .owl-dots').animated('fadeInUpBig');
$('.main-slider .owl-nav .owl-prev').animated('bounceIn');
$('.main-slider .owl-nav .owl-next').animated('bounceIn');

$('.main-content h3').animated('fadeInDown');
$('.main-content__descr p').animated('fadeInDown');

$('.advantages__item').animated('bounceIn');

$('.fsc__icon').animated('flipInX');

$('.main-header h3').animated('fadeInDown');
$('.main-header p').animated('fadeInDown');

$('.fsc::before').animated('rollIn');

$('.card__item picture').animated('fadeIn');
$('.card__item h4').animated('fadeInDown');
$('.card__item p').animated('fadeInUp');
$('.card__item .btn').animated('zoomIn');

$('.contact__manager--photo').animated('flipInY');
$('.contact__manager--info').animated('fadeIn');

$('.footer .container').animated('fadeInUp');

});
