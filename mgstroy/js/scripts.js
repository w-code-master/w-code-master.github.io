"use strict"

$(document).ready(function(){

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 30,
		prevArrow: '<span class="slick-arrow--left"><svg><use href="img/sprite.svg#i-left"></use></svg></span>',
		nextArrow: '<span class="slick-arrow--right"><svg><use href="img/sprite.svg#i-right"></use></svg></span>'
	});

}); // end ready